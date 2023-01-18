import { createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../../api';


const addreservation = createAsyncThunk(
  
  'reservation/addreservation',
  (reservation) => {
    console.log(reservation)
    axios.post(`${BASE_URL}api/v1/users/${JSON.parse(localStorage.getItem('user')).id}/reservations`, reservation, {

      headers: {
        Authorization: `${JSON.parse(localStorage.getItem('user')).token}`,
      },
    })
      .then((response) => {

        useNavigate('/myReservations');

        const { data } = response;
        return data;
      });
  },
);

export default addreservation;
