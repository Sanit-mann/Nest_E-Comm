import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { Outlet } from "react-router";
function App() {
  return (
    <>
      <div className="relative mx-12">
        <Header />
        <div>
          <Outlet></Outlet>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
