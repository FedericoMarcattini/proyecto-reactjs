import "./ItemListContainer.scss"


const ItemListContainer = ( { greeting } ) => {

    return (
        <div className="contenedor">
            <h2>Calavera No Chilla Store</h2>
            <hr/>

            { greeting }
        </div>
    )
}

export default ItemListContainer