import React from 'react';
import {render} from 'react-dom';
import {Comp1} from './components/Comp1.js';

//Container component
class App extends React.Component {
  render () {
    return (
    	<div>
    		<Comp1 />
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app'));