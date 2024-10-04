import { FC } from 'react'

import "./main.scss"

import Users from '../../components/Users'
import { useAppSelector } from '../../store/store'
import UsersSkeleton from '../../components/UsersSkeleton'

const Main: FC = () => {

    const {isPending} = useAppSelector(state => state.usersSlice)

    return (
        <section className='main'>
            <div className="container">
                {
                    isPending?
                    <UsersSkeleton />:
                    <>
                        <Users title='Активные' status='active'/>
                        <Users title='В архиве' status='archive'/>
                    </>
                }
            </div>
        </section>
    )
}

export default Main
