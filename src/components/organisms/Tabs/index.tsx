import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Grid, Box} from '@mui/material';
import { makeStyles } from '@mui/styles'; 
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

const useStyles = makeStyles({
  typo:{
    marginTop: '15px',
    textAlign: 'initial',
  }
});

export type TabProps = {
    value: string,
    handleChange: () => void,
    bookSummary: string;
    title: string;
}

  export type TabPanelProps ={
    children?: React.ReactNode;
    index: number;
    value: number;
  }

const TabPanels: React.FC<TabProps> = ((props) => {

    const classes = useStyles();
    return(
        <TabContext value={props.value}>
        <Box sx={{ width: '100%' }}>
        <Tabs
          value={props.value}
          onChange={props.handleChange}
          textColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab style={{textTransform: 'none', color: '#637174'}} value="1" label="Synopsis" />
          <Tab style={{textTransform: 'none', color: '#637174'}} value="2" label="What is it for" />
          <Tab style={{textTransform: 'none', color: '#637174'}} value="3" label="About the author" />
        </Tabs>
      </Box>
      <Grid className={classes.typo} >
      <TabPanel value="1" />
      </Grid>
      </TabContext>
    );
});

export default TabPanels;
