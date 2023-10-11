import { createSlice, Dispatch } from "@reduxjs/toolkit"
import { resetPasswordParams, FormDataEvent } from "../../../interfaces/interfaces"
import axios from "axios"

const initialState: resetPasswordParams = {
    email: "",
    emailSendIt: false
}

export const apiSliceResetPassword = createSlice({
    name: 'apiSliceResetPassword',
    initialState, 
    reducers: {
        sendEmailSuccess: (state, action) => {
            state.emailSendIt = true
            state.email = action.payload
        },
        sendEmailFailure: (state) => {
            state.emailSendIt = false
        }
    }
})
export const {sendEmailSuccess, sendEmailFailure} = apiSliceResetPassword.actions


export const handleSubmit = (dispatch: Dispatch , email: string) => {
    axios.post('http://87.106.229.119/api/forget-password', {email})
    .then(() => {
        dispatch(sendEmailSuccess(email))
    })
    .catch(() => {
        dispatch(sendEmailFailure())
    })
}

export const handleReset = (dispatch: Dispatch , e: FormDataEvent, newPassword:string , newConfirmationPassword:string , resetToken:string) => {
    e.preventDefault()
    try{
        axios.post(`http://87.106.229.119/api/reset-password/${resetToken}`, {password: newPassword, password_confirmation: newConfirmationPassword})
             .then(() => {
                 dispatch(sendEmailFailure())
             })        
    }catch(error){
        console.error(error)
    }
}

export default apiSliceResetPassword.reducer;