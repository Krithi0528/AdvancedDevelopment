import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Add your CSS file for styling
import ilsand from '../assets/images/ilsand.jpg';
export default function Register() {
  const navigate = useNavigate();
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [uname, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const formHolder = (e) => {
    e.preventDefault();
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (fname.length === 0 || lname.length === 0 || uname.length === 0 || password.length === 0) {
      alert("Enter all the fields");
    } else if (uname.length<5) {
      alert("Enter a valid Username");
    } else if (password.length < 8) {
      alert("Enter at least 8 characters in the password");
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="create-account-page">
      <div className="cruise-image">
        <img src={ilsand} height={550} width={600} alt="Cruise" />
      </div>
      <div className="form-container">
        <form onSubmit={formHolder}>
          <h2>Create Account</h2>
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="name" placeholder="" value={fname} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" placeholder=" " value={lname} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="uname">Username</label>
            <input type="text" id="uname" placeholder="" value={uname} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
          </div>
          <button type="submit" className='button'>Create Account</button>
        </form>
      </div>
    </div>
  );
}
