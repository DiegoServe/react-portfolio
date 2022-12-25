import React from "react";

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
            <a href="https://www.linkedin.com/in/diegoconserve/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
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
           Add Information later
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
