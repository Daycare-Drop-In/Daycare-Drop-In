import React, { useEffect, useState } from "react";
import StaticListProviderCards from "../StaticListProviderCards/StaticListProviderCards";
import { useDispatch, useSelector } from "react-redux";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";


function StaticListPage() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch({ type: "GET_ALL_PROVIDERS" });
	}, [])
	const provider = useSelector((store) => store.provider);

	return provider.length > 0 ? (

		<div className="container">
			<h1>Static List View</h1>
			<p>
				This will be the static list of all the providers who have
				registered with the site
			</p>


			{/* This component will get mapped over in order to generate the list */}

			{provider?.map((choice) => (
				<StaticListProviderCards key={choice.id} choice={choice} />
			))}
		</div>
	) : (<>WEEEE</>)
}

export default StaticListPage;
