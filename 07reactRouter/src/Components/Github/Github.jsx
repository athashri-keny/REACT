import { useLoaderData } from 'react-router';

import { data } from 'react-router'

import React, { useState, useEffect } from "react";

function Github() {
    const data =  useLoaderData()
    // const [data, setData] = useState([]); // Initialize with an empty object instead of an array

    // useEffect(() => {
    //     fetch("https://api.github.com/users/athashri-keny")
    //         .then((response) => response.json()) // Fixed parentheses and capitalization
    //         .then((data) => {
    //             console.log(data);
    //             setData(data); // Moved this inside the `then` block
    //         })
    //         .catch((error) => console.error("Error fetching data:", error)); // Added error handling
    // }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="max-w-2xl mx-auto mt-8 bg-gray-800 text-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center text-center">
                <img
                    src={data.avatar_url}
                    alt="GitHub Profile"
                    className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-md mb-4"
                />
                <h1 className="text-2xl font-bold mb-2">{data.name || "GitHub User"}</h1>
                <p className="text-gray-300 text-sm mb-4">{data.bio || "No bio available"}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center mt-6">
                <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                    <p className="text-xl font-bold text-orange-500">{data.followers || 0}</p>
                    <p className="text-gray-300 text-sm">Followers</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                    <p className="text-xl font-bold text-orange-500">{data.following || 0}</p>
                    <p className="text-gray-300 text-sm">Following</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg shadow-md col-span-2">
                    <p className="text-xl font-bold text-orange-500">{data.public_repos || 0}</p>
                    <p className="text-gray-300 text-sm">Public Repositories</p>
                </div>
            </div>
        </div>
    );
}
export default Github

export const GithubInfoloader = async() => {
     const response = await fetch("https://api.github.com/users/athashri-keny")
     return response.json()
}
