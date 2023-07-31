import React, { useEffect } from "react";
import StaticListProviderCards from "../StaticListProviderCards/StaticListProviderCards";
import { useDispatch, useSelector } from "react-redux";

function StaticListPage() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({ type: "GET_ALL_PROVIDERS" });

  },[])

  const allProviders = useSelector((store)=> store.providers)

  return (
    <div className="container">
      <h1>Static List View</h1>
      <p>
        This will be the static list of all the providers who have registered
        with the site
      </p>

      {/* This component will get mapped over in order to generate the list */}
      {allProviders?.map((provider)=>
        <StaticListProviderCards provider={provider}  />
      )}
    </div>
  );
}

export default StaticListPage;
