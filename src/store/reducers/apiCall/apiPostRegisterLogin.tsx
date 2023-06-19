import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


 
interface errorMessageLogginBoolean {
messageError:String,
isLogged:boolean
}
// Define the initial state using that type
const initialState: errorMessageLogginBoolean = {
  messageError:'',
  isLogged:false
}

export const apiSlice = createSlice({
  name: 'apiPostRegister',
  initialState,
  reducers: {
    setMessageError:(state,actions)=>{
      state.messageError = actions.payload
    },eraseMessageError:(state)=>{
      state.messageError= '';
    },setIsLogged:(state,actions)=>{
      state.isLogged = actions.payload
    }
  },
})

export const { setMessageError,eraseMessageError,setIsLogged } = apiSlice.actions;

//Api call for login and register.
 export const handleSubmit = async(dispatch:any, e: any, number:number, navegador:any) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  //RESGISTER
   if(number === 1){
    axios.post('http://87.106.229.119/api/register',formData)
    .then(resp=> {console.log( resp); dispatch(setMessageError(resp.data.result.message.split('.')[0]))})
    .catch(err=> console.log(err,'error'));


    //LOGIN
   }else if(number === 2){ 
    axios.post('http://87.106.229.119/api/login',formData)
    .then(resp=> {console.log( resp); dispatch(setIsLogged(true)); navegador('/backoffice');  })
    .catch(err=>{err.response.status==422? dispatch(setMessageError(err.response.data.message.split('.')[0])) : dispatch(setMessageError(err.response.data.result.message))})
   }
  }

//End of Api call for login register

export default apiSlice.reducer