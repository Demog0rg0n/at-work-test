import React, { FC, useRef, useState } from 'react'
import { useAppDispatch } from '../store/store'
import { activeUser, archiveUser, hideUser } from '../store/slices/usersSlice'
import { Link } from 'react-router-dom'
import { useClickOutside } from '../hooks/useClickOutside'

type dropdownProps = {
    status: "active" | "archive" | "hidden", 
    id: number,
}

const Dropdown: FC<dropdownProps> = ({status, id}) => {

    const [dropdownState, setDropdownState] = useState(false)
    const dispatch = useAppDispatch()

    const ref = useRef(null)
    useClickOutside(ref, () => setDropdownState(false))


    return (
        <div className='dropdown' ref={ref} onClick={(e) => console.log()}>
            <svg onClick={(e) => setDropdownState(prev => !prev)} className='dropdown__button' width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <clipPath id="clip11_6806">
                        <rect id="Solid" width="23.000000" height="23.000000" transform="translate(0.500000 0.500000)" fill="white" fillOpacity="0"/>
                    </clipPath>
                </defs>
                <g clipPath="url(#clip11_6806)">
                    <path id="Vector" d="M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.89 13.1 16 12 16C10.9 16 10 16.89 10 18ZM10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.89 13.1 4 12 4C10.9 4 10 4.89 10 6ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.89 13.1 10 12 10C10.9 10 10 10.89 10 12Z" fill="#161616" fillOpacity="1.000000" fillRule="nonzero"/>
                </g>
            </svg>
            {
                dropdownState &&
                <div className="dropdown__popup">
                    <ul>
                        {
                            status == "active"?
                            <>
                                <Link to={"/user/" + id}><li>Редактировать</li></Link>

                                <li onClick={() => {
                                    dispatch(archiveUser(id))
                                    setDropdownState(false)
                                }}>Архивировать</li>

                                <li onClick={() => {
                                    dispatch(hideUser(id))
                                    setDropdownState(false)
                                }}>Скрыть</li>
                            </>:
                            <li onClick={() => {
                                dispatch(activeUser(id))
                                setDropdownState(false)
                            }} >Активировать</li>
                        }
                    </ul>
                </div>

            }
        </div>
    )
}

export default Dropdown
