export default function NavBar() {
    return (
        <div className="site-header light-color">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <div className="site-logo"><a href="/"><img className="light" src="/assets/images/logo.webp"
                            alt="Elev8 FX" /><img className="dark" src="/assets/images/logo.webp"
                                alt="Elev8 FX" /></a>
                        </div>
                    </div>
                    <div className="right col-auto">
                        <nav className="navigation visible_menu">
                            <ul id="menu-menu-1" className="menu">
                                <li id="menu-item-811"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-811">
                                    <a href="/about/"><span>About</span></a></li>
                                <li id="menu-item-814"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-814">
                                    <a href="/services/"><span>Services</span></a></li>
                                <li id="menu-item-815"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-815"><a
                                        href="https://elev8exchange.sciopay.co/login" target="_blank"><span>Log In</span></a></li>
                                <li id="menu-item-813"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-813">
                                    <a href="/security/"><span>Security</span></a></li>
                                <li id="menu-item-812"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-812">
                                    <a href="/contact/"><span>Contact</span></a></li>
                            </ul>
                        </nav>
                        <div className="nav-butter visible_menu">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}