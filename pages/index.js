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
import axios from 'axios'
import { navigation, filters } from '../components/data';
import Link from 'next/link'
import Pagination from '@/components/Pagination'

export default function BlogsOne() {
  const [posts, setPosts] = useState([{
    src: '',
    desc: ''
  }]);
  // load images function
  const loadImages = async () => {
    // setPosts(posts)
    let { data } = await axios.get('/api/getall');
    console.log(data);
    setPosts(data);
  }
  useEffect(() => loadImages, []) // load images
  // GET IMAGES

  useEffect(() => { document.title = 'Image Gallery 🔥' }, []);


  const [search, setSearch] = useState('');
  // pagination related codes
  const [currentpage, setcurrentpage] = useState(1);
  const [perPage, setPerPage] = useState(6);

  useEffect(() => console.log(search), [search]);

  const indexOfLast = currentpage * perPage;
  const indexOfFirst = indexOfLast - perPage;
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
                onChange={(e) => setSearch(e.target.value)}
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
        <SlideshowLightbox className="grid gap-4 gap-y-8 py-6 md:grid-cols-2 lg:grid-cols-3" lightboxIdentifier="lightbox1" framework="next" images={posts} theme="lightbox">

          {
            search.length ?
              <>
                {posts?.map((post, index) => {
                  let s = search.toLocaleLowerCase();
                  if (post.desc.includes(s)) {
                    return <div key={index} className="flex flex-col justify-between space-y-2">
                      <div className="space-y-2">
                        <Image loader={() => post.src} width={500} height={500} src={post.src} data-lightboxjs="lightbox1" className="aspect-video w-full rounded-md" alt={post.desc} />
                        {/* <Image alt="" loader={() => post.poster} src={post.poster} className="aspect-video w-full rounded-md" data-lightboxjs="lightbox1" width={500} height={500} /> */}
                        <p className="w-full text-sm font-semibold leading-tight text-purple-700">
                          {post.url}
                        </p>
                        <p className="w-full text-base leading-normal text-gray-100">{post.url}</p>
                        <div className="h-10"></div>
                      </div>
                    </div>
                  }
                }
                )}
              </>
              :
              <>
                {posts?.map((post, index) => {
                  if (index >= indexOfFirst && index < indexOfLast) {
                    return <div key={index} className="flex flex-col justify-between space-y-2">
                      <div className="space-y-2">
                        <Image loader={() => post.src} width={500} height={500} src={post.src} data-lightboxjs="lightbox1" className="aspect-video w-full rounded-md" alt={post.desc} />
                        {/* <Image alt="" loader={() => post.poster} src={post.poster} className="aspect-video w-full rounded-md" data-lightboxjs="lightbox1" width={500} height={500} /> */}
                        <p className="w-full text-sm font-semibold leading-tight text-purple-700">
                          {post.url}
                        </p>
                        <p className="w-full text-base leading-normal text-gray-100">{post.url}</p>
                        <div className="h-10"></div>
                      </div>
                    </div>
                  }
                }

                )}
              </>
          }

        </SlideshowLightbox>
        <hr className="my-6" />
        {/* pagination */}
        <Pagination posts={posts} perPage={perPage} indexOfFirst={indexOfFirst} indexOfLast={indexOfLast} currentpage={currentpage} setcurrentpage={setcurrentpage} />
        {/* footer */}
        <Footer />
      </div>
    </div >
  )
}

