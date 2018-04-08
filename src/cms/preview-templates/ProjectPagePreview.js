import React from "react";
import PropTypes from "prop-types";
import { ProjectPageTemplate } from "../../templates/project-page";

const ProjectPage = ({ entry, getAsset }) => {
  const entryProjects = entry.getIn(["data", "intro", "projects"]);
  const projects = entryProjects ? entryProjects.toJS() : [];

  const entryTestimonials = entry.getIn(["data", "testimonials"]);
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

  return (
    <ProjectPageTemplate
      image={entry.getIn(["data", "image"])}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
      intro={{ projects }}
      main={{
        heading: entry.getIn(["data", "main", "heading"]),
        description: entry.getIn(["data", "main", "description"]),
        image1: {
          image: getAsset(entry.getIn(["data", "main", "image1", "image"])),
          alt: entry.getIn(["data", "main", "image1", "alt"])
        },
        image2: {
          image: getAsset(entry.getIn(["data", "main", "image2", "image"])),
          alt: entry.getIn(["data", "main", "image2", "alt"])
        },
        image3: {
          image: getAsset(entry.getIn(["data", "main", "image3", "image"])),
          alt: entry.getIn(["data", "main", "image3", "alt"])
        }
      }}
      fullImage={entry.getIn(["data", "full_image"])}
      testimonials={testimonials}
    />
  );
};

ProjectPage.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ProjectPage;
