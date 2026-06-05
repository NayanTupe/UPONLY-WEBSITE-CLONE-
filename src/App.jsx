import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutSMOS from "./components/AboutSMOS/AboutSMOS";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Capabilities from "./components/Capabilities/Capabilities";
import { HouseWifi } from "lucide-react";
import Impact from "./components/Impact/Impact";
import BookDemo from "./components/BookDemo/BookDemo";


function App() {
  return (
    <>
      <Header />
       <Hero />
        <AboutSMOS />
        <HowItWorks />
        <Capabilities />
        <Impact />
        <BookDemo />

     
    </>
  );
}

export default App;