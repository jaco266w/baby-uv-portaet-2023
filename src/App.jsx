import SignupForm from "./components/SignupForm";
import RegisteredList from "./components/RegisteredList";

export default function App() {
  return (
    <>
      <SignupForm />
      <div className="md:grid md:grid-cols-5">
        <RegisteredList weekDay="Mandag"/>
        <RegisteredList weekDay="Tirsdag"/>
        <RegisteredList weekDay="Onsdag"/>
        <RegisteredList weekDay="Torsdag"/>
        <RegisteredList weekDay="Fredag"/>
      </div>
    </>
    
  );
}