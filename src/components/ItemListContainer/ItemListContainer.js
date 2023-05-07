import ItemCount from '../ItemCount/ItemCount';

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {

    const styleList = {
        backgroundColor: "#A3C4BF",
        textAlign: "center",
        padding: "10px",
        color: "white",
        fontWeight: "700",
        marginTop: "5",
    };

    return(
        <div style={styleList}>
            <h1>{greeting}</h1>
            <ItemCount stock={5}/>
        </div>
    )
} 

export default ItemListContainer