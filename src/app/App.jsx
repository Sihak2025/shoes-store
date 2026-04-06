import Footer from "../layout/Footer"
import Header from "../layout/Header"
import ContactUs from "../pages/ContactUs"
import Home from "../pages/Home"
import AppRoute from "../routes/AppRoute"
const App = () => {
  return (
    <div>
      <Header/>
      <AppRoute />
    </div>
  )
}

export default App;