import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'
import './Players.css';

const Players = (props) => {
    //console.log(props.player.name);
    const {name,career,auction_money,image,skill}=props.player;
    const addPlayer=props.passingFunction;

    
    return (
        <div className="col-lg-4 col-md-4  single-player">
            <div className="inner-box shadow p-3 bg-body rounded">
                <div className="img-box">
                    <img src={image} alt={name}/>
                </div>
                
                <h3>{name}</h3>
                <p>Experience: {career} Years</p>
                <p>Auction Money: BDT. {auction_money} </p>
                <p>Speciality: <strong>{skill}</strong></p>
                <button onClick={() => addPlayer(props.player)} className="btn btn-primary mt-2 "><FontAwesomeIcon icon={faPlus} /> Add Player</button>
            </div>
        </div>
    );
};

export default Players;