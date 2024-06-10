interface Subject {
  paper_code: string;
  paper_title: string;
  internal_marks: number;
  external_marks: number;
  obtain_marks: number;
}
interface TotalMarks {
  total_marks : number;
}

interface SemesterData {
  [key: string]: Subject | number;
}

interface TransformedSemesterData {
  subjects: Subject[] & TotalMarks[];
  [key: string]: any;
}

interface Data {
  [key: string]: SemesterData;
}

interface TransformedData {
  [key: string]: TransformedSemesterData;
}
