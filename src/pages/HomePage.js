import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import '../App.css';


const HomePage = () => {
    return(
        <div className='App'>
            <ItemListContainer greeting={'Bienvenidos'}/>
        </div>
    )
}

export default HomePage