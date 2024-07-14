import React from "react";
import photoresize from '../assert/photoresize1.jpg'

export default function About() {
  return (
    <div className='about'>
        <div className='photo'>
            <img src={photoresize} alt="kaba"/>
        </div>
        <p>
            Hi, I am kaba, pursuing full-stack engineering, my goal is to become a
              guru in software engineering, in my free time, i love to bike, cook , jog .
          </p>
          <p>
              I am very hardworking and dedicated to my job. I always deliver what
              I promise to do. I do job much proficiency, make sure it is deliver on time.

              I am always ready to give my best effort for the job. Trust and regular
              communication are the main weapons of my service.

              I believe in client satisfaction putting small on their faces.
          </p>

    </div>
  );
}
