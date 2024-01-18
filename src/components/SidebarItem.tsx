'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CiBellOn, CiBookmarkCheck, CiChat1, CiLogout, CiMenuBurger, CiSearch } from 'react-icons/ci';

interface Props{
    icon: React.ReactNode;
    path: string;
    title: string;
}

export const SidebarItem = ({icon, path,title }: Props) => {

    const currentpath = usePathname();

    return (
       
                <li>
                    <Link
                        href={path}
                        className= {`
                        relative px-4 py-3 flex items-center space-x-4 rounded-xl 
                        hover: bg-gradient-to-r hover:bg-sky-600 hover:text-white
                        ${ (currentpath === path) ? 'text-white bg-gradient-to-r from-sky-500 to-cyan-300 font-bold' : ''} `}
                    >
                        {icon}
                        <span className="group-hover:text-white-700">{title}</span>
                    </Link>
                </li>
            )


 
    

}

//{/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */ }
