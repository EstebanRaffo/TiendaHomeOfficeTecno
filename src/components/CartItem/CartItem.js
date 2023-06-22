import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';
import {ButtonBase} from '@mui/material';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function CartItem({title, price, images}) {
    return (
    <Paper
        sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
    >
        <Grid container spacing={2}>
            <Grid item>
                <ButtonBase sx={{ width: 125 }}>
                    <Img alt="complex" src={images} />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {title}
                        </Typography>
                        <Typography variant="h5" component="div" sx={{color: '#9bd4d1'}}>
                            Precio: $ {price}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
    );
}
