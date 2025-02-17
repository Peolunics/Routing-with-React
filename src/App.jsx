import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"


function App() {

  return (
    <>
        <h1 className='bg-blue-200 text-center text-pretty'>
          <Header />
          <Footer />
          <Home />
        </h1>
    </>
  )
}

export default App
