import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './styles/ItemDetailContainer.css';

/* AsyncMock - servicioMock / backend/nube/api */
import products from "../../data/data"

const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById(1)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer