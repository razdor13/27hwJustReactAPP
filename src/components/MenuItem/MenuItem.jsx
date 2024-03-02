import '../MenuItem/MenuItem.scss'


const MenuItem = () => {

    return (
        <>
           <nav>
                <button type="button" className="btn btn-primary">Main</button>
                <button type="button" className="btn btn-secondary">Questions</button>
                <button type="button" className="btn btn-success">Matirial</button>
                <button type="button" className="btn btn-danger">Contact</button>
            </nav>
        </>
    )
}

export default MenuItem