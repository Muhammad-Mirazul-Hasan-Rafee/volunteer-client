import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: 'https://volunteer-server-flame.vercel.app',
  withCredentials: true,

});


const useAxiosSecure = () => {
  const { logOutUser, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      response => response,
      error => {

        // Only logout if it's truly an authentication issue
        // AND we're not already on the login page


        if ((error.response?.status === 401 || error.response?.status === 403) 
          && user && !window.location.pathname.includes('/login')) {
         // Check if it's a token expiry specifically

         const errorMessage = error.response?.data?.message || error.response?.data?.message;

        // Only logout for auth-related errors, not permission errors
        if(errorMessage?.toLowerCase().includes('token') || errorMessage?.toLowerCase().includes('auth') || error.response?.status === 401){
            logOutUser()
            .then(() => navigate('/login'))
            .catch(console.log);
        }
        else{
           // For 403 permission errors, just show an error
           console.error('Permission denied:', errorMessage);
        }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };

  }, [user, navigate, logOutUser]);
  return axiosInstance;
};

export default useAxiosSecure;