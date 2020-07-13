import React, { useState, useEffect } from 'react';
import './App.css';
// POST 

function App() {

  (async () => {
    const rawResponse = await fetch('http://krapipl.imumk.ru:8082/api/mobilev1/update', {
      method: 'POST',
      body: JSON.stringify({'data':''})
    });
    const content = await rawResponse.json();
  
    console.log(content);
  })();


  return (
    <div>

    </div>
  );
}

export default App;
