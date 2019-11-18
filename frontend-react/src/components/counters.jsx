import React, { Component } from "react";
import Counter from "./counter";
import { withRouter } from "react-router-dom";

import { BehaviorSubject } from "rxjs";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

class Counters extends Component {
  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    localStorage.setItem("isAuth", false);

    this.props.history.push("/");
  };

  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-warning btn-sm ma-2">
          Reset
        </button>
        <button onClick={this.logout} className="btn-warning btn-sm ma-2">
          Logout
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

//export default Counters;
export default withRouter(Counters);
