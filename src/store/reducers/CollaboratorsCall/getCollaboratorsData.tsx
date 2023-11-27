import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

export const getCollaboratorsData = createAsyncThunk(
  "getinitialdataCollaborators",
  async () => {
    try {
      const { data } = await axios.get(apiUrl + "collaborators/landing");

      const dataTotal = data.sort(() => Math.random() - 0.5);
      return dataTotal;
    } catch (error) {
      console.log(error);
    }
  }
);
