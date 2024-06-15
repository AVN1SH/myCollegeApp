import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Coverd', 'Uncoverd'],
  datasets: [
    {
      label: '%',
      data: [30, 70],
      backgroundColor: [
        'rgba(255, 144, 32, 0.8)',
        'rgba(255, 194, 52, 0.8)'
      ],
      borderColor: [
        "rgba(255, 144, 32, 1)",
        "rgba(255, 194, 52, 1)"
      ],
      borderWidth: 1,
    },
  ],
};

const Course = () => {
  return (
    <Doughnut data={data} />
  )
}

export default Course