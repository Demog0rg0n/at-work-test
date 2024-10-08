import React from 'react'
import { Link } from 'react-router-dom'

const FavoriteButton = () => {
    return (
        <Link to={"/favorite"} className='header__favorite'>
            <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <clipPath id="clip9_6064">
                        <rect id="ic:baseline-favorite-border" width="15.000000" height="15.000000" transform="translate(4.500000 4.500000)" fill="white" fillOpacity="0"/>
                    </clipPath>
                </defs>
                <g clipPath="url(#clip9_6064)">
                    <path id="Vector" d="M11.09 6.69C10.5 6.33 9.82 6.12 9.12 6.12C7.14 6.12 5.59 7.67 5.59 9.64C5.59 12.06 7.77 14.03 11.07 17.03L12 17.87L12.92 17.02C16.22 14.03 18.4 12.06 18.4 9.64C18.4 7.67 16.85 6.12 14.88 6.12C14.17 6.12 13.49 6.33 12.9 6.69C12.56 6.9 12.25 7.16 12 7.46C11.74 7.16 11.43 6.9 11.09 6.69ZM11.99 16.25L12.12 16.13L12.12 16.13L12.12 16.13L12.12 16.13L12.13 16.13Q13.69 14.71 14.34 14.08Q15.37 13.09 15.97 12.36Q16.61 11.57 16.91 10.91Q17.2 10.26 17.2 9.64Q17.2 9.28 17.1 8.95Q17.06 8.84 17.01 8.72Q16.92 8.5 16.79 8.31Q16.67 8.14 16.53 7.99Q16.38 7.84 16.21 7.73Q16.01 7.59 15.8 7.5Q15.68 7.46 15.56 7.42Q15.23 7.32 14.88 7.32Q14.72 7.32 14.56 7.34Q14.17 7.39 13.79 7.57Q13.43 7.74 13.15 7.99Q13.02 8.1 12.91 8.24L12 9.31L11.08 8.24Q10.97 8.1 10.84 7.99Q10.56 7.74 10.2 7.57Q9.82 7.39 9.43 7.34Q9.27 7.32 9.12 7.32Q8.76 7.32 8.43 7.42Q8.31 7.46 8.19 7.5Q7.98 7.59 7.78 7.73Q7.61 7.84 7.46 7.99Q7.32 8.14 7.2 8.31Q7.07 8.5 6.98 8.72Q6.93 8.84 6.89 8.95Q6.79 9.28 6.79 9.64Q6.79 10.26 7.08 10.9Q7.38 11.57 8.02 12.35Q8.61 13.08 9.64 14.07Q10.29 14.7 11.85 16.12L11.86 16.12L11.86 16.12L11.86 16.13L11.86 16.13L11.86 16.13L11.86 16.13L11.87 16.13L11.87 16.13L11.87 16.14L11.87 16.14L11.87 16.14L11.87 16.14L11.99 16.25Z" fill="#161616" fillOpacity="1.000000" fillRule="evenodd"/>
                </g>
            </svg>
        </Link>
    )
}

export default FavoriteButton
