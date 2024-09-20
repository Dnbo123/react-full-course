import PropTypes from 'prop-types'

function List(props) {
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(items =><li key={itemList.id}>
                       {items.name} &nbsp;
                       <b>{items.calories}</b></li>
                       )

       return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
       );
}
//Seting up propTypes
List.PropTypes = {
    category:PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                name:PropTypes.string,
                                                calories:PropTypes.number }))
                                        
}


//Setting up default props
List.defaultProps = {
    category: "Default Category",
    items: [],
}
export default List;