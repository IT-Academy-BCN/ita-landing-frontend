import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCollaboratorsData = createAsyncThunk(
    'getinitialdataCollaborators',
    async () => {
        try {
            const { data } = await axios.get('http://87.106.229.119/api/collaborators/landing');
           
                               const dataTotal = data.sort(() => Math.random() - 0.5);
                               return dataTotal;
            
            
           
        } catch (error) {
            console.log(error);
        }
    }
);