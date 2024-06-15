import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react";

const ProgressLine = () => {
  const [progress, setProgress] = useState(25)
  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <Progress value={progress} className="w-full bg-red-700 duration-75" />
  )
}

export default ProgressLine
