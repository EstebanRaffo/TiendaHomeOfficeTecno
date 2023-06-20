import { useState, useContext, Fragment } from 'react';
import { useNavigate } from "react-router-dom";
import { createOrderWithStockUpdate } from "../../services/firebase";
import { cartContext } from "../../context/cartContext";
import {CssBaseline, LinearProgress} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';


const steps = ['Envío', 'Pago', 'Ticket'];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isConfirmationLoading, setIsConfirmationLoading] = useState(false)

  const { cart, clearCart, getTotalPrice } = useContext(cartContext)
  const navigateTo = useNavigate()

  function onInputChange(evt) {
    const field = evt.target.name;
    const value = evt.target.value;

    const newState = { ...userData };
    newState[field] = value;
    setUserData(newState);
  }

  function clearData() {
    setUserData({
      name: '',
      email: '',
      phone: ''
    });
  }

  function handleConfirm(evt) {
    setIsConfirmationLoading(true)
    evt.preventDefault();
    onConfirm()
  }

  async function onConfirm(){
    const order = {
        buyer: userData,
        items: cart,
        date: new Date(),
        price: getTotalPrice()
    };

    try{
        const id = await createOrderWithStockUpdate(order)
        console.log("respuesta: ", id)
        clearCart()
        navigateTo(`/order-confirmation/${id}`)
        /* 
        1. alert: SweetAlert/toastify -> muestren el id
        2. redirección: React Router -> /confirmation
        3. rendering condicional -> modificando un state
        */ 
    }catch(error){
        alert(error)
    }finally{ setIsConfirmationLoading(false) }
  }


  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm onInputChange={onInputChange} onClearData={clearData} userData={userData} />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* backgroundColor: '#E0ECEA' */}
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        {isConfirmationLoading ? 
          <LinearProgress/>
          :
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
              <Typography component="h1" variant="h4" align="center">
                Checkout
              </Typography>
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>            
              <Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Atrás
                    </Button>
                  )}
                  {activeStep === steps.length - 1 ? 
                    <Button
                      variant="contained"
                      onClick={handleConfirm}
                      sx={{ mt: 3, ml: 1 }}
                      disabled={!(
                        userData.name !== '' &&
                        userData.phone !== '' &&
                        userData.email !== ''
                        )}
                    >Confirmar compra</Button>
                  : 
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }} 
                    >Siguiente</Button>
                  }
                </Box>
              </Fragment>
          </Paper>
        }
      </Container>
    </ThemeProvider>
  );
}
