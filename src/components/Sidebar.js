import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar-menu w-full min-w-[75px] lg:w-[75px] shadow lg:flex lg:flex-col flex flex-row justify-between items-center fixed lg:relative z-40 bottom-0 bg-white">
        <div className="hidden lg:my-5 lg:block">
          <a href="#!" className="">
            <span>
              <img src="/107-user.svg" alt="" className="h-[50px]" />
            </span>
          </a>
        </div>

        <div className="w-full mx-auto lg:mb-auto">
          <ul
            id="tabs"
            className="flex flex-row justify-center w-full lg:flex-col lg:flex nav-tabs"
          >
            <li className="flex-grow lg:flex-grow-0">
              <a
                id="default-tab"
                href="#chat"
                className="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg active"
              >
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                    Chat
                  </span>
                </div>
                <img src="/chat.svg" alt="" className="h-[25px]" />
              </a>
            </li>
            <li className="flex-grow lg:flex-grow-0">
              <a
                href="#contacts"
                className="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg"
              >
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                    Contact
                  </span>
                </div>
                <img src="/person.svg" alt="" className="h-[25px]" />
              </a>
            </li>
            <li className="flex-grow lg:flex-grow-0">
              <a
                href="#chatgpt"
                className="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg"
              >
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                    Chat GPT
                  </span>
                </div>
                <img src="/chatgpt.svg" alt="" className="h-[25px]" />
              </a>
            </li>
          </ul>
        </div>

        <div className="w-20 my-5 lg:w-auto hidden lg:block">
          <ul className="lg:block">
            <li className="hidden text-center nav-item lg:block">
              <a
                href="#setting"
                className="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg"
              >
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                    Setting
                  </span>
                </div>
                <img src="/setting.svg" alt="" className="h-[30px]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Sidebar