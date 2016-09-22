import React, {Component} from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';

class App extends React.Component {
    
   constructor(props) {
       super(props);
   }
   render() {
      return (
         <div>
            <h1>Here {this.props.contentProp}</h1>
            <Header/>
            <Content/>
         </div>
      );
   }
   
   
}

App.defaultProps = {
    headerProp: "Header from props...",
   contentProp:"Content from props..."
    
};

export default App;