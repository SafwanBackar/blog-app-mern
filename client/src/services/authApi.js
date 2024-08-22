import axios from 'axios';

export const handleLogin = (formData) =>
    axios.post(`http://localhost:5000/auth/login`, formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });


 export const handleSignUp = (formData) =>
    axios.post(`${process.env.REACT_APP_AUTH_API_URL}/register`, formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  export const handleLogout = async ()=> {
    await axios.post(`${process.env.REACT_APP_AUTH_API_URL}/logout`);
}
