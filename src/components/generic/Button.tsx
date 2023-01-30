import React from 'react'

interface ButtonProps {
  cssClasses?: string[],
  value?: string
  onClick?: (e: any) => void
}
export default function Button({onClick, cssClasses = [], value} : ButtonProps) {
  function setCSSClasses() {
    return cssClasses.join(' ')
  }


  return (
    <button className={setCSSClasses()} onClick={onClick}>{value}</button>
  )
}
