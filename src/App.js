import React from 'react';
import Main from './views/Main';
import RESTaurant from './views/RESTaurant';

function App() {
  const cookie = document.cookie;

  // "key=value" split on = yields => ["key", "value"]

  const tuples = cookie === "" ? [] : cookie.split(';');
  const json = {};

  for(let i = 0; i < tuples.length; ++i) {
    const [key, value] = tuples[i].split('=');

    json[key] = value;
  }

  console.log(json);

  const [isAuth, setIsAuth] = React.useState(json.isAuth === 'true');
  const [signUpResult, setSignUpResult] = React.useState();

  return (
    <>
      {
        isAuth ?
        <RESTaurant />
        : <Main authCallback={
          (success) => {
            document.cookie = "isAuth="+ success;
            setIsAuth(success);
        }} />
      }
    </>
  );
}

export default App;