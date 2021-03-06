import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box/Box";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Divider from "@material-ui/core/Divider/Divider";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography/Typography";
import useStore from "userStore/userStore";
import pxToRem from "helpers/pxToRem";

const HoroscopoStep: React.FC = () => {
  const user = useStore((state) => state.user);
  const [horoscopo, setHoroscopo] = useState<any>();

  useEffect(() => {
    const fetchHoroscopo = async () => {
      const response = await axios.get("https://api.adderou.cl/tyaas/");
      setHoroscopo(response.data.horoscopo);
    };
    fetchHoroscopo();
  }, []);

  const classes = useStyles();
  console.log(user);
  console.log(horoscopo);
  console.log(horoscopo && user && horoscopo[user.sign.toLowerCase()]);

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={pxToRem(20)}
    >
      <Typography variant="h6">Hola {user.name} !</Typography>
      {!horoscopo && <CircularProgress />}
      {horoscopo && (
        <>
          <Typography
            variant="body1"
            className={classes.typography}
            align="left"
          >
            SALUD: {horoscopo[user.sign.toLowerCase()].salud}
          </Typography>
          <Divider variant="fullWidth" />
          <Typography
            variant="body1"
            className={classes.typography}
            align="left"
          >
            AMOR: {horoscopo[user.sign.toLowerCase()].amor}
          </Typography>
          <Divider variant="fullWidth" />
          <Typography
            variant="body1"
            className={classes.typography}
            align="left"
          >
            DINERO: {horoscopo[user.sign.toLowerCase()].dinero}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default HoroscopoStep;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      marginBottom: pxToRem(20),
      width: "100%",
    },
  })
);
