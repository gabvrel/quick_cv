import React, { Fragment } from "react";
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Portfolio from "./Porfolio";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));


function getSteps() {
    return ['Employment History', 'Education', 'My Recent Projects'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return [["Sofware Developer at nONe Agency, Moscow", "2017-2018",
                `nOne is an advertising agency located in MOscow, Russia`,
                "https://none.ru"],
            ["Frontend Developer at Ntl-Wealth, Panama", "2018-2019",
                "A tax haven consulting company", "https://panamaresidency.net"],
            ["Freelance Software Enginner, Quito", "2019-Current",
                "Designer, Mobile and Desktop app developer", undefined]
            ];
        case 1:
            return [["Computer Science Engginner, Moscow Power Enginnering Institute, Moscow",
                "2012-2017", "The Moscow Power Engineering Institute today is one of the largest technical universities in Russia in the field of power engineering, electrical engineering, electronics, computer science MEI has been training engineering and scientific personnel for foreign countries since 1946. Currently, students and postgraduates from 68 countries of the world study at MPEI",
                "https://mpei.ru/Pages/default.aspx"]];
        case 2:
            return [[]];
        default:
            return 'Unknown step';
    }
}


const Profile = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className="Profile">
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel><h2>{label}</h2></StepLabel>
                        <StepContent>
                            {getStepContent(index).map((el, i) => {
                                return (
                                    <div className="content" key={i}>
                                        {el.length === 0 ? <Portfolio />
                                            :
                                            <Fragment>
                                                <h2>{el[0]}</h2>
                                                <div>
                                                    <h3>{el[1]}</h3>
                                                    <p>{el[2]}</p>
                                                    {el[3] !== undefined ?
                                                        <Link href={el[3]}>
                                                            Visit Webpage
                                                </Link>
                                                        :
                                                        undefined
                                                    }
                                                </div>
                                            </Fragment>
                                        }
                                    </div>
                                )
                            })}

                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                  </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
          </Button>
                </Paper>
            )}
        </div>
    )
}

export default Profile;