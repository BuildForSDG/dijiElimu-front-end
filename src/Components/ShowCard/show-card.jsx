import React from 'react';
import './show-card.scss'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ShowCard = ({course, history}) => {
  const {name, image} = course
  const showCardStyles = {
    backgroundImage: `url(${image})`,
    
  };
  const handleClick =() => {
    history.push(`/courses/${course.id}`)
  }
  
  return   (
    <div className="collection-item">
      <div className="background" style={showCardStyles}>
        <button
          className="item-button"
         onClick={handleClick}
        >
          GO TO COURSE
        </button>
      </div>
      <div className="collection-item-tag">
        <h6> {name}</h6>
      </div>
    </div>
  )};


const mapDispatchToProps = dispatch=>({
})
export default withRouter(connect(null, mapDispatchToProps) (ShowCard));