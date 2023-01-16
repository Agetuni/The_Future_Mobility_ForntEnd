import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import delres from '../../redux/reservations/delresSlice'
import BASE_URL from '../../api';
import '../assets/styles/reservation.scss';


const userid = JSON.parse(localStorage.getItem('user')).id
const token = JSON.parse(localStorage.getItem('user')).token
const name = JSON.parse(localStorage.getItem('user')).className

console.log(userid)
const MyReservations = () => {
  
  const [loading, setLoading] = useState(true);
  const [myreservations, setMyReservations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${BASE_URL}/api/v1/users/${userid}/reservations`,
        {
          headers: {
            Authorization: token,
          },
        }

      );
      setLoading(false);
      console.log(response.data);
      setMyReservations(response.data);
    };
    fetchData();

  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = 2;// JSON.parse(localStorage.getItem('user'));


  const delHandler = (value) => {
    dispatch(delres({ id: value }));
  };

  const cancelHandler = (value) => {
    const state = { id: value, reserved: false };

    navigate('/vehicals');
  };
  return (
    <><p>/myreservations no have all data</p>
      

    </>
  );
};
export default MyReservations;
