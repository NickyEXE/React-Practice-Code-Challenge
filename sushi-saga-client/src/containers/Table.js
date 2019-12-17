import React, { Fragment } from 'react'

const Table = (props) => {
  const uuid = require('uuid/v4');
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={uuid()} style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.amountRemaining} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.plates)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table