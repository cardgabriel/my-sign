import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField/TextField";
import useStore from "userStore/userStore";
import pxToRem from "helpers/pxToRem";

interface IFormInput {
  name: string;
  email: string;
  birthday: string;
}

interface IDatosStep {
  onNext: () => void;
  onBack: () => void;
}

const DatosStep: React.FC<IDatosStep> = ({ onNext, onBack }) => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const handlerName = useStore((state) => state.handlerName);
  const handlerEmail = useStore((state) => state.handlerEmail);
  const handlerBirthday = useStore((state) => state.handlerBirthday);
  const handlerSign = useStore((state) => state.handlerSign);

  const onSubmit = (data: IFormInput) => {
    handlerName(data.name);
    handlerEmail(data.email);
    handlerBirthday(data.birthday);
    handlerSign(data.birthday);
    onNext();
  };

  const classes = useStyles();

  return (
    <Box px={pxToRem(20)}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Nombre"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
              className={classes.textField}
            />
          )}
          rules={{ required: "First name required" }}
        />

        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Email"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="email"
              fullWidth
              className={classes.textField}
            />
          )}
          rules={{ required: "Email required" }}
        />

        <Controller
          name="birthday"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label=""
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="date"
              fullWidth
              className={classes.textField}
            />
          )}
          rules={{ required: "Birthday required" }}
        />

        <Box display="flex" justifyContent="center" mt={pxToRem(16)}>
          <Button
            className={classes.buttonForm}
            variant="outlined"
            disableElevation
            onClick={onBack}
          >
            Volver
          </Button>
          <Button
            className={classes.buttonForm}
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
          >
            Continuar
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default DatosStep;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      maxWidth: pxToRem(500),
      marginBottom: pxToRem(16),
    },
    buttonForm: {
      marginLeft: pxToRem(5),
      marginRight: pxToRem(5),
      width: pxToRem(120),
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);
