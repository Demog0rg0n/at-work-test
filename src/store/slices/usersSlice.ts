import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type initialStateType = {
    users: userType[],
    isPending: boolean,
}

export type userType = {
    id: number,
    name: string,
    username: string,
    city: string,
    companyName: string,
    phone: string,
    email: string
    status: "active" | "archive" | "hidden"
}

type resUser = {
    id: number,
    name: string,
    username: string,
    address: {
        city: string
    },
    company: {
        name: string
    },
    email: string,
    phone: string
}

const initialState: initialStateType = {
    users: [],
    isPending: true
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const res = (await fetch("https://jsonplaceholder.typicode.com/users"))

        let users = await res.json()

        return users.map((user: resUser) => {
            return {
                id: user.id,
                name: user.name,
                username: user.username,
                city: user.address.city,
                companyName: user.company.name,
                email: user.email,
                phone: user.phone,
                status: "active",
            }
        })
        
    },
)


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        hideUser(state, {payload}) {
            state.users.find(user => {
                if(user.id == payload) {
                    user.status = "hidden"
                }
            })
        },
        archiveUser(state, {payload}) {
            state.users.find(user => {
                if(user.id == payload) {
                    user.status = "archive"
                }
            })
        },
        activeUser(state, {payload}) {
            state.users.find(user => {
                if(user.id == payload) {
                    user.status = "active"
                }
            })
        },
        updateUser(state, {payload}) {
            state.users[state.users.findIndex(user => user.id == payload.id)] = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, {payload}) => {
            state.isPending = false
            state.users = payload
        })
        builder.addCase(fetchUsers.pending, (state, {payload}) => {
            state.isPending = true
        })
    }
})

export const { hideUser, archiveUser, activeUser, updateUser } = usersSlice.actions
export default usersSlice.reducer