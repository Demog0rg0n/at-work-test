import React from 'react'

const BackArrow = () => {
    return (
        <>
        <svg className='back-arrow_desktop' width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <clipPath id="clip54_588">
                    <rect id="arrowLeft" width="17.000000" height="17.000000" transform="translate(0.500000 3.500000)" fill="white" fillOpacity="0"/>
                </clipPath>
                <clipPath id="clip54_591">
                    <rect id="Solid/Interface/Backarrow" rx="2.500000" width="23.000000" height="23.000000" transform="translate(0.500000 0.500000)" fill="white" fillOpacity="0"/>
                </clipPath>
            </defs>
            <g clipPath="url(#clip54_591)">
                <g clipPath="url(#clip54_588)">
                    <path id="Vector" d="M11.25 12L0.75 12" stroke="#161616" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinejoin="round" strokeLinecap="round"/>
                    <path id="Vector" d="M6 17.25L0.75 12L6 6.75" stroke="#161616" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinejoin="round" strokeLinecap="round"/>
                </g>
            </g>
        </svg>
        <svg  className='back-arrow_mobile' width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs/>
            <path id="Icon" d="M13.78 16.53C13.48 16.82 13.01 16.82 12.71 16.53L8.71 12.53C8.42 12.23 8.42 11.76 8.71 11.46L12.71 7.46C13.01 7.17 13.48 7.17 13.78 7.46C14.07 7.76 14.07 8.23 13.78 8.53L10.31 12L13.78 15.46C14.07 15.76 14.07 16.23 13.78 16.53Z" fill="#595959" fillOpacity="1.000000" fillRule="evenodd"/>
        </svg>
        </>
    )
}

export default BackArrow
