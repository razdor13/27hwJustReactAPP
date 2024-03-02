import '../app/app.scss'
import Header from '../Header/Header.jsx'
import Description from '../Description/Description.jsx'
import Logo from '../Logo/Logo.jsx'
import Main from '../Main/Main.jsx'
import MenuItem from '../MenuItem/MenuItem.jsx'

const App = () => {
    return (
        <>
             <div className="container px-3 mx-auto">
                <Header>
                    <MenuItem/>
                </Header>
                <Main>
                    <Description/>
                    <Logo/>
                </Main>
            </div>
        </>
    )
}


export default App