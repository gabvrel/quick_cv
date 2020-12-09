import React, {useState} from "react";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const projects = [
    {name: "Galiya", 
     img:  "https://www.youtube.com/embed/f14q3nkVevg?rel=0&modestbranding=1",
     desc: "Mobile app developed for an university in an effort to improve old people skills",
     url: "https://github.com/gabvrel/galiya"},
     {name: "Rest Api", 
     img:  "https://www.youtube.com/embed/m-54dKcocJ8?rel=0&modestbranding=1",
     desc: "Django rest api designed for a mobile sales application",
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
                <h2>{projects[data].name}</h2>
                <Card className="Project">
                <iframe src={projects[data].img}
                title={projects[data].name} 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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