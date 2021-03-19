// eslint-disable-next-line
import { FC, useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormControl, InputAdornment } from "@material-ui/core";

const useStyles: any = makeStyles((theme: Theme) => {
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  });
});

type State = {
  amount: string;
  pasward: string;
  showPassward: boolean;
};

const LoginModal: FC = () => {
  const classes = useStyles();
  const [values, setValues] = useState<State>({
    amount: "",
    pasward: "",
    showPassward: false,
  });

  const handleClicksShowPassward = () => {
    setValues({ ...values, showPassward: !values.showPassward });
  };
  return (
    <div>
      <FormControl>
        <TextField
          label="account ID"
          id="standard-start-adornment"
          className={(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">ID</InputAdornment>
            ),
          }}
        />
        <TextField />
      </FormControl>
    </div>
  );
};

export default LoginModal;
