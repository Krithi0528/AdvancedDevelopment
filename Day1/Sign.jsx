import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Sign.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';

function Sign() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const formHolder = (e) => {
    e.preventDefault();
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (username.length === 0 || password.length === 0) {
      alert("Enter all the fields");
    } else if (!regex.test(uname)) {
      alert("Enter a valid Email Address");
    } else if (password.length < 8) {
      alert("Enter at least 8 characters in password");
    } else {
      navigate('/');
    }
  };
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
            Embark on a Voyage of<br />
            <span style={{ color: 'hsl(218, 81%, 75%)' }}>Jubilant Kismet Cruise</span>
          </h1>
        </MDBCol>

        <MDBCol md='6' className='position-relative'>
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='glass'>
          <form onSubmit={formHolder}>
            <MDBCardBody className='p-5'>
            <h2 className="text-center mb-4 login-heading">Log In</h2>
              <MDBRow>
                <MDBCol md='12'>
                  <label htmlFor='form1' className='form-label'>User name</label>
                  <MDBInput wrapperClass='mb-4' id='form1' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                  <label htmlFor='form4' className='form-label'>Password</label>
                  <MDBInput wrapperClass='mb-4' id='form4' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </MDBCol>
              </MDBRow>
              <MDBBtn className='w-100 mb-4 login-btn' size='md'>
              <Link to="/">Login</Link></MDBBtn>
              <div className='inba'><p>Dont have an account?<Link to="/register">SignUp</Link></p>
              </div>
            </MDBCardBody>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Sign;
