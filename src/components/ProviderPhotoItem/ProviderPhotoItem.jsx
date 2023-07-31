import { useHistory } from "react-router-dom";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

function ProviderPhotoItem({ photo }) {
  return (
    <div className="card">
      <Card
        sx={{
          width: 200,
          height: 300,
          padding: 1,
          paddingBottom: 0,
          elevation: 3,
        }}
        className="photo-card"
      >
        <CardMedia
          component="img"
          height="194"
          image={photo.photo_url}
          // Make the Image shrink or stretch to fit into the card
          sx={{ objectFit: "contain" }}
          // When we want to navigate to the detail view, make sure to pass the toy's id so we can navigate correctly!
          onClick={() => handleDetailView(photo.id)}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {photo.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProviderPhotoItem;
