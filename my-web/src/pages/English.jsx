import React from "react";
import "../App.css";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

function English() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <section className="m-auto">
        {/* <!--------------------- Intro --------------------------------------------------------------> */}
        <div className="text-center text-[0.6rem] tablet:text-base laptop:text-xl">
          <h1 className="font-bold bg-gradient-to-br from-blue-700 to-green-400 bg-clip-text text-transparent box-decoration-clone">
            <span className="leading-normal">
              <p>Eng. Orlando Mata Monge</p>
              <p>Chemical Engineer</p>
              <p>Energy and Sustainability Master's Degree</p>
            </span>
          </h1>
        </div>

        <div className="text-xl m-2 grid tablet:text-2xl laptop:text-3xl tablet:grid-cols-3">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                clip-rule="evenodd"
              />
            </svg>
            Madrid, 28009
          </div>
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2 5.6V18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V5.6l-.9.7-7.9 6a2 2 0 0 1-2.4 0l-8-6-.8-.7Z" />
              <path d="M20.7 4.1A2 2 0 0 0 20 4H4a2 2 0 0 0-.6.1l.7.6 7.9 6 7.9-6 .8-.6Z" />
            </svg>
            <a href="mailto:orl1289@gmail.com">orl1289@gmail.com</a>
          </div>
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z" />
            </svg>
            +34 692 536587
          </div>
        </div>

        {/* // <!--------------------- Education --------------------------------------------------------------> */}
        <div className="text-center p-4 m-2">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2c.6 0 1-.4 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Education
            </h1>
          </div>

          <h2 className="text-[1.3rem] p-4 font-semibold list-item list-inside tablet:text-2xl laptop:text-3xl">
            University of Vigo
            <p className="italic">
              {" "}
              Energy and Sustainability Master's Degree (2023)
            </p>
          </h2>
          <h2 className="text-[1.3rem] p-4 font-semibold list-item list-inside tablet:text-2xl laptop:text-3xl">
            University of Costa Rica
            <p className="italic"> License in Chemical Engineering (2019)</p>
          </h2>
        </div>

        {/* <!--------------------- Experience --------------------------------------------------------------> */}
        <div className="text-center p-4 m-2">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.4l1.4.7a7.7 7.7 0 0 0 .7.3 21 21 0 0 0 16.4-.3l1.5-.7V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.4 7.9.6-.3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.4l.6.3a10 10 0 0 0 .7.3 23 23 0 0 0 18-.3h.1L21 13l.4.9ZM12 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Professional Experience
            </h1>
          </div>
        </div>

        {/* < />!-- Edit Experience  --> */}
        {/* <!-- #1 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            {" "}
            <p className="text-violet-950 text-4xl">
              Global Quality Management Systems
            </p>
            <p>
              <i>Merck Healthcare</i>
            </p>
            <p>
              <i> July 2024 - Currently - (Madrid, Spain)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Act as site lead user for HCQ global functions, enabling diligent
              management over the documentation lifecycle in the electronic
              quality management system.
            </p>
            <p className="list-item list-inside p-2">
              Implement programs to maintain quality standards for existing
              products.
            </p>
            <p className="list-item list-inside p-2">
              Promote employee engagement in quality improvement initiatives, by
              developing policies, procedures, and methods.
            </p>
            <p className="list-item list-inside p-2">
              Create and maintain data records to enable operations the on-time
              assessment and evaluation of global documents.
            </p>
            <p className="list-item list-inside p-2">
              Guarantee the documentation system is effective and compliant,
              with users and approvals adhering to standards and specific rules.
            </p>
            <p className="list-item list-inside p-2">
              Support global Process Owners on documentation-related topics,
              ensuring compliance with quality standards and alignment with
              corporate procedures across cross-functional teams.
            </p>
            <p className="list-item list-inside p-2">
              Ensure that identified risks are appropriately and timely
              escalated for immediate remediation.
            </p>
            <p className="list-item list-inside p-2">
              Actively identify needs of users, to understand requirements and
              translate these into specific actions and workflows.
            </p>
            <p className="list-item list-inside p-2">
              Provide support to users and follow-up items for effective quality
              documentation control management process.
            </p>
            <p className="list-item list-inside p-2">
              Provide training and ensure users are adequately trained, to
              foster an informed user base that can effectively navigate the
              eQMS.
            </p>
            <p className="list-item list-inside p-2">
              Generate reports and metrics that help track the compliance and
              efficiency of the processes and contribute the overall digital
              ecosystem with long-term solutions.
            </p>
            <p className="list-item list-inside p-2">
              Developed excellent practical expertise of pharma terminology and
              Good Manufacturing Practices (GMP), applicable regulatory
              requirements such as FDA 21 CFR Part 820, ICH Q7, ICH Q9, ICH Q10,
              and quality management processes (Deviations, CAPA, Change
              Control).
            </p>
            <p className="list-item list-inside p-2">
              Familiarity with somatropin recombinant DNA biotechnology and its
              manufacturing processes (upstream and downstream), its critical
              quality attributes, cell culture media and single-use
              technologies.
            </p>
          </div>
        </div>

        {/* <!-- #2 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">Engineering Intern</p>
            <p>
              <i>Voltfer</i>
            </p>
            <p>
              <i>April 2023 to May 2023 - (Vigo, Spain)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Participated in tasks related to the design of photovoltaic
              systems for domestic and industrial self-consumption projects, as
              part of professional internship.
            </p>
            <p className="list-item list-inside p-2">
              Provided commercial support by identifying prospects located in
              Pontevedra and the surrounding areas and kept record of these
              potential clients.
            </p>
            <p className="list-item list-inside p-2">
              Enhanced proficiency in calculating production estimates from
              meteorological data sources, technical drawing, design techniques,
              norms and regulations within the renewable industry.
            </p>
          </div>
        </div>
        {/* < />!-- #3 --> */}
        <div className="text-primary-600 text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">
              Team Manager, Data Management
            </p>
            <p>
              <i>Amazon</i>
            </p>
            <p>
              <i>August 2021 to August 2022 - (San José, Costa Rica)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Reported directly to the corporate office located in different
              geography and time zone, in a multicultural environment.
            </p>
            <p className="list-item list-inside p-2">
              Managed day-to-day operations of a remote team of 8 people and +70
              processes in scope for EMEA and LATAM markets, navigating
              increased complexity due to processes spanning Italian, French,
              and Spanish.
            </p>
            <p className="list-item list-inside p-2">
              Determined KPI’s, team objectives and higher-level strategies for
              the operational business.
            </p>
            <p className="list-item list-inside p-2">
              Presented biweekly data briefings to level up management for the
              review of team performance metrics and other key points.
            </p>
            <p className="list-item list-inside p-2">
              Project-managed activities related to the intake or migration of
              processes, based on the DM service catalogue and scope.
            </p>
            <p className="list-item list-inside p-2">
              Prepared the Annual Team’s performance and talent review based on
              monthly analysis findings, feedback and improvement opportunities.
            </p>
            <p className="list-item list-inside p-2">
              Created and implemented mechanisms to forecast demand needs to
              ensure headcount availability.
            </p>
            <p className="list-item list-inside p-2">
              Recruited, trained and supervised personnel in areas of product
              knowledge and customer service.
            </p>
            <p className="list-item list-inside p-2">
              Coached and helped peers develop their potential by delegating
              assignments accordingly.
            </p>
            <p className="list-item list-inside p-2">
              Anticipated the successful implementation of tools, information,
              and resources for the team.
            </p>
            <p className="list-item list-inside p-2">
              Developed effective professional network opportunities by
              participating in forums/projects as appropriate and attended
              regular professional members meetings with level up management.
            </p>
          </div>
        </div>
        {/* < />!-- #4 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">
              Process Lead, Data Management
            </p>
            <p>
              <i>Amazon</i>
            </p>
            <p>
              <i>October 2020 to July 2021 - (San José, Costa Rica)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Promoted from Sr. Associate to Process Lead by offering
              high-volume processing, top performance and fostered
              collaboration.
            </p>
            <p className="list-item list-inside p-2">
              Ensured optimum personnel utilization by allocating tasks timely
              and efficiently based on their availability and expertise.
            </p>
            <p className="list-item list-inside p-2">
              Monitored the compliance of daily metric values (SLA and other
              KPI's) through several visualization dashboard tools.
            </p>
            <p className="list-item list-inside p-2">
              Coordinated the continuous process improvement proposals under
              solid data management policies and procedures.
            </p>
            <p className="list-item list-inside p-2">
              Supplied the reporting and information access needs by designing
              simple and complex queries in the application tool.
            </p>
            <p className="list-item list-inside p-2">
              Conducted the review of defects, difficult cases, and escalations
              according to the severity impact scale to meet client
              requirements.
            </p>
            <p className="list-item list-inside p-2">
              Performed root cause analysis techniques (RCA), investigating
              discrepancies in processes to uncover weaknesses and implement
              corrective actions.
            </p>
            <p className="list-item list-inside p-2">
              Acted as a point of contact between other internal stakeholders
              and the team.
            </p>
            <p className="list-item list-inside p-2">
              Established a channel for the update of Standard Operation
              Procedures, and prioritized training delivery about new changes.
            </p>
            <p className="list-item list-inside p-2">
              Configured and tested the multi asset tools and process solutions
              before implementation.
            </p>
            <p className="list-item list-inside p-2">
              Drafted and responded to claims during and after any process
              intake or migration.
            </p>
          </div>
        </div>
        {/* < />!-- #5 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">
              Sr. Associate, Data Management
            </p>
            <p>
              <i>Amazon</i>
            </p>
            <p>
              <i>September 2017 to September 2020 - (San José, Costa Rica)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Ensured high-quality customer service by providing timely and
              accurate resolution, managing communication and data interactions
              with stakeholders through the ticketing system.
            </p>
            <p className="list-item list-inside p-2">
              Managed and optimized transactional processes within PS Oracle
              (RDBMS), ensuring data accuracy, integrity, and compliance with
              organizational standards and regulatory requirements.
            </p>
            <p className="list-item list-inside p-2">
              Collaborated cross-functionally with peers to identify
              requirements, streamline workflows, and optimize processes.
            </p>
            <p className="list-item list-inside p-2">
              Demonstrated a strong commitment to personal and professional
              growth by actively seeking opportunities to learn and taking on
              new responsibilities as they arose.
            </p>
          </div>
        </div>
        {/* < />!-- #6 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">
              Chemistry Laboratory Assistant
            </p>
            <p>
              <i> University of Costa Rica</i>
            </p>
            <p>
              <i>August 2015 to March 2017 - (San José, Costa Rica)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Prepared and delivered lectures to students, providing both
              theoretical knowledge and practical demonstrations to enhance
              understanding in accordance with the course program.
            </p>
            <p className="list-item list-inside p-2">
              Supervised the laboratory sessions ensuring adherence to safety
              protocols and proper handling of equipment and materials.
            </p>
            <p className="list-item list-inside p-2">
              Provided one-on-one assistance during laboratory the sessions,
              offering guidance and support to enhance their learning
              experience.
            </p>
            <p className="list-item list-inside p-2">
              Collaborated with faculty members to assign tests and scoring
              them, and to measure student progress and overall comprehension.
            </p>
          </div>
        </div>
        {/* < />!-- #7 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">
              Potability and Water Treatment Training Coordinator
            </p>
            <p>
              <i>University of Costa Rica</i>
            </p>
            <p>
              <i>August 2014 to November 2015 - (San José, Costa Rica)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Supervised the training of the local offices in charge of the
              aqueduct and sanitary sewer systems, to reduce the risk of
              microbial contamination and non-compliance with national
              regulations, as part of my University Community Work.{" "}
            </p>
            <p className="list-item list-inside p-2">
              Evaluated the quality of drinking water in terms of chemical
              parameters such as COD, hardness and presence of nitrate and
              phosphate from various locations, to ensure compliance with local
              regulations.
            </p>
          </div>
        </div>

        {/* <!----------------------Languages---------------------------------------------------------------------- --> */}

        <div className="text-center p-4 m-2">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M4.4 7.7c2 .5 2.4 2.8 3.2 3.8 1 1.4 2 1.3 3.2 2.7 1.8 2.3 1.3 5.7 1.3 6.7M20 15h-1a4 4 0 0 0-4 4v1M8.6 4c0 .8.1 1.9 1.5 2.6 1.4.7 3 .3 3 2.3 0 .3 0 2 1.9 2 2 0 2-1.7 2-2 0-.6.5-.9 1.2-.9H20m1 4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Languages
            </h1>
          </div>
          <div className="text-xl text-center p-1 m-auto tablet:text-2xl tablet:mx-20">
            <h2 className="p-2 font-semibold list-item list-inside">
              {" "}
              Spanish
              <i className="italic"> (Native)</i>
            </h2>
            <h2 className="p-2 font-semibold list-item list-inside">
              {" "}
              English
              <i className="italic"> (Professional)</i>
            </h2>
            <h2 className="p-2 font-semibold list-item list-inside">
              {" "}
              French
              <i className="italic"> (Fluent)</i>
            </h2>
          </div>
        </div>

        {/* <!-------------------------------Certifications------------------------------------------------------------- --> */}

        <div className="text-center p-4 m-2">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2a3 3 0 0 0-2.1.9l-.9.9a1 1 0 0 1-.7.3H7a3 3 0 0 0-3 3v1.2c0 .3 0 .5-.2.7l-1 .9a3 3 0 0 0 0 4.2l1 .9c.2.2.3.4.3.7V17a3 3 0 0 0 3 3h1.2c.3 0 .5 0 .7.2l.9 1a3 3 0 0 0 4.2 0l.9-1c.2-.2.4-.3.7-.3H17a3 3 0 0 0 3-3v-1.2c0-.3 0-.5.2-.7l1-.9a3 3 0 0 0 0-4.2l-1-.9a1 1 0 0 1-.3-.7V7a3 3 0 0 0-3-3h-1.2a1 1 0 0 1-.7-.2l-.9-1A3 3 0 0 0 12 2Zm3.7 7.7a1 1 0 1 0-1.4-1.4L10 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l5-5Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Courses and Certifications
            </h1>
          </div>
          <div className="text-xl text-center p-1 m-auto tablet:text-2xl tablet:mx-20">
            <h2 className="font-semibold list-item list-inside p-2">
              {" "}
              Measuring Sustainable Development
              <p className="italic"> SDG Academy (2024) - edX Certificate</p>
            </h2>
          </div>
          <div className="text-xl text-center p-1 m-auto tablet:text-2xl tablet:mx-20">
            <h2 className="font-semibold list-item list-inside p-2">
              {" "}
              AWS Cloud Quest: Cloud Practitioner
              <p className="italic">
                {" "}
                Amazon Web Services (2023) - Certificate{" "}
              </p>
            </h2>
          </div>
          <div className="text-xl text-center p-1 m-auto tablet:text-2xl tablet:mx-20">
            <h2 className="font-semibold list-item list-inside p-2">
              {" "}
              Alianza Francesa de San José
              <p className="italic"> DELF Niveau B1 (2012)</p>
            </h2>
          </div>
        </div>

        {/* <!-------------------------------Seminars------------------------------------------------------------- --> */}
        <div className="text-center p-4 m-2">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.5 3A3.5 3.5 0 0 0 14 7L8.1 9.8A3.5 3.5 0 0 0 2 12a3.5 3.5 0 0 0 6.1 2.3l6 2.7-.1.5a3.5 3.5 0 1 0 1-2.3l-6-2.7a3.5 3.5 0 0 0 0-1L15 9a3.5 3.5 0 0 0 6-2.4c0-2-1.6-3.5-3.5-3.5Z" />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Seminars
            </h1>
          </div>
          <div className="text-xl text-center p-1 m-auto tablet:text-2xl tablet:mx-20">
            <h2 className="font-semibold list-item list-inside p-2">
              XXIV Latin American Congress of Students of Chemical Engineering
              and Related Careers
              <p className="italic">
                {" "}
                National Technological University (Buenos Aires, Argentina) -
                2018
              </p>
            </h2>
          </div>
        </div>

        {/* <!--------------------- Skills --------------------------------------------------------------> */}

        <div className="text-primary-600 text-center p-4 m-2">
          <div className="flex justify-center items-center p-1">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-1 9a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm2-5c.6 0 1 .4 1 1v6a1 1 0 1 1-2 0v-6c0-.6.4-1 1-1Zm4 4a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Skills
            </h1>
          </div>

          <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
            <div>Problem-solver</div>
            <div>Analytical</div>
            <div>Collaborative team player</div>
            <div>Team work</div>
            <div>Agile mindset</div>
            <div>Costumer-focused</div>
            <div>Self-motivated</div>
            <div>QMS/PQS</div>
            <div>Planner and conceptualizer</div>
            <div>Autonomous and proactive</div>
            <div>Efective written and oral communication</div>
            <div>Attentive to detail</div>
            <div>Good listener</div>
            <div>Deadline conscious</div>
            <div>Adaptability</div>
            <div>Organizational skills</div>
            <div>Troubleshooter</div>
            <div>Process-oriented</div>
            <div>Entrepreneurial</div>
            <div>Learning oriented</div>
            <div>Data visualization tools</div>
            <div>Used to work in a multicultural environment</div>
            <div>Data extraction and reporting</div>
            <div>Writting of technical documentation</div>
          </div>
        </div>

        {/* <!---------------------Knowledge --------------------------------------------------------------> */}

        <div className="text-center p-4 m-2">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11 21V2.4a3.5 3.5 0 0 0-4.8 1.8A3.5 3.5 0 0 0 4 8l-.7 1.1-.1.4-.1.3a3.5 3.5 0 0 0 0 1.5A3.9 3.9 0 0 0 2 14v.9l.2.6a3.8 3.8 0 0 0 1 1.4 4 4 0 0 0 .6.5v.1A3.5 3.5 0 0 0 7 21a3.4 3.4 0 0 0 4.2.5 1 1 0 0 1-.2-.5Zm11-7.7v-.1a4 4 0 0 0-1-2 3.4 3.4 0 0 0-.2-1.7V9c-.3-.4-.5-.8-.8-1a3.4 3.4 0 0 0-.6-2.6 4 4 0 0 0-1.6-1.3A3.5 3.5 0 0 0 13 2.4V21c0 .2 0 .4-.2.5A3.4 3.4 0 0 0 17 21a3.5 3.5 0 0 0 3-3.5 5.4 5.4 0 0 0 .7-.5 4.2 4.2 0 0 0 .7-.9l.3-.5.2-.7v-.2a4 4 0 0 0 0-1.4Z" />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Knowledge
            </h1>
          </div>
          <h3 className="font-semibold p-2 text-2xl tablet:text-2xl laptop:text-3xl">
            {" "}
            Software
          </h3>
          <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
            <div>Microsoft Word</div>
            <div>Microsoft Excel</div>
            <div>Microsoft Office Power Point</div>
            <div>Autocad</div>
            <div>Matlab</div>
            <div>Minitab </div>
            <div>PowerBi </div>
            <div>Mango Cara Generis</div>
            <div>Palantir Foundry</div>
            <div>Oracle People Soft</div>
            <div>Salesforce CRM</div>
            <div>OnBase ECM</div>
            <div>Alteryx</div>
            <div>Unisim</div>
            <div>Chemcad</div>
            <div>Dialux</div>
            <div>PVSol</div>
            <div>PVGis</div>
            <div>CEX</div>
            <div>HULC</div>
            <div>Cypetherm</div>
            <div>Cloud Services</div>
            <div>AWS Cloud Practitioner</div>
            <div>Amazon QuickSight</div>
          </div>
          <h3 className="font-semibold p-2 text-2xl tablet:text-2xl laptop:text-3xl">
            {" "}
            Programming languages
          </h3>
          <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
            <div>SQL (PostgreSQL)</div>
            <div>Python</div>
            <div>Python Libraries: Pandas,Numpy, Matplotlib</div>
          </div>
          <h3 className="font-semibold p-2 text-2xl tablet:text-2xl laptop:text-3xl">
            Web development
          </h3>
          <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
            <div>CSS</div>
            <div>HTML</div>
            <div>JavaScript</div>
            <div>Libraries: React, Svelte</div>
          </div>
          <h3 className="font-semibold p-2 text-2xl tablet:text-2xl laptop:text-3xl">
            {" "}
            Legislative Framework
          </h3>
          <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
            <div>ISO 9001:2015</div>
            <div>ISO 13485:2016</div>
            <div>EUDRALEX</div>
            <div>Basic Document on Energy Saving (CTE-DB-HE)</div>
            <div>Technical Building Code</div>
            <div>
              National Integrated Energy and Climate Plan (NIECP) for the 2030
              Power Transition
            </div>
          </div>
        </div>
        {/* <!---------------------Professional interest --------------------------------------------------------------> */}

        <div className="text-primary-600 text-center p-4 m-2">
          <div className="flex justify-center items-center">
            <svg
              className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M7 4a7 7 0 0 1 12 5c0 2.4-1.2 3.9-2.2 5v.1c-1 1.3-1.8 2.2-1.8 3.9 0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1c0-1.6-.8-2.6-1.8-3.9C6.2 12.8 5 11.4 5 9a7 7 0 0 1 2-5Zm2 17c0-.6.4-1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.6-13.4A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0c0-.5.2-1 .6-1.4Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
              Areas of professional interest
            </h1>
          </div>
          <div>
            <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
              <div className="list-item list-inside p-2">
                Data Optimization: Dedicated to refining data processes for
                enhanced efficiency and accuracy
              </div>
              <div className="list-item list-inside p-2">
                Sustainable Practices: Committed to driving sustainability
                initiatives to reduce environmental impact.
              </div>
              <div className="list-item list-inside p-2">
                Collaborative Leadership: Skilled in leading diverse teams to
                achieve collective goals.
              </div>
              <div className="list-item list-inside p-2">
                Continuous Improvement: Passionate about streamlining processes
                to maximize productivity.
              </div>
              <div className="list-item list-inside p-2">
                Exceptional Customer Service: Committed to delivering superior
                service through tailored solutions.
              </div>
              <div className="list-item list-inside p-2">
                Effective Project Management: Proficient in overseeing projects
                from inception to completion.{" "}
              </div>
              <div className="list-item list-inside p-2">
                Technological Innovation: Enthusiastic about integrating
                cutting-edge tech for improved operations.
              </div>
              <div className="list-item list-inside p-2">
                Regulatory Adherence: Diligent in ensuring compliance with
                industry regulations and standards.
              </div>
              <div className="list-item list-inside p-2">
                Corporate Social Responsibility (CSR): Committed to supporting
                CSR initiatives through effective data management practices,
                contributing to corporate sustainability and social impact
                goals.{" "}
              </div>
              <div className="list-item list-inside p-2">
                {" "}
                Sustainable Supply Chain Management: Interested in applying data
                management principles to optimize supply chain processes and
                enhance sustainability throughout the value chain
              </div>
              <div className="list-item list-inside p-2">
                Renewable Energy: Interested in leveraging data management
                techniques to optimize renewable energy systems and promote
                sustainable energy solutions.{" "}
              </div>
              <div className="list-item list-inside p-2">
                Carbon Footprint Reduction: Committed to utilizing data-driven
                approaches to track and reduce carbon emissions, promoting
                environmental responsibility and sustainability.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default English;
