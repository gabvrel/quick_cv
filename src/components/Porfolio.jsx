import React, {useState} from "react";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import giff from "../assets/covidTask.gif"
import tele from "../assets/Logotipo-Telegram.png" 

const projects = [
    {name: "Galiya", 
     img:  giff,
     desc: "Mobile app developed for a university in an effort to improve old people skills",
     url: "https://github.com/gabvrel/galiya"},
     {name: "CoronaEc_bot", 
     img:  tele,
     desc: "Python/Postgres project for now under development, no link available for now",
     url: undefined}
]


const Portfolio = () => {
    const [data, setData] = useState(0)

    const nextPr = () => {
        setData((prev) => prev + 1)
    };

    const prevPr = () => {
        setData((prev) => prev - 1)
    };

    return(
        <div className="pContainer">
                <Card className="Project">
                <h2>{projects[data].name}</h2>
                <img src={projects[data].img} alt={projects[data].name}/>
                <p>{projects[data].desc} {projects[data].url !== undefined ?
                    <span><a href={projects[data].url}>Link</a> </span>
                 :
                 undefined
                 }
                 </p>
                <div className="nav">
                <Button variant="contained" onClick={prevPr} color= "primary" disabled={data === 0 ? true : false}>
                    Previous Project
                </Button>
                <Button variant="contained" onClick={nextPr} color="primary" disabled={data + 1 === projects.length ? true : false}>
                    Next Project
                </Button>  
                </div>
                </Card>
        </div>

    )
};

export default Portfolio;