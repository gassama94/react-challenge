/* import css from './App.module.css'; */
import Sidebar from './components/Sidebar'; // Ensure the path is correct
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import NavBarSimple from './components/NavBarSimple'; // make sure the path is correct
//... any other imports ...
/* import css from "./css/Sidebar.module.css";*/
/* import StatefulGreeting from './components/StatefulGreeting'; */
/* import StatefulGreetingWithCallback from './components/StatefulGreeting'; */
/* import css from "./components/css/Sidebar.module.css"; */
import css from "./components/css/NavBarSimple.module.css";


function App() {
  return (
    <div className={css.sidebar}>
     
      <Sidebar /> 
      <StatefulGreetingWithPrevState greeting="I'm a Stateful call component."/>
      <NavBarSimple />
    
      
    </div>
  );
}

export default App;


