import React from 'react'
import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/EmpleadoDP">Empleados por Departamento </a>
     
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" href="/NombreDP">Nombre de Empleados por Departamento </Link>
            </li>
            <li className="nav-item">
                <Link   className="nav-link active" href="/SalarioDP">  Salario Por Departamento </Link>
          
            </li>
          
            <li className="nav-item">
                <Link className="nav-link" href="/">Inicio</Link>
            </li>
          
        </ul>

    </div>
</nav>
  )
}
