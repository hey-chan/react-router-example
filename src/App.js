// import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom'
import WelcomePage from './components/welcomepage';
import CharacterClassMain from './components/characterClassMain';
import DiceRollMain from './components/diceRollMain';
import DungeonMasterMain from './components/dungeonMasterMain';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      {/* <a href='https://google.com'>Go to google</a>
      <br />
      <Link to="/google.com">Go to google</Link> */}
      <h1>D&D: Dungeons and Dragons</h1>
      <nav className="navbar">
        {/* Sets the link */}
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/characterclasses'>Class Info</Link></li>
          <li><Link to='/dicerolls'>Dice Rolls</Link></li>
          <li><Link to='/gameplanning'>Game Planning</Link></li>
        </ul>
      </nav>
      {/* Changes route path depending on what path is */}
      {/* Notice main: even though they are their own views, they are other components */}

      <Switch>
        <Route exact path='/'>
          <WelcomePage />
        </Route>
        <Route path='/characterclasses'>
          <CharacterClassMain />
        </Route>
        <Route path='/dicerolls'>
          <DiceRollMain />
        </Route>
        <ProtectedRoute component={DungeonMasterMain} path="/gameplanning" />
        {/* <Route path='/gameplanning'>
          <DungeonMasterMain />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
