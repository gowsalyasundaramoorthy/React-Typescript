import React from 'react';

import './App.css';
import { Button } from './Component/Button';
import { Greet } from './Component/Greet';
import { Heading } from './Component/Heading';
import { Oscar } from './Component/Oscar';
import { Person } from './Component/Person';
import { PersonList } from './Component/PersonList';
import { Status } from './Component/Status';
import { Input } from './Component/Input';
import { Container } from './Component/Container';
import { User } from './Component/UseStateHook/User';
import { theme } from './Component/UseContextHook/theme';
import { Box } from './Component/UseContextHook/Box';
import { ThemeContextProvider } from './Component/UseContextHook/ThemeContext';


function App() {
  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }
  // const nameList = [{
  //   first: 'Bruce',
  //   last: 'Wayne'
  //   },
  //   {
  //       first: 'Clark',
  //       last: 'Kent'
  //   },
  //   {
  //       first: 'Lady',
  //       last: 'Diana'

  //   }]
  return (
    <div className="App">
      {/* <Greet name='Gowsalya' messageCount={20} isLoggedIn={false}  />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      {/* <Status status='error' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <h1>Oscar goes to James Cameroon</h1>
      </Oscar>

      <Greet name='Gowsalya'  isLoggedIn={false} /> */}


      {/* <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }}></Button> */}

      {/* <Input value='' handleChange={(event)=> console.log(event)} ></Input> */}

      {/* <Container styles={{border: '1px solid black', padding: '1rem'}}></Container> */}

      {/* <User ></User> */}

      <ThemeContextProvider>
        <Box /> 
      </ThemeContextProvider>


    </div>
  );
}

export default App;
