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
       
                <li key={''}>
                    <Link
                        href={''}
                        className= {`relative px-4 py-3 flex items-center space-x-4 rounded-xl  ${ (currentpath === item.ruta) ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''} `}
                    >
                        <CiBookmarkCheck size={30} />
                        <span className="-mr-1 font-medium">{''}</span>
                    </Link>
                </li>
            )


 
    

}

//{/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */ }
