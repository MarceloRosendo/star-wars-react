
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SpaceShipDriverForm(){
    
    return (
    <Stack spacing={1} direction="column">
        <TextField
            id="filled-hidden-label-small"
            label="Nome Jedi"
            defaultValue="Han Solo"
            variant="filled"
            size="small"
        />
        <TextField
            id="filled-hidden-label-small"
            label="Nome Jedi"
            defaultValue="Millennium Falcon"
            variant="filled"
            size="small"
        />
        <Button variant="contained">Decolar</Button>
    </Stack>)
}