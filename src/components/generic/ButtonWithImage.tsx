import React from 'react'
interface ButtonProps {
  cssClasses?: string[],
  value?: string,
  onClick?: (e: any) => void,
  svgName?: string
  imgName?: string
}
export default function ButtonWithImage({onClick, cssClasses = [], value, svgName, imgName} : ButtonProps) {
  function setCSSClasses() {
    return cssClasses.join(' ')
  }


  return (
    
    <button className={setCSSClasses() + " buttonWithImage"} onClick={onClick}>
      <img className="svgImage25px" src={svgName ? "src/components/icons/svg/"+svgName : "img/"+imgName } alt={svgName} />
      {value}
    </button>
  )
}
