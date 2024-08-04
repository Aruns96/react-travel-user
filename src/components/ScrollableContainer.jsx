import React from 'react'

const ScrollableContainer = ({children}) => {
  return (
    <div className="overflow-y-auto h-screen">
      {children}
    </div>
  )
}

export default ScrollableContainer
