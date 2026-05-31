import logo from '../assets/GD_Logo.png'
function Nav() {
  return(<>
     <div className=" z-100 bg-white/10 border border-white/10 text-white flex top-8 left-1/2 -translate-x-1/2 h-16 rounded-3xl w-5/6 fixed backdrop-blur-md shadow-lg ">
    <a href="index.html" id="nav_logo"><img className="h-12 ml-8 mt-2.5"src={logo}/></a>
    <a href="index.html" className="mt-4 ml-6 text-[20px] font-extrabold no-underline">G.D. Dental Lab</a>
    <div className="flex ml-auto mr-10 mt-4 ">
      <a href="#our_story_sec" className='no-underline'>Our Story</a>
      <a href="#team_sec" className="pl-4 no-underline">Team</a>
      <a href="#services_sec" className="pl-4 no-underline">Services</a>
    </div>
  </div>
  </>)
}

export default Nav;