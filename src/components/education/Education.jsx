import "./education.scss"

export default function Education() {
    return (
        <div className="education" id="education">
            <h1>Education</h1>
            <div className="container">
                <div className="left">
                    <div className="textContainer">
                        <h2>BACHELOR OF SCIENCE IN COMPUTING</h2>
                        <h3>University of Portsmouth - 2020: 2:2</h3>
                        <ul>
                            <li>
                                Website Development
                            </li>
                            <li>
                                User Experience Design
                            </li>
                            <li>
                                Databases
                            </li>
                            <li>
                                Individual Project (Website Development)
                            </li>
                            <li>
                                Computing Concepts
                            </li>
                            <li>
                                Networking
                            </li>
                            <li>
                                Programming
                            </li>
                            <li>
                                Business Information Systems Security
                            </li>
                            <li>
                                Operating Systems
                            </li>
                        </ul>
                    </div>
                    <div className="textContainer">
                        <h2>MASTER OF SCIENCE IN INFORMATION SYSTEMS</h2>
                        <h3>University of Portsmouth - 2021: Merit</h3>
                        <ul>
                            <li>
                                Web Product Development and Management
                            </li>
                            <li>
                                User Experience Design
                            </li>
                            <li>
                                Database Management
                            </li>
                            <li>
                                Masters Engineering Project (Website)
                            </li>
                            <li>
                                Systems Analysis for Business
                            </li>
                            <li>
                                Managing Information Systems
                            </li>
                            <li>
                                Computer Management and Networking
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <h2>SKILLS:</h2>
                    <ul>
                        <li><a href="">HTML</a></li>
                        <li><a href="">CSS/SASS</a></li>
                        <li><a href="">JAVASCRIPT</a></li>
                        <li><a href="">REACT.JS</a></li>
                        <li><a href="">NODE.JS</a></li>
                        <li><a href="">DATABAES</a></li>
                        <li><a href="">UX DESIGN</a></li>
                    </ul>
                    <div className="imgContainer">
                        <img 
                            src="assets/graduation-hat.png" 
                            alt="Graduation hat" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
