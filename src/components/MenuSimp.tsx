'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'

import { SidebarItem } from './sidebar/SidebarItem';
import { menuItemsSimplificado } from '@/products';
import { ListaSimp } from './ListaSimp';


export const MenuSimp = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <button onClick={toggle} type="button"
                className="flex flex-row w-12 h-16 pt-4 -mr-2 border-r lg:hidden " >
                <CiMenuBurger size={30} />

            </button>

            <div id="default-modal" className=" rounded-lg shadow-sm px-4 mt-8 absolute top-5 left-2 ">



                <ListaSimp isOpen={isOpen} toggle={toggle} />



            </div>


        </>
    )
}
