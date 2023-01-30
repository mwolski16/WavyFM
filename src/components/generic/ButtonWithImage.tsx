import React from 'react'
interface ButtonProps {
  cssClasses?: string[],
  value?: string,
  onClick?: (e: any) => void,
  svgName?: string
}
export default function ButtonWithImage({onClick, cssClasses = [], value, svgName} : ButtonProps) {
  function setCSSClasses() {
    return cssClasses.join(' ')
  }


  return (
    <button className={setCSSClasses() + " buttonWithImage"} onClick={onClick}>
      <img className="svgImage25px" src={"src/components/icons/svg/"+svgName} alt={svgName} />
      {value}
    </button>
  )
}
