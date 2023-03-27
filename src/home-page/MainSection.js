const MainSection = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-96 mt-28 justify-start">
                <div className="text-fuchsia-900 ml-14">
                    <h1 className="text-5xl font-bold">Web App UI Kit</h1><br/>
                    <div className="text-3xl">
                        <p>with <b>Copywriting AI Tools</b></p><br/>
                        <p>Auto-Layout</p>
                        <p>Keyword Research Tool</p>
                        <p>Responsive Design</p>
                        <p>Light & Dark Theme</p>
                    </div>
                </div>
                <div>
                    <button className="btn md:btn-md ml-28 bg-blue-800 text-xs">Let's Get Started</button>
                    {/*<img src="https://cdn4.iconfinder.com/data/icons/outline-arrows-7/24/chevron_small_right-512.png" alt="arrow">*/}
                </div>
            </div>

            {/*<div className="divider lg:divider-horizontal"></div>*/}
            <div className="grid flex-grow w-80 h-48 mr-10">
                <img src="https://images.zenhubusercontent.com/5d0bbe785cb256095842948d/2a674407-0fee-4d23-a158-b3c4051d5545" alt=""/>
            </div>
        </div>
    )
}

export default MainSection;


