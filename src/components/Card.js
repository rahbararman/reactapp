import React from 'react';
import './Card.css'

const Card = ({name, email, id}) => {
	// const  = props;
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="profile" src={`https://robohash.org/${id}?2000x4000`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;