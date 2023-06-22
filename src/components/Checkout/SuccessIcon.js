import { Box } from '@mui/material';

const successIcon = "https://i.postimg.cc/65Zjt4xs/success-Icon.gif";

export default function SuccessIcon(){
    const styles = {
        width: '100%',
        borderRadius: '10px'
    }

    return(
        <Box sx={styles}>
            <img src={successIcon} alt="success" width="15%" style={{borderRadius: '100%'}} />
        </Box>
    )
}