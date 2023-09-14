import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
    return (
	<div className="gpt3__header section__padding" id="home">
		<div className="gpt3__header-content">
			<h1 className="gradient__text">
				Just like a child, every idea brought to life has a life of it's own.
			</h1>
			<p>
				The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog. 
				The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog. 
				The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.

			</p>
			<div className="gpt3__header-content__input">
				<input type="email" placeholder="Your email address"/>
				<button type="button">Get Started</button>
			</div>
			<div className="gpt3__header-content__people">
				<img src={people} alt="people" />
				<p>1,600 people requested access a visit in last 24 hours</p>
			</div>
		</div>
		<div className="gpt3__header-image">
			<img src={ai} alt="ai" />
		</div>
	</div>
    )
}

export default Header;