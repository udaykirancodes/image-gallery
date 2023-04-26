import React, { useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import Uploader from '@/components/Uploader'
export default function upload() {
    useEffect(() => { document.title = 'Image Gallery 🔥' }, []);
    return (
        <div className="bg-black">
            <header className="bg-black">
                <Navbar />
            </header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-8 py-20">
                    <p className="text-center text-5xl font-semibold leading-10 text-white-900">
                        Creative Image Gallery 🔥
                    </p>
                    <p className="text-center text-xl leading-loose text-gray-100">
                        Upload Images Here 👇
                    </p>
                </div>
                <Uploader />
            </div>
        </div>
    )
}
