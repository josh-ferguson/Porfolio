import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <span className="upper-top"></span>
                <span className="upper-bottom"></span>
                    <div className="wrapper">
                        <h1>ABOUT ME</h1>
                        <p>
                            I have recently graduated with a Masters 
                            degree from the University of Portsmouth 
                            with skills in web design, databases,
                            and website usability. I’m now 
                            looking for a challenging front end developer 
                            role in website development.
                        </p>
                    </div>
                <span className="lower-top"></span>
                <span className="lower-bottom"></span>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src="assets/profilepic2.jpg" alt="Profile" />
                </div>
            </div>
        </div>
    )
}
