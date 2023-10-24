import React, { useId } from 'react'

function Select({
label,
className="",
options,
 ...props
},ref) {

    const id  = useId();
  return (
    <div className='w-full'>
        {label&&<label className ={''} htmlFor={id}></label>}
        <select className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} `} ref={ref}{...props} id={id}>{options?.map((item)=>(<option key={item} value = {item}>{item}</option>))}</select>
        {/* {options?.map should be used so that even whent he options array is null the loop goes on} */}


    </div>
  )
}

export default React.forwardRef(Select) //this syntax is similar to what we did in input.jsx but this is a better way to do it