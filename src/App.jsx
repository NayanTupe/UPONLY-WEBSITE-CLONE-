import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutSMOS from "./components/AboutSMOS/AboutSMOS";


function App() {
  return (
    <>
      <Header />
       <Hero />
        <AboutSMOS />

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