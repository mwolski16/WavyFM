import React from 'react'

interface ButtonProps {
  cssClasses?: string[],
  text?: string
  onClick?: (e: any) => void
  type: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
}
export default function Button({onClick, cssClasses = [], text, type, isDisabled} : ButtonProps) {
  function setCSSClasses() {
    return cssClasses.join(' ')
  }


  return (
    <button type={type} className={setCSSClasses()} onClick={onClick} disabled={isDisabled ? true : false}>{text}</button>
  )
}
