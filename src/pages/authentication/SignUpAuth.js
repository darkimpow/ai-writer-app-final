import { useState } from 'react';
import {supabase} from './supabaseClient';

const SignUpAuth = async (email, password) => {

    const { data, error } = await supabase.auth.signUp({
        email: 'example@email.com',
        password: 'example-password',
    }
    )

    // const [Smsg, setSMsg] = useState('');
    //
    // if(error){
    //     setSMsg()(error.message)
    // }else{
    //     setSMsg()('Signup is successful')
    //     }
}