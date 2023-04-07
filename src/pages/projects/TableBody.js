import React, { useState, useEffect } from 'react';
import TableHeader from "./TableHeader";
import {supabase} from "../../config/supabase";

export const TableBody = () => {
    const [projects, setProjects] = useState([]);

    // auth
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        getProjects();
    }, []);

    useEffect(() => {
        const getUser = async () => {
            // get a logged in user
            // const { data: user, error } = await supabase.auth.user();
            const { data: { user }, error } = await supabase.auth.getUser();

            if (error) {
                console.error(error.message);
                return;
            }

            setCurrentUser(user);
            // console.log(user);
            return user;

        };

        getUser();

        // subscribe to auth state changes
        // const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
        //     setCurrentUser(session?.user ?? null);
        // });
        //
        // // cleanup function to unsubscribe from the auth listener
        // return () => {
        //     authListener.unsubscribe();
        // };
    }, []);

    // console.log(currentUser)
    // console.log(currentUser)
    // console.log(currentUser?.id)
    /**
     *
     * @returns {Promise<void>}
     *
     * SELECT * FROM projects WHERE user_id = '6130c052-bdfe-41d3-b6da-c847d7e10406'
     *
     * SELECT id, email FROM auth.users where id = '6130c052-bdfe-41d3-b6da-c847d7e10406'
     */

    const getProjects = async () => {
        if (!currentUser) {
            // user is not logged in, do nothing
            return;
        }
        console.log(currentUser)
        const { data: projects, error } = await supabase
            .from('projects')
            .select('*')
            // user_id, eq, currentUser
            .filter('user_id', 'eq', currentUser?.id)
            .range(0, 19);

        if (error) {
            console.error(error);
            return;
        }
        console.log(projects)
        setProjects(projects);
    };
    function rand(){
        return Math.floor(Math.random() * 15)+1
    }




    return (
        <div className={'bg-[#faf9f9] w-full'}>
            <div className={'invisible'}>0</div>
            {/*title - search - filter*/}
            <TableHeader />

            {/*table*/}
            <div className="overflow-x-auto w-10/12 mx-auto">
                <table className="table w-full z-0 mb-3">
                    {/* head */}
                    <thead>
                    <tr>
                        <th className={'bg-[#faf4fe]'}>
                            <label>
                                <input type="checkbox" className="checkbox checkbox-sm rounded" />
                            </label>
                        </th>
                        <th className={'bg-[#faf4fe] text-[#9e28f3] normal-case text-base font-normal'}>Title</th>
                        <th className={'bg-[#faf4fe] text-[#9e28f3] normal-case text-base font-normal'}>Type</th>
                        <th className={'bg-[#faf4fe] text-[#9e28f3] normal-case text-base font-normal'}>Generation</th>
                        <th className={'bg-[#faf4fe] text-[#9e28f3] normal-case text-base font-normal'}>Modified</th>
                        <th className={'flex justify-center items-center bg-[#faf4fe]'}><div className={'text-base invisible'}>|</div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                            </svg>
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    {/*row 1*/}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox checkbox-sm rounded" />
                            </label>
                        </th>
                        <td>Difference Between UX and UI Design</td>
                        <td className={'text-gray-400'}>Product Descriptions</td>
                        <td>10</td>
                        <td className={'text-gray-400'}>
                            <div>
                                February 28, 2022
                            </div>
                            <div>
                                10:25 AM
                            </div>
                        </td>
                        <td className={'flex flex-row items-center justify-center'}>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-blue-100 flex items-center justify-center rounded-sm mx-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#216bfe" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-red-100 flex items-center justify-center rounded-sm'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fe5771" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox checkbox-sm rounded" />
                            </label>
                        </th>
                        <td>UX/UI Design</td>
                        <td className={'text-gray-400'}>Blog Ideas</td>
                        <td>05</td>
                        <td className={'text-gray-400'}>
                            <div>
                                February 25, 2022
                            </div>
                            <div>
                                10:25 AM
                            </div>
                        </td>
                        <td className={'flex flex-row items-center justify-center'}>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-blue-100 flex items-center justify-center rounded-sm mx-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#216bfe" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-red-100 flex items-center justify-center rounded-sm'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fe5771" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox checkbox-sm rounded" />
                            </label>
                        </th>
                        <td>What is UX/UI Design</td>
                        <td className={'text-gray-400'}>Article Generations</td>
                        <td>02</td>
                        <td className={'text-gray-400'}>
                            <div>
                                February 20, 2022
                            </div>
                            <div>
                                10:25 AM
                            </div>
                        </td>
                        <td className={'flex flex-row items-center justify-center'}>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-blue-100 flex items-center justify-center rounded-sm mx-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#216bfe" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-red-100 flex items-center justify-center rounded-sm'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fe5771" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox checkbox-sm rounded" />
                            </label>
                        </th>
                        <td>Men Joggers</td>
                        <td className={'text-gray-400'}>Product Descriptions</td>
                        <td>10</td>
                        <td className={'text-gray-400'}>
                            <div>
                                February 18, 2022
                            </div>
                            <div>
                                10:25 AM
                            </div>
                        </td>
                        <td className={'flex flex-row items-center justify-center'}>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-blue-100 flex items-center justify-center rounded-sm mx-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#216bfe" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-red-100 flex items-center justify-center rounded-sm'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fe5771" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    {/* row 5 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox checkbox-sm rounded" />
                            </label>
                        </th>
                        <td>What is UX/UI Design</td>
                        <td className={'text-gray-400'}>Blog Intro</td>
                        <td>05</td>
                        <td className={'text-gray-400'}>
                            <div>
                                February 15, 2022
                            </div>
                            <div>
                                10:25 AM
                            </div>
                        </td>
                        <td className={'flex flex-row items-center justify-center'}>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-blue-100 flex items-center justify-center rounded-sm mx-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#216bfe" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-red-100 flex items-center justify-center rounded-sm'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fe5771" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    {/* row 6 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox checkbox-sm rounded" />
                            </label>
                        </th>
                        <td>Web Design</td>
                        <td className={'text-gray-400'}>Content Rephrase</td>
                        <td>10</td>
                        <td className={'text-gray-400'}>
                            <div>
                                February 10, 2022
                            </div>
                            <div>
                                10:25 AM
                            </div>
                        </td>
                        <td className={'flex flex-row items-center justify-center'}>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-blue-100 flex items-center justify-center rounded-sm mx-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#216bfe" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-red-100 flex items-center justify-center rounded-sm'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fe5771" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    {/* row 7 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox checkbox-sm rounded" />
                            </label>
                        </th>
                        <td>Difference Between UX and UI Design</td>
                        <td className={'text-gray-400'}>Landing Pages Headline</td>
                        <td>08</td>
                        <td className={'text-gray-400'}>
                            <div>
                                February 08, 2022
                            </div>
                            <div>
                                10:25 AM
                            </div>
                        </td>
                        <td className={'flex flex-row items-center justify-center'}>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-blue-100 flex items-center justify-center rounded-sm mx-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#216bfe" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-red-100 flex items-center justify-center rounded-sm'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fe5771" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    {/* row 8 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox checkbox-sm rounded" />
                            </label>
                        </th>
                        <td>Men Joggers</td>
                        <td className={'text-gray-400'}>Product Descriptions</td>
                        <td>04</td>
                        <td className={'text-gray-400'}>
                            <div>
                                February 05, 2022
                            </div>
                            <div>
                                10:25 AM
                            </div>
                        </td>
                        <td className={'flex flex-row items-center justify-center'}>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-blue-100 flex items-center justify-center rounded-sm mx-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#216bfe" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-red-100 flex items-center justify-center rounded-sm'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fe5771" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </td>
                    </tr>
                    {/* row 9 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox checkbox-sm rounded" />
                            </label>
                        </th>
                        <td>Difference Between UX and Ul Design</td>
                        <td className={'text-gray-400'}>Product Descriptions</td>
                        <td>1</td>
                        <td className={'text-gray-400'}>
                            <div>
                                February 08, 2022
                            </div>
                            <div>
                                10:25 AM
                            </div>
                        </td>
                        <td className={'flex flex-row items-center justify-center'}>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-blue-100 flex items-center justify-center rounded-sm mx-1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#216bfe" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                            <div className={'w-8 h-7 mt-3 mb-2 bg-red-100 flex items-center justify-center rounded-sm'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fe5771" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </td>
                    </tr>

{/*Dynamic display from db*/}

                    {/* row 0 test */}
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox checkbox-sm rounded" />
                                </label>
                            </th>
                            <td>{project.project_name}</td>
                            <td className={'text-gray-400'}>{project.product_name}</td>
                            <td>{rand()}</td>
                            <td className={'text-gray-400'}>
                                <div>
                                    {project.created_at.slice(0,10)}
                                </div>
                                <div>
                                    {project.created_at.slice(11,16)}
                                </div>
                            </td>
                            <td className={'flex flex-row items-center justify-center'}>
                                <div className={'w-8 h-7 mt-3 mb-2 bg-blue-100 flex items-center justify-center rounded-sm mx-1'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#216bfe" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                    </svg>
                                </div>
                                <div className={'w-8 h-7 mt-3 mb-2 bg-red-100 flex items-center justify-center rounded-sm'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fe5771" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </td>
                        </tr>))}




                    </tbody>
                </table>
            </div>
        </div>
    );
}