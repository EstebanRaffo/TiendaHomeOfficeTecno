import { useParams } from "react-router-dom"


const BuyOrder = () => {
    const { orderId } = useParams()

    return (
        <div style={{backgroundColor: '#E0ECEA'}}>
          <h1>Gracias por tu compra!</h1>
          <small>Este es tu comprobante de compra: {orderId}</small>
        </div>
    );
}

export default BuyOrder