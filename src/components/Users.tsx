import { FC } from "react"
import { useAppSelector } from "../store/store"
import User from "./User"

type usersProps = {
    title: string,
    status: "active" | "hidden" | "archive"
}

const Users: FC<usersProps> = ({title, status}) => {

    const {users} = useAppSelector(state => state.usersSlice)

    const selectedUsers = users.filter(user => user.status == status)

    return (
        selectedUsers.length?
        <div>
            <h2 className="underlined-title">{title}</h2>
            <div className="users">
                {
                    selectedUsers.map(user => (
                        <User key={user.id} {...user}/>
                    ))
                }
            </div>
        </div>:
        <div></div>
    )
}

export default Users
