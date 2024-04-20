
function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        inQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    return(
        <ul className="collection-list">
            <li className="collection-item">
                {name}{" "}
                <i 
                    className="material-icons basket-quantity"
                    onClick={() => decQuantity(id)}
                >
                    remove
                </i> 
                x {quantity} 
                <i 
                    class="material-icons basket-quantity"
                    onClick={() => inQuantity(id)}
                >
                    add
                </i>{" "} 
                = {price * quantity} руб.
                
                <span class="secondary-content" onClick={() => removeFromBasket(id)}>
                    <i class="material-icons basket-delete">clear</i>
                </span>
            </li>
        </ul>
    )

}

export {BasketItem};