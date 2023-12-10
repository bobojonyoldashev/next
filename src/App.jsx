function App () {
  const data = {
    name:"Bobojon",
    age:15,
    occupation:"dasturchi"
  }
  return <div>
    <p>mening ismim {data.name}</p>
    <h1>hozir {data.age} yoshdaman</h1>
    <h2>kasbim {data.occupation}</h2>
  </div>
}
export default App;




// import { useState } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       You pressed me {count} times
//     </button>
//   );
// }



// import { useState } from 'react';

// export default function Counter() {
//   const [age, setAge] = useState(42);

//   function increment() {
//     setAge(a => a + 1);
//   }

//   return (
//     <>
//       <h1>Your age: {age}</h1>
//       <button onClick={() => {
//         increment();
//         increment();
//         increment();
//       }}>+3</button>
//       <button onClick={() => {
//         increment();
//       }}>+1</button>
//     </>
//   );
// }



// import { useState } from 'react';

// export default function Form() {
//   const [form, setForm] = useState({
//     firstName: 'Barbara',
//     lastName: 'Hepworth',
//     email: 'bhepworth@sculpture.com',
//   });

//   return (
//     <>
//       <label>
//         First name:
//         <input
//           value={form.firstName}
//           onChange={e => {
//             setForm({
//               ...form,
//               firstName: e.target.value
//             });
//           }}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={form.lastName}
//           onChange={e => {
//             setForm({
//               ...form,
//               lastName: e.target.value
//             });
//           }}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           value={form.email}
//           onChange={e => {
//             setForm({
//               ...form,
//               email: e.target.value
//             });
//           }}
//         />
//       </label>
//       <p>
//         {form.firstName}{' '}
//         {form.lastName}{' '}
//         ({form.email})
//       </p>
//     </>
//   );
// }




// import { useState } from 'react';

// function createInitialTodos() {
//   const initialTodos = [];
//   for (let i = 0; i < 50; i++) {
//     initialTodos.push({
//       id: i,
//       text: 'Item ' + (i + 1)
//     });
//   }
//   return initialTodos;
// }

// export default function TodoList() {
//   const [todos, setTodos] = useState(createInitialTodos);
//   const [text, setText] = useState('');

//   return (
//     <>
//       <input
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <button onClick={() => {
//         setText('');
//         setTodos([{
//           id: todos.length,
//           text: text
//         }, ...todos]);
//       }}>Add</button>
//       <ul>
//         {todos.map(item => (
//           <li key={item.id}>
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }






