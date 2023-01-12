import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../api';

const vehicalDetail = createAsyncThunk(
    'vehicals/vehical',
    async (id) => {
        const response = await axios.get(`${BASE_URL}api/v1/vehicaese/${id}`, {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
          },
        });
        const res = await response.data;
        return res;
      },
    );
    
    export default vehicalDetail;
