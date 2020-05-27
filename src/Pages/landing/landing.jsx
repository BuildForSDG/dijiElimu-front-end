import React from 'react';
import './landing.scss'
import Button from '../../Components/button/button'

const Landing = ({history}) => {
  const handleClick = () => {
    history.push(`/departments`)
  }
  
  return (
  <div className="landing">
    <h1>PROGRAMMES</h1>
    <input type="text" placeholder="Search" />
    <Button inverted={true} handleClick = {handleClick} label='OR BROWSE ALL'/>
    </div>
);
}
export default Landing
