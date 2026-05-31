function Bg() {
  return (
    <>
      <div 
        className="absolute w-100 h-100 top-[10%] left-[10%] rounded-full bg-emerald-400 opacity-40 blur-[96px] pointer-events-none"
        style={{ animation: 'blob-float 6s ease-in-out infinite' }}
      ></div>
      
      <div 
        className="absolute w-87.5 h-87.5 bottom-[20%] right-[10%] rounded-full bg-zinc-400 opacity-40 blur-[80px] pointer-events-none"
        style={{ animation: 'blob-float 8s ease-in-out infinite reverse' }}
      ></div>
      
      <div 
        className="absolute w-75 h-75 top-[50%] left-[40%] rounded-full bg-gray-600 opacity-60 blur-[80px] pointer-events-none"
        style={{ animation: 'blob-float 4s ease-in-out infinite' }}
      ></div>
    </>
  );
}

export default Bg;