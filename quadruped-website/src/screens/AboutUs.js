import Members from "./Members.js"; 

function AboutUs () { 
    return (
        <div className="App"> 
            <h1> Who We Are </h1> 
            <h2> We're Sparkers! </h2> 
            <h3> a team like no others. </h3> 
            
            <p>
                <b> Our Story </b> 
                Team Sparky is built upon a unique breadth of students leading
                computational and data driven projects at Boston University.
                Being a startup in Boston, including members from all over the
                world, our team philosophy draws from western development
                principles couples with diverse flair and creativity. 
            </p>

            <p> 
                <b> Our Inspiration </b> 
                During quarantine, we realized that people had a hard time being away from other people.
                It was a very isolating time for many. Feelings of loneliness, stress, etc 
                were common during this time period. We want to create a robot to help people 
                cope with these negative feelings. By creating Sparky, we hope to mitigate such 
                struggles with a playful robotic pet to provide companionship. 
            </p>

            <p> 
                <b> We are Dedicated To </b>
                Leveraging our unique multi-cultural perspective and 
                experiences to build a truly companion robot that helps
                the post COVID-19 population who want to experience pet-
                like companionship. 
            </p> 

            <Members img = "" name="Anvesh" role="Team Lead"/> 
            <Members img = "" name="Grace" role="Technical Teammate"/> 
            <Members img = "" name="Weiqi" role="Technical Teammate"/> 
            <Members img = "" name="Wanjing" role="Art Director"/>
            <Members img = "" name="Maisha" role="Technical Teammate"/>  
        </div> 
    ); 
}

export default AboutUs; 