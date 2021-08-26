import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Language } from "constants/Language";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
const Lang = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  let changeLanguage = (event) => {
    debugger
    let language = event.target.value;

    switch (language) {
      case Language.EN:
        setLang(Language.EN);
        i18n.changeLanguage(Language.EN);
        break;
      case Language.FR:
      default:
        setLang(Language.FR);
        i18n.changeLanguage(Language.FR);
        break;
    }
  };

  return (

    <div class="switch">

      <UncontrolledDropdown>
        <DropdownToggle caret color="default">
          <img alt="..." src={require("assets/img/icons/common/UK.png")} />
          Flags
        </DropdownToggle>
        <DropdownMenu>
          <li>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              <img
                alt="..."
                src={require("assets/img/icons/common/UK.png")}
              />
              English
            </DropdownItem>
          </li>
          <li>
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              <img
                alt="..."
                src={require("assets/img/icons/common/fr-flag.gif")}
              />
              Français
            </DropdownItem>
          </li>
        </DropdownMenu>
      </UncontrolledDropdown>
      <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox" />
      <label for="language-toggle"></label>
      <span value={Language.FR} onClick={changeLanguage} class="on">FR</span>
      <span value={Language.EN} onClick={changeLanguage} class="off">EN</span>
    </div>
  );
};

export default Lang;
