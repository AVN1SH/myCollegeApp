import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: "Classes Attended This Year",
      font : {
        size : 18
      }
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total Classes',
      data: [30, 40, 50, 34, 45, 34, 23, 20, 43, 27, 30, 23],
      backgroundColor: 'rgb(249, 115, 22, 0.8)',
    },
    {
      label: 'Attended Classes',
      data: [23, 30, 30, 34, 32, 22, 18, 20, 22, 24, 29, 21],
      backgroundColor: 'rgb(36, 41, 46, 0.8)',
    },
  ],
};

const Attendance = () => {
  return (
    <Bar options={options} data={data} className="bg-white p-1 rounded" />
  )
}

export default Attendance