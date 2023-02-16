import React,{useState} from 'react'

const OrdersR = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
                        <button className="font-semibold leading-tight text-xs text-slate-400" onClick={() => setIsOpen(true)}>
                Detalles
            </button>
            {isOpen && (
        <div className="p-5 bg-white rounded-lg shadow-md">
            
          <h2 className="text-lg font-medium mb-3">Detalles de Factura</h2>
          <table className="w-full text-left table-collapse">
            <tbody>
              <tr className="bg-gray-100">
                <td className="font-medium p-3">Número de Factura</td>
                <td className="p-3 font-light">{props.producto.Id}</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="font-medium p-3">Fecha de Factura</td>
                <td className="p-3 font-light">{props.producto.Fecha}</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="font-medium p-3">Cédula del Cliente</td>
                <td className="p-3 font-light">{props.producto.cedula}</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="font-medium p-3">Nombre del Cliente</td>
                <td className="p-3 font-light">{props.producto.nombre}</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="font-medium p-3">Apellido del Cliente</td>
                <td className="p-3 font-light">{props.producto.apellido}</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-5 flex justify-between">
            <div className="text-gray-700 font-medium">Subtotal:</div>
            <div className="font-medium">{props.producto.subtotal}</div>
          </div>
          <div className="mt-2 flex justify-between">
          <div className="text-gray-700 font-medium">Total:</div>
        <div className="font-medium">{props.producto.total}</div>
      </div>
    </div>
                )}
    </div>
  );
}

export default OrdersR