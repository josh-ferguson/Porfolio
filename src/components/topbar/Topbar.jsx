import "./topbar.scss"

export default function Topbar() {
    return (
        <div className="topbar" id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">JoshFerguson.</a>
                    <div className="menu-container">
                        <ul>
                            <li>
                                <a href="#intro" className="menu-btn">About</a>
                            </li>
                            <li>
                                <a href="#education" className="menu-btn">Education</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="menu-btn">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact" className="menu-btn">Contact me</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    
                </div>
            </div>
        </div>
    )
}
