import '../MenuItem/MenuItem.scss';
import { NavLink } from 'react-router-dom';

const MenuItem = () => {
    return (
        <>
           <nav>
                <NavLink to="/" className="btn btn-primary" activeClassName="active">Main</NavLink>
                <NavLink to="/questions" className="btn btn-secondary" activeClassName="active">Questions</NavLink>
                <NavLink to="/material" className="btn btn-success" activeClassName="active">Material</NavLink>
                <NavLink to="/contact" className="btn btn-danger" activeClassName="active">Contact</NavLink>
            </nav>
        </>
    );
};

export default MenuItem;