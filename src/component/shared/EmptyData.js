import React from "react";

function EmptyData({ title, content }) {
  return (
    <div className="no_data">
      <span className="folder__icon">
        <i class="fa fa-folder-open" aria-hidden="true"></i>
      </span>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default EmptyData;
