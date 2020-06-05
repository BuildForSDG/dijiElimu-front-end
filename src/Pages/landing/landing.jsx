import React from 'react';
import './landing.scss'
import Button from '../../Components/button/button'
import axios from 'axios'

// const Landing = ({history}) => {
//   const handleClick = () => {
//     history.push(`/departments`)
//   }
  
//   return (
//   <div className="landing">
//     <h1>PROGRAMMES</h1>
//     <input type="text" placeholder="Search" />
//     <Button inverted={true} handleClick = {handleClick} label='OR BROWSE ALL'/>
//     </div>
// );
// }
class Landing extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       users: []
    }
  }
  async componentDidMount() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    console.log(response);
    
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
