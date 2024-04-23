import React from "react";
import "./Widgets.css";
import { FiberManualRecord, Info } from "@mui/icons-material";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle(
        "Life Update",
        "i am really tired but i would like to finish strong"
      )}
      {newsArticle(
        "Life Update",
        "i am really tired but i would like to finish strong"
      )}
      {newsArticle(
        "Life Update",
        "i am really tired but i would like to finish strong"
      )}
      {newsArticle(
        "Life Update",
        "i am really tired but i would like to finish strong"
      )}
    </div>
  );
};

export default Widgets;
