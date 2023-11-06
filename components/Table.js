"use client"
import React, { useEffect } from 'react'
import axios from 'axios'
import next from 'next'

const TableBoard = () => {
    const getSheets = () => {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://script.googleusercontent.com/macros/echo?user_content_key=fiTgr-2j6PZg8NqH9SurNyPHQdjpXdAg77AfvMyukAhCd9gI88k1si19mtd3_obPHlMVUlaYLvPKiMRuU2KHpS-R-g5JO4-2m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNjMOmVa6-sOmzRNQ06yMf7ekpG40lm-ZO2KcUmf1ORRtbtD9Q4r7grokYgZVWlUKdRTakqIimL69unqIuEmLm8_FFtSzMRK09z9Jw9Md8uu&lib=MxNaM13yKOr95F5xc_aIkZ1s27iHBleGo',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert("mil gaya")
            })
            .catch((error) => {
                console.log(error);
            });

    }
    useEffect(
        () => {
            getSheets(); // Fetch data when the component mounts

            const interval = setInterval(() => {
                // Periodically fetch and update the data (e.g., every 10 seconds)
                getSheets();
            }, 10000); // 10 seconds in milliseconds

            return () => {
                clearInterval(interval); // Clean up the interval when the component unmounts
            };
        }, []);
    return (

        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 font-audiowide">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr >
                        <th scope="col" className="px-6 py-3 text-xl">
                            Rank
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl">
                            Team Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl">
                            Points
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            hello
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            hello
                        </th>
                        <td className="px-6 py-4">
                            White
                        </td>
                        <td className="px-6 py-4">
                            Laptop PC
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            hello
                        </th>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default TableBoard
