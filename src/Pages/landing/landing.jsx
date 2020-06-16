import React from 'react';
import './landing.scss'
import Button from '../../Components/button/button'

class Landing extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       users: []
    }
  }

  
  handleClick = () => {
    
    this.props.history.push(`/departments`)
  }
  
  render =()=>{
      return (
        <div className="landing">
          <h1>PROGRAMMES</h1>
          <input type="text" placeholder="Search" />
          <Button inverted={true} handleClick = {this.handleClick} label='OR BROWSE ALL'/>
        </div>
      );
  }
}
export default Landing
