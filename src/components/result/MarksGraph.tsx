import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data : {
    labels : string[];
    datasets : {
      label : string;
      data : number[];
      backgroundColor : string[];
      borderColor : string[];
      borderWidth : number;
    }[];
  };
}

const MarksGraph = ({data} : Props) => {
  return (
    <Pie data={data} />
  )
}

export default MarksGraph