import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListItems(props){
    const items = props.items;
    //console.log(props.items)

    const listItems = items.map(item => {
        return (
            <div className="list" key={item.key} style={{backgroundColor: item.color}}>
                <p>
                    {item.cName}
                    <span>
                        <FontAwesomeIcon className="faicons" onClick={() => {
                            props.deleteItem(item.key)
                        }} icon="trash" />
                    </span>
                    <br/>
                    <br/>
                    {item.jTitle}
                </p>
            </div>
        )
    })
    
    return (
        <div>
            {listItems}
      </div>
    )
  }

  export default ListItems;