

const setItem = (key: string, val: string) => {
  localStorage.setItem(key,val)
}

const getItem = (key: string) => {
  return localStorage.getItem(key)
}

export {setItem,getItem}