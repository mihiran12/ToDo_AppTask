import UserInput from '../../component/userInput/UserInput';
import Title from '../../component/title/Title';
import Footer from '../../component/footer/Footer';
import DarkMode from '../../component/darkMode/darkMode';

function Home() {
    return(
        <>
        <div className="app-container">
            <DarkMode/>
            <Title/>
            <UserInput/>
            <Footer/>
        </div>
        </>
    )
}

export default Home;