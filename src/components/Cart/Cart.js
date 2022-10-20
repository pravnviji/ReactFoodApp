
import Modal from '../UI/Modal'
import classes from "./Card.module.css"

const Cart = props => {

    const cartItems = <ul className={classes['cart-items']}>{[{ id: '1', name: 'Sushi', amount: 2, price: 8.00 }].map((items) => <li key={items.id}>Name : {items.name} </li>)}</ul>

    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount </span>
            <span>14.00</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Order</button>
            <button className={classes.actions} onClick={props.onClose}>Close</button>
        </div>
    </Modal>
}

export default Cart