
import { Route, Routes} from 'react-router-dom';
import './style.css'
import LayoutUser from '../LayoutUser';
import MyInfo from '../MyInfo';
import PersonalOffers from '../PersonalOffers';

 const User = ({setAuthorizationVisible}) => {

  return (
    <Routes>
      <Route path='/' element={<LayoutUser setAuthorizationVisible = {setAuthorizationVisible}/>}>
        <Route index  element={<MyInfo/>}/>
        <Route path='MyInfo' element={<MyInfo/>}/>
        <Route path='PersonalOffers' element={<PersonalOffers/>}/>
      </Route>
    </Routes>
  );
}
export default User