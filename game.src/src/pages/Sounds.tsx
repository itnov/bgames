import React, { useState } from "react";
import CardLine from '../molecules/CardLineGrid';
import CardLinePreview from '../molecules/CardLinePreview';
import {    
  A2ZSounds,
  ConsonantDigraphs,
  Dynosaurs
} from '../data/Sounds';

function Sounds() {
  const section = {
    HOME: 'more',
    A2ZSOUNDS: 'A to Z Sounds',
    CONSONANT_DIAGRAPHS: 'Consonant Digraphs',
    DYNOSAURS: 'Dynosaurs',
  }

  const [ activeSection, setActiveSection ] = useState(section.HOME);

  return (
    <>
      <nav className="sub-menu">
        <ul>
        { activeSection != section.HOME &&
          <ul>
            <li onClick={() => setActiveSection(section.HOME)}>{section.HOME}</li>
          </ul>
        }
        { activeSection === section.HOME && 
          <>
            <li onClick={() => setActiveSection(section.A2ZSOUNDS)}>{section.A2ZSOUNDS}</li>
            <li onClick={() => setActiveSection(section.CONSONANT_DIAGRAPHS)}>{section.CONSONANT_DIAGRAPHS}</li>
            <li onClick={() => setActiveSection(section.DYNOSAURS)}>{section.DYNOSAURS}</li>
          </>
        }
        </ul>
      </nav>

      { activeSection === section.A2ZSOUNDS && <CardLine data={A2ZSounds} /> }
      { activeSection === section.CONSONANT_DIAGRAPHS && <CardLine data={ConsonantDigraphs} /> }
      { activeSection === section.DYNOSAURS && 
        <>
          <CardLinePreview data={Dynosaurs.filter(el => el.spell)} /> 
          <hr/>
          <p>All Dynosaurs</p>
          <CardLinePreview data={Dynosaurs} />
        </>
      }
    </>
  );
}

export default Sounds;