import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  labels : string[];
  data : number[];
  label : string;
}

const MarksGraph = ({labels, label, data} : Props) => {

  const graphData = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        backgroundColor: [
          'rgba(10, 171, 0, 0.8)',
          'rgba(83, 227, 0, 0.8)',
          'rgba(255, 234, 0, 0.8)',
          'rgba(255, 174, 0, 0.8)',
          'rgba(255, 106, 0, 0.8)',
          'rgba(255, 0, 0, 0.8)',
          'rgba(242, 242, 242, 0.8)',
        ],
        borderColor: [
          "rgba(255, 255, 255, 1)"
          // 'rgba(14, 212, 0, 1)',
          // 'rgba(83, 227, 0, 1)',
          // 'rgba(251, 255, 0, 1)',
          // 'rgba(255, 204, 0, 1)',
          // 'rgba(255, 72, 0, 1)',
          // 'rgba(255, 0, 0, 1)',
          // 'rgba(242, 242, 242, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Pie data={graphData} />
  )
}

export default MarksGraph