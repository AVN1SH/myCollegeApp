
const Banner3 = () => {
  return (
    <div className="bg-sky-300 m-5 rounded p-5 flex-col hover:cursor-pointer md:h-[300px] h-[650px]">
      <p className="font-semibold text-gray-600">Home | Programs</p>
      <div className="max-w-md overflow-hidden mx-auto md:max-w-full mt-7">
        <div className="md:flex items-center justify-between ">
          <h1 className="text-5xl font-bold text-slate-700 my-2">Leading the AI Revolution:<br/>Join Our Dynamic Learning Community.</h1>
          <div className="md-shrink-0 my-2 md:h-[200px]">
            <img src="../../../images/banner3.png" alt="" className="md:h-[200px] object-contain"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner3
