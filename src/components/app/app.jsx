import '../app/app.scss'
import Contact from '../Contact.jsx'
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Questions from '../Questions.jsx'
import Matirial from '../Matirial.jsx'

const App = () => {
    return (
        <HashRouter>
            <div className="container px-3 mx-auto">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/questions" element={<Questions />} />
                        <Route path="/material" element={<Matirial />} />
                    </Routes>
                </main>
            </div>
        </HashRouter>
    )
}


export default App