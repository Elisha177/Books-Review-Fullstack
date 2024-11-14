import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://books-review-backend.onrender.com/api/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      navigate('/reviewspage');
      alert("Logged in successfully")
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="container mx-auto p-4 max-w-sm">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full mb-2 p-2 border" placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full mb-2 p-2 border" placeholder="Password" required />
      <button type="submit" className="bg-[#ff742b] text-white p-2 rounded-md">Login</button>
    </form>
  );
}

export default Login;
