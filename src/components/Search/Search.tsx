import TextField from '@mui/material/TextField';
import styles from '@/styles/Home.module.css';
import {useData} from '@/Providers/DataProvider';

export default function Search() {
  const {searchText, setSearchText} = useData();

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
