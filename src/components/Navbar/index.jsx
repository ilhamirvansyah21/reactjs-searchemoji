import styles from "./Navbar.module.css";

import emojiIcon from "../../assets/emoji-icon.svg";
import searchIcon from "../../assets/search-icon.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img
        style={{ marginRight: 8 }}
        className={styles.navIcon}
        src={emojiIcon}
        alt="emoji icon"
      />
      <img
        style={{ marginTop: 3 }}
        className={styles.navIcon}
        src={searchIcon}
        alt="emoji icon"
      />
      <span className={styles.navTitle}>er</span>
    </nav>
  );
};

export default Navbar;
