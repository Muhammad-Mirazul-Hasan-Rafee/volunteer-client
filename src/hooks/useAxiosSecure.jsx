import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://volunteer-server-wine.vercel.app',  
    withCredentials: true,
    timeout: 10000
});

const useAxiosSecure = () => { 
    const { logOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const interceptor = axiosInstance.interceptors.response.use(
            response => response,
            error => {
                console.log('Error:', error.message, error.response?.status);
                
                // Only logout on 401 (unauthorized)
                if (error.response?.status === 401) {
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