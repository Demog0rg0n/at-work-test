import { FC, useEffect } from 'react'
import Header from './components/Header'
import Router from './Router'

import "./app.scss"

import { useAppDispatch } from './store/store'
import { fetchUsers } from './store/slices/usersSlice'

const App: FC = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <>
            <Header />
            <Router />
        </>
    )
}

export default App
