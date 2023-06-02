import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Checkout = () => {
  localStorage.clear()
  var cartitems = useSelector((state) => {
    return state.cart
  })
  let sum = 0
  let q = 0
  cartitems.map((m) => {
    sum = sum + m.price * m.rating
    q = q + 1 * m.rating
  })

  return (
    <div>
      <Link to='/cart'>Back</Link>
      {cartitems.map((m) => (
        <div>
          <img src={m.image} alt={m.image}></img>
          <h4>Name {m.name}</h4>
          <h4>Price {m.price}</h4>
          <h4>quantity: {m.rating} </h4>
        </div>
      ))}
      <h4>Total = {sum}</h4>
      <h4>Quantity = {q}</h4>
      <Link to='/payment'>proceed</Link>
    </div>
  )
}

export default Checkout
