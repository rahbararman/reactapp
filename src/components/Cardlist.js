import React from 'react';
import Card from './Card';


const Cardlist = ({robots}) => {
	return (
		<div>
			{robots.map((user)=> {
				return <Card key={user.id} name={user.name} email={user.email} id={user.id}/>
			})}
		</div>
	);
};

export default Cardlist;