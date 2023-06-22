import { useState, useContext, Fragment } from 'react';
import { useNavigate } from "react-router-dom";
import { createOrderWithStockUpdate } from "../../services/firebase";
import { cartContext } from "../../context/cartContext";
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { CssBaseline, LinearProgress, Box, Container, Paper, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  const isDisabled = !(userData.name !== '' && userData.phone !== '' && userData.email !== '')

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
        clearCart()
        navigateTo(`/order-confirmation/${id}`)
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
        return <Review {...userData}/>;
      default:
        throw new Error('Paso Inexistente');
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
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        {isConfirmationLoading ? 
          <LinearProgress sx={{margin: '15% 0'}}/>
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
                      disabled={isDisabled}
                    >Confirmar compra</Button>
                  :
                    activeStep === 0 ? 
                      <>
                        <Button onClick={() => navigateTo('/cart')} sx={{ mt: 3, ml: 1 }}>Atrás</Button>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 3, ml: 1 }}
                          disabled={isDisabled} 
                          >Siguiente</Button>
                      </>
                      :
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                        disabled={isDisabled} 
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
