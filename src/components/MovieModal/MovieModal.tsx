import {ModalTypes} from '@/Types';
import {Modal, Box} from '@mui/material';
import ModalData from '../ModalData/ModalData';

const style = {
  position: 'absolute' as 'absolute',
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  top: 0,
  left: '50%',
  transform: 'translate(-50%, 0)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #f00',
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
  outline: 'none',
  overflow: 'auto',
};

export default function MovieModal({open, toggle, title}: ModalTypes) {
  return (
    <Modal
      open={open}
      onClose={toggle}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{overflow: 'auto'}}>
      <Box sx={style}>
        <ModalData title={title} />
      </Box>
    </Modal>
  );
}
