import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Header from '../../components/header'

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);

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
                {generate(
                    <ListItem>
                    <ListItemText
                        primary="Single-line item"
                        secondary={secondary ? 'Secondary text' : null}
                    />
                    </ListItem>,
                )}
                </List>
            </Demo>
            </Grid>
        </Grid>
        </Box>
    </div>
  );
}
