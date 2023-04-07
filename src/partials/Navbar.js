import {supabase} from "../config/supabase";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const Navbar = () => {

    const navigate = useNavigate();
    // const [loggedInUser, setLoggedInUser] = useState(null)

    const handleLogout = async () => {

        const {error} = await supabase.auth.signOut();
        if (!error) navigate('/login')

    }

    // useEffect(() => {
    //
    //     const getUser = async () => {
    //         // get a logged in user
    //         const {data: {user}} = await supabase.auth.getUser()
    //
    //         setLoggedInUser(user)
    //         // console.log(user)
    //         return user;
    //     }
    //
    //     getUser()
    //
    // }, [])
    //
    // console.log(loggedInUser.user_metadata)

    return (
        <div className="navbar">
            <div className="flex-1 pl-3">
                <Link to={'/dashboard/home'}
                      className="btn btn-ghost normal-case text-2xl text-purple-800 font-bold">TexoAi</Link>
            </div>
            <div className="flex-1 pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-6 h-6 pr-1">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
                </svg>
                <Link to={'/dashboard/projects'} className=" normal-case  text-xl text-gray-400 font-normal">All
                    Projects</Link>
            </div>
            <div className="flex-1 pr-96">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-6 h-6 pr-1">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
                </svg>
                <a className=" normal-case  text-xl text-gray-400 font-normal"> Learn</a>
            </div>

            <div className="flex-none gap-4">
                <div className="flex-1">
                    <a className="btn bg-orange-200 normal-case text-xl text-orange-700 font-bold">Upgrade Plan</a>
                    <a className="btn btn-ghost normal-case text-1xl text-gray-400 font-normal">20/left this week</a>
                    {
                        // loggedInUser.user_metadata?.fullName
                            // ? <Link to={'/dashboard/home'} className=" normal-case text-xl font-normal pl-3">{loggedInUser.user_metadata.fullName}</Link>
                            <Link to={'/dashboard/home'} className=" normal-case text-xl font-normal pl-3">Random User</Link>
                    }
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                src="https://api.dicebear.com/6.x/open-peeps/svg?flip=false"/>
                        </div>
                    </label>
                    <ul tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;