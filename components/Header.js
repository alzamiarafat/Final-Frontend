// import { useRouter } from "next/router";

// export default function Header() {

//     const router = useRouter();

//     return (
//         <div className="header-2 ">
//             <nav className="bg-blue-200 py-2 md:py-4">
//                 <div className="container px-4 mx-auto md:flex md:items-center">

//                     <div className="flex justify-between items-center">
//                         <a href="#" className="font-bold text-xl text-indigo-600">FWR</a>
//                         <div className="-mr-2 -my-2 md:hidden">
//                             <button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                                 <span className="sr-only">Open menu</span>
//                                 fgd
//                             </button>
//                         </div>
//                         <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
//                             sdfs<i className="fas fa-bars"></i>
//                         </button>
//                     </div>

//                     <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
//                         <a href="/" className={`p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${router.pathname == "/" ? "bg-indigo-600" : "text-gray-600"}`}>Home</a>
//                         <a href="/about" className={`p-2 lg:px-4 md:mx-2 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${router.pathname == "/about" ? "bg-indigo-600 text-white" : "text-gray-600"}`}>About</a>
//                         <a href="/drag-drop" className={`p-2 lg:px-4 md:mx-2 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${router.pathname == "/drag-drop" ? "bg-indigo-600 text-white" : "text-gray-600"}`}>Drag & Drop</a>
//                         <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Pricing</a>
//                         <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contact</a>
//                         <a href="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>
//                         <a href="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }




import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'

const solutions = [
    {
        name: 'Home',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'About',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    {
        name: 'Drag & Drop',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Contact',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: PhoneIcon,
    },
]

export default function Header() {
    return (
        <Popover className="bg-blue-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Home
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            About
                        </a>
                        <a href="/drag-drop" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Drag & Drop
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Docs
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Contact
                        </a>


                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                        </a>
                        <a
                            href="#"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
