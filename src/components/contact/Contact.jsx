import "./contact.scss"

export default function contact() {
    return (
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
            <div className="linksContainer">
                <span>+44 7719 321399</span>
                <span><a href="mailto: joshferguso@hotmail.co.uk">joshferguso@hotmail.co.uk</a></span>
                <span><a href="https://www.linkedin.com/in/josh-ferguson-955532222/" target="_blank">LinkedIn</a></span>
                <span><a href="https://github.com/josh-ferguson" target="_blank">GitHub</a></span>
            </div>
            <div className="formContainer">
                <form>
                    <input type="text" id="name" placeholder="Name" required/>
                    <input type="email" id="email" placeholder="Email" required/>
                    <input type="text" id="subject" placeholder="Subject" required/>
                    <textarea id="message" rows="8" placeholder="Message..." required></textarea>
                    <button type= "submit">Send</button>
                </form>
            </div>
        </div>
    )
}
