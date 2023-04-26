import React from 'react'

function Footer() {
    return (
        <footer className="container mx-auto py-10 px-10 md:px-0">
            <div className="flex flex-col md:flex-row md:items-center">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#4F46E5"
                        className="h-10 w-10"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                            clipRule="evenodd"
                        />
                        <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                    </svg>
                </div>
                <div className="mt-4 grow md:mt-0 md:ml-12">
                    <p className="text-base font-semibold text-gray-500 dark:text-gray-300">
                        © 2023 Creative Image Gallery
                    </p>
                </div>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <div className="mb-8 lg:mb-0">
                    <p className="mb-6 text-lg font-semibold text-gray-700 dark:text-gray-100">Company</p>
                    <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                        <li>About us</li>
                        <li>Company History</li>
                        <li>Our Team</li>
                        <li>Our Vision</li>
                        <li>Press Release</li>
                    </ul>
                </div>
                <div className="mb-8 lg:mb-0">
                    <p className="mb-6 text-lg font-semibold text-gray-700 dark:text-gray-100">
                        Our Stores
                    </p>
                    <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                        <li>Washington</li>
                        <li>New Hampshire</li>
                        <li>Maine</li>
                        <li>Texas</li>
                        <li>Indiana</li>
                    </ul>
                </div>
                <div className="mb-8 lg:mb-0">
                    <p className="mb-6 text-lg font-semibold text-gray-700 dark:text-gray-100">
                        Services
                    </p>
                    <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                        <li>UI / UX Design</li>
                        <li>App Development</li>
                        <li>API reference</li>
                        <li>API status</li>
                        <li>Documentation</li>
                    </ul>
                </div>
                <div className="mb-8 lg:mb-0">
                    <p className="mb-6 text-lg font-semibold text-gray-700 dark:text-gray-100">Legal</p>
                    <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookie Policy</li>
                        <li>Disclaimer</li>
                        <li>Media Policy</li>
                    </ul>
                </div>
                <div className="mb-8 lg:mb-0">
                    <p className="mb-6 text-lg font-semibold text-gray-700 dark:text-gray-100">
                        Social Links
                    </p>
                    <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                        <li>YouTube</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
