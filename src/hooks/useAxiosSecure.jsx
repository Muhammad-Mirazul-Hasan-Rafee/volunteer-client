import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const useAxiosSecure = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();

  // useRef keeps one stable instance per hook caller
  const axiosSecureRef = useRef(
    axios.create({
      baseURL: 'https://volunteer-client-phi.vercel.app',
      withCredentials: true,
      timeout: 10000,
    })
  );

  useEffect(() => {
    const instance = axiosSecureRef.current;

    const interceptor = instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response?.status;
        const url = error.config?.url || '';

        console.log('Axios error:', status, url);

        // Only logout on 401 from protected endpoints (never from /jwt itself)
        if (status === 401 && !url.includes('/jwt')) {
          try {
            await logOutUser();
          } catch (e) {
            console.error('Logout failed:', e);
          }
          navigate('/login', { replace: true });
        }

        return Promise.reject(error);
      }
    );

    return () => {
      instance.interceptors.response.eject(interceptor);
    };
  }, [navigate, logOutUser]);

  return axiosSecureRef.current;
};

export default useAxiosSecure;