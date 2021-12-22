import React from 'react';
import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className='App'>
            <Card
            title='Card Title'
            image='https://picsum.photos/200'
            body='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, aliquam.'
            />
        </div>
  );
}

export default App;
