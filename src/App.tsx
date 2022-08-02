import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {

  const person = {
    first: "Thanh Nam",
    last: "Nguyen"
  }

  const personList = [
    {
      first: "Huy Duy Phat",
      last: "Nguyen"
    },
    {
      first: "Thi Cham",
      last: "Nguyen"
    }, {
      first: "Hai Lam",
      last: "Nguyen"
    },
  ]

  return (
    <div className="App">
      <Greet name="Nam" messageCount={10} isLoggedIn={false} />

      <Person name={person} />

      <PersonList names={personList} />
    </div>
  );
}

export default App;
