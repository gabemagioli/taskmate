import { useEffect, useState } from 'react';
import './header.css';

function Header () {

    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "White");

    useEffect( () => {
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    useEffect( () => {
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return(
        <header>
            <div className="header">
                <img src="https://yanado.com/blog/wp-content/uploads/2015/02/Tasks-icon.png" alt="imagem do site" className="img-logo"/>
                <span className="nome">TaskManager</span>

                <div className="themes">
                    <span onClick={ () => setTheme("White")} className={theme === 'white' ? "White" : "white"}></span>
                    <span onClick={ () => setTheme("Black")} className={theme === "black" ? "Black" : "black"}></span>
                    <span onClick={ () => setTheme("Blue")} className={theme === "blue" ? "Blue" : "blue"}></span>
                    <span onClick={ () => setTheme("Img")} className={theme === "img" ? "Img" : "img"}></span>
                </div>
            </div>
        </header>
    );
}

export default Header;