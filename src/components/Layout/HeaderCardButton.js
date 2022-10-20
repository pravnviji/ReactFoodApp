import { useContext } from 'react'
import CardContext from '../../store/card-context'
import CartIcon from '../Cart/CardIcon'
import classes from "./HeaderCardButton.module.css"

const HeaderCardButton = props => {

    const cartCtx = useContext(CardContext)

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>


}

export default HeaderCardButton