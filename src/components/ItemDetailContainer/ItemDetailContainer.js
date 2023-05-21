import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './styles/ItemDetailContainer.css';
import { useParams } from "react-router-dom";

/* AsyncMock - servicioMock / backend/nube/api */
import products from "../../data/data"

const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === Number(id)))
        }, 1000)
    })
}


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        getProductById(id)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [id])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer