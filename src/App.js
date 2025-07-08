import './App.css';
import Logins from './Components/Student/Logins';
import LoginT from './Components/Teacher/LoginT';
import {Routes,Route} from 'react-router-dom'
import TeacherDashboard from './Components/Teacher/Teacherdash';
import Auth from './Components/Auth';
import AuthDisplay from './Components/AuthDisplay';
import Studentdash from './Components/Student/Studentdash';


function App() {

  return (
     <Auth>
        <div className="App">
           <Routes>
             <Route path='/' element={<Logins/>}/>
             <Route path='/teacher' element={<LoginT/>}/>
             <Route path='/teacherdash' element={<AuthDisplay><TeacherDashboard/></AuthDisplay>}/>
             <Route path='/studentdash' element={<AuthDisplay><Studentdash/></AuthDisplay>}/>
           </Routes>     
         </div>
     </Auth>
   
  );
}

export default App;
