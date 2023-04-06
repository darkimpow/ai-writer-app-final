import { useRef } from 'react';
import {supabase} from 'src/config/supabaseClient';
import {useNavigate} from "react-router-dom";



const SignUpAuth = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const signUpEmailRef = useRef();
    const signUpPasswordRef = useRef();
    const navigate = useNavigate();

    const handleSignUpAuth = (e) => {
        e.preventDefault();

        console.log('!!!');
        signUpUser().then((data) => {
            if (data.error) navigate('/dashboard/signup');
            navigate('dashboard/signup');
            console.log('am i logged in or out?');
        });
        signUpEmailPassword().then((data) => {
            if (data.error) navigate('/dashboard/signup');
            navigate('/dashboard/signup');
            console.log('password');
        })

    };
    const signUpUser = async () => {
        // console.log('all good')

        const response = await supabase.auth.signInWithPassword({
            email: signUpEmailRef.current.value,
            password: signUpPasswordRef.current.value,
        });

        return { data: response.data, error: response.error };
    };

     const signUpEmailPassword = async () => {
         console.log('almost done');
        const { data, error } = await supabase.auth.signInWithPassword({
            email: 'example@email.com',
            password: 'example-password',
        })
         return {data, error}

    };

            return (
                <div>
                    <form onSubmit={handleSignUpAuth}>
                        <input type="email" ref={emailRef} placeholder="Enter Email"/><br/><br/>
                        <input type="password" ref={passwordRef} placeholder="Enter Password"/><br/><br/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )
}

export default SignUpAuth;