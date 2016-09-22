import React, {Component} from 'react';
import TableRow from './TableRow.jsx';
import Data from './data.js';

class Content extends React.Component {
    constructor() {
      super();
		
      this.state = {data: Data};
      
   }
   
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
            <div>
                <table>
                   <tbody>
                      {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                   </tbody>
                </table>
             </div>
         </div>
      );
   }
};

export default Content;
