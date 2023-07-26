import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios' 
import { Dispatch } from '@reduxjs/toolkit'
import { faqContent } from '../../../interfaces/interfaces'
const initialState = {
  apps:[],
  appsInfo:[],
  gitURL:'',
  repoURL:'',
  stateProject:'',
  loadingApps:false 
} 
export const apiSlice = createSlice({
  name: 'appsCallApiFunctionality',
  initialState,
  reducers: {
    setApps:(state,action)=>{
        state.apps = action.payload;
    },setAppsInfo:(state,actions)=>{
      state.appsInfo= actions.payload
    },setLoadingApps:(state,actions)=>{
      state.loadingApps=actions.payload
    }
  },
})

export const { setApps,setAppsInfo,setLoadingApps } = apiSlice.actions;

  //llamada api a apps//

 export const apiCallApps =async(dispatch:Dispatch)=>{
    try {
        const faqsCalled = await axios.get('http://87.106.229.119/api/apps');
    dispatch(setApps(faqsCalled.data))
        
    } catch (error) {
        console.log(error)
    }
    
  }
  //llamada api Apps ID//
  export const apiCallAppsInfo =async(dispatch:Dispatch,id:number,acces_token:string)=>{
    try {
      dispatch(setLoadingApps(true));

        const faqsCalled = await axios.get(`http://87.106.229.119/api/apps/${id}`,{
          headers:{
            Authorization: `Bearer ${acces_token}`
          }
        });
        await dispatch(setAppsInfo(faqsCalled.data))
        console.log(faqsCalled.data,`http://87.106.229.119/api/apps/${id}`)

        dispatch(setLoadingApps(false))
        
    } catch (error) {
        console.log(error,`http://87.106.229.119/api/apps/${id}`)
    }
    
  }
  //Post //
 export const postApiApps =async(appsContent:faqContent,acces_token:string, dispatch:Dispatch)=>{
    try{
        
     await axios.post('http://87.106.229.119/api/apps',appsContent,{
      headers:{
        Authorization:`Bearer ${acces_token}`
      }
     });  
    await apiCallApps(dispatch);
    }catch(error){
      console.log(error)
    }
   
  };
  //delete //

  export const deleteApiApps = async (appsID:number, acces_token:string,dispatch:Dispatch) => {
    try {
      const url = `http://87.106.229.119/api/apps/${appsID}`;
      await axios.delete(url,{
        headers:{
          Authorization: `Bearer ${acces_token}`
        }
      });
      
      await apiCallApps(dispatch);
         
       
    } catch (error) {
      console.error("Error al eliminar el FAQ:", error);
    }
  };
//put//

export const putApiApps =async(faqContent:any,acces_token:string, dispatch:any, id:number)=>{
  try{
     
   await axios.put('http://87.106.229.119/api/apps/'+id,faqContent,{
    headers:{
      Authorization:`Bearer ${acces_token}`
    }
   });  
  await apiCallApps(dispatch);
  }catch(error){
    console.log(error)
  }
 
};


export default apiSlice.reducer