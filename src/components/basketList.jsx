import { BasketItem } from "./basketItem";


function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        inQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="basket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        removeFromBasket={removeFromBasket}
                        inQuantity={inQuantity}
                        decQuantity={decQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active price">Общая стоимость заказа: {totalPrice} руб.</li>
            <i class="material-icons basket-clear" onClick={handleBasketShow}>clear</i>
        </ul>
    );
}

export { BasketList };