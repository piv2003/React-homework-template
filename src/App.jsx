// import { Component } from 'react';
// // import { nanoid } from 'nanoid';
// // import { AppBox } from 'components/App.styled';

// export class App extends Component {
//   //   state = {
//   //     contacts: [
//   //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   //     ],
//   //     filter: '',
//   //   };
// }

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button">Increment by {step}</button>
//         <button type="button">Decrement by {step}</button>
//       </div>
//     );
//   }
// }

ReactDOM.render(<Counter step={5} />, document.getElementById('root'));
