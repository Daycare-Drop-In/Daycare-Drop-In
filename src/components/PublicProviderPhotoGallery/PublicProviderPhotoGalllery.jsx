import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import PublicProviderPhotoItem from "../PublicProviderPhotoItem";
import "./PublicProviderPhotoGallery.css";

function PublicProviderPhotoGallery() {
  const dispatch = useDispatch();
  const providerId = useParams();
  const provider_id = useSelector((store) => store.provider.id);
  const photoArray = useSelector((store) => store.photo);

  useEffect(() => {
    provider_id &&
      dispatch({
        type: "GET_PHOTOS",
        payload: providerId,
      });
  }, [providerId]);

  //LOADING STATE

  if (!provider_id) {
    return <div>Loading...</div>;
  }

  return (
    provider_id && (
      <div className="container">
        <h3>Provider Photo Gallery</h3>
        <div className="photo-gallery-container">
          {photoArray.map((photo) => (
            <PublicProviderPhotoItem key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    )
  );
}

export default PublicProviderPhotoGallery;
