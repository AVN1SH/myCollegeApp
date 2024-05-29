import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const value = 96;

export const data = {
  labels: ['Exelent', 'Very Good', "Good", "Decent", "Bad", "Very Bad", ""],
  datasets: [
    {
      label: '%',
      data: [
        value > 90 && value <= 100 ? value : 0,
        value > 80 && value <= 90 ? value : 0,
        value > 60 && value <= 80 ? value : 0,
        value > 40 && value <= 60 ? value : 0,
        value > 20 && value <= 40 ? value : 0,
        value > 0 && value <= 20 ? value : 0,
        100 - value
      ],
      backgroundColor: [
        'rgba(14, 212, 0, 0.8)',
        'rgba(83, 227, 0, 0.8)',
        'rgba(251, 255, 0, 0.8)',
        'rgba(255, 204, 0, 0.8)',
        'rgba(255, 72, 0, 0.8)',
        'rgba(255, 0, 0, 0.8)',
        'rgba(242, 242, 242, 0.8)',
      ],
      borderColor: [
        'rgba(14, 212, 0, 1)',
        'rgba(83, 227, 0, 1)',
        'rgba(251, 255, 0, 1)',
        'rgba(255, 204, 0, 1)',
        'rgba(255, 72, 0, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(242, 242, 242, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Behavior = () => {
  return (
    <Pie data={data} />
  )
}

export default Behavior