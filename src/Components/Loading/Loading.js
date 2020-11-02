import React from "react";

const Loading = () => {
  return (
    <div
      class="spinner-border text-info"
      role="status"
      style={{ marginTop: "250px", marginLeft : "50%" }}
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
