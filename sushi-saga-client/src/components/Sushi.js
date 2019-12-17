import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {id, name, img_url, price, eaten, eatSushi} = props
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eatSushi(id, price)}>
        { 
          eaten ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi