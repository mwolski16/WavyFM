import React from 'react'

interface SelectProps {
  cssClasses?: string[],
  onChangeFunction?: (e: any) => void
  name?: string

}

export default function Select({name, onChangeFunction, cssClasses = []} : SelectProps) {

  function setCSSClasses() {
    return cssClasses.join(' ')
  }

  return (
  <select id="admin_select" name="admin_select" className={setCSSClasses()} onChange={onChangeFunction} onClick={onChangeFunction}>
    <option value="" selected={true} disabled={true} hidden={true}>Choose number</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
  )
}
