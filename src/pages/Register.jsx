import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://books-review-backend.onrender.com/api/auth/register', { name, email, password });
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <form onSubmit={handleRegister} className="container mx-auto p-4 max-w-sm">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-full mb-2 p-2 border" placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full mb-2 p-2 border" placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full mb-2 p-2 border" placeholder="Password" required />
      <button type="submit" className="bg-[#ff742b] text-white p-2 rounded-md">Register</button>
    </form>
  );
}

export default Register;
