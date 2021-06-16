import { Component } from "react";

class App extends Component {
  render() {
    const { who } = this.props;
    return <div>Hello {who}!</div>;
  }
}

export default App;
