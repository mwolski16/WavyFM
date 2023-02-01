import React from 'react'

interface InputProps {
    cssClasses?: string[],
    text?: string,
    type?: string
}

export default function Alert({ cssClasses = [], text = '', type} : InputProps) {

    function setCSSClasses() {
        return cssClasses.join(' ')
    }


    return (
        <div className={setCSSClasses()} datatype={type}>{text}</div>
    )
}
