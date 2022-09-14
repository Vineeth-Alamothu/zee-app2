import React from 'react';
//import ReactDOM from 'react-dom/client';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "white"};
    console.log("constructor executed")
  }
//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedStateFromProps executed")
//     return {favoritecolor: props.favcol };
//   }
  componentDidMount() {
    console.log("componentDidMount executed")
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 4000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

export default Header
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Header />);