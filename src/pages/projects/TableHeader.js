import React from 'react';

function TableHeader() {
    return (
        <div className={'bg-white w-10/12 mx-auto'}>
            {/*title*/}
            <div className={'pl-4 pt-4 font-bold'}>List of Projects</div>

            {/*search box*/}
            <div className={'flex p-4'}>

                <div className="flex input rounded input-bordered input-sm max-w-xs text-gray-400 pl-2">
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

                {/*filter*/}
                <div>
                    <select className="select rounded select-bordered select-sm max-w-xs text-gray-400 font-normal ml-4">
                        <option disabled selected>Filter by template type</option>
                        <option>Type 1</option>
                        <option>Type 2</option>
                        <option>Type 3</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default TableHeader;