import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProviderPhotoItem from "../ProviderPhotoItem/ProviderPhotoItem";
import "./ProviderPhotoGallery.css";

import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  InputAdornment,
} from "@mui/material";

function ProviderPhotoGallery({ provider }) {
  const dispatch = useDispatch();
  const provider_id = provider.id;
  const photoArray = useSelector((store) => store.photo);

  // useEffect(() => {
  //   provider_id &&
  //     dispatch({
  //       type: "GET_PHOTOS",
  //       payload: provider_id,
  //     });
  // }, [provider_id]);

  const newPhotoInfo = {
    provider_id: provider_id,
    photo_url: "",
    description: "",
  };

  const [newPhoto, setNewPhoto] = useState(newPhotoInfo);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewPhoto({
      ...newPhoto,
      provider_id: provider_id,
    });
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
    const dataToSend = { id, provider_id };
    dispatch({ type: "DELETE_PHOTO", payload: dataToSend });
  };

  //LOADING STATE

  if (!provider_id) {
    return <div>Loading...</div>;
  }
  function fileSelected(event) {
    console.log("IN FILE SELECTED");
    const selectedFile = event.target.files[0];
    console.log("selectedFile", selectedFile);
    dispatch({
      type: "AWS_PROVIDER_GALLERY",
      payload: {
        file: selectedFile,
      },
    });
  }

  return (
		provider_id && (
			<Container>
				{/* <h3>My photos</h3> */}

				{photoArray.map((photo) => (
					<ProviderPhotoItem
						key={photo.id}
						photo={photo}
						handleDelete={handleDelete}
					/>
				))}

				<h3>Add another photo:</h3>
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{ mt: 1 }}
					autoComplete="off"
					encType="multipart/form-data"
				>
					<TextField
						autoComplete="off"
						margin="normal"
						required
						fullWidth
						name="photo"
						label="Upload a new photo"
						type="file"
						id="photo"
						onChange={fileSelected}
						InputLabelProps={{ shrink: true }}
					/>
					<TextField
						autoComplete="off"
						margin="normal"
						required
						fullWidth
						multiline
						rows={4}
						name="photo_description"
						label="Photo Description"
						type="text"
						id="photo_description"
						value={newPhoto.description}
						onChange={(event) =>
							setNewPhoto({
								...newPhoto,
								description: event.target.value,
							})
						}
						InputLabelProps={{ shrink: true }}
					/>
					<Button
						type="submit"
						fullWidth
						variant="outlined"
						color="secondary"
						sx={{
							mb: 5,
							p: 2,

							// backgroundColor: "#390854",
						}}
					>
						Add Photo
					</Button>
				</Box>

				{/* <form encType="multipart/form">
						<div>
							<label htmlFor="photo_url">
								Upload
								<input
									type="file"
									name="photo_url"
									onChange={fileSelected}
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
					</form> */}
			</Container>
		)
  );
}

export default ProviderPhotoGallery;
