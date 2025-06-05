import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Oauth2Redirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return <div>Đang đăng nhập bằng Google...</div>;
} 