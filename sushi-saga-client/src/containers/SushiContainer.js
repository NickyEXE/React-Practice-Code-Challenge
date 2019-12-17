import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const isSushiEaten = (id) => props.eatenSushiIds.includes(id)
  const uuid = require("uuid/v4")
  
  const sushis = props.sushis.map(sushi => <Sushi key={sushi.id} eatSushi={props.eatSushi} eaten={isSushiEaten(sushi.id)} {...sushi}/>)
  return (
    <Fragment>
      <div className="belt">
        {sushis}
        <MoreButton onClick={props.moreClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer