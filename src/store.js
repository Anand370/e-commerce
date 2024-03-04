import { configureStore , createStore } from '@reduxjs/toolkit'
import cartSlicer from "./reducer/cart/cartSlicer";
const localstorageTostoreData = ()=>{
    const serialState = localStorage.getItem("reduxToolkitData");
    if(serialState === null){ return undefined}
    return JSON.parse(serialState);
}

const store = configureStore({
    reducer:{
      cart: cartSlicer
    },
     preloadedState:localstorageTostoreData()
})

const saveToLocalStorage = (store)=>{
    try{
      let serialState = JSON.stringify(store);
      localStorage.setItem("reduxToolkitData", serialState)
    }catch(err){console.log(err)}
  }
  
  
  
  store.subscribe(()=> saveToLocalStorage(store.getState()))

// const saveDataToLocalstorage = (store)=>{
//     try{
//        localStorage.setItem("dataToReduxStore", JSON.stringify(store));
//     }catch(err){
//        console.log(err)
//     }
// }
// store.subscribe(()=> saveDataToLocalstorage(store.getState()))

export default store;