import React, {useState, useRef} from 'react';
import axios from 'axios';
import supabase from "../config";

function LandingPage() {
    const [generatedText, setGeneratedText] = useState(null);
    const projectNameRef = useRef(null);
    const productNameRef = useRef(null);
    const shortDescriptionRef = useRef(null);

    const handleForm = async (e) => {
        e.preventDefault();

        // Call the OpenAI API to generate the response based on the form data
        const {data} = await axios.get(
            'https://my.api.mockaroo.com/mock_ai_response.json?key=40be8000'
        );

        console.log(data.text);
        const text = data.choices[0].text;

        // data.choices[0].text is accessing the first object in the choices array (which should be the only object in the array),
        // and then getting the text property of that object. This results in the generated text that was returned by the API call.

        // Insert the generated text into your Supa_base database
        // The code is creating an object with properties for the project name, product name, short description,
        // and the generated text, and then using the Supa_base client to insert that object as a new row in the "generated_text" table.
        const {data: formResults, error} = await supabase
            .from('articles')
            .insert([
                {
                    title: projectNameRef.current.value,
                    prompt: productNameRef.current.value,
                    content: text,
                    profile_id: 10,
                },
            ]);

// Handle any errors
        if (error) {
            console.error(error);
            return;
        }

        // Update the generatedText state variable with the text generated by the API call
        setGeneratedText(text);
    };
    return (
        <div className="flex justify-center items-center">

            <div className='pb-[550px]'>


                <button
                    className=" border-2 rounded-lg font-bold text-purple-800 text-2xl bg-purple-200 border-purple-800 flex inline mr-4 pr-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10 pr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                    </svg>
                    Back
                </button>
            </div>
            <div>

                {/*Landing page headlines */}
                <h1 className="font-bold text-xl pl-32">
                    Landing Page Headlines
                </h1>
                <h2 className='text-lg text-gray-400 pl-32 pb-5'>
                    Unique and Catchy headlines that are perfect
                </h2>


                {/* The form section */}
                {/* This form will need a submit function inserted here*/}

                <form onSubmit={handleForm}>
                    <div className="w-[600px] h-[550px] bg-white shadow-2xl rounded-lg  pl-32">
                        <div className="form-control w-full max-w-xs flex flex-col">
                            <label className="label">
                                <span className="label-text">Project Name *</span>
                            </label>
                            <input type="text" placeholder="Write your project name" ref={projectNameRef}
                                   className="input input-bordered w-[400px] border-2"/>
                        </div>


                        {/*Language field*/}
                        <div className="form-control w-[400px]">
                            <label className="label">
                                <span className="label-text">Language</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>English</option>
                                <option>Spanish</option>
                                <option>Chinese</option>
                                <option>Arabic</option>
                            </select>
                        </div>

                        {/*Product Name input field*/}
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Product Name *</span>
                            </label>
                            <input type="text" placeholder="Write your product name" ref={productNameRef}
                                   className="input input-bordered w-[400px] border-2"/>
                        </div>

                        {/*Short description input field*/}
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Short description *</span>
                            </label>
                            <input
                                type="text" placeholder="Write your project name"
                                ref={shortDescriptionRef}
                                className="input input-bordered w-[400px] h-[200px] border-2"/>
                        </div>
                        <div className='pt-4 pl-2'>
                            <button
                                className='justify-center items-center border-2 bg-purple-700 text-white w-96 h-10 rounded-lg'>
                                Generate
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default LandingPage;
