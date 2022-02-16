import React from 'react';
import teamBG from '../../../Assets/Images/team.jpg';
import './Team.scss';
import {dataTeam} from "./fakeData";
import TeamList from "./TeamList/TeamList";

function Team() {
    return (
      <div className='team'>
          <div className='team-container'>
              <div className='image-background' style={{backgroundImage: `url(${teamBG})`}} />
              <div className='black-back black'>
                  <div className='wrapper-main padding'>
                      <div className='team-content'>
                          <div className='title-header'>

                          </div>
                          <div className='list-wrapper'>
                              <div className='wrap'>
                                  {
                                      dataTeam.map((item) => (
                                        <TeamList key={item.id} item={item} />
                                      ))
                                  }

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    )
}

export default Team;