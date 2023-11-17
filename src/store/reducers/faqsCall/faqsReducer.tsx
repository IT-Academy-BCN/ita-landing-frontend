import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { faqContent } from "../../../interfaces/interfaces";
const initialState = {
  faqs: [],
  title: "",
  description: "",
  statusMessage: "",
};
export const apiSlice = createSlice({
  name: "apiPostRegister",
  initialState,
  reducers: {
    setFaqs: (state, action) => {
      state.faqs = action.payload;
    },
    setStatusMessage: (state, action) => {
      state.statusMessage = action.payload;
    },
  },
});

export const { setFaqs, setStatusMessage } = apiSlice.actions;

//llamada api a faqs//

export const apiCall = async (dispatch: Dispatch) => {
  try {
    const faqsCalled = await axios.get("http://87.106.229.119/api/faqs");
    dispatch(setFaqs(faqsCalled.data.faqs));
  } catch (error) {
    console.log(error);
  }
};

//Post //
export const postApiFaqs = async (
  faqContent: faqContent,
  acces_token: string,
  dispatch: Dispatch
) => {
  try {
    const newFaq = {
      title: faqContent.title,
      description: faqContent.description,
    };
    await axios.post("http://87.106.229.119/api/faqs", newFaq, {
      headers: {
        Authorization: `Bearer ${acces_token}`,
      },
    });
    await apiCall(dispatch);
    dispatch(setStatusMessage("FAQ created successfully!"));
  } catch (error) {
    console.log(error);
    dispatch(setStatusMessage("Failed to create new FAQ. Please try again."));
  }
};
//delete //

export const deleteApiFaqs = async (
  faqId: number,
  acces_token: string,
  dispatch: Dispatch
) => {
  try {
    const url = `http://87.106.229.119/api/faqs/${faqId}`;
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${acces_token}`,
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
    await axios.put(`http://87.106.229.119/api/faqs/${faqId}`, faqContent, {
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
