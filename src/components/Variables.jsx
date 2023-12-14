import { user } from './variables/Object'

export const Variables = () => {
    return (
        <>
            <h1>{user.first_name}</h1>
            <h2>{user.last_name}</h2>
            <h3>{user.email}</h3>
        </>
    )
}
