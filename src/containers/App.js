import React, {Components} from 'react';
import './App.css';


//Scrollspy npm package//
import Scrollspy from 'react-scrollspy'

//Boostrap//
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

class Sana extends Components{
  render(){
    return(
      <div>

        <div>
        <section id="section-1">section 1</section>
        <section id="section-2">section 2</section>
        <section id="section-3">section 3</section>
        </div>

        <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
        <li><a href="#section-1">section 1</a></li>
        <li><a href="#section-2">section 2</a></li>
        <li><a href="#section-3">section 3</a></li>
        </Scrollspy>

      </div>
    );
  }
}
export default App;
