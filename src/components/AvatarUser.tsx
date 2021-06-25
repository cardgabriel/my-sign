import React from "react";
import pxToRem from "../helpers/pxToRem";

import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar/Avatar";

interface IAvatarUser {
  src: string;
}

const AvatarUser: React.FC<IAvatarUser> = ({ src }) => {
  const classes = useStyles();
  return (
    <Avatar
      src={src}
      alt="user avatar"
      classes={{ fallback: classes.avatarFallback, root: classes.avatarRoot }}
    >
      <CircularProgress />
    </Avatar>
  );
};
export default AvatarUser;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatarRoot: {
      width: pxToRem(220),
      height: pxToRem(220),
      background: "#FAFAFA",
      marginTop: pxToRem(64),
      marginBottom: pxToRem(32),
    },
    avatarFallback: {
      background: theme.palette.common.white,
    },
  })
);
