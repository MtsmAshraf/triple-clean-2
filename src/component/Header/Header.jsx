import "./header.css"
import tripleCleanLogo from "../../assests/tri-logo-removebg-hd.png"
import { BookBtn } from "../BookBtn/BookBtn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../../store/themeSlice/themeSlice"
import { useEffect } from "react"
import { toggleLanguage } from "../../store/languageSlice/languageSlice"

const Header = () => {

  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const toggleMode = () => {
    dispatch(toggleTheme());
  };
  const language = useSelector(state => state.language.language);
  const toggleLang = () => {
    dispatch(toggleLanguage());
  };
  let root = document.querySelector(":root")
  
  useEffect(() => {
    if(isDarkMode){
        root.style.setProperty("--bg-color","#0f0e16")
        root.style.setProperty("--header-bg","#0f0e163b")
        root.style.setProperty("--text-color","white")
        root.style.setProperty("--icon-bg", "#24232e")
        root.style.setProperty("--input-bg", "#24242483")
        root.style.setProperty("--input-bg", "#fff")
        root.style.setProperty("--input-focus-bg", "#242424")
        root.style.setProperty("--option-bg", "rgba(97, 97, 97, 0.2)")
        // root.style.setProperty("--selected-option-bg", "#3d5aa6")
        // root.style.setProperty("--selected-option-text", "white")
        root.style.setProperty("--main-form-bg", "#121219")
        root.style.setProperty("--logo-opacity", "0.1");
        root.style.setProperty("--overlay-bg", "rgb(0,0,0,0.5)");
        root.style.setProperty("--main-gradient", "linear-gradient(to right top, #000000, #281620, #412644, #4e3d72, #3d5aa6)");
        root.style.setProperty("--bg-img", "url(../../assests/bg-img.png)");
    }else if(!isDarkMode){
        root.style.setProperty("--bg-color","#eee")
        root.style.setProperty("--header-bg","#eeeeee5f")
        root.style.setProperty("--text-color","black")
        root.style.setProperty("--icon-bg", "#adadad")
        root.style.setProperty("--input-bg", "#fffbfbbe")
        root.style.setProperty("--input-bg", "#fff")
        root.style.setProperty("--input-focus-bg", "#fff")
        root.style.setProperty("--option-bg", "rgba(97, 97, 97, 0.2)")
        // root.style.setProperty("--selected-option-bg", "#0000fc20")
        // root.style.setProperty("--selected-option-text", "#0000fc")
        // root.style.setProperty("--selected-option-bg", "#0000fc")
        // root.style.setProperty("--selected-option-text", "white")
        root.style.setProperty("--main-form-bg", "rgba(220, 220, 220, 0.6)")
        root.style.setProperty("--logo-opacity", "0.3")
        root.style.setProperty("--overlay-bg", "rgb(0,0,0,0)");
        root.style.setProperty("--bg-img", "url(../../assests/bg-img.png)");
        root.style.setProperty("--main-gradient", "linear-gradient(to right top, #ffffff, #d4d2e8, #a7a7d1, #777fbc, #3d5aa6)");
    }

  })


  return (
    <header className='header'>
        <div className="container">
              <div>
                <BookBtn />
                <div className="customize">
                  <div className="change-mode" onClick={() => {toggleMode()}}> 
                      <span>
                          {
                            isDarkMode ? <FontAwesomeIcon icon={faSun} className="sun"/> : <FontAwesomeIcon icon={faMoon}  className="moon"/>
                          }
                      </span>
                  </div>
                  <div className="change-language" onClick={() => {toggleLang()}}>
                      {
                        language === "arabic" ? 
                        <span name="change-lang-icon" >
                          en
                        </span>
                        : <span name="change-lang-icon" >
                          ع
                        </span>
                      }
                      
                  </div>
                </div>
              </div>
              {/* <div className="logo grand">
                <img src={grandHyatt} alt="Grand Hyatt Logo" />
              </div> */}
              <div className="logo tripple">
                <img src={tripleCleanLogo} alt="Triple Clean Logo" />
              </div>
        </div>
    </header>
  )
}

export default Header