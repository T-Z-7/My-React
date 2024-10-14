import PropTypes from "prop-types"
function List (props){
     
    const itemList = props.items;
    const category = props.category;
    
    //fruits.sort((a,b)=> a.name.localeCompare(b.name));

    //const lowCalFruits = fruits.filter(fruits => fruits.calories<100);

    

   const listItems = itemList.map(items  => <li key={items.id}>
                                             {items.name} : &nbsp;
                                             <b>{items.calories}</b>
                                            </li>)

   return( <>
     <h3 className="category">{category}</h3>
     <ol className="listItems">{listItems}</ol>
     
     </>
   );
}
List.propsTypes ={
    category: propsTypes.strings,
    items : propsTypes.arrayOf(propsTypes.shape({id : propsTypes.number,
                                                 names : propsTypes.string,
                                                 calories : propsTypes.number,
    }))
}
List.defaultProps={
   category : "Category",
   items : [],
}

export default List