import React from 'react';
import resume from "./Assets/resume.PDF";

const Resume = () => {
    return (
        <div>
        <h1>Résumé</h1>
        <hr />
          <div className="row">  
           <div className='col-sm-12'>
             <p>
              <embed src={resume} width="800" height="2100"></embed>
             </p>
            </div>
          </div>
          </div>
    );
};

export default Resume;