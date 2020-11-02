import React from "react";
import styles from "./Header.module.scss";
import { ThemeContext, themes } from "./theme-context";

class Header extends React.Component {
  render() {
    const theme = this.context;
    return (
      <header
        className={styles.header}
        style={{
          backgroundColor: themes[theme].background,
          color: themes[theme].color,
        }}
      >
        <h1>Products list</h1>
      </header>
    );
  }
}

Header.contextType = ThemeContext;

export default Header;
