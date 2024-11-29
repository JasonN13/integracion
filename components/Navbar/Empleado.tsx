'use client'

import { getEmpleados } from '@/service/Api'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Empleado() {

    const [chartdata,setchartdata]= useState({
        labels:[],
        datasets:[
            {
                label:'',
                data:[],
                backgroundColor:''
            }
        ]
    })

    useEffect(()=>{
        getEmpleados().then(data=>{
          const departamento = data.map((item:any)=>item.DEPARTMENT_ID);
          const empleados =data.map((item:any)=>item.Cantidad_de_Empleados)

          setchartdata(
            {
            labels:departamento,
            datasets:[{
                label : 'empleados por departamento',
                data : empleados,
                backgroundColor : 'rgba(255, 99, 132, 0.2)'
            }]
          })

        })
        .catch((error)=>{console.log('Ocurrio un error')})
    },[])


  return (
    <>

    <div>
    {
       chartdata?(
        <div>
        <h3>Empleaods por departamento</h3>

        <Bar data={chartdata}></Bar>

        </div>
       ) :(
        <div> loadConfig... </div>
       )
    }
    </div>

    </>
  )
}
