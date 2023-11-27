import { useState } from 'react';
import GoodInfo from '../GoodInfo';
import './style.css'
import ButtonForCardCart from '../ButtonForCard';
import BasicRating from '../Rating';


export default function ProductCard({ id, name, price, description, arrImg }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getImageUrl = (arrImg) => {
    if (Array.isArray(arrImg) && arrImg.length > 0) {
      const randomIMG = Math.floor(Math.random() * arrImg.length);
      const imageUrl = arrImg[randomIMG];
      if (imageUrl && imageUrl.url) {
          return 'http://shop-roles.node.ed.asmer.org.ua/' + imageUrl.url;
      }
  }
}

  return (
    <div id={id} className='card'>
      <div className='card__img-wrapper'>
        <img src={getImageUrl(arrImg)} alt="logo" />
      </div>
      <p className='card__title'>{name}</p>
      <div className='card__info'>
        <p className='card__price'>{price} <span>грн.</span></p>
        <BasicRating/>
        <div>
          <button className='card__btn-more' onClick={handleOpen}>Дізнатися більше</button>
          <ButtonForCardCart price={price} id={id}/>
          <GoodInfo open={open} setOpen={setOpen} getImageUrl={getImageUrl} handleClose={handleClose} name={name} price={price} description={description} arrImg={arrImg} id={id}/>
        </div>
      </div>
    </div>
  );
 
}