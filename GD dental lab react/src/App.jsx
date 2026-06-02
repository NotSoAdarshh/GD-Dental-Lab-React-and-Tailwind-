import Nav from "./components/navbar"
import Hero from "./components/hero"
import MCard from "./components/work_card"
import MProfiles from "./components/team"
import Footer from "./components/footer"
import Bg from "./components/Bg"


function App() {
  return (
<>
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center p-5">
      <Bg></Bg>
      <Nav></Nav>
      <Hero></Hero>
      <div>
      </div>
    </div>
  
    <div className="bg-black h-dvh">
      <MProfiles></MProfiles>
    </div>

    <div className="bg-[url(./assets/bg_poster_1.jpg)] h-dvh bg-cover">
      <div className="mr-8 ml-8 pt-24">
        <MCard></MCard>
      </div>
    </div>

    <div className="bg-black py-[5%]">
      <Footer></Footer>
    </div>
</>
  )
}

export default App;
