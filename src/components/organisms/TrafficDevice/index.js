import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@material-ui/core';

import { Doughnut } from '../../atoms';
import { DevicesTraffic } from '../../molecules';

const TrafficByDevice = () => {
  return (
    <Card>
      <CardHeader title="Tráfico por dispositivo" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 200,
            position: 'relative'
          }}
        >
          <Doughnut />
        </Box>
        <DevicesTraffic />
      </CardContent>
    </Card>
  );
};

export default TrafficByDevice;