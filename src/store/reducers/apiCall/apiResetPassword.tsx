import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { resetPasswordParams } from "../../../interfaces/interfaces";
import { NavigateFunction } from "react-router-dom";

import axios from "axios";

const initialState: resetPasswordParams = {
  email: "",
  requestStatus: "",
};

const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

export const apiSliceResetPassword = createSlice({
  name: "apiSliceResetPassword",
  initialState,
  reducers: {
    sendEmailSuccess: (state, action) => {
      state.requestStatus = "200";
      state.email = action.payload;
    },
    sendEmailFailure: (state) => {
      state.requestStatus = "404";
    },
  },
});
export const { sendEmailSuccess, sendEmailFailure } =
  apiSliceResetPassword.actions;

export const handleSubmit = async (dispatch: Dispatch, email: string) => {
  try {
    await axios.post(apiUrl + "forget-password", { email });
    dispatch(sendEmailSuccess(email));
  } catch (error) {
    dispatch(sendEmailFailure());
  }
};

export const handleReset = (
  dispatch: Dispatch,
  e: React.FormEvent<HTMLFormElement>,
  navegador: NavigateFunction,
  newPassword: string,
  newConfirmationPassword: string,
  resetToken: string | undefined
) => {
  e.preventDefault();
  try {
    axios
      .post(apiUrl + `reset-password/${resetToken}`, {
        password: newPassword,
        password_confirmation: newConfirmationPassword,
      })
      .then(() => {
        dispatch(sendEmailFailure());
        navegador("/");
      });
  } catch (error) {
    console.error(error);
  }
};

export default apiSliceResetPassword.reducer;
