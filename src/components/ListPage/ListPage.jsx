import React, { useEffect } from "react";
import ListPageSearchBar from "../ListPageSearchBar/ListPageSearchBar";
import ProviderListCards from "../ListPageProviderCards/ListPageProviderCards";
import { useDispatch, useSelector } from "react-redux";
import {Container} from '@mui/material'

function ListPage() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type:'GET_ALL_AVAILABILITY'})
  }, [])

  const avail = useSelector((store) => store.availability);
  console.log(avail);
  const user = useSelector((store)=> store.user)
  const provider = useSelector((store)=> store.provider)


  return (
      <Container maxWidth='xs'>


      <h1>This is the Provider List Page</h1>

      {/* Here's the import for the search bar component */}

      <ListPageSearchBar />

      {/* This component will get mapped over to display the list of providers */}
      {avail?.map((choice)=>(

        <ProviderListCards key={choice.id} choice={choice} />
        ))}
      </Container>

  );
}

export default ListPage;
