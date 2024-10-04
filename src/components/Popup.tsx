import React, { FC } from 'react'

type popupProps = {
    closeHandler: () => void
}

const Popup: FC<popupProps> = ({closeHandler}) => {

    setTimeout(() => {
        closeHandler()
    }, 4000)

    return (
        <div className='popup-wrapper'>
            <div className="popup">
            <svg width="84.000000" height="84.000000" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs/>
                <path id="Icon" d="M25.6 13.19C36.41 11.98 47.58 11.98 58.39 13.19C62.44 13.64 66.01 15.83 68.26 19.02L40.25 47.03L31.6 38.39C30.58 37.36 28.91 37.36 27.89 38.39C26.86 39.41 26.86 41.08 27.89 42.1L38.39 52.6C39.41 53.63 41.08 53.63 42.1 52.6L70.51 24.2C70.58 24.58 70.65 24.97 70.69 25.36C71.99 36.41 71.99 47.58 70.69 58.63C69.94 65.05 64.78 70.09 58.39 70.8C47.58 72.01 36.41 72.01 25.6 70.8C19.21 70.09 14.05 65.05 13.3 58.63C12 47.58 12 36.41 13.3 25.36C14.05 18.94 19.21 13.9 25.6 13.19Z" fill="#C6F4C6" fillOpacity="1.000000" fillRule="nonzero"/>
            </svg>

            <span>Изменения сохранены!</span>

            <svg onClick={closeHandler} className='popup__cross' width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs/>
                <path id="Union" d="M18.74 10.49C19.08 10.15 19.08 9.59 18.74 9.25C18.4 8.91 17.84 8.91 17.5 9.25L14 12.76L10.49 9.25C10.15 8.91 9.59 8.91 9.25 9.25C8.91 9.59 8.91 10.15 9.25 10.49L12.76 14L9.25 17.5C8.91 17.84 8.91 18.4 9.25 18.74C9.59 19.08 10.15 19.08 10.49 18.74L14 15.23L17.5 18.74C17.84 19.08 18.4 19.08 18.74 18.74C19.08 18.4 19.08 17.84 18.74 17.5L15.23 14L18.74 10.49Z" fill="#595959" fillOpacity="1.000000" fillRule="evenodd"/>
            </svg>
            </div>
        </div>
    )
}

export default Popup
