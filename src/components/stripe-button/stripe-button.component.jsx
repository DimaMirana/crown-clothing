import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_EZoAyjk4zgl4gjuF2YbDqr6Z00OfBBIXuV';
    
    const onToken = token => {
        console.log(token);
        alert('Payment received');
    }
    
    return ( 
        <StripeCheckout
            label = 'Pay Now'
            name = 'CROWN Clothing'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;