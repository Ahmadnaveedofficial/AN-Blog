import React from 'react'
import { useId } from 'react';

function Select({
    options,
    lable,
    className = " ",
    ...props
},ref) {
    const id = useId();
  return (
    <div w-full>
        { lable && <lable htmlFor={id} className=''> </lable>}
        <select {...props}
        id={id}
        ref={ref}
        className='px-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
        ${className}'
        >
            {options?.map((option)=>(
                   <option value={option} key={option}>
                        
                   </option>
            )) }
        </select>
    </div>
  )
}

export default React.forwardRef(Select)