import { FC } from 'react'

import { Route, Routes } from 'react-router-dom'

import Main from './pages/main/Main'
import User from './pages/user/UserPage'

const Router:FC = () => {

    return (
        <main>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/user/:id' element={<User />}/>
            </Routes>
        </main>
    )
}

export default Router