import React from 'react'
import axios from '../../redux/axios'

import StripeCheckout from 'react-stripe-checkout'
import { subscribeToCourseStart } from '../../redux/course/course-actions'
import { connect } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { createStructuredSelector } from 'reselect'



const StripeCheckoutButton = (props) => {
    const {price, course,subscribeToCourseStart, currentUser } = props
    const stripePrice = price*100
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    const onToken = async token => {
        try {
            const response = await axios({
                url: `payment`,
                method: 'post',
                data: {
                    token,
                    amount: stripePrice,
                }
            })
            console.log(response);
            subscribeToCourseStart({course: course.id, price, user: currentUser.id})
            
        } catch (error) {
            alert('could not complete payment')
        }
        
    }
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
const mapDispatchToProps = dispatch =>({
    subscribeToCourseStart: subsDetails =>dispatch(subscribeToCourseStart(subsDetails))
})
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps) (StripeCheckoutButton)