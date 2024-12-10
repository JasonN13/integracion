import axios from "axios";

export const getEmpleados = async()=>{
    
    const res= await axios.get('http://localhost:5000/Empleados-Departamento');
    return res.data;

}

export const getProductos = async()=>{
  
    const res= await axios.get('http://localhost:5000/Valor_Promedio');
    return res.data;

}

export const getCantidad = async()=>{
  
    const res= await axios.get('http://localhost:5000/Cantidad_Marca');
    return res.data;

}

export const getTotal = async()=>{
  
    const res= await axios.get('http://localhost:5000/Valor_TOTAL');
    return res.data;

}
