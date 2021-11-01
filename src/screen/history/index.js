import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Header from '../../components/header'

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList () {
  const [dense] = React.useState(false);
  const [itemList, setItemList] = React.useState(false);

  useEffect(() => {
    const itemsFromLocalStorage = getHistoryFromLocalStorage()
    var itemsToShow = []
    var index = 0
    for(var item of itemsFromLocalStorage){
      itemsToShow.push(<ListItem key={index}> {item} </ListItem>)
      index++
    }
    setItemList(itemsToShow)
  }, []);


  const getHistoryFromLocalStorage = () => {
    var history = localStorage.getItem('history')
    return JSON.parse(history)
  }
  return (
    <div>
      <Header label="HOME" where="HISTORY" whereTo='/' />
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Histórico de chamadas de naves
            </Typography>
            <Demo>
              <List dense={dense}>
                {itemList}
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
