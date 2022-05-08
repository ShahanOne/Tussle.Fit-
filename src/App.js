import React from 'react';
import countries from './countryCodes';
import './App.css';

function App() {
  return (
    <div className="main">
    <center>
        {/* The video  */}
<video autoPlay muted loop id="myVideo">
  <source src="gymvid.mp4" type="video/mp4"/>
</video>
    <div className='main-body'>

    <div className='head'>
      <p className='brand'>💪TUSSLE.FIT</p>
      <p className='brand-text'>Become your best self.</p>
    </div>
    <div className='login-card card'>
      <p className='login-text'>Log in</p>
      <div className='container-fluid row'>

     <div className='col-4 code-column'>
     <div className="input-group input-dropdown ">
      <select className="form-select select-input" id="inputGroupSelect04" aria-label="Example select with button addon">
       <option defaultValue>Country Code..</option>
     { countries.map((newCountry,index)=> <option key={index} value="">{newCountry.code} {newCountry.name.substring(0,7)}</option> )}
      </select>
     </div>
     </div>
     
     <div className='col-8 phone-column'>
      <input className='form-control input-phone' placeholder='Enter phone number' autoComplete='none'/>
      </div>
     </div>
     <button type="button" className="btn btn-warning mt-4 mb-4"><span className='button-text'>Log-in</span></button>
      <a className='login-link' href='#'>Contact Support</a>
    </div>
    <br/>
    <p className='version-text'>Tussle.Fit is currently in closed Beta. </p><img className='insta-icon' src='instagram1.png' />
    <footer>
      <div className='row'>
        <a href="#" className='footer-link col-lg-4'>Contact Support</a>
        <a href="#" className='footer-link col-lg-4'>Terms of Service</a>
        <a href="#" className='footer-link col-lg-4'>Privacy Policy</a>
      </div>
    </footer>

    </div></center>

    </div>
  );
}

export default App;
