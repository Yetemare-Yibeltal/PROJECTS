import React from "react";
import WorkThumbnail from "../LatesWor-Thumbnail/WorkThumbnail";
import flower from "../../Images/flower.jpg"
function Latestwork() {
  return (
    <div>
      <div className="latest-work-wrapper">
        <div className="latest-work-title">
          <h1> My Latest Work</h1>
        </div>
        <div className="latest-work-component-wrapper">
          <WorkThumbnail
            WorkThumbnailImage={flower}
            WorkThumbnailTitle="Youtube Clone"
          />
          <WorkThumbnail
            WorkThumbnailImage={flower}
            WorkThumbnailTitle="Youtube Clone"
          />
          <WorkThumbnail
            WorkThumbnailImage={flower}
            WorkThumbnailTitle="Youtube Clone"
          />
          <WorkThumbnail
            WorkThumbnailImage={flower}
            WorkThumbnailTitle="Youtube Clone"
          />
          <WorkThumbnail></WorkThumbnail>
          <WorkThumbnail></WorkThumbnail>
          <WorkThumbnail></WorkThumbnail>
          <WorkThumbnail></WorkThumbnail>
          <WorkThumbnail></WorkThumbnail>
          <WorkThumbnail></WorkThumbnail>
        </div>
      </div>
    </div>
  );
}

export default Latestwork;
