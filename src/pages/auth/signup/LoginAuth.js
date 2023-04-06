import {useState} from "react";
import {supabase} from './supabaseClient';

const Login = async (email, password) => {

    const { data, error } = await supabase.auth.signInWithPassword({
        email: 'example@email.com',
        password: 'example-password',
    }
    return (

    )


    // const [Lmsg, setLMsg] = useState('');
    // if(error){
    //     setLMsg(error.message)
    // }else{
    //     setLMsg('Login successful')
    //     setSession(data.session)
    //     console.log(data.session)
    //
    // }
}