import React from "react";

const Section = ({ title, children, isNew }) => {
  return (
    <section>
      <h2>{title}</h2>
      {isNew ? (
        <>
          <p>New category</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </>
      ) : (
        <p>Old caegory</p>
      )}
      {children}
    </section>
  );
};

Section.defaultProps = {
  isNew: false,
};

export default Section;
