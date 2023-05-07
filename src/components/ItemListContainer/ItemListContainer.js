import ItemCount from '../ItemCount/ItemCount';
import ItemList from "../ItemList/ItemList";
import Flex from "../Flex/Flex"
import { useEffect, useState } from "react";

/* AsyncMock - servicioMock / backend/nube/api */
import products from "../../data/MOCK_DATA.json";

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}

/* ---------------------------------------------- */

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const styleList = {
        backgroundColor: "#E0ECEA",
        textAlign: "center",
        padding: "10px",
        color: "white",
        fontWeight: "700",
        marginTop: "5",
    };

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div style={styleList}>
            <h1>{greeting}</h1>
            <ItemCount stock={5} initial={0}/>
            <Flex>
                <ItemList products={products} />
            </Flex>
        </div>
    )
} 

export default ItemListContainer