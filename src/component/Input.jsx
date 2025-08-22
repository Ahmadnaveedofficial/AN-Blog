import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
  lable,
  type = "text",
  className = " ",
  ...props
}, ref) {
  const id = useId();
  return (
    <div className='w-full'>
      {lable && <lable
        className='inline-block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        htmlFor={id}>
        {lable}
      </lable>}
      <input type="text" className={`px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
        ${className}`}
        ref={ref}
        id={id}
        {...props}
      />
    </div>
  )
})

export default Input