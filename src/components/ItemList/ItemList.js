import Flex from '../Flex/Flex'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <Flex>
            {products.map(product => <Item key={product.id} {...product} />)}
        </Flex>
    )
}

export default ItemList