import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { faqContent } from "../../../interfaces/interfaces";
const initialState = {
  faqs: [],
  title: "",
  description: "",
};

const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

export const apiSlice = createSlice({
  name: "apiPostRegister",
  initialState,
  reducers: {
    setFaqs: (state, action) => {
      state.faqs = action.payload;
    },
  },
});

export const { setFaqs } = apiSlice.actions;

//llamada api a faqs//

export const apiCall = async (dispatch: Dispatch) => {
  try {
    const faqsCalled = await axios.get(apiUrl + "faqs");
    dispatch(setFaqs(faqsCalled.data.faqs));
  } catch (error) {
    console.log(error);
  }
};

//Post //
export const postApiFaqs = async (
  faqContent: faqContent,
  access_token: string,
  dispatch: Dispatch
) => {
  try {
    const newFaq = {
      title: faqContent.title,
      description: faqContent.description,
    };
    await axios.post(apiUrl + "faqs", newFaq, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    await apiCall(dispatch);
  } catch (error) {
    console.log(error);
  }
};
//delete //

export const deleteApiFaqs = async (
  faqId: number,
  access_token: string,
  dispatch: Dispatch
) => {
  try {
    const url = apiUrl + `faqs/${faqId}`;
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    await apiCall(dispatch);
  } catch (error) {
    console.error("Error al eliminar el FAQ:", error);
  }
};

//Put //
export const putApiFaqs = async (
  faqId: number,
  faqContent: any,
  acces_token: string,
  dispatch: any
) => {
  try {
    await axios.put(apiUrl + `faqs/${faqId}`, faqContent, {
      headers: {
        Authorization: `Bearer ${acces_token}`,
      },
    });
    await apiCall(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export default apiSlice.reducer;
