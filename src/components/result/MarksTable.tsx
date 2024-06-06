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
          <TableRow>
            {/* <TableHead className="w-[100px] whitespace-nowrap">{headData[0]}</TableHead> */}
            {headData.map((data) => (
              <TableHead>{data}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...rowData].map((innerData) => (
            <TableRow>
              {innerData.map((data) => (
                <TableCell className={
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
