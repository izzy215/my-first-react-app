// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello TypeScript React!</h1>
//     </div>
//   );
// }

// export default App;

// src/App.tsx
//  import AppUserListAxios from './AppUserListAxios';
 import AppUserList from './AppUserList.tsx';
// import AppCounter, {AppAgeCounter} from './AppCounter.tsx';
// import AppTodo from './AppTodo'; // 필요 시 주석 해제
// import AppHelloProps from './AppHelloProps.tsx';

function App() {
  // return <AppUserListAxios />
  return <AppUserList />
  // return <AppAgeCounter />;
  // return <AppTodo />;
  // return <AppHelloProps name="지현" age={29} />;
}

export default App;