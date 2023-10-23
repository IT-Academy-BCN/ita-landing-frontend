import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import {
  loginRegisterParams,
  FormDataEvent,
} from "../../../interfaces/interfaces";
import { NavigateFunction } from "react-router-dom";
const initialState: loginRegisterParams = {
  messageError: "",
  isLogged: false,
  isLoadingMessageError: false,
  acces_token: "",
  showPasswordReminder: false,
};

export const apiSlice = createSlice({
  name: "apiPostRegister",
  initialState,
  reducers: {
    setMessageError: (
      state,
      action: PayloadAction<{ errorMessage: string; loadingBoolean: boolean }>
    ) => {
      const { errorMessage, loadingBoolean } = action.payload;

      state.messageError = errorMessage;
      state.isLoadingMessageError = loadingBoolean;
    },
    eraseMessageError: (state) => {
      state.messageError = "";
    },
    setIsLogged: (state, actions) => {
      state.isLogged = actions.payload;
    },
    setToken: (state, actions) => {
      state.acces_token = actions.payload;
    },
    passwordReminderReducer: (state, action) => {
      const actionHandlers: Record<string, () => typeof initialState> = {
        SHOW_PASSWORD_REMINDER: () => ({
          ...state,
          showPasswordReminder: true,
        }),
        HIDE_PASSWORD_REMINDER: () => ({
          ...state,
          showPasswordReminder: false,
        }),
      };

      const handler = actionHandlers[action.type] || (() => state);
      return handler();
    },
  },
});

export const {
  setMessageError,
  eraseMessageError,
  setIsLogged,
  setToken,
  passwordReminderReducer,
} = apiSlice.actions;

//Api call for login and register.

export const handleSubmit = async (
  dispatch: Dispatch,
  e: FormDataEvent,
  number: number,
  navegador: NavigateFunction
) => {
  e.preventDefault();
  dispatch(setMessageError({ errorMessage: "", loadingBoolean: true }));

  const formData = new FormData(e.target);

  //RESGISTER
  if (number === 1) {
    axios
      .post("http://http://87.106.229.119/api/register", formData)
      .then((resp) => {
        console.log(resp);
        dispatch(
          setMessageError({
            errorMessage: resp.data.result.message.split(".")[0],
            loadingBoolean: false,
          })
        );
      })
      .catch((err) => console.log(err, "error"));

    //LOGIN
  } else if (number === 2) {
    axios
      .post("http://http://87.106.229.119/api/login", formData)
      .then((resp) => {
        dispatch(setToken(resp.data.result.access_token));
        dispatch(setIsLogged(true));
        navegador("/backoffice");
        dispatch(setMessageError({ errorMessage: "", loadingBoolean: false }));
      })
      .catch((err) => {
        err.response.status == 422
          ? dispatch(
              setMessageError({
                errorMessage: err.response.data.message.split(".")[0],
                loadingBoolean: false,
              })
            )
          : dispatch(
              setMessageError({
                errorMessage: err.response.data.result.message,
                loadingBoolean: false,
              })
            );
      });
  }
};

//End of Api call for login register

export default apiSlice.reducer;
