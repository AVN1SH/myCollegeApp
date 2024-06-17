
const Banner = () => {
  return (
    <div className="bg-yellow-300 m-5 rounded p-5 flex-col hover:cursor-pointer h-[200px] md:h-[300px] ">
      <p className="font-semibold text-gray-600">Home | Programs</p>
      <div className="max-w-md overflow-hidden mx-auto md:max-w-full mt-7">
        <div className="flex items-center justify-between">
          <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-5xl font-bold text-slate-700 my-2">Redefining Education<br/>with Next-Gen Tech Courses.</h1>
          <div className="md-shrink-0 my-2">
            <img src="/images/img_image_210x374.png" alt="" className="h-[80px] md:h-[100px] lg:h-[200px] object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
