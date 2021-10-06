import React from 'react';
import './Statistics.css';
import HowToRegRoundedIcon from '@material-ui/icons/HowToRegRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    color: {
        color: 'var(--mutual-color)',
    },
});
export const Statistics = () => {
    const classes = useStyles();
    return (
        <div className='container'>
            <div className='card-container'>
                <div className='card'>
                    <HowToRegRoundedIcon className={classes.color} />
                    <h2>86%</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='card'>
                    <AssignmentTurnedInRoundedIcon className={classes.color} />
                    <h2>86%</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='card'>
                    <StarBorderRoundedIcon className={classes.color} />
                    <h2>86%</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='card'>
                    <PeopleAltRoundedIcon className={classes.color} />
                    <h2>86%</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
};
