import React from 'react';


const Main = ({ id, children }) => (
  <main id={id} className="view" role="main">
    <div className="container">
      {children}
    </div>
  </main>
);


export default Main;