import {Link, Route, useRouteMatch, Switch} from 'react-router-dom'
import BarbarianPage from './characterClassComponents/BarbarianPage';
import WizardPage from './characterClassComponents/WizardPage';
import ClassNotFoundPage from './characterClassComponents/classNotFoundPage';

function CharacterClassMain(){

  // We are going to be adding stuff and appending stuff to the URL
  const {url, path} = useRouteMatch();
  
  return(
    <div className="characterclass">
      <h2>Character class hub!</h2>
      <ul>
        <li><Link to={`${url}/wizards`}>About Wizards</Link></li>
        <li><Link to={`${url}/barbarians`}>About Barbarians</Link></li>
      </ul>

      <Switch>
        <Route path={`${path}/wizards`}>
          <WizardPage />
        </Route>
        <Route path={`${path}/barbarians`}>
          <BarbarianPage />
        </Route>
        <Route path={`${path}/:nonexistantClass/`}>
          {/* This is where we will process our parameters */}
          {/* Whatever is here is a parameter as long as there some sort of string */}
          <ClassNotFoundPage />
        </Route>
      </Switch>
    </div>

  
  )
}

export default CharacterClassMain;