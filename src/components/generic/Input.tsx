import React from 'react'

interface InputProps {
  cssClasses?: string[],
  placeHolderText?: string
  onChangeFunction?: (e: any) => void
}

export default function Input({onChangeFunction, cssClasses = [], placeHolderText = ''} : InputProps) {

  function setCSSClasses() {
    return cssClasses.join(' ')
  }


  return (
      <input className={setCSSClasses()} placeholder={placeHolderText} onChange={onChangeFunction}></input>
  )
}
