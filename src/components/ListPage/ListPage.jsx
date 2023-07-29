import React, { useEffect, useState } from "react";
import ListPageSearchBar from "../ListPageSearchBar/ListPageSearchBar";
import ProviderListCards from "../ListPageProviderCards/ListPageProviderCards";
import { useDispatch, useSelector } from "react-redux";
import {Container} from '@mui/material'

function ListPage() {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch({ type: "GET_ALL_AVAILABILITY" });
    // if(!filter){
    //   dispatch({ type: "GET_ALL_AVAILABILITY" });

    // }else{

    // }
  }, [])

  const avail = useSelector((store) => store.availability);
  const filter = useSelector((store)=> store.filter)
  const filteredAvail = useSelector((store)=> store.filteredAvail)
  const user = useSelector((store)=> store.user)
  const provider = useSelector((store)=> store.provider)

  const [filtered, setFiltered]= useState(false);
  // console.log(filter);
  console.log(filter);

  // looping through library state to find books marked as not read
  // and pust them into new array unreadBooks


  // const selectUnreads = () => {
	// 	const unreadBooks = [];
	// 	for (const userBook of library) {
	// 		if (userBook && !userBook.read_status) {
	// 			unreadBooks.push(userBook);
	// 		}
	// 	}
	// 	console.log("unreadBooks are:", unreadBooks);
	// 	return unreadBooks;
  // };
  // // declare variable via called function
  // const unreadBooks = selectUnreads();


  return (
		<Container maxWidth="xs">
			<h1>Provider Availability</h1>

			{/* Here's the import for the search bar component */}

			<ListPageSearchBar avail={avail} setFiltered={setFiltered} />

			{/* This component will get mapped over to display the list of providers */}
			{!filter ? (
				<>
					{avail?.map((choice) => (
						<ProviderListCards key={choice.id} choice={choice} />
					))}
				</>
			) : (
				<>
					<h1>booo</h1>
					{filteredAvail?.map((choice) => (
						<ProviderListCards key={choice.id} choice={choice} />
					))}
				</>
			)}
		</Container>
  );
}

export default ListPage;
