
import '../Header/Header.scss'


const Header = ({children}) => {



    return (
        <header>
            <img src="https://cdn.icon-icons.com/icons2/2852/PNG/512/burger_fast_food_icon_181517.png" alt="" />
            {children}
        
        </header>
    )
}

export default Header