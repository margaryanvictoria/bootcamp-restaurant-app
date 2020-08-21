import React from 'react';
import Main from './views/Main';
<<<<<<< HEAD
import RESTaurant from './views/RESTaurant';
=======
import Signup from './views/Signup';
import SignIn from './views/SignIn';
import RESTaurant from './views/RESTaurant'

>>>>>>> 8479d36620200eb783ad58c41361fb7715b725fc

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
<<<<<<< HEAD
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
=======
    <div>
      {/* <Main />  */}
      {/* <Signup /> */}
      <RESTaurant />
    </div>
>>>>>>> 8479d36620200eb783ad58c41361fb7715b725fc
  );
}

export default App;