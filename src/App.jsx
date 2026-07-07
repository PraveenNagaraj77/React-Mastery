import "./App.css";
import FeedbackForm from "./forms/controlledcomponents/FeedbackForm";
import FormSubmission from "./forms/controlledcomponents/FormSubmission";
import NameInput from "./forms/controlledcomponents/NameInput";
import LoginValidation from "./forms/formvalidation/LoginValidation";
import NameValidation from "./forms/formvalidation/NameValidation";
import LoginFormPage from "./forms/reacthookform/LoginFormPage";
import RegistrationForm from "./forms/reacthookform/RegistrationForm";
import Footer from "./fundamentals/components/Footer";
import Header from "./fundamentals/components/Header";
// import Profile from "./fundamentals/components/Profile";
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
import Dashboard from "./hooks/customhooks/Dashboard";
import Posts from "./hooks/customhooks/Posts";
import Profile from "./hooks/customhooks/Profile";
import Theme from "./hooks/customhooks/Theme";
import ThemeToggle from "./hooks/customhooks/ThemeToggle";
import Users from "./hooks/customhooks/Users";
import CallbackCounter from "./hooks/usecallback/CallbackCounter ";
import Parent from "./hooks/usecallback/Parent";
import TodoApp from "./hooks/usecallback/TodoApp";
import ArrayDependency from "./hooks/useeffect/ArrayDependency";
import AutoCounter from "./hooks/useeffect/AutoCounter";
import CleanupDemo from "./hooks/useeffect/CleanupDemo";
import CountEffect from "./hooks/useeffect/CountEffect";
import CounterLogger from "./hooks/useeffect/CounterLogger";
import EmptyDependencyArray from "./hooks/useeffect/EmptyDependencyArray";
import EveryRender from "./hooks/useeffect/EveryRender";
import FetchPosts from "./hooks/useeffect/FetchPosts";
import FetchUsers from "./hooks/useeffect/FetchUsers";
import FetchUsersWithLoading from "./hooks/useeffect/FetchUsersWithLoading";
import MultipleDependencies from "./hooks/useeffect/MultipleDependencies";
import MultipleEffects from "./hooks/useeffect/MultipleEffects";
import NoDependency from "./hooks/useeffect/NoDependency";
import ObjectArrayDependency from "./hooks/useeffect/ObjectArrayDependency";
import RenderLogger from "./hooks/useeffect/RenderLogger";
import RunOnce from "./hooks/useeffect/RunOnce";
import TimerDemo from "./hooks/useeffect/TimerDemo";
import TitleUpdater from "./hooks/useeffect/TitleUpdater";
import UserDashboard from "./hooks/useeffect/UserDashboard";
import WelcomeMessage from "./hooks/useeffect/WelcomeMessage";
import WindowWidth from "./hooks/useeffect/WindowWidth";
import DependencyArray from "./hooks/usememo/DependencyArray";
import EmployeeSearch from "./hooks/usememo/EmployeeSearch";
import FilterProducts from "./hooks/usememo/FilterProducts";
import FullName from "./hooks/usememo/FullName";
import StudentProfile from "./hooks/usememo/StudentProfile";
import UsememoIntro from "./hooks/usememo/UsememoIntro";
import AutoFocusEmail from "./hooks/useref/AutoFocusEmail";
import ClickCounter from "./hooks/useref/ClickCounter";
import ClickHistory from "./hooks/useref/ClickHistory";
import FocusInput from "./hooks/useref/FocusInput";
import Introductions from "./hooks/useref/Introductions";
import NameInputs from "./hooks/useref/NameInputs";
import PreviousValueTracker from "./hooks/useref/PreviousValueTracker";
import RenderCounter from "./hooks/useref/RenderCounter";
import Stopwatch from "./hooks/useref/Stopwatch";
import UsersProfiles from "./hooks/useref/UsersProfiles";


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

      {/* <LoginValidation/> */}

      {/* <LoginFormPage/> */}

      {/* <RegistrationForm/> */}
      {/* <RunOnce/>
      <EveryRender/>
      <CountEffect/> */}

      {/* <TitleUpdater/> */}
      {/* <WelcomeMessage/>
      <CounterLogger/> */}
      {/* <CleanupDemo/>
      <TimerDemo/> */}
      {/* <AutoCounter/> */}

      {/* <WindowWidth/> */}
      {/* <FetchUsers/> */}
      {/* <FetchPosts/> */}
      {/* <FetchUsersWithLoading/> */}
      {/* <MultipleEffects/> */}
      {/* <UserDashboard/> */}
      {/* <NoDependency/> */}
      {/* <RenderLogger/> */}
      {/* <EmptyDependencyArray/> */}
      {/* <MultipleDependencies/> */}
      {/* <ObjectArrayDependency/> */}
      {/* <ArrayDependency/> */}
      {/* <Introductions/> */}
      {/* <ClickCounter/> */}
      {/* <FocusInput/> */}
      {/* <NameInputs/>
      <AutoFocusEmail/> */}
      {/* <UsersProfiles/> */}
      {/* <Stopwatch/> */}
      {/* <PreviousValueTracker/> */}
      {/* <UsememoIntro/> */}
      {/* <FilterProducts/> */}
      {/* <DependencyArray/> */}
      {/* <FullName/> */}
      {/* <StudentProfile/> */}
      {/* <EmployeeSearch/> */}
      {/* <CallbackCounter/>
      <TodoApp/> */}
      {/* <Dashboard/>
      <br />
      <Profile/> */}
      {/* <Users/>
      <Posts/> */}
      {/* <ThemeToggle/> */}
      <Theme/>
      <Footer />
    </div>
  );
}

export default App;
