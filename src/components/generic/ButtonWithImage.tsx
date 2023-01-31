import React from 'react'
interface ButtonProps {
  cssClasses?: string[],
  value?: string,
  onClick?: (e: any) => void,
  svgName?: string
  imgName?: string
  imgSize?: string
}
export default function ButtonWithImage({onClick, cssClasses = [], value, svgName, imgName, imgSize} : ButtonProps) {
  function setCSSClasses() {
    return cssClasses.join(' ')
  }


  return (
    
    <button className={setCSSClasses() + " buttonWithImage"} onClick={onClick}>
      <img className="svgImage25px" style={{width: imgSize, height:imgSize}} src={svgName ? "src/components/icons/svg/"+svgName : "img/"+imgName } alt={svgName} />
      {value}
    </button>
  )
}
