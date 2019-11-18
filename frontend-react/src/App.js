import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import Login from "./components/login";
import Home from "./components/home";
import Test from "./components/test";
import React, { Component } from "react";
import PrivateRoute from "./components/utils/PrivateRoute";
import Dashboard from "./components/dashboard";
import Store from "./components/store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// class App extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 4 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 }
//     ]
//   };

//   handleDelete = counterId => {
//     const counters = this.state.counters.filter(c => c.id !== counterId);
//     this.setState({ counters: counters });
//   };

//   handleReset = () => {
//     const counters = this.state.counters.map(c => {
//       c.value = 0;
//       return c;
//     });

//     this.setState({ counters: counters });
//   };

//   handleIncrement = counter => {
//     // console.log(counter);

//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;

//     this.setState({ counters });
//   };
//   render() {
//     return (
//       <Router>
//         <React.Fragment>
//           <NavBar
//             totalCounters={this.state.counters.filter(c => c.value > 0).length}
//           />
//           <main className="container">
//             <Switch>
//               <Route path="/" exact component={Home} />

//               <Route path="/login" component={Login} />
//               <Route path="/dashboard">
//                 <Dashboard></Dashboard>
//               </Route>
//               <PrivateRoute path="/test" component={Test} exact />
//               <Route path="/cart">
//                 <Counters
//                   counters={this.state.counters}
//                   onReset={this.handleReset}
//                   onIncrement={this.handleIncrement}
//                   onDelete={this.handleDelete}
//                 />
//               </Route>
//             </Switch>
//           </main>
//         </React.Fragment>
//       </Router>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <Store>
      </Store> */}
    </div>
  );
}

export default App;
