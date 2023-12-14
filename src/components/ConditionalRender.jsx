import { AdminPanel } from './admin/AdminPanel';
import { LoginForm } from './login/LoginForm';
import { isLoggedIn } from './variables/Object';

// let content;

// if(isLoggedIn) {
//     content = <AdminPanel/>
// } else {
//     content = <LoginForm/>
// }



export const ConditionalRender = () => {
    return (
        <>
            {
                isLoggedIn ? (
                    <AdminPanel/>
                ) : (
                    <LoginForm/>
                )
            }
        </>
    )
}
