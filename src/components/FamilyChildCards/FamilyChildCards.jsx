import React from 'react';

function FamilyChildCards () {
    return (
        <div className="container">
            <h2>Child Card</h2>
            <p>This component will be mapped over to create child cards
                for each child within the family</p>
            <p>Included info: name, age, potty training status, allergies, misc info.</p>
            <p>The page owner should also be able to edit each card. </p>
        </div>
    )
}

export default FamilyChildCards