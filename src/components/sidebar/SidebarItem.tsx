'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CiBellOn, CiBookmarkCheck, CiChat1, CiLogout, CiMenuBurger, CiSearch } from 'react-icons/ci';

interface Props {
    icon?: React.ReactNode;
    path: string;
    title: string;
    toggle?: () => void;

}

export const SidebarItem = ({ icon, path, title, toggle }: Props) => {

    const currentpath = usePathname();

    return (


        <Link
            href={path} onClick={toggle}
            className={`
                relative px-4 py-3 flex items-center space-x-4 rounded-xl w-full cursor-pointer bg-slate-100 mb-1
                hover: bg-gradient-to-r hover:bg-sky-600 hover:text-white
                ${(currentpath === path) ? 'text-white bg-gradient-to-r from-sky-500 to-cyan-300 font-bold' : ''} `}

        >
            {icon}
            <span className="group-hover:text-white-700">{title}</span>

        </Link>

    )





}

//{/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */ }
