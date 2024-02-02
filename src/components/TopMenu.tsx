
import { cookies } from 'next/headers';
import Link from 'next/link';
import { CiChat1, CiMenuBurger, CiSearch, CiShoppingBasket } from 'react-icons/ci';

import { MenuSimp } from './MenuSimp';

const getTotalCount = (cart: { [id: string]: number }): number => {
    let items = 0;
    Object.values(cart).forEach((value) => {
        items += value as number;

    })

    return items;

}


export const TopMenu = () => {

    const cookieStore = cookies();
    const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}')

    const totalItems = getTotalCount(cart);




    return (

        <div className="pt-3 px-6 flex items-center justify-between space-x-4">

            <MenuSimp />

            <div className='float'></div>
            <div className="flex space-x-2">

                <div hidden className="md:block">
                    <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                        <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                            <CiSearch />
                        </span>
                        <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" />
                    </div>
                </div>

                <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-200 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                    <CiSearch />
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-200 focus:bg-gray-100 active:bg-gray-200">
                    <CiChat1 size={25} />
                </button>

                <Link href="/dashboard/cart" className="p-2 flex items-center justify-center h-10 rounded-xl border bg-gray-200 focus:bg-gray-100 active:bg-gray-200">
                    {
                        (totalItems > 0) && (<span className='text-sm mr-2 text-blue-800 font-bold'>{totalItems}</span>)
                    }

                    <CiShoppingBasket size={25} />
                </Link>

            </div>
        </div>

    )
}
