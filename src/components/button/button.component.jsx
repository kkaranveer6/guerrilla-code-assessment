import React from 'react';
import './button.styles.css';

const CustomButton = ({ children, className }) => {
	return (
		<button className={`${className}`}>{children}</button>
	);
}

export default CustomButton;