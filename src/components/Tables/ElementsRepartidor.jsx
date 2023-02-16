import React from 'react'

const ElementsRepartidor = (props) => {

    return (

        <tr className='w-full'>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <div className="flex px-2 py-1">
                    <div className="flex flex-col justify-center">
                        <h6 className="mb-0 leading-normal text-sm">{props.products.name}{props.products.productName}</h6>
                    </div>
                </div>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent pl-10">
                <p className="mb-0 leading-tight text-xs ">{props.products.price} $</p>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent pl-10">
                <p className="mb-0 leading-tight text-xs ">X ({props.products.amount})</p>
            </td>
        </tr>

    )
}

export default ElementsRepartidor