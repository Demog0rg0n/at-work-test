import React, { FC, useState } from 'react'
import useInput from '../hooks/useInput'
import { updateUser, userType } from '../store/slices/usersSlice'
import Input from './Input'
import { useAppDispatch } from '../store/store'
import Popup from './Popup'

const UserPageRight: FC<userType> = ({id, name, username, city, phone, email, companyName, status}) => {

    const [popupState, setPopupState] = useState(false)

    const nameInput = useInput(name)
    const usernameInput = useInput(username)
    const cityInput = useInput(city)
    const phoneInput = useInput(phone)
    const emailInput = useInput(email)
    const companyNameInput = useInput(companyName)

    const dispatch = useAppDispatch()

    function handlerUserUpdate() {

        const user = {
            id,
            name: nameInput.value,
            username: usernameInput.value,
            city: cityInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            companyName: companyNameInput.value,
            status,
        }

        dispatch(updateUser(user))
        setPopupState(true)
    }

    return (
        <div className='user-page__right'>
            <h2 className="underlined-title">Данные профиля</h2>

            <form className="user-page__form">

                <Input title='Имя' type='text' {...nameInput} />
                <Input title='Никнейм' type='text' {...usernameInput} />
                <Input title='Почта' type='text' {...emailInput} />
                <Input title='Город' type='text' {...cityInput} />
                <Input title='Телефон' type='tel' {...phoneInput} />
                <Input title='Название компании' type='text' {...companyNameInput} />

                {
                    (!nameInput.isEmpty && !usernameInput.isEmpty && !cityInput.isEmpty && !phoneInput.isEmpty && !emailInput.isEmpty && !companyNameInput.isEmpty) &&
                    (nameInput.isChanged || usernameInput.isChanged || cityInput.isChanged || phoneInput.isChanged || emailInput.isChanged || companyNameInput.isChanged)?
                    <button type='button' onClick={() => handlerUserUpdate()} className='button'>Сохранить</button>:
                    <button className='button _disabled' type='button'>Сохранить</button>
                }

            </form>

            {
                popupState &&
                <Popup closeHandler={() => setPopupState(false)} />
            }
        </div>
    )
}

export default UserPageRight
