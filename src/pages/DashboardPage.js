
const DashboardPage = () => {
    return (
        <div>
            <p className="text-center text-3xl font-bold font-black pt-8">Mahfuzul, So, what exactly did you have in mind?</p>
            <p className="text-center text-xl pt-1">Begin with selecting the content type from the options below.</p>
            <div className="flex justify-center items-center pt-5 ">
                <button className="rounded-full bg-slate-200 py-2 px-6 mr-2">All</button>
                <button className="rounded-full bg-slate-200 py-2 px-6 mr-2">Article & Blog</button>
                <button className="rounded-full bg-slate-200 py-2 px-6 mr-2">Social Media</button>
                <button className="rounded-full bg-slate-200 py-2 px-6 mr-2">Writing</button>
                <button className="rounded-full bg-slate-200 py-2 px-6 mr-2">Keyword Research</button>
                <button className="rounded-full bg-slate-200 py-2 px-6 mr-2">Ecommerce</button>
                <button className="rounded-full bg-slate-200 py-2 px-6 mr-2">Website</button>
            </div>
            <div className="flex justify-center items-center pt-16">
                <div className="w-64 mr-6 p-4 rounded-md bg-gray-300">Box 1</div>
                <div className="w-64 mr-6 p-4 rounded-md bg-gray-400">Box 2</div>
                <div className="w-64 mr-6 p-4 rounded-md bg-gray-500">Box 3</div>
            </div>
        </div>
    );
};
export default DashboardPage;