import '../Main/Main.scss'


const Main = ({children}) => {

    return (
        <>
            <main>
                <div className='div101'>{children[0]}</div>
                <div className='div102'>{children[1]}</div>
            </main>
        </>
    )
}

export default Main