import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <header>
            <div class="row h-100 align-items-center" id="header__row">
            <div class="col-8 col-lg-3 col-sm-10 col-md-10" id="header__row__logo-container">
                <img class="img-fluid" src={logo} alt="DuckGames Inicio Logo"/>
            </div>
            <nav class="col-sm-7 d-flex d-none d-sm-none d-md-none d-lg-flex justify-content-around text-light ps-0 pe-5 fs-3" id="header__row__buttons">
                    <div class="navitem"><a class="text-light text-decoration-none" href="/index.html">INICIO</a></div>
                    <div class="navitem"><a class="text-light text-decoration-none" href="">JUEGOS</a></div>
                    <div class="navitem"><a class="text-light text-decoration-none" href="">CONTACTO</a></div>
            </nav>
            <div class="col-4 col-sm-2 col-md-2 d-lg-none">
                <li class="nav-item dropdown text-light fs-3 list-unstyled" id="header__row__dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Menú</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="./index.html">Inicio</a></li>
                        <li><a class="dropdown-item" href="">Nuestros juegos!</a></li>
                        <li><a class="dropdown-item" href="">Contactanos!</a></li>
                    </ul>
                </li>
            </div>           
            <div id="header__row__login" class="col-2 text-center text-light d-none d-sm-none d-md-none d-lg-flex">
                <a class="text-light text-decoration-none" href="">Bienvenido!<br/>Inicia sesión acá!</a>
            </div>
            </div>
        </header> 
    )
}

export default NavBar