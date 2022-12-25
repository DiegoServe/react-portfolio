import React from 'react';
let url = "https://picsum.photos/id/334/200/300";





function About() {

    return(
        <section className="container">
            <h2 class="top-title">Diego Conserve</h2>
            <hr></hr>
            <div>
            <img src={url} class="mb-5" id="avatar" alt="Place Holder" />

                <p>
                    Jr programmer based out of Washington DC incorporating user and business requirements into secure
                    and user-friendly solutions known for scalability and durability.
                </p>
                <p>
                  
                </p>
                <p>
                
                </p>
            </div>
        </section>
    )
}

export default About;