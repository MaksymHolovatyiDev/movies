import TextField from '@mui/material/TextField';
import styles from '@/styles/Home.module.css';

export default function Search() {
  return (
    <div className={styles.flexCenter}>
      <TextField id="standard-basic" label="Search" variant="standard" />
    </div>
  );
}
