import React from 'react';

function ListPageProviderCards ({choice}) {
    return (
		<div className="container">
			<h2>Provider Name: {choice.biz_name}</h2>
			<p>Availabilty for: {choice.date}</p>
			<p>Age Groups</p>
			<p>Infant: {choice.infant}</p>
			<p>Toddler: {choice.toddler}</p>
			<p> Pre-K: {choice.pre_k}</p>
			<p> School age: {choice.schoolage}</p>
			<p>Meal: {choice.provider_meal}</p>
			<p> Opens: {choice.provider_open}</p>
			<p>Closes: {choice.provider_close}</p>
			<p>Address: {choice.provider_street}</p>
			<p> Unit # {choice.provider_unit}</p>
			<p>City: {choice.provider_city}</p>
			<p> State: {choice.provider_state}</p>
			<p>Zip: {choice.provider_zip}</p>
			{/* <h2>Provider Cards</h2>
			<p>
				This will be the component that gets mapped over within the List
				Page to display clickable info Cards for each provider
			</p> */}
		</div>
	);
}

export default ListPageProviderCards