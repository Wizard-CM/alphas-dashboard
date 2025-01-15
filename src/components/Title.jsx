import React from 'react'

const Title = ({className,title}) => {
  return (
    <h3 className={`${className} font-semibold text-2xl font-mono`}>{title}</h3>
  )
}

export default Title