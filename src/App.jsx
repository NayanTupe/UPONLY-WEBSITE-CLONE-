import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutSMOS from "./components/AboutSMOS/AboutSMOS";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Capabilities from "./components/Capabilities/Capabilities";
import { HouseWifi } from "lucide-react";


function App() {
  return (
    <>
      <Header />
       <Hero />
        <AboutSMOS />
        <HowItWorks />
        <Capabilities />

      <main>
        <section
          style={{
            minHeight: "100vh", 
            background: "#f5f7fa",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Welcome to UpOnly Technologies</h1>
        </section>
      </main>
    </>
  );
}

export default App;