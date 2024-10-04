import React, { useState } from 'react'

const UserPageLeft = () => {

    const [tabsState, setTabsState] = useState("Данные профиля")

    return (
        <div className='user-page__left'>
            <img src="../../images/photo.png" alt="Фото пользователя" className="user__photo" />

            <ul className="user-page__tabs">
                <li onClick={() => setTabsState("Данные профиля")} className={tabsState == "Данные профиля"? "active": ""}>Данные профиля</li>
                <li onClick={() => setTabsState("Рабочее пространство")} className={tabsState == "Рабочее пространство"? "active": ""}>Рабочее пространство</li>
                <li onClick={() => setTabsState("Приватность")} className={tabsState == "Приватность"? "active": ""}>Приватность</li>
                <li onClick={() => setTabsState("Безопасность")} className={tabsState == "Безопасность"? "active": ""}>Безопасность</li>
            </ul>
        </div>
    )
}

export default UserPageLeft
