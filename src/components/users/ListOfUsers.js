import React from 'react'
import Card from '../UI/Card'

const ListOfUsers = (props) => {

    return (
        <Card className="users">
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>{user.name} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    )
}

export default ListOfUsers