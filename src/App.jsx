import "./App.css";

import Header from "./fundamentals/components/Header";
import Footer from "./fundamentals/components/Footer";
import CartApp from "./context/cart/CartApp";




function App() {
  return (
    <div>
      <Header />
      <CartApp/>
      <Footer />
    </div>
  );
}

export default App;