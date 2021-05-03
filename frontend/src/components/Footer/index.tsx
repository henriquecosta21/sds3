import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/styles.css';

function NavBar() {
    return (
        <div>
            <footer className="footer mt-auto py-3 bg-dark">
                <div className="container">
                    <p className="text-light">App desenvolvido por <a href="https://github.com/YoCypher" target="_blank" rel="noreferrer">Henrique Costa</a></p>
                    <p className="text-light"><small><strong>Semana Spring React</strong><br />
                    Evento promovido pela escola DevSuperior: <a href="https://instagram.com/_costahenry" target="_blank" rel="noreferrer">@_costahenry</a></small></p>
                </div>
            </footer>
        </div>
    );
}

export default NavBar;