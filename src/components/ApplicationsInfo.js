import { Card, CardBody } from '@material-tailwind/react';
import { useTheme } from '@material-ui/core';
import { Grid } from '@mui/material';
import React from 'react';
import { AppChart } from './AppChart';
const ApplicationsInfo = () => {
  const theme=useTheme()
  return (
    <div style={{ paddingBottom: '300px' }}>
      <br></br>
      <center>
        {/* <Card> */}
          <h1 style={{color:theme.typography.primary.mainheading}}><b>Operation-wise Transactions</b> </h1>
          <CardBody>
            <Grid container spacing={2}  style={{ backgroundColor: theme.tablecontainer.backgroundColor }}>
              <Grid item lg={2} style={{ backgroundColor: theme.tablecontainer.backgroundColor }} >
              </Grid>
              <Grid item lg={8} style={{ backgroundColor: theme.tablecontainer.backgroundColor }} >
                <AppChart />
              </Grid>
              <Grid item lg={2}  style={{ backgroundColor: theme.tablecontainer.backgroundColor }} >
              </Grid>
            </Grid>
            {/* <div className="relative" style={{ width: '650px'  }}>
              <AppChart />
            </div> */}
          </CardBody>
        {/* </Card> */}
      </center>
    </div>
  );
}

export default ApplicationsInfo;
