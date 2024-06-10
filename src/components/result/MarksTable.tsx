import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import classNames from "@/utils/classNames";

interface Props {
  headData : string[];
  caption : string;
  rowData : string[][];
}

const MarksTable = ({headData, caption, rowData} : Props) => {
  return (
    <div className="bg-white flex-[1.7]">
      <Table>
        <TableCaption>{caption}</TableCaption>
        <TableHeader>
          <TableRow className="bg-slate-100">
            {/* <TableHead className="w-[100px] whitespace-nowrap">{headData[0]}</TableHead> */}
            {headData.map((data, index) => (
              <TableHead key={index}>{data}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rowData && [...rowData].map((innerData, index) => (
            <TableRow key={index} className={classNames(index % 2 !== 0 ? "bg-slate-100" : '')}>
              {innerData.map((data, index) => (
                <TableCell key={index} className={
                  classNames(data === data[0] ? "font-medium" : "", data === data[innerData.length - 1] ? "text-right" : "",)
                  }>{data}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default MarksTable
