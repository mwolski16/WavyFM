import React from 'react'

interface InputProps {
  cssClasses?: string[],
  placeHolderText?: string
}

export default function Input({cssClasses = [], placeHolderText = ''} : InputProps) {

  function setCSSClasses() {
    return cssClasses.join(' ')
  }


  return (
      <input className={setCSSClasses()} placeholder={placeHolderText}></input>
  )
}
