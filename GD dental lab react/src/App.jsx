import Nav from "./components/navbar"
import Hero from "./components/hero"
import MCard from "./components/work_card"
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
    <div className="bg-[url(./assets/bg_poster_2.jpg)] h-dvh bg-cover">
      <MCard></MCard>
    </div>
</>
  )
}

export default App;
