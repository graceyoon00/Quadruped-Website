function Members (props) { 
    const Anvesh = "Our beloved Team Lead, head messenger, and a senior\nat Boston University pursuing a Mechanical Engineering\ndegree. Anvesh takes charge of turning Sparky's spirit\ninto reality. Anvesh has never left the Spark Space and\npassionately works day and night to develop Sparky."; 
    const Grace = "Grace is a senior pursuing a dual degree in Computer\nScience and Biology. As a technical messenger, Grace\ncan bring endless enthusiasm and pinpoint focus on\neverything. Rumours behind her beyond-human\nmultitasking skills are plentiful...she's either a cyborg\nor is merely driven by a passion for healthcare and\ntechnology."; 
    const Weiqi = "Never seen without his skateboard, Weiqi is a technical\nmessenger and senior with a hugely inventive spirit\nmajoring in Computer Science. An innovative genius\n with plenty of ideas and obsession of cyber-\nmechatronics, he will create a masterpiece from\nanything."; 
    const Wanjing = "Our art direct and UX designer, Wanjing, is a\nsophomore studying Graphic Design and Computer\nScience. With her incredible artistic skills and knack for\nstorytelling, Wanjing creates the playful world that\nbrings Sparky to life."; 
    const Maisha = "A technical messenger aiding in all needs, Maisha is\ncurrently a sophomore studying Computer Science and\nStatistics. Besides her impressive technical skillset as\na software engineer, Maisha is well-rounded in her\nhobbies and loves to bake, watch soccer, and learn\nnew languages."; 
    
    switch (props.name) { 
        case "Anvesh": 
            return (<div> 
                        <img src={props.img}/>
                        <h1> {props.name} </h1> 
                        <h3> {props.role} </h3> 
                        <p> {Anvesh} </p> 
                    </div> ); 
        case "Grace": 
            return (<div> 
                        <img src={props.img}/>
                        <h1> {props.name} </h1> 
                        <h3> {props.role} </h3> 
                        <p> {Grace} </p> 
                    </div> ); 
        case "Weiqi": 
            return (<div> 
                        <img src={props.img}/>
                        <h1> {props.name} </h1> 
                        <h3> {props.role} </h3> 
                        <p> {Weiqi} </p> 
                    </div> ); 
        case "Wanjing":
            return (<div> 
                        <img src={props.img}/>
                        <h1> {props.name} </h1> 
                        <h3> {props.role} </h3> 
                        <p> {Wanjing} </p> 
                    </div> ); 
        case "Maisha": 
            return (<div> 
                        <img src={props.img}/>
                        <h1> {props.name} </h1> 
                        <h3> {props.role} </h3> 
                        <p> {Maisha} </p> 
                    </div> ); 
        default: 
            return (<div> 
                        <h1> [MEMBER NAME] </h1> 
                        <h3> [MEMBER ROLE]</h3> 
                        <p> [INFORMATION ABOUT MEMBER] </p> 
                    </div> ); 
    }
}

export default Members; 