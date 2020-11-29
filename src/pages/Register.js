import React from 'react';

import SignIn1 from '../components/sign-in/SignIn1';

export default function Register() {
  return (
    <React.Fragment>
      <SignIn1
        content={{
          brand: {
            text: 'Dhanai Fruits Mart',
            image: '/images/Dhanai_fruits-logo-black.png',
            width: '120',
          },
          header: 'Welcome to Dhanai Fruits Mart',
        }}
      />
    </React.Fragment>
  );
}

