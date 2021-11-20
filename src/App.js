import './App.css';
import Home from './page/Home';
import SignUp from './page/SignUp';
import Login from './page/Login'
import ListPaint from './page/ ListPaint';
import MyPage from './page/ MyPage';

import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';

import PrivateRoute from './routes/PrivateRoute';
import Paint from './page/Paint';
import Top from './page/Top';

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: "2em" }}>
        <BrowserRouter>
          <PrivateRoute exact path="/" component={Top} />
          <PublicRoute path="/signup" component={SignUp} />
          <PublicRoute path="/Login" component={Login} />
          <Route path="/listpaint" component={ListPaint}/>
          <Route path="/mypage" component={MyPage}/> 
          <Route path="/paint" component={Paint} />
          <PrivateRoute exact path="/home" component={Home} />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
