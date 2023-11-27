
import { Route, Routes } from 'react-router-dom';
import './style.css'
import NotFoundPageUa from '../NotFoundPageUa';
import NotFoundPageEng from '../NotFoundPageEng';
import NotFoundPageRu from '../NotFoundPageRu';
import LayoutLanguage from '../LayoutLanguage';

 const NotFoundPage = () => {
  

  return (
    <Routes>
      <Route path='/Forerror' element={<LayoutLanguage/>}>
        <Route index  element={<NotFoundPageUa/>}/>
        <Route path='NotFoundPageUa' element={<NotFoundPageUa/>}/>
        <Route path='NotFoundPageEng' element={<NotFoundPageEng/>}/>
        <Route path='NotFoundPageRu' element={<NotFoundPageRu/>}/>
      </Route>
    </Routes>
  );
}
export default NotFoundPage