import React from 'react';

import SignIn2 from '../components/sign-in/SignIn2';

export default function Login() {
  return (
    <React.Fragment>
      <SignIn2
        content={{
          brand: {
            text: 'Dhanai Fruits Mart',
            image: '/images/Dhanai_fruits-logo-black.png',
            width: '120',
          },
        }}
      />
    </React.Fragment>
  );
}

