
// const App = ()=> {

//   //javascript
//   console.log('Hello from Component');
//   const  now=new Date();
//   const a=30;
//   const b=20;
//   console.log(now, a+b);
//   return (
//     <div>
//       <p>Hello World, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a+b}
//       </p>
//     </div>
//   );
// }

// export default App;
import React from 'react';
function Hello(props){
  // console.log(props);
  return(
    <div>
      <p>Hello { props.name } , you are {props.age} years old.</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Greeting</h1>
      <Hello name='Lakshan' age={3+5}/>
      <Hello name='Nivin' age={5+1}/>

    </div>
  )
}

export default App

