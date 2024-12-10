'use client'
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { getProductos } from '@/service/Api';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ValorPromedio = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductos();

        const labels = data.map((item: any) => item.categoryCode);
        const values = data.map((item: any) => item.average_value);
      console.log(data);
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Valor Promedio',
              data: values,
              fill: false,
              borderColor: 'rgba(75, 192, 192, 1)',
              tension: 0.1,
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
      <h2>Valor Promedio de Productos por Categoría</h2>
      {chartData ? (
        <Line data={chartData} />
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default ValorPromedio;
