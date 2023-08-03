import { useParams, useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";

function PublicProviderPhotoItem({ photo, handleDelete }) {

  const providerId = useParams();

  return (
    <div className="card" id={photo.id}>
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
          sx={{ objectFit: "contain" }}
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

export default PublicProviderPhotoItem;
