import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  labels : string[];
  label : string;
  value : number[];
  color ?: string;
}



export const options = {
  plugins: {
    legend: {
      labels: {
        color: 'rgba(255, 255, 255, 1)', // Change this to your desired color
      },
    },
    tooltip: {
      bodyColor: 'rgba(255, 255, 255, 1)', // Change this to your desired color
      titleColor: 'rgba(255, 255, 255, 1)', // Change this to your desired color
    },
  },
};

export function ContributeGraph({labels, label, value, color} : Props) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: value,
        backgroundColor: [
          'rgba(13, 159, 255, 1)',
          'rgba(255, 218, 0, 1)',
          'rgba(135, 12, 255, 1)',
          color ? color : 'rgba(255, 0, 0, 1)',

        ],
        borderColor: [
          'rgba(41 ,43 ,47, 1)'
          // 'rgba(255, 99, 132, 1)',
          // 'rgba(54, 162, 235, 1)',
          // 'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
}
