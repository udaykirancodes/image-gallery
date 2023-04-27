import { Navbar } from '@/components/Navbar'
import Post from '@/components/Post'

import Image from 'next/image'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
  ChevronDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { initLightboxJS } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox } from 'lightbox.js-react'
import Footer from '@/components/Footer';

import { navigation, filters, posts } from '../components/data';
import Link from 'next/link'

export default function BlogsOne() {

  // GET IMAGES

  useEffect(() => { document.title = 'Image Gallery 🔥' }, []);
  return (

    <div className="bg-black">

      <Navbar />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Head */}
        <div className="flex flex-col items-center justify-center space-y-8 py-20">
          <p className="text-center text-5xl font-semibold leading-10 text-white-900">
            Creative Image Gallery 🔥
          </p>
          <p className="text-center text-xl leading-loose text-gray-100">
            Upload | Find | Search for the best images
          </p>
          <div className="flex">
            <div className="ace-x-2 flex w-80 items-center space-x-2 overflow-hidden rounded-lg border border-gray-300  bg-white px-3.5 shadow">
              <MagnifyingGlassIcon className="h-5 w-5 rounded-lg" />
              <input
                type="text"
                className="flex-1 bg-white  py-3 text-base leading-normal text-gray-500 outline-none focus:outline-none focus:ring-0 "
                placeholder="Search"
              />

            </div>
            {/* Upload Button */}
            <Link href="/upload" className="flex justify-center items-center rounded-lg ml-5 bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500" >
              Upload
            </Link>
          </div>
        </div>
        <SlideshowLightbox className="grid gap-4 gap-y-8 py-6 md:grid-cols-2 lg:grid-cols-3" lightboxIdentifier="lightbox1" theme="lightbox">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col justify-between space-y-2">
              <div className="space-y-2">
                <Image loader={() => post.poster} width={500} height={500} src={post.poster} data-lightboxjs="lightbox1" className="aspect-video w-full rounded-md" alt="" />
                {/* <Image alt="" loader={() => post.poster} src={post.poster} className="aspect-video w-full rounded-md" data-lightboxjs="lightbox1" width={500} height={500} /> */}
                <p className="w-full text-sm font-semibold leading-tight text-purple-700">
                  {post.category}
                </p>
                <p className="w-full text-base leading-normal text-gray-100">{post.description}</p>
                <div className="h-10"></div>
              </div>
              {/*  */}
            </div>
          ))}
        </SlideshowLightbox>
        <hr className="my-6" />
        {/* pagination */}
        <div className="flex w-full justify-center">
          <div className="mx-auto flex">
            <a
              href="#"
              className="mx-1 flex cursor-not-allowed items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 dark:border-gray-800 dark:text-gray-400"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </a>
            <div className="hidden md:flex ">
              {['1', '2', '3', '...', '9', '10'].map((page) => (
                <a
                  key={page}
                  href="#"
                  className="mx-1 flex items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-400"
                >
                  {page}
                </a>
              ))}
            </div>
            <div className="mx-10 flex flex-1 items-center text-sm leading-tight text-gray-700 md:hidden">
              Page 1 of 10
            </div>

            <a
              href="#"
              className="mx-1 flex items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-400"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </div >
  )
}

