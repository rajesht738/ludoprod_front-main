import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Rightcontainer from "../Components/Rightcontainer";
const Gamerules = () => {
  return (
    <div>
        <div className="leftContainer" style={{minHeight:'100vh',height:'100%'}}>
            
      <div className="m-3 py-5 pt-3 px-3">
        <h1><strong>Ludo Rules</strong></h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Ludo Rules
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-12">
            <h4><strong>Game Rules:</strong></h4>
            <ol className="rules-list">
              <li>
                On winning both players have to update their results in
                following manner:
                <ul>
                  <li>
                    If you have won the battle, select ‘I Won’ option and upload
                    winning screenshot of the game.
                  </li>
                  <li>If you have lost the battle, select ‘I Lost’ option.</li>
                  <li>
                    If your battle is not started and your opponent doesn't want
                    to play, select ‘Cancel’ option.
                  </li>
                </ul>
              </li>
              <li>
                A player must have to record every game, and if any player is
                hacking or cheating in a game, please contact support with video
                proof.
              </li>
              <li>
                If your game is not started, and if you haven't played a single
                move yourself, please show us a recording of the game as proof.
                The game will be canceled only if you have recorded.
              </li>
              <li>
                If you don't have any proof against player cheating and error in
                the game, then you will be considered as lost for a particular
                battle.
              </li>
              <li>
                If you haven't moved a single pawn or no pawn is open yet, i.e.
                all pawns are at home, then your game will be cancelled.
              </li>
              <li>
                If your opponent leaves match purposely in starting or initial
                game, and the opponent doesn't have any valid proof of
                cancellation, you will be awarded a 50 % win.
              </li>
            </ol>
            <h4><strong>Commission Rates:</strong></h4>
            <ol className="rules-list">
              <li>
                Battle below 250₹, <b>10% commission</b> will be charged on
                battle amount.
              </li>
              <li>
                Battle between 250₹ to 500₹, <b>flat 25₹</b> commission will be
                charged.
              </li>
              <li>
                Battle above 500₹, <b>5% commission</b> will be charged on
                battle amount.
              </li>
            </ol>
          </div>
        </div>
      </div>
      </div>
      <div className="rightContainer">
          <Rightcontainer/>
      </div>
    </div>
  );
};
export default Gamerules;