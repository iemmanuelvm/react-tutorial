import { user2 } from './variables/Object'

export const Profile = () => {
    return (
        <>
            <h1>{user2.name}</h1>
            <img 
                className="avatar"
                src={user2.imageUrl} 
                alt={'Foto de ' + user2.name}
                style={{
                    width: user2.imageSize,
                    height: user2.imageSize
                }}
            />
        </>
    )
}
