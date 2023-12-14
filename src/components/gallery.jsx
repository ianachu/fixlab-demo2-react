import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
          Explore our triumphs! Our gallery proudly displays a culmination of our successful completed projects, each a testament to our commitment to excellence and innovation. From intricate network installations to comprehensive cybersecurity solutions, each project exemplifies our dedication, expertise, and unwavering pursuit of delivering superior results. Dive into our gallery to witness firsthand the diversity, quality, and success stories that define our journey at FixLab. We take immense pride in showcasing our achievements, representing the trust and satisfaction of our clients in our services and solutions.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
