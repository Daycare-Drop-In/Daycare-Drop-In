import React from 'react';
import ProviderSearchBar from '../ProviderSearchBar/ProviderSearchBar';
import ProviderListCards from '../ProviderListCards/ProviderListCards';

function ProviderListPage () {
    return (
        <div className="container">
            <h1>This is the Provider List Page</h1>

            {/* Here's the import for the search bar component */}
            <ProviderSearchBar/>

            {/* This component will get mapped over to display the list of providers */}
            <ProviderListCards/>
        </div>
    )
}

export default ProviderListPage