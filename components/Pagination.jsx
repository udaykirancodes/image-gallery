import React, { useEffect, useState } from 'react'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    XMarkIcon,
    ChevronDownIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline'
export default function Pagination({ perPage, posts, currentpage, setcurrentpage, indexOfFirst, indexOfLast }) {
    const [arr, setArr] = useState([]);
    useEffect(() => {
        const data = [];
        for (let i = 0; i <= Math.floor(posts.length / perPage); i++) {
            data.push(i);
        }
        console.log(data)
        setArr(data);
    }, [])
    const decrement = () => {
        if (currentpage > 1) {
            setcurrentpage(currentpage - 1);
        }
    }
    const increment = () => {
        if (currentpage <= Math.floor(posts.length / perPage)) {
            setcurrentpage(currentpage - 1);
        }
    }
    return (
        <div>
            <div className="flex w-full justify-center">
                <div className="mx-auto flex">
                    <p
                        onClick={() => decrement()}
                        className="mx-1 flex cursor-not-allowed items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 dark:border-gray-800 dark:text-gray-400"
                    >
                        <ArrowLeftIcon className="h-5 w-5" />
                    </p>
                    <div className="hidden md:flex">
                        {arr.map((page, index) => {
                            return <p
                                key={page}
                                onClick={() => setcurrentpage(index + 1)}
                                className="cursor-pointer mx-1 flex items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-400"
                            >
                                {page + 1}
                            </p>
                        })

                        }
                    </div>
                    <div className="mx-10 flex flex-1 items-center text-sm leading-tight text-gray-700 md:hidden">
                        Page 1 of 10
                    </div>

                    <p
                        onClick={() => increment()}
                        className="mx-1 flex items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-400"
                    >
                        <ArrowRightIcon className="h-5 w-5" />
                    </p>
                </div>
            </div>
        </div>
    )
}
