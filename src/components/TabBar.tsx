'use client'

import { useState } from "react";

// https://tailwindcomponents.com/component/radio-buttons-1

interface Props {
  currentTab?: number;
  tabOptions?: number[];

}

export const TabBar = ({tabOptions = [1, 2, 3, 4, 5, 6], currentTab: currentTab = 1}: Props) => {

  const [selected, setSelected] = useState(currentTab)
  return (
    <div className= {`
        grid w-full space-x-2 rounded-xl bg-gray-200 p-2
        ${ 'grid-cols-' + tabOptions.length }
        `}>

      {
        tabOptions.map( tab => (
          <div key={tab}>
            <input type="radio" id={ tab.toString() } className="peer hidden" />
            <label className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
              {tab}
            </label>
          </div>
        ))
      }




    </div>
  )
}