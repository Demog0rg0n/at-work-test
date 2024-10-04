import { FC } from 'react'

import { useParams } from 'react-router'
import { useAppSelector } from '../../store/store'
import { Link } from 'react-router-dom'

import UserPageLeft from '../../components/UserPageLeft'
import BackArrow from '../../components/BackArrow'

import "./userPage.scss"
import UserPageRight from '../../components/UserPageRight'

const UserPage: FC = () => {

    const {id} = useParams()

    const user = useAppSelector(state => state.usersSlice.users).find(user => user.id == Number(id))

    return (
        user?
        <section className='user-page'>
            <div className="container">
                <Link to={"/"} className="page-navigation">
                    <BackArrow />
                    <span>Назад</span>
                </Link>
                <div className="user-page__content">
                    <UserPageLeft />
                    <UserPageRight {...user} />
                </div>
            </div>
        </section>:
        <></>
    )
}

export default UserPage
