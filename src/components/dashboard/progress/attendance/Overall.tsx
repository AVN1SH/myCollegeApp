import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Coverd', 'Uncoverd'],
  datasets: [
    {
      label: '%',
      data: [55, 45],
      backgroundColor: [
        'rgba(255, 199, 68, 0.8)',
        'rgba(255, 154, 53, 0.8)',
      ],
      borderColor: [
        'rgba(255, 199, 68, 1)',
        'rgba(255, 154, 53, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Achieved = () => {
  return (
    <Pie data={data} />
  )
}

export default Achieved