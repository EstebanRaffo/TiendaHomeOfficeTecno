// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {

    const styleList = {
        backgroundColor: "blue",
        textAlign: "center",
        padding: "10px",
        color: "white",
        fontWeight: "700",
        marginTop: "5",
    };

    return(
        <div style={styleList}>
            <h1>{greeting}</h1>
        </div>
    )
} 

export default ItemListContainer