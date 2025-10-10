import React from 'react';
import './ContactReach.css';
import contactImage from '../../assets/Lucid_Origin_A_serene_abstract_landscape_blending_light_teal_a_1.jpg';

const ContactReach = () => {
  return (
    <section className="contact-reach">
      <div className="reach-container">
        <div className="reach-text">
          <p className="reach-label">Connect</p>
          <h2 className="reach-title">Reach out</h2>
          <p className="reach-description">
            Direct support for patients seeking clarity in their health journey, powered by human understanding and AI precision.
          </p>
        </div>
      </div>

      <div className="reach-visual">
        <img src={contactImage} alt="Serene landscape" />
      </div>
    </section>
  );
};

export default ContactReach;
