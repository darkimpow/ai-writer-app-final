import React from 'react';

function TableHeader(props) {
    return (
        <div>
            {/*title*/}
            <div>List of Projects</div>

            {/*search box*/}
            <div className={'flex'}>
            <div>
                <input type="text" placeholder="Search for a file" className="input input-bordered input-sm w-full max-w-xs" />
            </div>
            <div>
                <select className="select select-bordered select-sm w-full max-w-xs text-gray-300">
                    <option disabled selected>Filter by template type</option>
                    <option>Small Apple</option>
                    <option>Small Orange</option>
                    <option>Small Tomato</option>
                </select>
            </div>
            </div>
        </div>
    );
}

export default TableHeader;