import React from "react";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel/StepLabel";
import Stepper from "@material-ui/core/Stepper/Stepper";
import Typography from "@material-ui/core/Typography/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Box from "@material-ui/core/Box/Box";
import pxToRem from "helpers/pxToRem";

interface IStepperSign {
  activeStep: any;
  length: number;
  label: string | undefined;
}

const StepperSign: React.FC<IStepperSign> = ({
  activeStep,
  length,
  label,
}) => {
  const classes = useStyles();
  return (
    <Box my={pxToRem(24)}>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {Array.apply(null, Array(length)).map((_, index) => (
          <Step key={index}>
            <StepLabel />
          </Step>
        ))}
      </Stepper>
      <Typography variant="h5" color="primary" align="center">
        {label}
      </Typography>
    </Box>
  );
};

export default StepperSign;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    stepper: {
      background: "#FAFAFA",
      marginBottom: pxToRem(16),
    },
  })
);
