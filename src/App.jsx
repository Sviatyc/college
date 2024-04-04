import Header from "./components/Header/Header"
import EcologyProblem from "./components/EcologyProblem/EcologyProblem"
import GlobalGoals from "./components/GlobalGoals/GlobalGoals"
import Protests from "./components/Protests/Protests"
import ClimateCrisis from "./components/ClimateCrisis/ClimateCrisis"
import BadCons from "./components/BadCons/BadCons"
import People from "./components/People/People"
import FromYourself from "./components/FromYourself/FromYourself"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="ml-[72px]">
      <Header />
      <EcologyProblem />
      <GlobalGoals />
      <Protests />
      <ClimateCrisis />
      <BadCons />
      <People />
      <FromYourself />
      <Footer />
    </div>
  )
}

export default App