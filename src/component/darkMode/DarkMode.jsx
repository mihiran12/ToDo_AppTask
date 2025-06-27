import './darkMode.css'

const DarkMode = () =>{
    const setDarkMode = () =>{
        document.querySelector("body").setAttribute('data-theme', 'dark')
        console.log("dark mode on")
    }
    const setLightMode = () =>{
        document.querySelector("body").setAttribute('data-theme', 'light')
        console.log("light mode on")
    }
    
    const toggleTheme = (e) => {
        if(e.target.checked) setDarkMode()
        else setLightMode();
    };

    return(
        <>
            <label className="switch">
                <input 
                    type="checkbox"
                    onChange={toggleTheme}
                />
                <span className="slider round"></span>       
            </label>
        </>
    )
}

export default DarkMode