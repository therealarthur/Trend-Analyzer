import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import { HomePage, ResultsPage } from './components/pages';

// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div style={{
        color: 'azure'
      }} className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/results" component={ResultsPage} />
        {/* <Route exact path="/campus/:id" component={CampusContainer} />

        <Route exact path="/addCampus/" component={AddCampusContainer} />
        <Route exact path="/campus/:id/edit" component={UpdateCampusContainer} />

        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        <Route exact path="/addStudent/" component={AddStudentContainer} />
        <Route exact path="/student/:id/edit" component={UpdateStudentContainer} /> */}
      </Switch>
    </div>
  );
}

export default App;
