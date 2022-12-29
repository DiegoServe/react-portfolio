import React from "react";
import LinkedInProfileBadge from 'react-linkedin-profile-badge';

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Diego Conserve</h2>
          <ul>
            <li>
              Add Information Later
            </li>
          </ul>

          <p class="mt-5">
          <LinkedInProfileBadge profileId='diegoconserve' theme='light' size='medium' orientation='vertical'/>
          </p>

          <a
            href="resume hyperlink"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
           Add Information Later
            </li>
            <li>
            Add Information Later
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
