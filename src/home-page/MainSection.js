const MainSection = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-96 mt-28 justify-start">
                <div className="text-fuchsia-900 ml-12">
                    <h1 className="text-5xl font-bold">Web App UI Kit</h1><br/>
                    <div className="text-3xl">
                        <p>with <b>Copywriting AI Tools</b></p><br/>
                        <p>Auto-Layout</p>
                        <p>Keyword Research Tool</p>
                        <p>Responsive Design</p>
                        <p>Light & Dark Theme</p>
                    </div>
                </div>
                </div>
            {/*<div className="divider lg:divider-horizontal"></div>*/}
            <div className="grid flex-grow h-96">
                <img src="" className="w-full h-full" alt="tree"/>
            </div>
        </div>
    )
}

export default MainSection;


