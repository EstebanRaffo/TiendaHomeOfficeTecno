import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import './styles/ItemDetailContainer.css';
import { getItemData } from '../../services/firebase'
import { Box, LinearProgress } from '@mui/material';

const ItemDetailContainer = () => {
    const [errors, setErrors] = useState(null)
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        getItemData(id)
            .then(response => setProduct(response))
            .catch(error => {
                console.error(error)
                setErrors(error.message)
            })
            .finally(() => setIsLoading(false))
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
                {isLoading ? 
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress sx={{margin: '15% 0'}}/>
                    </Box>  
                    : 
                    <ItemDetail {...product} />}
            </div>
        )
    }
}

export default ItemDetailContainer