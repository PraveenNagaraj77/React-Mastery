import "./App.css";
import FeedbackForm from "./forms/controlledcomponents/FeedbackForm";
import FormSubmission from "./forms/controlledcomponents/FormSubmission";
import NameInput from "./forms/controlledcomponents/NameInput";
import LoginValidation from "./forms/formvalidation/LoginValidation";
import NameValidation from "./forms/formvalidation/NameValidation";
import Footer from "./fundamentals/components/Footer";
import Header from "./fundamentals/components/Header";
import Profile from "./fundamentals/components/Profile";
import Welcome from "./fundamentals/components/Welcome";
import ClickDemo from "./fundamentals/eventhandling/ClickDemo";
import Counter2 from "./fundamentals/eventhandling/Counter";
import FormDemo from "./fundamentals/eventhandling/FormDemo";
import InputDemo from "./fundamentals/eventhandling/InputDemo";
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
import FocusInput from "./hooks/useref/FocusInput";
import RenderCounter from "./hooks/useref/RenderCounter";

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
      {/* <PasswordToggle/>
      <LikeButton/>
      <CartCount/>
      <LoginStatus/>
      <TextChange/>
      <Footer /> */}

      {/* <Counter2/> */}
      {/* <ClickDemo />
      <InputDemo/>
      <FormDemo/> */}

      {/* <NameInput/>
      <FormSubmission/>
      <FeedbackForm/> */}
      {/* <FocusInput/>
      <RenderCounter/> */}
      {/* <NameValidation/>
       */}

       <LoginValidation/>
      <Footer/>
    </div>
  );
}

export default App;
