import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



interface faqsData {
faqs:any[],
title:string,
description:string
}


const initialState: faqsData = {
  faqs:[],
  title:'',
  description:''
  
}

export const apiSlice = createSlice({
  name: 'apiPostRegister',
  initialState,
  reducers: {
    setFaqs:(state,action)=>{
        state.faqs = action.payload;
    }
  },
})

export const { setFaqs } = apiSlice.actions;

  //llamada api a faqs//

 export const apiCall =async(dispatch:any)=>{
    try {
        const faqsCalled = await axios.get('http://87.106.229.119/api/faqs');
    dispatch(setFaqs(faqsCalled.data.faqs))
        
    } catch (error) {
        console.log(error)
    }
    
  }

  //Post //
 export const postApiFaqs =async(faqContent:any,acces_token:String, dispatch:any)=>{
    try{
       const newFaq= {
      title:faqContent.title,
      description:faqContent.description
    }
     await axios.post('http://87.106.229.119/api/faqs',newFaq,{
      headers:{
        Authorization:`Bearer ${acces_token}`
      }
     });  
    await apiCall(dispatch);
    }catch(error){
      console.log(error)
    }
   
  };
  //delete //

  export const deleteApiFaqs = async (faqId:number, acces_token:String,dispatch:any) => {
    try {
      const url = `http://87.106.229.119/api/faqs/${faqId}`;
      await axios.delete(url,{
        headers:{
          Authorization: `Bearer ${acces_token}`
        }
      });
      
      await apiCall(dispatch);
         
       
    } catch (error) {
      console.error("Error al eliminar el FAQ:", error);
    }
  };


  //Put //
  export const putApiFaqs =async(faqId:number, faqContent:any,acces_token:String, dispatch:any)=>{
    try{
      await axios.put(`http://87.106.229.119/api/faqs/'${faqId}`,faqContent,{
        headers:{
          Authorization:`Bearer ${acces_token}`
        }
      });  
      await apiCall(dispatch);

    }catch(error){
      console.log(error)
    }
  
  };



export default apiSlice.reducer