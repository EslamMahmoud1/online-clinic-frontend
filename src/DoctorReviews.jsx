import { Stack, Typography, Rating, Grid } from "@mui/material";

export const DoctorReviews = ({ data }) => {
  return (
    <Grid container>
      <Grid item xs={4} padding={1} textAlign="center">
        <Typography variant="subtitle1" color="gray">
          Patient Name : {data.reviewWriter}
        </Typography>
        <Typography variant="subtitle1" color="gray">
          In : {data.createdAt}
        </Typography>
      </Grid>
      <Grid item xs={8} padding={1} textAlign="left">
        <Stack container direction={"row"} spacing={5}>
          <Stack direction="column">
            <Stack item>
              <Rating value={data.rating} precision={0.5} />
            </Stack>
            <Stack item>
              <Typography variant="body1" color="grey">
                {data.review}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};
