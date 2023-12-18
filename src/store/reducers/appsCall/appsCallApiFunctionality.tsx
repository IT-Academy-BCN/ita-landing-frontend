import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { ThunkDispatch } from "redux-thunk";
import axios from "axios";
import { faqContent } from "../../../interfaces/interfaces";
import { RootState } from "../../store";

const initialState = {
  apps: [],
  appsInfo: [],
  gitURL: "",
  repoURL: "",
  stateProject: "",
  loadingApps: false,
};

const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

export const appsSlice = createSlice({
  name: "appsCallApiFunctionality",
  initialState,
  reducers: {
    setApps: (state, action) => {
      state.apps = action.payload;
      state.loadingApps = false;
    },
    setAppsInfo: (state, action) => {
      state.appsInfo = action.payload;
      state.loadingApps = false;
    },
    setLoadingApps: (state, action) => {
      state.loadingApps = action.payload;
    },
  },
});

export const { setApps, setAppsInfo, setLoadingApps } = appsSlice.actions;

// API calls
export const apiCallApps = async (
  dispatch: ThunkDispatch<RootState, void, any>
) => {
  try {
    dispatch(setLoadingApps(true));
    const appsCalled = await axios.get(apiUrl + "apps");
    dispatch(setApps(appsCalled.data));
  } catch (error) {
    console.error("Error fetching Apps:", error);
    dispatch(setLoadingApps(false));
  }
};

export const apiCallAppsInfo = async (
  dispatch: ThunkDispatch<RootState, void, any>,
  id: number,
  access_token: string
) => {
  try {
    dispatch(setLoadingApps(true));

    const appsInfo = await axios.get(apiUrl + `apps/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    dispatch(setAppsInfo(appsInfo.data));
    console.log(appsInfo.data, apiUrl + `apps/${id}`);

    dispatch(setLoadingApps(false));
  } catch (error) {
    console.error("Error fetching App info:", error);
    dispatch(setLoadingApps(false));
  }
};

export const postApiApps = async (
  appsContent: faqContent,
  acces_token: string,
  dispatch: Dispatch
) => {
  try {
    await axios.post(apiUrl + "apps", appsContent, {
      headers: {
        Authorization: `Bearer ${acces_token}`,
      },
    });
    await apiCallApps(dispatch);
  } catch (error) {
    console.error("Error posting App:", error);
  }
};

export const deleteAppById = async (
  appId: number,
  access_token: string,
  dispatch: ThunkDispatch<RootState, void, any>
) => {
  try {
    const url = apiUrl + `apps/${appId}`;
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    await apiCallApps(dispatch);
  } catch (error) {
    console.error("Error deleting App:", error);
  }
};

export const putApiApps = async (
  faqContent: any,
  acces_token: string,
  dispatch: Dispatch,
  id: number
) => {
  try {
    await axios.put(apiUrl + `apps/${id}`, faqContent, {
      headers: {
        Authorization: `Bearer ${acces_token}`,
      },
    });
    await apiCallApps(dispatch);
  } catch (error) {
    console.error("Error updating App:", error);
  }
};

export default appsSlice.reducer;
