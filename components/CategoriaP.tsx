'use client';  

import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getTotal } from '@/service/Api'; 


ChartJS.register(ArcElement, Tooltip, Legend);

const ValorTotal = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const data = await getTotal();

       
        const labels = data.map((item: any) => item.categoryCode);  
        const values = data.map((item: any) => item.total_value); 

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Valor Total por Categoría',
              data: values,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
            },
          ],
        });
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Valor Total por Categoría</h2>
      {chartData ? (
        <Doughnut data={chartData} />
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default ValorTotal;
