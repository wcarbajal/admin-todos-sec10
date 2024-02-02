import React from 'react'
import { SidebarItem } from './sidebar/SidebarItem';
import { menuItemsSimplificado } from '@/products';
interface Props {
    isOpen: boolean;
    toggle: () => void;
}
export const ListaSimp = ({ isOpen, toggle }: Props) => {
    return (
        <div 

            className= {`flex flex-col flex-wrap flex-items-start items-center rounded-sm  ${isOpen ? "" : "hidden"}`}>

            <button className="absolute -right-2 -top-3 p-0 rounded-xl bg-blue-600 text-white" onClick={toggle}>
                {/* Close icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    />
                </svg>
            </button>

            {


                menuItemsSimplificado.map(({ title, path }) => (
                    <SidebarItem key={title} path={path} title={title} toggle={toggle}/>
                ))

            }



        </div>
    )
}
