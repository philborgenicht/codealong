import React from 'react'



const CartItem = (props) => {
  return(


    <div class="collection-item list-group-item border">
      <div class="row">
            <div className="col-md-8">{props.name}</div>
            <div className="col-md-2">{"$"}{props.price}</div>
            <div className="col-md-2">{props.quantity}</div>
      </div>
    </div>








  )
}













export default CartItem
