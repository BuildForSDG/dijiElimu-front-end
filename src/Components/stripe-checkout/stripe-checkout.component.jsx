import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const onToken = () => {
    alert('you are now subscribed to the book')
}

const StripeCheckoutButton = ({price}) => {
    const stripePrice = price*100
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    return (
        <StripeCheckout
        panelLabel='Pay for Course'
        amount={stripePrice}
        description={`Total price is ${price}`}
        billingAddress
        label='Pay for Course'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton