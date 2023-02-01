import React from 'react'

interface InputProps {
  cssClasses?: string[],
  placeHolderText?: string
  onChangeFunction?: (e: any) => void
  type?: string
}

export default function Input({onChangeFunction, cssClasses = [], placeHolderText = '', type} : InputProps) {

  function setCSSClasses() {
    return cssClasses.join(' ')
  }


  return (
      <input className={setCSSClasses()} placeholder={placeHolderText} onChange={onChangeFunction} type={type}></input>
  )
}
