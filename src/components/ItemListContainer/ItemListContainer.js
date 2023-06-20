import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData, getDataByCategory } from "../../services/firebase"
import ItemList from "../ItemList/ItemList";
import { Box, LinearProgress } from '@mui/material';
// import { exportDataWithBatch } from "../../services/firebase"


// eslint-disable-next-line react/prop-types
const ItemListContainer = () => {
    const [errors, setErrors] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    const styleList = {
        textAlign: "center",
        padding: "1%",
        color: "#0070E7",
        fontWeight: "700",
        marginTop: "2",
    };

    const fetchData = categoryId === undefined ? getData : getDataByCategory
    useEffect(() => {
        fetchData(categoryId)
        .then(response => setProducts(response))
        .catch(error => {
            console.error(error)
            setErrors(error.message)
        })
        .finally(() => setIsLoading(false))
    // eslint-disable-next-line
    }, [categoryId])

    if(errors)
        return (
            <div>
                <h1>Error</h1>
                <p>{errors}</p>
            </div>
        );

    return(
        <div style={styleList}>
            {/* <button onClick={exportDataWithBatch}>Exportar datos</button> */}
            {isLoading ? 
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box> 
                : 
                <ItemList products={products} />}
        </div>
    )
} 

export default ItemListContainer