import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";

/* AsyncMock - servicioMock / backend/nube/api */
import products from "../../data/data";
import { useParams } from "react-router-dom";

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {  
      resolve(products);
    }, 1000);
  });
}

/* ---------------------------------------------- */

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    const styleList = {
        textAlign: "center",
        padding: "1%",
        color: "#0070E7",
        fontWeight: "700",
        marginTop: "2",
    };

    useEffect(() => {
        getProducts()
            .then(response => {
                if(categoryId){
                    const productsByCategory = response.filter(product => product.category === categoryId)
                    setProducts(productsByCategory)
                }else{
                    setProducts(response)
                }
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return(
        <div style={styleList}>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
} 

export default ItemListContainer