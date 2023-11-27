import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { sendCodeByEmailParams } from "../../../interfaces/interfaces";
import axios from "axios";

const initialState: sendCodeByEmailParams = {
  email: "",
  requestStatus: "",
  acces_token: "",
};

const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

export const apiSendCodeByEmail = createSlice({
  name: "apiSendCodeByEmail",
  initialState,
  reducers: {
    sendEmailSuccess: (state, action) => {
      state.requestStatus = "200";
      state.email = action.payload;
    },
    sendEmailFailure: (state) => {
      state.requestStatus = "404";
    },
    setToken: (state, actions) => {
      state.acces_token = actions.payload;
    },
  },
});
export const { sendEmailSuccess, sendEmailFailure } =
  apiSendCodeByEmail.actions;

export const handleSubmit = async (
  dispatch: Dispatch,
  email: string,
  acces_token: string
) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${acces_token}`,
      },
    };
    await axios.post(apiUrl + "send-code-by-email", { email }, config);
    dispatch(sendEmailSuccess(email));
  } catch (error) {
    dispatch(sendEmailFailure());
  }
};
export default apiSendCodeByEmail.reducer;
