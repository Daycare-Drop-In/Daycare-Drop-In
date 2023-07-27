import React, { useEffect } from "react";
import ListPageSearchBar from "../ListPageSearchBar/ListPageSearchBar";
import ProviderListCards from "../ListPageProviderCards/ListPageProviderCards";
import { useDispatch, useSelector } from "react-redux";

function ListPage() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type:'GET_AVAILABILITY'})
  }, [])

  const avail = useSelector((store) => store.availability);
  
  return (
    <div className="container">
      <h1>This is the Provider List Page</h1>

      {/* Here's the import for the search bar component */}
      <ListPageSearchBar />

      {/* This component will get mapped over to display the list of providers */}
      <ProviderListCards />
    </div>
  );
}

export default ListPage;
