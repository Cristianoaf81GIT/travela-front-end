import React from 'react'
import './form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import 'jquery-mask-plugin/dist/jquery.mask'
import * as StorageService from '../../services/storageservice/localstorage'
import {withRouter} from 'react-router-dom'
import {RouteComponentProps} from 'react-router'
import BsModal from '../modal/modal'
import TravelApiService from '../../services/apiservice/TravelApiService'
import moment from 'moment'
//import axios from 'axios'

interface Props extends RouteComponentProps<any>{}

interface State {
  name: string,
  phone: string,
  origin: string,
  destination: string,
  datefrom: string,
  dateto: string,
  travelers: number,
}

const initialState: State = {
  name: '',
  phone: '',
  origin: '',
  destination: '',
  datefrom: '',
  dateto: '',
  travelers: 1
}


class Form extends React.Component<Props, State> {

  private showModal: boolean
  private modalHeader: string = ''
  private modalBody: string = ''
  private apiService: TravelApiService
  
  constructor(props: Props) {
    super(props)
    this.state = {...initialState}
    StorageService.setItem('checked','false')
    this.showModal = false
    this.apiService = new TravelApiService()
  }


  componentDidMount(): void {    
    $('#phone_input').mask('+00 (00) 00000 0000')
    $('#datefrom_input').mask('00/00/0000')
    $('#dateto_input').mask('00/00/0000')
  }

  componentDidUpdate(){
    this.showModal = false
  }
  
  save = async (e: React.FormEvent<HTMLFormElement>) => {    
    e.preventDefault() 
    const origFrom = this.state.datefrom
    const origTo = this.state.dateto
    const today =  moment().format()
    const changeFrom = moment(this.state.datefrom,'DD/MM/YYYY').format()
    const changeTo = moment(this.state.dateto,'DD/MM/YYYY').format()

    let data = {
      name:this.state.name,
      phone:this.state.phone,
      datefrom:changeFrom,
      dateto:changeTo,
      origin:this.state.origin,
      destination:this.state.destination,
      travelers: this.state.travelers
     }

     if(data.origin === data.destination) {
      this.modalHeader = 'Error'
      this.modalBody = 'Origin equals destination!'
      this.showModal = true
      data.destination = ''
      data.datefrom = origFrom
      data.dateto = origTo
      this.setState({...data})
      return false
     }

    if (changeFrom < today || changeTo < today || changeFrom >  changeTo) {    
      this.modalHeader = 'Error'
      this.modalBody = 'Invalid Date, please insert valid date!'
      this.showModal = true
      data.datefrom = ''
      data.dateto = ''
      this.setState({...data})
      return false
    } else {           
      await this.apiService.save(data)
      .then(res => {
        this.modalHeader = 'Sucess!'
        this.modalBody = res.data.message
        this.showModal = true
        this.setState({...initialState})
        StorageService.setItem('checked','true')
        setTimeout(
          () => this.props.history.push('/checkout'),
          4000
        )        
        return false
      })
      .catch(_ => {
        this.modalHeader = 'Fail!'
        this.modalBody = 'Sorry fail to save travel data, please try again later!'
        this.showModal = true
        data.datefrom = ''
        data.dateto = ''
        this.setState({...data})
        return false
      })
    }     
    
  }  

  render(): JSX.Element {
    return (
      
      <div className='main-form'>
        
        {
          this.showModal === true ? 
          <BsModal 
            header={this.modalHeader}
            body={this.modalBody}
          /> 
          : null        
        }

        <h4>Create your next travel</h4> <br />

        <form onSubmit={this.save}>

          <div className='form-group'>
            
            <div className='row'>

              <div className='col-sm-2'>

                <label 
                  className='control-label' 
                  htmlFor='name_input'>
                  Name:
                </label>

              </div>

              <div className='col-sm-5'>

                <input
                  name='name'
                  type='text'
                  className='form-control'
                  placeholder='name'
                  id='name_input'
                  value={this.state.name}
                  required
                  onChange={
                    e => this.setState({name: e.currentTarget.value })
                  }
                />

              </div>

            </div>

            <div className='row'>

              <div className='col-sm-2'>
              
                <label 
                  className='control-label'
                  htmlFor='phone_input'>
                  phone:
                </label>

              </div>
              
              <div className='col-sm-5'>
              
                <input 
                  type='text'
                  name='phone'
                  className='form-control'                  
                  placeholder='+00 (00) 00000 0000'
                  id='phone_input'
                  value={this.state.phone}
                  required
                  onChange={
                    e => this.setState({phone:e.currentTarget.value})
                  }
                />

              </div>

            </div>

            <div className='row'>

              <div className='col-sm-2'>
                
                <label
                className='control-label'
                htmlFor='origin_input'>
                  origin:
                </label>

              </div>

              <div className='col-sm-5'>
                <input
                  type='text'
                  name='origin'
                  className='form-control'
                  placeholder='origin'
                  id='origin_input'
                  value={this.state.origin}
                  required
                  onChange={
                    e => this.setState({origin:e.currentTarget.value})
                  }
                />
              </div>

            </div>

            <div className='row'>

              <div className='col-sm-2'>

                <label 
                  className='control-label'
                  htmlFor='destination_input'>
                  destination:
                </label>

              </div>

              <div className='col-sm-5'>
              
                <input
                  type='text'
                  name='destination'
                  className='form-control'
                  placeholder='destination'
                  id='destination_input'
                  value={this.state.destination}
                  required
                  onChange={
                    e => this.setState({destination:e.currentTarget.value })
                  }
                />

              </div>

            </div>

            <div className='row'>

              <div className='col-sm-2'>

                <label 
                  className='control-label'
                  htmlFor='datefrom_input'>
                  date from:
                </label>

              </div>
              
              <div className='col-sm-5'>

                <input
                  type='text'
                  name='datefrom'
                  className='form-control'
                  placeholder='dd/mm/yyyy'
                  id='datefrom_input'
                  value={this.state.datefrom}
                  required
                  onChange={
                    e => this.setState({ datefrom: e.currentTarget.value })
                  }
                />

              </div>
            </div>

            <div className='row'>

              <div className='col-sm-2'>

                <label 
                  className='control-label' 
                  htmlFor='dateto_input'>
                  date to:
                </label>

              </div>

              <div className='col-sm-5'>
                
                <input 
                  type='text'
                  name='dateto'
                  className='form-control'
                  placeholder='dd/mm/yyyy'
                  id='dateto_input'
                  value={this.state.dateto}
                  required
                  onChange={
                    e => this.setState({ dateto:e.currentTarget.value})
                  }
                />

              </div>
            </div>

            <div className='row'>
              
              <div className='col-sm-4'>
                
                <label 
                  className='control-label' 
                  htmlFor='travelers_input'>
                  travelers number:
                </label>

              </div>
              
              <div className='col-sm-3'>
                
                <input
                  name='travelers'
                  type='number'
                  min='1'
                  max='300'
                  className='form-control'
                  placeholder='nº'
                  id='travelers_input'
                  value={this.state.travelers}
                  required
                  onChange={
                    e => this.setState(
                      { 
                        travelers: parseInt(e.currentTarget.value, 10) 
                      }
                    )
                  }
                />

              </div>

            </div>

            <div className='btns-row'>

              <button 
                type='submit' 
                className='btn btn-primary'>

                <FontAwesomeIcon icon={faSave} />&nbsp;&nbsp;
                save

              </button>&nbsp;&nbsp;

              <button
                type='button'
                className='btn btn-warning'
                onClick={() => this.setState({ ...initialState })}>
        
                <FontAwesomeIcon icon={faTrashAlt} />&nbsp;&nbsp;
                clear/cancel

              </button>

            </div>

          </div>

        </form>

      </div>
    )
  }

}
export default  withRouter(Form)