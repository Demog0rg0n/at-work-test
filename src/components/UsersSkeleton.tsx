import React from 'react'

const UsersSkeleton = () => {
    return (
        <div>
            <h2 className="underlined-title">Активные</h2>
            <div className='users'>
                {
                    [...new Array(9)].map(() => (
                        <div className='user _skeleton'></div>
                    ))
                }
            </div>
        </div>
    )
}

export default UsersSkeleton
