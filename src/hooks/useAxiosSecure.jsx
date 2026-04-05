import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
     
});


const useAxiosSecure = () => { 
    const {logOutUser} = useAuth();
    const navigate = useNavigate();

   useEffect(() => {
  const interceptor = axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (error.response?.status === 401 || error.response?.status === 403) {
       logOutUser()
          .then(() => navigate('/login'))
          .catch(console.log);
      }
      return Promise.reject(error);
    }
  );

  return () => {
    axiosInstance.interceptors.response.eject(interceptor);
  };

}, [navigate, logOutUser]);
    return axiosInstance;
};

export default useAxiosSecure;