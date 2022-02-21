import React from 'react';


const SearchBox = ({onSearch}) => {
	return (
		<div>
		<input type='search' onChange={onSearch}/>
		</div>
	);

};

export default SearchBox;