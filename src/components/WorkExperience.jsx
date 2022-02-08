import React, { Component } from "react";

import bs from "../components/images/blisstering-solutions.png";
import vb from "../components/images/valuebound.png";
import acquia from "../components/images/acquia.png";
import autodesk from "../components/images/autodesk.png";
import pinger from "../components/images/pinger.png";

class WorkExperience extends Component {
  render() {
    return (
      <section id="workexperienceheader">
        <div>
          <div className="float-child">
            <img src={pinger} width="100" height="100" title="Pinger" alt="" />
          </div>
          <div className="float-child">
            <p>
              Developing data pipelines in Java for data ingestion and data
              transformation. Created a currency conversion framework for
              real-time transactions, consumed by the Pinger financial team.
              Containerizing the services in Docker, in order to make the
              application run faster and more secure. Identified slow API calls
              and optimized them by 25% improving the response time, validated
              by creating a test framework.
            </p>
          </div>
        </div>
        <div>
          <div className="float-child">
            <img
              src={autodesk}
              width="100"
              height="100"
              alt=""
              title="Autodesk"
            />
          </div>
          <div className="float-child">
            <p>
              Working as a part of Customer Data Insights technical initiative
              in the E-commerce team. Built an application using Reactjs to show
              the real-time traces/metrics of the frontend web activities using
              Opentelemetry. Facilitated these real-time traces to generate
              customer segmentation. Used these traces data for distributed
              tracing. Created and documented framework for distributed tracing
              of ecommerce services.
            </p>
          </div>
        </div>
        <div>
          <img src={acquia} width="100" height="100" alt="" title="Acquia" />
          <p>
            Implemented REST API’s to migrate the data from PHP to Node Js
            platform & created frontend React components to show these data.
            Took ownership of the full development life-cycle. Wrote unit tests
            & Integrated those test scripts with Travis CI in order to check for
            errors during end-to-end deployment. Implemented caches (e.g
            Memcache,CDN) to load the contents faster which helped to increase
            traffic. Gathered and analyzed user data metrics from Google
            Analytics to improve our SEO performance.
          </p>
        </div>
        <div>
          <img src={vb} width="100" height="100" alt="" title="Valuebound" />
          <p>
            Developed scalable backend API’s for e-commerce & entertainment web
            applications. Deployed on AWS server with AWS Auto-Scaling. Built
            software to evaluate the cost of migration of data from any platform
            using React, REST, MongoDB & Python Web framework Flask.
          </p>
        </div>
        <div>
          <img
            src={bs}
            width="100"
            height="100"
            alt=""
            title="Blisstering Solutions"
          />
          <p>
            Analysed the code and implemented ElasticSearch, which reduced the
            site’s internal search time from 100ms to 30ms.
          </p>
        </div>
      </section>
    );
  }
}

export default WorkExperience;