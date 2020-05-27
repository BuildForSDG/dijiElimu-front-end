import React from 'react'
import FormInput from '../../form-input/form-input'
import Button from '../../button/button'

class CreateUnit extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: '',
             blog: ''
        }
    }
    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    
    render() {
        const { handleChange } = this
        const { title, blog } = this.state
        return (
            <div>
                <FormInput
                    handleChange={handleChange}
                />
                <textarea
                    handleChange={handleChange}
                ></textarea>
                <Button
                label='SUBMIT UNIT'
                />
            </div>
        )
    }
   
}

export default CreateUnit
