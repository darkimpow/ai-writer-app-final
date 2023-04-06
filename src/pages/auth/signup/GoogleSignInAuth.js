import {useState} from "react";
import {supabase} from './supabaseClient';

const Login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'https://example.com/welcome'
        }
    }
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

