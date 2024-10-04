import React from 'react'
import Logo from './Logo'
import NotificationButton from './NotificationButton'
import FavoriteButton from './FavoriteButton'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__content">
                <Logo />

                    <div className="header__buttons">
                        <NotificationButton />
                        <FavoriteButton />

                        <Link className='header__user' to={"/"}>
                            <img src="../../images/photo.png" alt="" />
                            <span>Ivan1234</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header