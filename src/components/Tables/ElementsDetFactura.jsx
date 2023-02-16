import React from 'react'

const ElementsDetFactura = (props) => {
    let colorClass = '';
    let colorClass1 = '';
    let colorClass2 = '';
    const producto = props.products
    switch (props.products.EstadoOrden) {
        case 'Concluida':
            colorClass = 'from-success-100 to-success-60 p-1 broder rounded-lg';
            break;
        case 'Cancelada':
            colorClass = 'from-error-100 to-error-80 p-1 broder rounded-lg';
            break;
        case 'En Proceso':
            colorClass = 'from-warning-100 to-warning-80 p-1 broder rounded-lg';
            break;
        default:
            colorClass = '';
    }

    switch (props.products.EstadoEnvio) {
        case 'Entregado':
            colorClass1 = 'from-success-100 to-success-60 p-1 broder rounded-lg';
            break;
        case 'Cancelada':
            colorClass1 = 'from-error-100 to-error-80 p-1 broder rounded-lg';
            break;
        case 'Por Entregar':
            colorClass1 = 'from-warning-100 to-warning-80 p-1 broder rounded-lg';
            break;
        default:
            colorClass1 = '';
    }

    switch (props.products.EstadoPago) {
        case 'Pagada':
            colorClass2 = 'from-success-100 to-success-60 p-1 broder rounded-lg';
            break;
        case 'Cancelada':
            colorClass2 = 'from-error-100 to-error-80 p-1 broder rounded-lg';
            break;
        case 'Por Pagar':
            colorClass2 = 'from-warning-100 to-warning-80 p-1 broder rounded-lg';
            break;
        default:
            colorClass2 = '';
    }
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
                <p className="mb-0 leading-tight text-xs ">X ({props.products.quantity})</p>
            </td>
        </tr>

    )
}

export default ElementsDetFactura