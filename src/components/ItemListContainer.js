import React from 'react'

const Card = (props) => {
    return (
        <div className="column">
            <div class="card">
            <h3>Item N°{props.n}</h3>
            <p>Mi valor es ${props.price}</p>
            </div>
        </div>
    )
}


const ItemListContainer = () => {
    return (
        <div className='ItemList'>
            <Card n='1' price='100' />
            <Card n='2' price='200' />
            <Card n='3' price='300' />
            <Card n='4' price='400' />
        </div>
    )
}

export default ItemListContainer
