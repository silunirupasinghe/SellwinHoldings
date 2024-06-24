import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactUs() {
    return (
        <>
            <div className="banner bg-indigo-900 text-white ">
                <h1 className=" text-4xl pt-6 text-center font-semibold pb-20">CONTACT US</h1>
            </div>

            <div className="conatiner">
                <div className=" mt-14 text-center mr-3 mb-1 ">
                    <h1 className="mb-5">HAVE SOME QUESTIONS, ISSUES OR COMMENTS?</h1>
                    <p className="font-normal text-lg ml-16 mr-3 leading-relaxed text-gray-400 ">
                        At Sellwin Holdings (Pvt) Ltd, we value open communication and are always here to assist you with your needs. Whether you have questions about our products, need support, or want to discuss a potential partnership, we are ready to help.
                    </p>
                </div>

                

                <div className="container mt-4">
                    <p1 className="font-normal text-lg ml-16 text-gray-400 mr-32 text-justify">
                        You can also reach us by filling the contact form below.
                        Please provide as much information as possible so we can assist you promptly.
                    </p1>
                </div>

                <div className="flex">
                <div className=" my-12">
                    <form class="max-w-sm ml-24">
                        <div className="flex">
                        <div class="mb-5 mr-12 ">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div class="mb-5">
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact number</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="070xxxxxxx" required />
                        </div>
                        </div>
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                        </div>
                        <div class="mb-5">
                            <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave the message..."></textarea>
                            </div>
                        
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                    </form>


                </div>
                <div className="ml-24 mt-10">
                <h2 className="ml-64 mt-12">Get In Touch </h2>
                <div className="ml-64  mt-5">
                    <FontAwesomeIcon icon="phone" /> 071-1497-951
                </div>
                <div className="ml-64  mt-2">
                    <FontAwesomeIcon icon="envelope" /> info@sellwin.lk
                </div>
                <div className="ml-64 mt-2">
                    <FontAwesomeIcon icon="location-dot" /> 8th mile post <br />
                    Habarana
                </div>
                </div>
                </div>

            </div>

        </>
    )
}
export default ContactUs