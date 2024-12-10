import React from 'react'
import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">EXamen DEsarrolloweb2</a>
     
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" href="/Marca">Cantidad de productos por marca</Link>
            </li>
            <li className="nav-item">
                <Link   className="nav-link active" href="/Categoria">Valor total por categoria</Link>
          
            </li>
          
            <li className="nav-item">
                <Link className="nav-link" href="/ValorCategoria">Valor de Productos por categopria</Link>
            </li>
          
        </ul>

    </div>
</nav>
  )
}
