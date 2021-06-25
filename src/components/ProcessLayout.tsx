import React from "react";

import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import { Link } from "react-router-dom";

interface IProcessLayout {
  label: any;
  onBackClick: () => void;
  currentStep: number;
}

const ProcessLayout: React.FC<IProcessLayout> = ({
  label,
  onBackClick,
  currentStep,
}) => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.appBarRoot}>
      <Toolbar className={classes.toolBar}>
        {currentStep === 0 && (
          <Link to="/">
            <IconButton aria-label="back icon" className={classes.iconButton}>
              <ArrowBackIosOutlinedIcon />
            </IconButton>
          </Link>
        )}
        {currentStep !== 0 && (
          <IconButton
            onClick={onBackClick}
            aria-label="back icon"
            className={classes.iconButton}
          >
            <ArrowBackIosOutlinedIcon />
          </IconButton>
        )}

        <Typography variant="h6" className={classes.label}>
          {label}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ProcessLayout;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarRoot: {
      top: 0,
      bottom: "auto",
    },
    toolBar: {
      display: "flex",
      justifyContent: "space-between",
    },
    label: {
      color: theme.palette.common.white,
    },
    iconButton: {
      color: theme.palette.common.white,
    },
  })
);
