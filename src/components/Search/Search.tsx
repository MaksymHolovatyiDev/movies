import TextField from '@mui/material/TextField';
import styles from '@/styles/Home.module.css';
import {SearchType} from '@/Types';

export default function Search({setSearchText, searchText}: SearchType) {
  const handleChange = (evt: any) => {
    setSearchText(evt.target.value);
  };

  return (
    <div className={styles.flexCenter}>
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}
