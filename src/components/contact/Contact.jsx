import "./contact.scss"

export default function contact() {
    return (
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
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
