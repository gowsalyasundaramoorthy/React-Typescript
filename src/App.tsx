

import './App.css';
import { List } from './Component/Generics/List';
import { CustomButton } from './Component/Html/Button';
import { RandomNumber } from './Component/Restriction/RandomNumber';
import { Toast } from './Component/TemplateLiterals/Toast';
// import { Button } from './Component/Button';
// import { Greet } from './Component/Greet';
// import { Heading } from './Component/Heading';
// import { Oscar } from './Component/Oscar';
// import { Person } from './Component/Person';
// import { PersonList } from './Component/PersonList';
// import { Status } from './Component/Status';
// import { Input } from './Component/Input';
// import { Container } from './Component/Container';
import { User } from './Component/UseContextHook/User';
// import { theme } from './Component/UseContextHook/theme';
// import { Box } from './Component/UseContextHook/Box';
import { UserContextProvider } from './Component/UseContextHook/UserContext';
import { Counter } from './Component/UseReducerHook/Counter';


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

      {/* <ThemeContextProvider>
        <Box /> 
      </ThemeContextProvider> */}

        {/* <UserContextProvider>
        <User></User>
      </UserContextProvider> */}

      {/* <Counter /> */}

      {/* <List items={['Batman', 'Superwomen', 'Spiderman']} onClick={(item) => console.log(item)}></List>
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)}></List> */}

      {/* <List items={[{ id: 1, first: 'Bruce', last: 'Wayne' },
        { id: 2, first: 'Clark', last: 'Kent' },
        { id: 3, first: 'Princess', last: 'Diana' }, ]}
        onClick={(item) => console.log(item)}></List> */}
      
      {/* <RandomNumber value={10} isPositive /> */}

      {/* <Toast position='right-bottom' /> */}

      <CustomButton variant='primary' onClick = {()=>{console.log('string clicked')}}>Primary button</CustomButton>
      
      </div>
  );
}

export default App;
