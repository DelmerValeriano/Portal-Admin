import { Grid } from '@material-ui/core';
import CardContentSales from '../../molecules/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { TrafficDevice } from '../../organisms';

const useStyles = makeStyles(() => ({
  div: {
    marginLeft: 220,
    display: 'flex'
  },
  space: {
    marginRight: 15
  },

}));
const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.div}>
        <Grid item lg={8} md={7} xl={9} xs={9} className={classes.space}>
          <CardContentSales />
        </Grid>
        <Grid item lg={4} md={4} xl={3} xs={3}>
          <TrafficDevice sx={{ height: '100%' }} />
        </Grid>
      </div>
    </>
  );
}
export default Dashboard;
