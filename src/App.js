import { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CardProvider from './store/CardProvider'

function App() {

  const [cartIsShown, setCartIsShow] = useState(false)

  const showChartHandler = () => {
    setCartIsShow(true)
  }

  const hideChartHandler = () => {
    setCartIsShow(false)
  }
  return (
    <CardProvider>
      {cartIsShown && <Cart onClose={hideChartHandler} />}
      <Header onShowCart={showChartHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  )
}

export default App
