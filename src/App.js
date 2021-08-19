import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Data from './data.json';
import TransactionList from './components/TransactionList';


const App = () => {

  return(
      <div className="container">
        <h2 className="text-center mt-3 mb-2">React Data List</h2>
        <hr />
          {/* { Data.map(props =>{
            return(
              <div key={ props.id } className="post mt-5">
                  <h3>{ props.title }</h3>
                  <p>{ props.content }</p>
              </div>
            )
          })} */}

          <TransactionList />
      </div>
  )
}

export default App;
