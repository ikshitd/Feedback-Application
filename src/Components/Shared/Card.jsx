import React from "react"; 
import ReactDOM from "react-dom"; 
import PropTypes from "prop-types"; 

function Card({children, reverse}) {
	return (<div className = {`card ${reverse ? 'reverse': null}`}> {children} </div>);
}

Card.defaultProps = {
	reverse: true, 
}; 

Card.propTypes = {
	children: PropTypes.node.isRequired, 
	reverse: PropTypes.bool
}; 
export default Card;
