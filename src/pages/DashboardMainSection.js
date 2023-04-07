import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import {faSpaceAwesome} from '@fortawesome/free-brands-svg-icons'
import {faDeezer} from '@fortawesome/free-brands-svg-icons'
import {faDyalog} from '@fortawesome/free-brands-svg-icons'
import {useEffect, useState} from "react";
import {supabase} from "../config/supabase";
import { Link } from 'react-router-dom';

const DashboardMainSection = () => {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {

        const getUser = async () => {
            // get a logged in user
            const {data: {user}} = await supabase.auth.getUser()

            setCurrentUser(user)
            // console.log(user)
            return user;
        }

        getUser()

    }, [])

    return (
        <div>
            { currentUser &&
                <>
                    <p className="text-center text-3xl font-bold font-black pt-5">
                        {currentUser.user_metadata.fullName ? currentUser.user_metadata.fullName : "User" }, So what exactly did you have in
                        mind?</p>
                    <p className="text-center text-xl pt-1">Begin with selecting the content type from the options below.</p>
                </>

            }

            <div className="flex justify-center items-center pt-5 ">
                <button className="rounded-full bg-slate-200 py-2 px-6 mr-2">All</button>
                <button className="rounded-full bg-slate-200 py-2 px-6 mr-2">Article & Blog</button>
                <button className="rounded-full bg-slate-200 py-2 px-6 mr-2">Website</button>
            </div>
            <div className="ml-48 pl-72 pt-8 pb-3 font-bold">
                <p>
                    Popular Category
                </p>
            </div>

            <div className="flex justify-center items-center">
                <Link to='/dashboard/create-project'>
                    <button className="flex items-center w-72 h-20 mr-11 p-4 rounded-md bg-blue-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"/>
                        </svg>
                        <div className="flex flex-col">
                            <p className="font-bold pr-28">Article &amp; Blog</p>
                            <p className="text-xs pr-1">Write your dream SEO article in a short time.</p>
                        </div>
                    </button>
                </Link>

                <button className="flex items-center w-72 h-20 mr-11 p-4 rounded-md bg-green-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6 mr-3">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"/>
                    </svg>
                    <div className="flex flex-col">
                        <p className="font-bold pr-28">Social Media</p>
                        <p className="text-xs pr-6">Write compelling detailed product</p>
                    </div>
                </button>
                <button className="flex items-center w-72 h-20 mr-6 p-4 rounded-md bg-purple-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6 mr-3">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
                    </svg>
                    <div className="flex flex-col">
                        <p className="font-bold">Keyword Research</p>
                        <p className="text-xs pr-2">Pick your exact keyword.</p>
                    </div>
                </button>
            </div>

            <div className="ml-48 pl-72 pt-8 pb-3 font-bold">
                <p>
                    All Topics
                </p>
            </div>
            {/*second row*/}
            <div className="flex justify-center items-center pb-3">
                <button
                    className="flex items-center w-72 h-20 mr-11 p-4 rounded-md bg-white border border-gray-400 shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6 mr-3">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"/>
                    </svg>
                    <div className="flex flex-col">
                        <p className="font-bold pr-32">Blog Idea</p>
                        <p className="text-xs pr-6">Blog ideas generate more website traffic.</p>
                    </div>
                </button>
                <button
                    className="flex items-center w-72 h-20 mr-11 p-4 rounded-md bg-white border border-gray-400 shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6 mr-3">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"/>
                    </svg>
                    <div className="flex flex-col">
                        <p className="font-bold pr-28">Blog Intro</p>
                        <p className="text-xs pr-16">Start writing compelling introductions. </p>
                    </div>
                </button>
                <button
                    className="flex items-center w-72 h-20 mr-6 p-4 rounded-md bg-white border border-gray-400 shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6 mr-3">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
                    </svg>
                    <div className="flex flex-col">
                        <p className="font-bold pr-20">Article Generator</p>
                        <p className="text-xs pr-24">Generate more copies with articles AI.</p>
                    </div>
                </button>
            </div>

            {/*third row*/}
            <div className="flex justify-center items-center pb-3">
                <button
                    className="flex items-center w-72 h-20 mr-11 p-4 rounded-md bg-white border border-gray-400 shadow">
                    <FontAwesomeIcon icon={faFacebook}/>
                    <div className="flex flex-col">
                        <p className="font-bold pr-28">Facebook Ads</p>
                        <p className="text-xs pr-6">Facebook ad copies that makes your ads.</p>
                    </div>
                </button>
                <button
                    className="flex items-center w-72 h-20 mr-11 p-4 rounded-md bg-white border border-gray-400 shadow">
                    <FontAwesomeIcon icon={faTwitter}/>
                    <div className="flex flex-col">
                        <p className="font-bold pr-28">Twitter Ideas</p>
                        <p className="text-xs pr-6 pl-3">Engage with your amazing followers</p>
                    </div>
                </button>
                <button
                    className="flex items-center w-72 h-20 mr-6 p-4 rounded-md bg-white border border-gray-400 shadow">
                    <FontAwesomeIcon icon={faDyalog}/>
                    <div className="flex flex-col">
                        <p className="font-bold pr-20 pl-1">Content Rephrase</p>
                        <p className="text-xs pr-4 pl-1">Rephrase your content in a different voice.</p>
                    </div>
                </button>
            </div>

            {/* 4th row*/}
            <div className="flex justify-center items-center">
                <button
                    className="flex items-center w-72 h-20 mr-11 p-4 rounded-md bg-white border border-gray-400 shadow">
                    <FontAwesomeIcon icon={faSpaceAwesome}/>
                    <div className="flex flex-col">
                        <p className="font-bold pr-8">Landing Page Headline</p>
                        <p className="text-xs pr-6">A unique and memorable perfect headline</p>
                    </div>
                </button>
                <button
                    className="flex items-center w-72 h-20 mr-11 p-4 rounded-md bg-white border border-gray-400 shadow">
                    <FontAwesomeIcon icon={faGoogle}/>
                    <div className="flex flex-col">
                        <p className="font-bold pr-8">SEO Meta description</p>
                        <p className="text-xs pr-6 pl-3">Your website for maximum visibility</p>
                    </div>
                </button>
                <button
                    className="flex items-center w-72 h-20 mr-6 p-4 rounded-md bg-white border border-gray-400 shadow">
                    <FontAwesomeIcon icon={faDeezer}/>
                    <div className="flex flex-col">
                        <p className="font-bold pr-14">Product Description</p>
                        <p className="text-xs pr-8 pl-3">Write compelling detailed product</p>
                    </div>
                </button>
            </div>
        </div>
    );
};
export default DashboardMainSection;