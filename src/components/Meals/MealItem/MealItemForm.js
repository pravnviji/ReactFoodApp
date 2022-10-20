import { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()
    const submitHandler = event => {
        event.preventDefault()
        console.log(amountInputRef.current.value)
        const enteredAmount = +amountInputRef.current.value
        if (enteredAmount < 1 || enteredAmount > 5) {
            setAmountIsValid(false)
            return
        }

    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount" input={{
            id: 'amount_' + props.id,
            ref: amountInputRef,
            type: 'number',
            defaultValue: '1'
        }} />
        <button >+ Add</button>
        {!amountIsValid && <p>Please entered valid amount</p>}
    </form>

}

export default MealItemForm