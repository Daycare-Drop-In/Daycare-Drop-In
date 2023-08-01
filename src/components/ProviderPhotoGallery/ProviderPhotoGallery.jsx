import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProviderPhotoItem from "../ProviderPhotoItem/ProviderPhotoItem";
import "./ProviderPhotoGallery.css";

function ProviderPhotoGallery() {
  const dispatch = useDispatch();
  const provider_id = useSelector((store) => store.provider.id);
  const photoArray = useSelector((store) => store.photo);

  useEffect(() => {
    provider_id &&
      dispatch({
        type: "GET_PHOTOS",
        payload: provider_id,
      });
  }, [provider_id]);

  const newPhotoInfo = {
    provider_id: provider_id,
    photo_url: "",
    description: "",
  };

  const [newPhoto, setNewPhoto] = useState(newPhotoInfo);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New photo being submitted:", newPhoto);

    dispatch({ type: "POST_PHOTO", payload: newPhoto });

    setNewPhoto({
      provider_id: provider_id,
      photo_url: "",
      description: "",
    });
  };

  const handleDelete = (id) => {
    console.log("delete button clicked for photo of id:", id);
    const dataToSend = {id, provider_id}
    dispatch({ type: "DELETE_PHOTO", payload: dataToSend});
  };

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
            <ProviderPhotoItem
              key={photo.id}
              photo={photo}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <div className="photo-upload-form">
          <h3>Add another photo:</h3>
          <form>
            <div>
              <label htmlFor="photo_url">
                Photo URL
                <input
                  type="text"
                  name="photo_url"
                  value={newPhoto.photo_url}
                  onChange={(event) =>
                    setNewPhoto({
                      ...newPhoto,
                      photo_url: event.target.value,
                    })
                  }
                />
              </label>
            </div>

            <div>
              <label htmlFor="description">
                Description
                <textarea
                  rows="2"
                  cols="30"
                  name="description"
                  placeholder="a caption for the photo..."
                  value={newPhoto.description}
                  required
                  onChange={(event) =>
                    setNewPhoto({
                      ...newPhoto,
                      description: event.target.value,
                    })
                  }
                />
              </label>
            </div>

            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    )
  );
}

export default ProviderPhotoGallery;
