import React from 'react'

const Buttons = ({children,onValues}) => {
  return (
    <>
    <button onClick={onValues}>{children}</button>
    </>
  )
}

export default Buttons