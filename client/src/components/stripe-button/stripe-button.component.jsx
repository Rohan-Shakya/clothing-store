import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/crown.svg';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    'pk_test_51IErH6AH544UIiyfcgyyba8z4m8upf6gLszLQOlT9D7PgHaZxOg1VfSSDnGXec79p9MXrrDvZrkcigjpLC229ivd00ccUTHHYC';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error: ' + JSON.parse(error));
        alert(
          'There was an issue with your payment. Please sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Store Ltd.'
      billingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
