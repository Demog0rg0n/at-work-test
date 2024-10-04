import React, { ChangeEvent, FC } from 'react'

type inputProps = {
    type: "search" | "text" | "password" | "tel" | "file",
    title: string,
    value: string,
    isEmpty: boolean
    extraClass?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onBlur?: () => void
}

const Input: FC<inputProps> = ({type, title, value, extraClass, onChange, onBlur, isEmpty}) => {
    return (
        <div className='input-wrapper'>
            <span className='input-title'>{title}</span>
            <input 
                autoComplete="off"
                type={type} 
                className={extraClass? 'input ' + extraClass: "input"} 
                value={value}
                onChange={(e) => onChange(e)}
                onBlur={(e) => onBlur && onBlur()}
            />
            {
                isEmpty &&
                <span className='input-error'>Поле не должно быть пустым</span>
            }
        </div>
    )
}

export default Input
