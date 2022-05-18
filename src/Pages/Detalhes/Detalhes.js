
import Header from './../../Components/Header/Header';
import "./Detalhes.css"

function Detalhes () {
    return(
        <div>
            <Header />

            <main>
                <div className="cards">
                    <div className="card">
                            <header>
                                <h2> Nomes das Magias </h2>
                            </header>

                            <div className="line"></div>

                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Data de criação</p>


                    </div>    
                </div>
            </main>

        </div>
    )
}

export default Detalhes