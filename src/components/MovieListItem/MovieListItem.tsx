import {Modal, Box, Typography} from '@mui/material';
import styles from '@/styles/Home.module.css';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MovieListItem() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.poster}>Poster</div>
      <div className={styles.title}>Title</div>
      <div className={styles.flexContainer}>
        <div className={styles.mainData}>Year</div>
        <div className={styles.mainData}>Type</div>
      </div>
    </div>

    // <Modal
    //   open={true}
    //   onClose={()=>{}}
    //   aria-labelledby="modal-modal-title"
    //   aria-describedby="modal-modal-description">
    //   <Box sx={style}>
    //     <Typography id="modal-modal-title" variant="h6" component="h2">
    //       Text in a modal
    //     </Typography>
    //     <Typography id="modal-modal-description" sx={{mt: 2}}>
    //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    //     </Typography>
    //   </Box>
    // </Modal>
  );
}

// Poster
// "Title": "Avatar",
//     "Year": "2009",
//         Type
