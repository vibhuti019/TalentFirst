import HomePage from './Pages/HomePage/HomePage.js'
import HomePage2 from './Pages/HomePage2/HomePage2.js'
import FormPage from './Pages/FormPage/FormPage.js'
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
// import SignIn from './Pages/SignInLogin/signin.js';
// import FormPage2 from './Pages/FormPage2/FormPage/FormPage2.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage2 />} />
          <Route path="form" element={<FormPage />} />
          <Route path="form" element={<FormPage2 />} />
          <Route path="signup" element={<SignIn />} />
          <Route path="form2" element={<FormPage2 />} />
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
