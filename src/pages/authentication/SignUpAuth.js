import { useRef } from 'react';
import {supabase} from './supabaseClient';


const SignUpAuth = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignUpAuth = (e) => {
        e.preventDefault();
    }
    const signUpEmailPassword =  () => {
    // const signUpEmailPassword = async = () => {
        supabase.auth.signUpWithPassword = async function () {
            let {data, error} = await supabase.auth.signUpWithPassword({
                email: 'example@email.com',
                password: 'example-password'
            });
            return {data, error}
        };
        // let { data, error } = await supabase.auth.signUpWithPassword({
        //     email: 'example@email.com',
        //     password: 'example-password'
        // });

        // return { data, error }
        // }

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
}

export default SignUpAuth;