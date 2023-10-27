import SignupForm from "./components/SignupForm";
import RegisteredList from "./components/RegisteredList";

export default function App() {
  return (
    <>
      <SignupForm />
      <RegisteredList weekDay="Mandag"/>
      <RegisteredList weekDay="Tirsdag"/>
      <RegisteredList weekDay="Onsdag"/>
      <RegisteredList weekDay="Torsdag"/>
      <RegisteredList weekDay="Fredag"/>
    </>
    
  );
}