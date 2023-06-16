import Flex from '../Flex/Flex'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <Flex>
            {products.length ? 
                products.map(product => <Item key={product.id} {...product} image={product.images[0]}/>)
            :
                <h2>No encontramos productos</h2>}
        </Flex>
    )
}

export default ItemList