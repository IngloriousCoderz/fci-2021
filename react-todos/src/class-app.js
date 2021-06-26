import { Component } from "react";

class App extends Component {
  componentDidMount() {}

  componentDidUpdate(prevProps) {}

  componentWillUnmount() {}

  shouldComponentUpdate(nextProps, nextState) {}

  render() {
    const { who } = this.props;
    return <div>Hello {who.toUpperCase()}!</div>;
  }
}

export default App;
