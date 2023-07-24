import React from 'react';
import ProviderPhotoItem from '../ProviderPhotoItem/ProviderPhotoItem';

function ProviderPhotoGallery() {

  return (
    <div className="container">
<h3>Provider Photo Gallery</h3>
{/* This will map over the Provider Photo component to 
create a gallery of clickable thumbnails of the provider's space */}
<ProviderPhotoItem/>
    </div>
  );
}

export default ProviderPhotoGallery;
