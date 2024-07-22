import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Signin = (props) => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [user, setUser] = useState(false);

  const sendOtp = () => {
   
    setUser(true); 
  };

  const verifyOtp = () => {
    
  };

  return (
    <div className='login-modal flex justify-center items-center h-full'>
      <div className='bg-white p-8 rounded shadow-md'>
        <div className='flex flex-col items-center'>
          <h1 className='font-semibold text-3xl mt-3'>Login</h1>
          <h1 className='mt-3'>
            or <span className='text-orange-500 text-sm cursor-pointer' onClick={props?.showSignUpMenu}>create an account</span>
          </h1>
          <hr className='w-8 bg-black h-px mt-3 border-0'/>
          <PhoneInput
            inputStyle={{height: "63px", width: "320px"}}
            containerStyle={{marginTop: "20px"}}
            placeholder='Phone number'
            country={'in'}
            value={phone}
            onChange={(phone) => setPhone("+" + phone)}
          />
          <div id='recaptcha' className='mt-3'></div>
          <button 
            onClick={sendOtp} 
            className='bg-orange-500 p-5 text-white font-semibold text-xs w-80 mt-2'
          >
            Send OTP
          </button>
          {user && (
            <input 
              onChange={(e) => setOtp(e.target.value)} 
              className='p-5 border border-gray-300 w-80 mt-2' 
              placeholder='One time password'
            />
          )}
          {otp && (
            <button 
              onClick={verifyOtp} 
              className='bg-orange-500 p-5 text-white font-semibold text-xs w-80 mt-2'
            >
              Verify OTP
            </button>
          )}
          <h1 className='text-xs font-medium mt-2 text-center'>
            By clicking on Login, I accept the Terms & Conditions & <br/>
            Privacy Policy
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signin;


