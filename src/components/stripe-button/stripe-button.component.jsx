import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  const publishableKey =
    'pk_test_51IErH6AH544UIiyfcgyyba8z4m8upf6gLszLQOlT9D7PgHaZxOg1VfSSDnGXec79p9MXrrDvZrkcigjpLC229ivd00ccUTHHYC';

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
