import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ButtonForCardInfo from '../ButtonForInfo';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 850,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 5
};
const styleBox ={
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}


 function GoodInfo({open, name, price, description, id, handleClose, getImageUrl, arrImg}) {
 

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title"  sx={styleBox}>
            <img src={getImageUrl(arrImg)} alt="img" style={{height: 200, width: 200, objectFit: 'contain'}}/>
            <div style={{display:'flex',flexDirection: 'column', gap: 10, padding: 10, alignItems: 'center', width: 400, border: '1px solid rgba(0, 0, 0, .2)'}}>
              <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center', gap: 10, justifyContent: 'space-around', width: '100%'}}>
                <p style={{fontSize: 20, fontWeight: 600,margin: 0, textAlign: "center"}}>{name}</p>
                <p style={{textDecoration: 'underline',fontSize: 18, marginBottom:40, marginTop: 0}}>{price} <span>грн.</span> </p>
              </div>
              <div style={{width: '100%'}}>
                <ButtonForCardInfo price={price} id={id} handleClose={handleClose}/>
              </div>
              

            </div>
          </Typography>
          <Typography id="modal-modal-description" style={{ height: 200, overflow: 'auto'}}>
            {description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default GoodInfo
