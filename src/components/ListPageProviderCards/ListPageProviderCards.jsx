import React, { useEffect, useState } from "react";
import {
	Box,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	CardMedia,
    Chip,
	Button,
	Container,
	Grid,
	TextField,
	Typography,
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	CardActionArea,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

function ListPageProviderCards({ choice}) {
	const dispatch = useDispatch();
	const history = useHistory();

  const visitProvider = (id) => {
    console.log("PROVIDER ID", id);
    history.push(`/details/provider/${id}`);
    // dispatch({type:'GET_PROVIDER', payload:id})
  };

  return (
    <Container maxWidth="xs">
      <Card
        sx={{
          //   width: "80%",
          mb: 1.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 4,
          ml: -1,
          padding: 2,
        }}
        raised
      >
        <Grid container direction="row" justifyContent="space-between">
          <Grid container direction="column" sx={{ width: "80%" }}>
            <Typography variant="h7" align="left" sx={{ fontSize: 18, fontWeight:"bold" }} >
              {choice.biz_name}
            </Typography>
            <Typography variant="caption" align="left" sx={{ mt: 0.25 }}>
              {choice.provider_open} - {choice.provider_close}
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            sx={{ width: "20%" }}
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <Typography
              variant="body2"
              align="left"
              color="purple"
              sx={{ mb: 0.25 }}
            >
              {choice.provider_city}
            </Typography>
            <Typography
              variant="body2"
              align="left"
              color="purple"
              sx={{ mb: 0.25 }}
            >
              {choice.provider_zip}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid sx={{ width: "50%" }}>
            <CardMedia
              component="img"
              sx={{ objectFit: "contain", height: 140, marginTop: 1 }}
              image={choice.provider_photo}
              alt={"profile picture"}
            />
          </Grid>
          <Grid sx={{ width: "50%" }}>
            <CardContent>
              <Typography align="center" sx={{ fontSize: 14 }}>
                Availability for:{" "}
                <Box sx={{ fontWeight: "bold" }}>{choice.on_date}</Box>
              </Typography>
              <Grid container sx={{ marginTop: 1 }}>
                <Grid>
                  <Chip
                    label={`Infant: ${choice.infant}`}
                    variant="outlined"
                    size="small"
                  />
                  <Chip
                    label={`Toddler: ${choice.toddler}`}
                    variant="outlined"
                    size="small"
                    sx={{ marginTop: 1 }}
                  />
                </Grid>
                <Grid>
                  <Chip
                    label={`Pre-K: ${choice.pre_k}`}
                    variant="outlined"
                    size="small"
                    sx={{ marginTop: 1 }}
                  />
                  <Chip
                    label={`School Age: ${choice.schoolage}`}
                    variant="outlined"
                    size="small"
                    sx={{ marginTop: 1 }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>

        <Grid container flexDirection="column" alignItems="center">
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => visitProvider(choice.provider_id)}
          >
            Learn More
          </Button>
        </Grid>
      </Card>
    </Container>
  );
}

export default ListPageProviderCards;
