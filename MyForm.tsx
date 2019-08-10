import React from 'react';

import {Button, Container, createStyles, makeStyles, TextField, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginTop: theme.spacing(2),
    },
    input: {
      display: 'none',
    },
  }),
);

function MyForm() {
  const classes = useStyles();

  return <form>
    <Container>
      <TextField label='UserName' variant="standard"/>
    </Container>
    <Container>
      <TextField label='Password' variant="standard"/>
    </Container>
    <Container>
      <Button type="submit" variant="contained" color="primary" className={classes.button}>
        Login
      </Button>
    </Container>
  </form>;
}

export default MyForm;
