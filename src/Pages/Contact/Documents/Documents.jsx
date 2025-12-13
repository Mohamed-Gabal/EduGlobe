import React from "react";
import DocumentsData from "./DocumentsData";
import "./Documents.css";

const Documents = () => {
  return (
    <section className="documents">
      {/* Header */}
      <header className="documents__header">
        <h2 className="documents__title">
          Required Documents for Enrollment
        </h2>
        <p className="documents__description">
          Please prepare the following documents before applying
        </p>
      </header>

      {/* Grid */}
      <div className="documents__grid">
        {DocumentsData.map(
          ({ id, icon, title, description, meta, metaIcon }) => (
            <article key={id} className="documents__card">
              <img
                src={icon}
                alt={title}
                className="documents__icon"
                loading="lazy"
              />

              <div className="documents__content">
                <h3 className="documents__cardTitle">{title}</h3>
                <p className="documents__cardDescription">{description}</p>

                <span className="documents__meta">
                  <img src={metaIcon} alt="" />
                  {meta}
                </span>
              </div>
            </article>
          )
        )}
      </div>

      {/* Footer CTA */}
      <div className="documents__cta">
        <p>Need help with document preparation?</p>
        <button type="button" className="documents__button">
          View Complete Guidelines
        </button>
      </div>
    </section>
  );
};

export default Documents;
