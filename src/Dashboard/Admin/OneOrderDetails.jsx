import React from 'react'

const OneOrderDetails = () => {
    return (
        <div className='p-10 flex flex-col gap-5 bg-[#f2f2f2]'>
            <strong className='text-xl'>ORDER DETAILS</strong>
            <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex flex-col p-5'>
                <strong>Cooperative Name:</strong>
                <strong>Product Name:</strong>
                <strong>Product Id:</strong>
                <strong>Product Type:</strong>
            </div>
        </div>
    )
}

export default OneOrderDetails