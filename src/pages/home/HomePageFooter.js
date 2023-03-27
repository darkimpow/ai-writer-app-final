import React from 'react';

const HomePageFooter = () => {
    return (
        <div>
            <footer className="footer p-10 bg-blue-900 text-neutral-content fixed bottom-0">
                <div>

                    <p>&copy; Copyright, All Rights Reserved</p>
                </div>
                <div className="flex">
                    <span className="footer-title ">Contributers GitHub:</span>

                        <div className="inline-grid ">
                            <a>AmirhosssinOlyaei</a>
                            <a>cainjason</a>
                            <a>darkimpow</a>
                            <a>j-c-lewis</a>
                            <a>solyDenis</a>
                        </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePageFooter;