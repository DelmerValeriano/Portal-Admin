import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  div: {
    marginLeft: '35%',
    position:'fixed',
    bottom: 0
  }
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.div}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 2, sm: 2 }}
        color="black"
      >
        <Container maxWidth="lg">
          <Box textAlign="center" pt={{ xs: 5, sm: 2 }} pb={{ xs: 5, sm: 0 }}>
            &reg; Derechos Reservados  {new Date().getFullYear()} - "nombre de cliente" - Powered by Appland
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer