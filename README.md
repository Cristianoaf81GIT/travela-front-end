# Project Travela Front end. 
## Instructions:
  1. clone this repository:  ```bash$ git clone https://github.com/Cristianoaf81GIT/travela-frontend.git```
  2. Install all dependencies: ```bash$ npm i -s``` 
  3. this project was designed for use with another so-called [travela-backend](https://github.com/Cristianoaf81GIT/travela-backend.git)
  4. in case of change in the port number in the ***backend*** project:  
    -- update front-end file located at **/src/app/services/apiservice/apiservice.ts** changing: 
     
        ```typescript {.line-numbers}
        1 import  axios, { AxiosInstance, AxiosResponse } from 'axios'
        2 
        3  const httpClient: AxiosInstance = axios.create({
        4      baseURL: 'http://localhost:3000' <- this 
        5  })     
        
          to:            
        
        3  const httpClient: AxiosInstance = axios.create({
        4      baseURL: 'http://localhost:XXXX'  <- (XXXX: port number)
        5  })          
        ```
  5. after downloading the project just execute it, don't forget that the  travela-backend project must be running for everything work's fine. 
  6. to run travela-frontend just type in term: ```bash$ npm start``` 
  .


# Project sctructure 
 ```bash
 .
├── licence.txt
├── node_modules
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── plane.svg
│   └── robots.txt
├── README.md
├── src
│   ├── app
│   │   ├── assets
│   │   ├── checkout
│   │   ├── components
│   │   ├── main
│   │   ├── routes
│   │   └── services
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── serviceWorker.ts
│   └── setupTests.ts
├── tsconfig.json
└── webpack.config.old

 ```


# License 
   - [GPL-V3](https://choosealicense.com/licenses/gpl-3.0/)
