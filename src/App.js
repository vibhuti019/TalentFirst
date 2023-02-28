import HomePage from './Pages/HomePage/homePage.js'
import HomePage2 from './Pages/HomePage2/homePage2.js'
import FormPage from './Pages/FormPage/formPage.js'
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import SignUp from './Pages/SignInLogin/signIn.js';
import FormPage2 from './Pages/FormPage2/formPage2.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage2 />} />
          <Route path="form" element={<FormPage />} />
          <Route path="form2" element={<FormPage2 />} />
          <Route path="signup" element={<SignUp />} />
          {/* <Route path='*' element={<NotFound />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
