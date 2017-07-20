import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import Main from './pages/main';

class Picogram extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main} />
      </Router>
    );
  }
}

export default Picogram;










// import MainPage from './pages/MainPage';
// import ImagePage from './pages/ImagePage';
// import UploadPage from './pages/UploadPage';
// import ErrorPage from './pages/ErrorPage';
//
// class Picogram extends React.Component {
//   render() {
//     return (
//       <Router history={hashHistory}>
//         <Route path='/' component={MainPage} />
//         <Route path='/image/{id}' component={ImagePage} />
//         <Route path='/upload' component={UploadPage} />
//
//         <Route path='/*' component={ErrorPage} />
//       </Router>
//     );
//   }
// }
//
// export default Picogram;
