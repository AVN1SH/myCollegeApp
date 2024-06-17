
const Banner2 = () => {
  return (
    <div className="bg-lime-300 m-5 rounded p-5 flex-col hover:cursor-pointer h-[200px] md:h-[300px]">
      <p className="font-semibold text-gray-600">Home | Programs</p>
      <div className="max-w-md overflow-hidden mx-auto md:max-w-full lg:mt-7 mt-3">
        <div className="flex items-center justify-between ">
          <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-5xl font-bold text-slate-700 my-2">Experience the Future of Learning :<br/>Explore Our Latest Tech Curriculum.</h1>
          <div className="md-shrink-0 my-2 md:h-[200px]">
            <img src="/images/Layer1.png" alt="" className="h-[80px] md:h-[100px] lg:h-[200px] object-contain"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
