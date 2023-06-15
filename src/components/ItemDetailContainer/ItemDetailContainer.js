import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import './styles/ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItemData } from '../../services/firebase'


const ItemDetailContainer = () => {
    const [errors, setErrors] = useState(null)
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getItemData(id)
            .then(response => setProduct(response))
            .catch(error => {
                console.error(error)
                setErrors(error.message)
            })
    }, [id])

    if(errors)
    return (
      <div>
        <h1>Error</h1>
        <p>{errors}</p>
      </div>
    );

    if(product){
        return (
            <div className='ItemDetailContainer'>
                <ItemDetail {...product} />
            </div>
        )
    }

    return(
        <>
            <h1>Cargando...</h1>
        </>
    )
}

export default ItemDetailContainer