import React from "react";
import "../App.css";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

function French() {
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
              <p>Orlando Mata Monge</p>
              <p>Ingénieur Chimiste</p>
              <p>Master en Énergie et développement durable</p>
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
              Formation
            </h1>
          </div>

          <h2 className="text-[1.3rem] p-4 font-semibold list-item list-inside tablet:text-2xl laptop:text-3xl">
            Université de Vigo
            <p className="italic">
              {" "}
              Master en Énergie et Développement Durable (2023)
            </p>
          </h2>
          <h2 className="text-[1.3rem] p-4 font-semibold list-item list-inside tablet:text-2xl laptop:text-3xl">
            Université du Costa Rica
            <p className="italic"> Licence in Génie Chimique (2019)</p>
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
              Expérience Professionnelle
            </h1>
          </div>
        </div>
        {/* < />!-- Edit Experience  --> */}
        {/* < />!-- #1 --> */}
        <div className="text-primary-600 text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            {" "}
            <p className="text-violet-950 text-4xl">
              Global Quality Management Systems
            </p>
            <p>
              <i>Merck Healthcare</i>
            </p>
            <p>
              <i> Juillet 2024 - Actuellement - (Madrid, Espagne)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Agir en tant qu'utilisateur principal pour les fonctions globales
              de HCQ, permettant une gestion diligente du cycle de vie de la
              documentation dans le système électronique de gestion de la
              qualité.
            </p>
            <p className="list-item list-inside p-2">
              Mettre en œuvre des programmes visant à maintenir les normes de
              qualité des produits existants.
            </p>
            <p className="list-item list-inside p-2">
              Promouvoir la participation des employés aux initiatives
              d’amélioration de la qualité en élaborant des politiques, des
              procédures et des méthodes.
            </p>
            <p className="list-item list-inside p-2">
              Creation et maintenance des enregistrements de données pour
              permettre aux opérations d'évaluer en temps voulu les documents
              globales.
            </p>
            <p className="list-item list-inside p-2">
              Garantir l’efficacité et la conformité du système de
              documentation, avec utilisateurs et homologations dans le respect
              de normes et de règles spécifiques.
            </p>
            <p className="list-item list-inside p-2">
              Soutenir les global Process Owners sur les sujets liés à la
              documentation, en garantissant le respect des normes de qualité et
              la conformité avec les procédures de l'entreprise au sein des
              équipes interfonctionnelles.
            </p>
            <p className="list-item list-inside p-2">
              S’assurer que les risques identifiés sont signalés de manière
              appropriée et en temps opportun pour une remédiation immédiate.
            </p>
            <p className="list-item list-inside p-2">
              Identifier activement les besoins des utilisateurs, comprendre les
              exigences et les traduire en actions et flux de travail
              spécifiques.
            </p>
            <p className="list-item list-inside p-2">
              Fournir un soutien aux utilisateurs et des éléments de suivi pour
              un processus efficace de contrôle de la documentation de qualité
              et de gestion des dossiers.
            </p>
            <p className="list-item list-inside p-2">
              Assurer la formation et s'assurer que les utilisateurs sont
              correctement formés, afin de favoriser une base d'utilisateurs
              informés qui peuvent naviguer efficacement dans l'eQMS.
            </p>
            <p className="list-item list-inside p-2">
              Générer des rapports et des mesures qui aident à suivre la
              conformité et l'efficacité des processus et contribuent à
              l'écosystème digitale global avec des solutions à long terme.
            </p>
            <p className="list-item list-inside p-2">
              Preuve d'une excellente expérience pratique en terminologie
              pharmaceutique et en bonnes pratiques de fabrication (BPF),
              exigences réglementaires applicables telles que FDA 21 CFR Part
              820, ICH Q7, ICH Q9, ICH Q10 et processus de gestion de la qualité
              (écarts, CAPA, contrôle des changements).
            </p>{" "}
            <p className="list-item list-inside p-2">
              Connaissance de la biotechnologie de l'ADN somatropine
              recombinante et de ses processus de fabrication (upstream et downstream), des attributs de qualité critiques, des milieux de culture
              cellulaire et des technologies à usage unique.
            </p>
          </div>
        </div>
        {/* < />!-- #1 --> */}
        <div className="text-primary-600 text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">Engineering Intern</p>
            <p>
              <i>Voltfer</i>
            </p>
            <p>
              <i>Avril 2023 - Mai 2023 - (Vigo, Espagne)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Participé à des tâches liées à la conception de systèmes
              photovoltaïques pour des projets d'autoconsommation domestique et
              industrielle, dans le cadre d'un stage professionnel.
            </p>
            <p className="list-item list-inside p-2">
              Fourniture d'un support commercial en identifiant les prospects
              situés à Pontevedra et dans les environs, et tenue d'un registre
              de ces clients potentiels.
            </p>
            <p className="list-item list-inside p-2">
              Maîtrise du calcul des estimations de production à partir de
              sources de données météorologiques, de dessins techniques, de
              techniques de conception, de normes et de réglementations dans
              l'industrie des énergies renouvelables.
            </p>
          </div>
        </div>
        {/* < />!-- #2 --> */}
        <div className="text-primary-600 text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">
              Team Manager, Data Management
            </p>
            <p>
              <i>Amazon</i>
            </p>
            <p>
              <i>Août 2021 - Août 2022 - (San José, Costa Rica)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Rendu compte directement à la haute direction situé dans
              différentes régions géographiques et fuseaux horaires, dans un
              environnement multiculturel.
            </p>
            <p className="list-item list-inside p-2">
              Supervisé les opérations quotidiennes d'une équipe à distance de 8
              personnes et de plus de 70 processus pour les marchés EMEA et
              LATAM, dans une complexité accrue due à la diversité des processus
              en langues italienne, française et espagnole.
            </p>
            <p className="list-item list-inside p-2">
              Déterminé les KPI, les objectifs d'équipe et les stratégies de
              niveau supérieur pour l'activité opérationnelle.
            </p>
            <p className="list-item list-inside p-2">
              Présenté des rapports de données bihebdomadaires à la direction
              pour l'examen des métriques de performance de l'équipe et d'autres
              points clés.
            </p>
            <p className="list-item list-inside p-2">
              Géré des projets liés à l'admission ou à la migration de
              processus, basés sur le catalogue de services DM et la portée.
            </p>
            <p className="list-item list-inside p-2">
              Préparé l'évaluation annuelle des performances et des talents de
              l'équipe sur la base des résultats d'analyse mensuelle, des
              retours d'information et des opportunités d'amélioration.
            </p>
            <p className="list-item list-inside p-2">
              Créé et mis en œuvre des mécanismes pour prévoir les besoins en
              personnel afin d'assurer la disponibilité des effectifs.
            </p>
            <p className="list-item list-inside p-2">
              Recruté, formé et supervisé le personnel dans les domaines de la
              connaissance des produits et du service client.
            </p>
            <p className="list-item list-inside p-2">
              Enseigné et aidé les employes à développer leur potentiel en
              déléguant des tâches en conséquence.
            </p>
            <p className="list-item list-inside p-2">
              Anticipé la mise en œuvre réussie d'outils, d'informations et de
              ressources pour l'équipe.
            </p>
            <p className="list-item list-inside p-2">
              Développé des opportunités de réseautage professionnel efficaces
              en participant à des forums/projets appropriés et en assistant à
              des réunions régulières des membres professionnels avec la
              direction de niveau supérieur.
            </p>
          </div>
        </div>
        {/* < />!-- #2 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">
              Process Lead, Data Management
            </p>
            <p>
              <i>Amazon</i>
            </p>
            <p>
              <i>Octobre 2020 - Juillet 2021 - (San José, Costa Rica)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Promu de Associé Senior à Chef de Processus en offrant un
              traitement à haut volume, une performance de premier plan et en
              favorisant la collaboration.
            </p>
            <p className="list-item list-inside p-2">
              Assuré une utilisation optimale du personnel en attribuant
              efficacement et de façon opportune les tâches en fonction de leur
              disponibilité et de leur expertise.
            </p>
            <p className="list-item list-inside p-2">
              Surveillé la conformité des valeurs métriques quotidiennes (SLA et
              autres KPI) à l'aide de plusieurs outils de visualisation de
              données.
            </p>
            <p className="list-item list-inside p-2">
              Coordonné les propositions d'amélioration continue des processus
              conformément aux politiques et procédures solides de gestion des
              données.
            </p>
            <p className="list-item list-inside p-2">
              Répondu aux besoins de rapports et d'accès à l'information en
              concevant des requêtes simples et complexes dans l'outil
              d'application.
            </p>
            <p className="list-item list-inside p-2">
              Conduit la revue des défauts, des cas difficiles et des escalades
              selon l'échelle d'impact de la gravité pour répondre aux exigences
              des clients.
            </p>
            <p className="list-item list-inside p-2">
              Agi en tant que point de contact entre d'autres parties prenantes
              internes et l'équipe.
            </p>
            <p className="list-item list-inside p-2">
              Établi un canal pour la mise à jour des procédures opérationnelles
              standard et priorisé la formation sur les nouveaux changements.
            </p>
            <p className="list-item list-inside p-2">
              Configuré et testé les outils multi-actifs et les solutions de
              processus avant leur mise en œuvre.
            </p>
            <p className="list-item list-inside p-2">
              Rédigé et répondu aux réclamations pendant et après toute
              admission ou migration de processus.
            </p>
          </div>
        </div>
        {/* < />!-- #3 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">
              Sr. Associate, Data Management
            </p>
            <p>
              <i>Amazon</i>
            </p>
            <p>
              <i>Septembre 2017 - Septembre 2020 - (San José, Costa Rica)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Assuré un service client de haute qualité en fournissant une
              résolution rapide et précise, en gérant la communication et les
              interactions de données avec les parties prenantes via le système
              de ticket.
            </p>
            <p className="list-item list-inside p-2">
              Géré et optimisé les processus transactionnels au sein de PS
              Oracle (SGBDR), en garantissant l'exactitude, l'intégrité des
              données et la conformité aux normes organisationnelles et aux
              exigences réglementaires.
            </p>
            <p className="list-item list-inside p-2">
              Collaboré de manière transversale avec les pairs pour identifier
              les besoins, rationaliser les flux de travail et optimiser les
              processus.
            </p>
            <p className="list-item list-inside p-2">
              Démontré un fort engagement envers la croissance personnelle et
              professionnelle en recherchant activement des opportunités
              d'apprentissage et en assumant de nouvelles responsabilités au fur
              et à mesure de leur apparition.
            </p>
          </div>
        </div>
        {/* < />!-- #4 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">
              Assistant de laboratoire de chimie
            </p>
            <p>
              <i> Université du Costa Rica</i>
            </p>
            <p>
              <i>Août 2015 - Mars 2017 - (San José, Costa Rica)</i>
            </p>
          </h2>
          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Préparé et dispensé des cours aux étudiants, fournissant à la fois
              des connaissances théoriques et des démonstrations pratiques pour
              améliorer la compréhension conformément au programme de cours.
            </p>
            <p className="list-item list-inside p-2">
              Supervisé les séances de laboratoire en veillant au respect des
              protocoles de sécurité et à la manipulation appropriée de
              l'équipement et des matériaux.
            </p>
            <p className="list-item list-inside p-2">
              Fourni une assistance individuelle pendant les séances de
              laboratoire, offrant des conseils et un soutien pour améliorer
              leur expérience d'apprentissage.
            </p>
            <p className="list-item list-inside p-2">
              Collaboré avec les membres du corps enseignant pour attribuer des
              tests et les noter, et pour mesurer la progression des étudiants
              et la compréhension globale.
            </p>
          </div>
        </div>
        {/* < />!-- #5 --> */}
        <div className="text-center p-4 m-2">
          <h2 className="text-xl m-5 font-semibold tablet:text-2xl laptop:text-3xl">
            <p className="text-violet-950 text-4xl">
              Coordonnateur de la formation en potabilité et traitement de l'eau
            </p>
            <p>
              <i>Université du Costa Rica</i>
            </p>
            <p>
              <i>Août 2014 - Novembre 2015 - (San José, Costa Rica)</i>
            </p>
          </h2>

          <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
            <p className="list-item list-inside p-2">
              Supervisé la formation des bureaux locaux en charge des réseaux
              d'aqueduc et d'égouts sanitaires, afin de réduire le risque de
              contamination microbienne et de non-conformité aux réglementations
              nationales, dans le cadre de mon Travail Communautaire
              Universitaire.
            </p>
            <p className="list-item list-inside p-2">
              Évalué la qualité de l'eau potable en termes de paramètres
              chimiques tels que le DCO, la dureté et la présence de nitrates et
              de phosphates à divers endroits, afin de garantir la conformité
              avec les réglementations locales.
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
              Langues
            </h1>
          </div>
          <div className="text-xl text-center p-1 m-auto tablet:text-2xl tablet:mx-20">
            <h2 className="p-2 font-semibold list-item list-inside">
              {" "}
              Espagnol
              <i className="italic"> (Native)</i>
            </h2>
            <h2 className="p-2 font-semibold list-item list-inside">
              {" "}
              Anglais
              <i className="italic"> (Professional)</i>
            </h2>
            <h2 className="p-2 font-semibold list-item list-inside">
              {" "}
              Français
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
              <p className="italic"> SDG Academy (2024) - edX Certifié</p>
            </h2>
          </div>
          <div className="text-xl text-center p-1 m-auto tablet:text-2xl tablet:mx-20">
            <h2 className="font-semibold list-item list-inside p-2">
              {" "}
              AWS Cloud Quest: Cloud Practitioner
              <p className="italic"> Amazon Web Services (2023) - Certifié </p>
            </h2>
          </div>
          <div className="text-xl text-center p-1 m-auto tablet:text-2xl tablet:mx-20">
            <h2 className="font-semibold list-item list-inside p-2">
              {" "}
              Alliance Française du Costa Rica
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
              Séminaires
            </h1>
          </div>
          <div className="text-xl text-center p-1 m-auto tablet:text-2xl tablet:mx-20">
            <h2 className="font-semibold list-item list-inside p-2">
              XXIV Congrès latino-américain des étudiants en génie chimique et
              carrières connexes
              <p className="italic">
                {" "}
                Université Technologique Nationale (Buenos Aires, Argentina) -
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
              Compétences
            </h1>
          </div>

          <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
            <div>Résolveur de problèmes</div>
            <div>Analitique</div>
            <div>Joueur d'équipe collaboratif</div>
            <div>Travail d'équipe</div>
            <div>Centré sur le client</div>
            <div>Auto-motivé</div>
            <div>Planificateur et concepteur</div>
            <div>Autonome et proactif</div>
            <div>Communication écrite et orale efficace</div>
            <div>Attentif aux détails</div>
            <div>Bon auditeur</div>
            <div>Conscient des délais</div>
            <div>Adaptable</div>
            <div>Résolveur de problèmes</div>
            <div>Orienté vers les processus</div>
            <div>Entrepreneurial</div>
            <div>Orienté vers l'apprentissage</div>
            <div>Outils de visualisation de données</div>
            <div>Habitué à travailler dans un environnement multiculturel</div>
            <div>Extraction et reporting de données</div>
            <div>Rédaction de documentation technique</div>
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
              Connaissance
            </h1>
          </div>
          <h3 className="font-semibold p-2 text-2xl tablet:text-2xl laptop:text-3xl">
            {" "}
            Informatique
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
            Langages de programmation
          </h3>
          <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
            <div>SQL (PostgreSQL)</div>
            <div>Python</div>
            <div>Python Libraries: Pandas,Numpy, Matplotlib</div>
          </div>
          <h3 className="font-semibold p-2 text-2xl tablet:text-2xl laptop:text-3xl">
            Développement Web
          </h3>
          <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
            <div>CSS</div>
            <div>HTML</div>
            <div>Frameworks: Svelte</div>
          </div>
          <h3 className="font-semibold p-2 text-2xl tablet:text-2xl laptop:text-3xl">
            {" "}
            Cadre législatif
          </h3>
          <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
            <div>ISO 9001:2015</div>
            <div>ISO 13485:2016</div>
            <div>EUDRALEX</div>
            <div>Les opérations standardisées d'économies d'énergie</div>
            <div>Code du bâtiment technique (CTE)</div>
            <div>
              Plan national énergie - climat intégré (PNEC) pour la période
              2021-203
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
              Domaines d'intérêt professionnel
            </h1>
          </div>
          <div>
            <div className="text-xl grid tablet:text-2xl tablet:grid-cols-3">
              <div className="list-item list-inside p-2">
                Optimisation des données : Dévoué à affiner les processus de
                données pour une efficacité et une précision accrues.
              </div>
              <div className="list-item list-inside p-2">
                Pratiques durables : Engagé à promouvoir les initiatives de
                durabilité pour réduire l'impact environnemental.
              </div>
              <div className="list-item list-inside p-2">
                Leadership collaboratif : Compétent dans la direction d'équipes
                diversifiées pour atteindre des objectifs collectifs.
              </div>
              <div className="list-item list-inside p-2">
                Amélioration continue : Passionné par l'optimisation des
                processus pour maximiser la productivité.
              </div>
              <div className="list-item list-inside p-2">
                Service client exceptionnel : Engagé à fournir un service
                supérieur grâce à des solutions sur mesure.
              </div>
              <div className="list-item list-inside p-2">
                Gestion efficace de projets : Compétent dans la supervision des
                projets de leur conception à leur achèvement.
              </div>
              <div className="list-item list-inside p-2">
                Innovation technologique : Enthousiaste à l'idée d'intégrer des
                technologies de pointe pour améliorer les opérations.
              </div>
              <div className="list-item list-inside p-2">
                Respect de la réglementation : Rigoureux dans l'assurance du
                respect des réglementations et normes de l'industrie.
              </div>
              <div className="list-item list-inside p-2">
                Responsabilité sociale d'entreprise (RSE) : Engagé à soutenir
                les initiatives de RSE grâce à des pratiques efficaces de
                gestion des données, contribuant à la durabilité d'entreprise et
                aux objectifs d'impact social.
              </div>
              <div className="list-item list-inside p-2">
                Gestion durable de la chaîne d'approvisionnement : Intéressé à
                appliquer des principes de gestion des données pour optimiser
                les processus de la chaîne d'approvisionnement et renforcer la
                durabilité tout au long de la chaîne de valeur.
              </div>
              <div className="list-item list-inside p-2">
                Énergie renouvelable : Intéressé à exploiter les techniques de
                gestion des données pour optimiser les systèmes d'énergie
                renouvelable et promouvoir des solutions énergétiques durables.
              </div>
              <div className="list-item list-inside p-2">
                Réduction de l'empreinte carbone : Engagé à utiliser des
                approches basées sur les données pour suivre et réduire les
                émissions de carbone, favorisant la responsabilité
                environnementale et la durabilité.
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

export default French;
