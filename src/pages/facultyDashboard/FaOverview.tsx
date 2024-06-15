
const FaOverview = () => {
  const name = "Avnish Kr. Sharma"
  return (
    <div className="relative m-1 w-[clac(100%-280px)]">
      <div className="absolute w-full bg-orange-500 h-72 rounded">
        <h1 className="font-bold text-3xl pl-3 pt-3 text-white">
          Overview
        </h1>
      </div>
      <div className="absolute border-slate-400 border-[1px] border-solid flex flex-col bg-gray-100 w-[calc(100%-100px)] top-24 left-1/2 -translate-x-1/2 min-h-[calc(100vh-11rem)] rounded p-3">
        <div className="bg-white mb-1 rounded p-2 pl-2 w-full h-fit">
          <h1 className="scroll-m-20 font-extrabold tracking-tight text-4xl text-slate-700"><span className="text-orange-600">Welcome</span> To My College "{name}"</h1>
        </div>
        
      </div>
    </div>
  )
}

export default FaOverview
