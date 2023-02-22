import "./ItemListContainer.scss"


const ItemListContainer = ( { greeting } ) => {

    return (
        <div className="contenedor">
            <h2>REACT JS</h2>
            <hr/>

            { greeting }
        </div>
    )
}

export default ItemListContainer