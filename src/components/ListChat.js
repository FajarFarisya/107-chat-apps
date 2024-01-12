import React from 'react'
import { RiSearchLine } from "@remixicon/react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const ChatItems = [
    {
        id: "1",
        foto: "/person1.svg",
        name_user:
            "ATO - Sasahara",
        last_chat: "No worries!",
        time_chat: "9.00 AM",
        active: 0
    },
    {
        id: "2",
        foto: "/person2.svg",
        name_user:
            "ATO - Iwakawa",
        last_chat: "You: Good Morning",
        time_chat: "9.00 AM",
        active: 1
    },
    {
        id: "3",
        foto: "/person3.svg",
        name_user:
            "ATO - Fujihira",
        last_chat: "Please let me know what you think",
        time_chat: "9.00 AM",
        active: 0
    },
    {
        id: "4",
        foto: "/person4.svg",
        name_user:
            "ATO - Kaneda",
        last_chat: "Can you help me on this one?",
        time_chat: "9.00 AM",
        active: 0
    },
    {
        id: "5",
        foto: "/person5.svg",
        name_user:
            "ATO - Nasuda",
        last_chat: "Thank you so much",
        time_chat: "9.00 AM",
        active: 0
    },
    {
        id: "6",
        foto: "/person6.svg",
        name_user:
            "ATO - Teduka",
        last_chat: "Have you done the report?",
        time_chat: "9.00 AM",
        active: 0
    },
    {
        id: "7",
        foto: "/person7.svg",
        name_user:
            "ATO - Enokizono",
        last_chat: "Let me know if you have any questions.",
        time_chat: "9.00 AM",
        active: 0
    },
    {
        id: "8",
        foto: "/person8.svg",
        name_user:
            "ATO - Okoshi",
        last_chat: "OK, thanks",
        time_chat: "9.00 AM",
        active: 0
    },
    {
        id: "9",
        foto: "/person9.svg",
        name_user:
            "ATO - Takemura",
        last_chat: "Sure!",
        time_chat: "9.00 AM",
        active: 0
    }

];

const ListChat = () => {
    return (
        <div className="min-w-[380px] lg:w-[380px] shadow overflow-y-hidden mb-[80px] lg:mb-0 border-r">
            <div>
                <div className="tab-content active">
                    <div>
                        <div className="px-5 pt-6 pb-1">
                            <div className="flex justify-between items-center">
                                <h3 className="mb-0 text-3xl font-bold text-black-700">
                                    Messages
                                </h3>
                                <a href="#!">
                                    <img src="/add-rounded.svg" alt="" className="h-[30px]" />
                                </a>
                            </div>
                            <div className="py-4 mt-5 mb-5 rounded bg-slate-100 flex flex-row items-center gap-2">
                                <span className="ms-3" id="basic-addon1">
                                    <RiSearchLine
                                        size={20} // set custom `width` and `height`
                                        color="gray" // set `fill` color
                                        className="text-lg text-gray-400 search-icon" // add custom class name
                                    />
                                    {/* <i className="text-lg text-gray-400 ri-search-line search-icon dark:text-gray-200"></i> */}
                                </span>
                                <input
                                    type="text"
                                    className="border-0 bg-slate-100 placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0 placeholder:text-gray-400"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                        </div>
                        <div>
                            <SimpleBar className="px-3" style={{ maxHeight: 700 }}>
                                <ul className="chat-user-list">
                                    {ChatItems.map((chatitem) => (
                                        <li key={chatitem.id} className={`${((chatitem.active == 1) ? "bg-[#c2daff]" : "bg-transparent")} py-[15px] hover:bg-slate-100 transition-all ease-in-out border-b border-white/20 px-[8px] rounded-xl`}>

                                            <a href="#!">
                                                <div className="relative flex">
                                                    <div className="relative self-center ltr:mr-3">


                                                        <img
                                                            src={chatitem.foto}
                                                            className="rounded-full w-12 h-12 me-3"
                                                            alt=""
                                                        />

                                                    </div>

                                                    <div className="flex-grow overflow-hidden">
                                                        <h5 className="mb-1 text-base truncate font-bold">
                                                            {chatitem.name_user}
                                                        </h5>
                                                        <p className="mb-0 text-base text-gray-500 truncate text-14">
                                                            {chatitem.last_chat}
                                                        </p>
                                                    </div>
                                                    <div className="text-gray-500 text-xs mt-1">
                                                        {chatitem.time_chat}
                                                    </div>
                                                    <div className="absolute bottom-0 right-0">
                                                        <span className="px-2 py-1 text-white text-xs rounded-full bg-blue-500 text-11">
                                                            2
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    ))}

                                </ul>
                            </SimpleBar>
                            {/* <div
                                className="h-[700px] px-2 simplebar-scrollable-y"
                                data-simplebar="init"
                            >
                                <div className="simplebar-wrapper my-0 mx-[-8px]">
                                    <div className="simplebar-height-auto-observer-wrapper">
                                        <div className="simplebar-height-auto-observer"></div>
                                    </div>
                                    <div className="simplebar-mask">
                                        <div className="simplebar-offset right-0 bottom-0">
                                            <div
                                                className="simplebar-content-wrapper h-[100%] overflow-x-hidden overflow-y-scroll"
                                                tabIndex="0"
                                                role="region"
                                                aria-label="scrollable content"
                                            >
                                                <div className="simplebar-content px-2 py-0">
                                                    <ul className="chat-user-list py-4 sm:py-0">
                                                        {ChatItems.map((chatitem) => (
                                                            <li key={chatitem.id} className={`${((chatitem.active == 1) ? "bg-[#c2daff]" : "bg-transparent")} py-[15px] hover:bg-slate-100 transition-all ease-in-out border-b border-white/20 px-[8px] rounded-xl`}>

                                                                <a href="#!">
                                                                    <div className="relative flex">
                                                                        <div className="relative self-center ltr:mr-3">

                                                                            
                                                                            <img
                                                                                src={chatitem.foto}
                                                                                className="rounded-full w-12 h-12 me-3"
                                                                                alt=""
                                                                            />

                                                                        </div>

                                                                        <div className="flex-grow overflow-hidden">
                                                                            <h5 className="mb-1 text-base truncate font-bold">
                                                                                {chatitem.name_user}
                                                                            </h5>
                                                                            <p className="mb-0 text-base text-gray-500 truncate text-14">
                                                                                {chatitem.last_chat}
                                                                            </p>
                                                                        </div>
                                                                        <div className="text-gray-500 text-xs mt-1">
                                                                            {chatitem.time_chat}
                                                                        </div>
                                                                        <div className="absolute bottom-0 right-0">
                                                                            <span className="px-2 py-1 text-white text-xs rounded-full bg-blue-500 text-11">
                                                                                2
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        ))}

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="simplebar-placeholder"></div>
                                </div>
                                <div className="simplebar-track simplebar-horizontal invisible">
                                    <div className="simplebar-scrollbar"></div>
                                </div>
                                <div className="simplebar-track simplebar-vertical visible">
                                    <div className="simplebar-scrollbar"></div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListChat