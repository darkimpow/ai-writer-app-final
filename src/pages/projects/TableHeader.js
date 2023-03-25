import React from 'react';

function TableHeader(props) {
    return (
        <>
            {/*title*/}
            <div>List of Projects</div>

            {/*search box*/}
            <div className={'flex'}>

                <div className="flex input input-bordered input-sm max-w-xs">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         strokeWidth={1.5}
                         stroke="currentColor"
                         className="mt-1 pr-1 w-5 h-5">
                        <path strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input type="text" placeholder="Search for a file"/>
                </div>

                <div>
                    <select className="select select-bordered select-sm max-w-xs text-gray-300">
                        <option disabled selected>Filter by template type</option>
                        <option>Small Apple</option>
                        <option>Small Orange</option>
                        <option>Small Tomato</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default TableHeader;