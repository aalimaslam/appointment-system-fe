import React from 'react'
import { useGetUsersQuery } from '../services/api'

// Define the expected shape of a user
type User = {
  id: number
  name: string
  email: string
}

const Users: React.FC = () => {
  const {
    data,
    error,
    isLoading,
  } = useGetUsersQuery(null) as {
    data: User[] | undefined
    error: unknown
    isLoading: boolean
  }

  if (isLoading) return <p>Loading users...</p>
  if (error) return <p>Error loading users 😢</p>

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
