import LanguageSelector from "components/LanguageSelector";
import React from "react";

function Header(): React.ReactElement {
  return (
    <header>
      <LanguageSelector />
    </header>
  );
}

export default Header;
