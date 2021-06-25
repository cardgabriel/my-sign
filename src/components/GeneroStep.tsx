import React from "react";
import Box from "@material-ui/core/Box/Box";
import Button from "@material-ui/core/Button/Button";
import genero1 from "../assets/gen-1.png";
import genero2 from "../assets/gen-2.png";
import genero3 from "../assets/gen-3.png";
import pxToRem from "../helpers/pxToRem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import useStore from "../userStore/userStore";

interface IGeneroStep {
  onNext: () => void;
}
const GeneroStep: React.FC<IGeneroStep> = ({ onNext }) => {
  const handlerGender = useStore((state) => state.handlerGender);
  const user = useStore((state) => state.user);
  const classes = useStyles();

  const genders = [
    { src: genero1, gender: "masculino" },
    { src: genero2, gender: "femenino" },
    { src: genero3, gender: "otro" },
  ];

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" justifyContent="center" mb={pxToRem(32)}>
        {genders.map((gender) => {
          return (
            <Button
              key={gender.gender}
              onClick={() => {
                handlerGender(gender.gender);
              }}
            >
              <img
                alt={`genero-${gender.gender}`}
                className={classes.imageButton}
                src={gender.src}
              />
            </Button>
          );
        })}
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={onNext}
        disableElevation
        disabled={user.gender ? false : true}
      >
        Continuar
      </Button>
    </Box>
  );
};

export default GeneroStep;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageButton: {
      width: pxToRem(100),
    },
  })
);
