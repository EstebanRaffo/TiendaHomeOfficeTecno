import Flex from '../Flex/Flex'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <Flex>
            {products && products.map(product => <Item key={product.id} {...product} image={product.images[0]}/>)}
        </Flex>
    )
}

export default ItemList