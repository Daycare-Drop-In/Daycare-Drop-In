import React, { useEffect, useState } from "react";
import ListPageSearchBar from "../ListPageSearchBar/ListPageSearchBar";
import ProviderListCards from "../ListPageProviderCards/ListPageProviderCards";
import { useDispatch, useSelector } from "react-redux";
import {Container} from '@mui/material'

function ListPage() {
  const dispatch = useDispatch()
  const avail = useSelector((store) => store.availability);
	const filter = useSelector((store) => store.filter);
	const filteredAvail = useSelector((store) => store.filteredAvail);
	const user = useSelector((store) => store.user);
	const provider = useSelector((store) => store.provider);



  useEffect(()=>{
      dispatch({ type: "GET_ALL_AVAILABILITY" });
      // dispatch({ type: "FETCH_FILTERED_RESULTS" });
    // if(!filter){
    //   dispatch({ type: "GET_ALL_AVAILABILITY" });

    // }else{

    // }
  }, [])



  // const [filtered, setFiltered]= useState(false);
  // console.log(filter);
  console.log(filter);



  return (
		<Container maxWidth="xs">
			<h1>Provider Availability</h1>

			{/* Here's the import for the search bar component */}

			<ListPageSearchBar  avail={avail} />

			{/* This component will get mapped over to display the list of providers */}
			{!filter ? (
				<>
					{avail?.map((choice) => (
						<ProviderListCards key={choice.id} choice={choice} />
					))}
				</>
			) : (
				<>
					<h4>Filtered results</h4>
					{filteredAvail?.map((choice) => (
						<ProviderListCards key={choice.id} choice={choice} />
					))}
				</>
			)}
		</Container>
  );
}

export default ListPage;
