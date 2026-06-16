import "./App.css";
import Footer from "./fundamentals/components/Footer";
import Header from "./fundamentals/components/Header";
import Profile from "./fundamentals/components/Profile";
import Welcome from "./fundamentals/components/Welcome";
import Introduction from "./fundamentals/introduction/Introduction";
import VirtualDomDemo from "./fundamentals/introduction/VirtualDomDemo";
import Employee from "./fundamentals/props/Employee";
import Product from "./fundamentals/props/Product";
import User from "./fundamentals/props/User";
import CartCount from "./fundamentals/usestate/CartCount";
import Counter from "./fundamentals/usestate/Counter";
import LikeButton from "./fundamentals/usestate/LikeButton";
import LoginStatus from "./fundamentals/usestate/LoginStatus";
import PasswordToggle from "./fundamentals/usestate/PasswordToggle";
import TextChange from "./fundamentals/usestate/TextChange";
import Toggle from "./fundamentals/usestate/Toggle";

function App() {
  return (
    <div>
      {/* <Header />
      <Introduction />
      <VirtualDomDemo />
      <Welcome />
      <Header /> 
      <h2>{new Date().toLocaleTimeString()}</h2> */}
      <Header />
      {/* <Profile />
      <User name="Neymar" role="Fullstack Developer" />
      <Product productName="Laptop" price={50000} />
      <Employee name="Praveen" designation="React Developer" experience={2} />

      <Employee name="Rahul" designation="Java Developer" experience={3} />

      <Employee
        name="Kiran"
        designation="Full Stack Developer"
        experience={4}

      /> */}
      {/* <Counter/>
      <Toggle/> */}
      <PasswordToggle/>
      <LikeButton/>
      <CartCount/>
      <LoginStatus/>
      <TextChange/>
      <Footer />
    </div>
  );
}

export default App;
