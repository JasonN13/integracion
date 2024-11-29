import axios from "axios";

export const getEmpleados = async()=>{
    
    const res= await axios.get('http://localhost:5000/Empleados-Departamento');
    return res.data;

}