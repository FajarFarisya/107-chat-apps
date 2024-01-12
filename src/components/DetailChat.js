import React from 'react'

const DetailChat = () => {
    return (
        <div className="w-full overflow-hidden transition-all duration-150 bg-white hidden lg:block">
            <div className="lg:flex">
                <div className="relative w-full overflow-hidden">
                    
                    <div className="p-4 border-b border-gray-100 lg:p-6 shadow-md">
                        <div className="grid items-center grid-cols-12">
                            <div className="col-span-8 sm:col-span-4">
                                <div className="flex items-center">
                                    <div className="block mr-2 lg:hidden">
                                        <a
                                            href="#!"
                                            className="p-2 text-gray-500 user-chat-remove text-16"
                                        >
                                            <i className="ri-arrow-left-s-line"></i>
                                        </a>
                                    </div>
                                    <div className="mr-3">
                                        <img
                                            src="/person2.svg"
                                            className="rounded-full h-11 w-11"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col overflow-hidden">
                                        <h5 className="mb-0 truncate text-16 block">
                                            <a href="#!" className="text-gray-800">
                                                AOT - Iwakawa
                                            </a>
                                        </h5>
                                        <p className="text-xs text-gray-600">Online</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[80vh] p-4 lg:p-6 simplebar-scrollable-y" data-simplebar="init">
                        <div className="simplebar-wrapper m-[-24px]">
                            <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer">
                                </div>
                            </div>
                            <div className="simplebar-mask">
                                <div className="simplebar-offset mr-0 mb-0">
                                    <div className="simplebar-content-wrapper h-100 overflow-hidden overflow-y-scroll" tabIndex="0" role="region" aria-label="scrollable content">
                                        <div className="simplebar-content p-[24px]">
                                            <ul className='mb-0 sm:py-4'>
                                                
                                                
                                                <li className="clear-both py-4">
                                                    <div className="relative inline-flex items-end mb-6 text-right float-right">
                                                        <div className="order-3 mr-0 ml-4">
                                                            <img src="/person2.svg" alt="" className="rounded-full h-9 w-9" />
                                                        </div>

                                                        <div>
                                                            <div className="flex gap-2 mb-2 justify-end">
                                                                <div className="relative order-2 px-5 py-3 text-gray-700 rounded-lg bg-[#c2daff]">
                                                                    <p className="mb-0 border-b pb-2 text-justify">
                                                                    Good Morning
                                                                    </p>
                                                                    <p className="mt-1 text-justify">
                                                                    おはようございます
                                                                    </p>
                                                                    <div className="before:content-[''] before:absolute before:border-[px] before:border-transparent before:border-r-[#c2daff] before:border-t-[#c2daff] before:right-0 before:-bottom-2"></div>
                                                                </div>

                                                            </div>
                                                            <p className="mt-1 mb-0 text-xs text-right text-gray-500"><i className="align-middle ri-time-line"></i> <span className="align-middle">10:06</span></p>
                                                            
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="z-40 w-full p-5 mb-0 bg-white border-t lg:mb-1 border-gray-200">
                        <div className="bg-grey-lighter flex gap-2 items-center">
                            <div>
                                <img src='/attach.svg' className='w-[30px] h-[30px]'/>
                            </div>
                            <div className="py-3 px-3 rounded bg-slate-100 flex-1 items-center gap-2">
                                <div className='flex flex-row'>
                                <input
                                    type="text"
                                    className="w-full px-2 border-0 bg-slate-100 placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0 placeholder:text-gray-400"
                                    placeholder="We have a few queries about how the codebase will be maintained now that your lead engineer has changed."
                                    aria-label="We have a few queries about how the codebase will be maintained now that your lead engineer has changed."
                                    aria-describedby="basic-addon1"
                                />
                                <span className="ms-3" id="basic-addon1">
                                <img src='/send.svg' className='w-[30px] h-[30px]'/>
                                    {/* <i className="text-lg text-gray-400 ri-search-line search-icon dark:text-gray-200"></i> */}
                                </span>
                                </div>
                            </div>
                            {/* <div className="flex-1 mx-4">
                                <input className="w-full border rounded px-2 py-2" placeholder="Enter Message..." type="text" />
                            </div> */}
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailChat