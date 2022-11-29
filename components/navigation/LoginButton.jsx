import Link from 'next/link'
import {LoginIcon} from '../icons';
function LoginButton({className, ...props}) {
    return ( 
        <Link href="signin">
        <LoginIcon/>
    </Link>
        

     );
}

export default LoginButton;