

// function List(props) {

// fruits.sort((a,b) =>a.name.localeCompare(b.name));

// fruits.sort((a,b)=> a.calories -b.calories) //numeric
//     const ItemList = props.item;

//     const listItem = ItemList.map(items => <li key={items.id}> {items.name}: <b>{items.calories}</b> </li>

//     )
//     return (
//         <ol>{listItem}</ol>
//     )
// }

// List.defaultProps ={
//     item : []
// }

// export default List

import PropTypes from 'prop-types';

function List({ items = [] }) {  // ✅ default value in destructuring
    const listItem = items.map(item =>
        <li key={item.id}> {item.name}: <b>{item.calories}</b> </li>
    );

    return (
        <ol>{listItem}</ol>
    );
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}

export default List;