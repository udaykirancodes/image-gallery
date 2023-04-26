import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
export default function Uploader() {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });
    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    const removeImageFromFiles = (index) => {
        let newFiles = files.filter((file, ind) => ind !== index)
        setFiles(newFiles);
    };
    return (
        <>
            <div class="flex items-center justify-center w-full my-2" {...getRootProps({ className: 'dropzone' })}>
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-900 dark:bg-gray-800 hover:bg-gray-900 dark:border-gray-600 dark:hover:border-gray-900 dark:hover:bg-gray-900">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input {...getInputProps()} id="dropzone-file" type="file" class="hidden" />
                </label>
            </div>
            <div className="mt-20 grid gap-4 gap-y-8 py-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    files.length ?
                        files.map((file, index) => {
                            return <div key={file.preview} className="flex relative flex-col justify-between space-y-2">
                                <div className="space-y-2">
                                    <img
                                        src={file.preview}
                                        className="aspect-video w-full rounded-md"
                                        // Revoke data uri after image is loaded
                                        onLoad={() => { URL.revokeObjectURL(file.preview) }}
                                    />
                                    <div onClick={() => removeImageFromFiles(index)} className="absolute top-4 right-4">
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <input
                                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                        type="text"
                                        placeholder="add description for this picture" />
                                    <div className="h-10"></div>
                                </div>
                            </div>
                        }) : <></>
                }
            </div>
        </>
    )
}