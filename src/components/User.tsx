import { FC } from 'react'

import { userType } from '../store/slices/usersSlice'

import Dropdown from './Dropdown'

const User: FC<userType> = ({username, city, companyName, status, id}) => {

    return (
        <div className={'user ' + status}>
            <img src="../../images/photo.png" alt="Фото пользователя" className="user__photo" />

            <div className="user__content">
                <div className='user__top'>
                    <div className="user__header">
                        <h3>{username}</h3>
                        <Dropdown id={id} status={status} />
                    </div>
                    <div className='user__company'>{companyName}</div>
                </div>
                <span className='user__city'>{city}</span>
            </div>
        </div>
    )
}

export default User
