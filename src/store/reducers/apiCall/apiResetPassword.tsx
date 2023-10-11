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
        sendEmailSuccess: (state) => {
            state.emailSendIt = true
        },
        sendEmailFailure: (state) => {
            state.emailSendIt = false
        }
    }
})
export const {sendEmailSuccess, sendEmailFailure} = apiSliceResetPassword.actions


export const handleSubmit = (dispatch: Dispatch , email: string) => {

    console.log(email)

    axios.post('http://127.0.0.1:8000/api/forget-password', {email})
    .then(() => {
        dispatch(sendEmailSuccess())
    })
    .catch(() => {
        dispatch(sendEmailFailure())
    })

}