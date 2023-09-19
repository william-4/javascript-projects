import React from 'react';
import './whatGPT3.css';
import Features from '../../components/features/Features';

const WhatGPT3 = () => {
    return (
	<div className="gpt3__whatgpt3 section__margin">
	    <div className="gpt3__whatgpt3-feature">
			<Features title="" text=""/>
		</div>
		<div className="gpt3__whatgpt3-heading">
			<h1 className="gradient_text">The possibilities are beyond your imagination</h1>
			<p>Explore the library</p>
		</div>
		<div className="gpt3__whatgpt3-container">
			<Features title="" text=""/>
			<Features title="" text=""/>
			<Features title="" text=""/>
		</div>
	</div>
    )
}

export default WhatGPT3;