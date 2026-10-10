import { createContext, useContext, useState, useEffect } from 'react'

const translations = {
  fr: {
    nav: {
      home: 'Accueil', about: 'À propos', education: 'Formation', experience: 'Expérience', 
      projects: 'Projets', skills: 'Compétences', contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Makhloufi Ouiam',
      role: 'Ingénieure en Géoinformation',
      description: "Élève ingénieure en 3ᵉ année du cycle d'ingénieur en Géoinformation à la FST de Tanger, à la recherche d'un stage PFE, spécialisée en SIG, analyse spatiale, télédétection et développement d'applications géospatiales.",
      projectsBtn: 'Voir mes projets',
      contactBtn: 'Me contacter',
      quote: "Pas de secteur sans territoire. Pas de territoire sans donnée. La transformer en décision, c'est mon métier.",
    },
about: {
  label: 'À propos',
  title: 'Profil professionnel',
  description: [
    "Élève ingénieure en 3ᵉ année de Géoinformation à la Faculté des Sciences et Techniques de Tanger, je suis passionnée par une discipline qui se construit autour de trois piliers fondamentaux : l'acquisition de l'information géographique, son analyse et sa restitution. Cette approche globale de la donnée géospatiale — de sa collecte jusqu'à sa valorisation auprès des utilisateurs finaux — est ce qui me motive profondément dans ma formation : comprendre le territoire dans toute sa complexité, puis transformer cette complexité en outils clairs, accessibles et utiles à la décision.",
    "Actuellement ingénieure SIG à l'Inspection Régionale de l'Architecture et de l'Urbanisme de Tanger dans le cadre de mon stage PFA, je développe mes compétences en cartographie, en géomatique appliquée à l'aménagement du territoire et en développement d'applications WebSIG. Curieuse et rigoureuse, j'aime allier les technologies web et mobile aux outils SIG pour concevoir des solutions innovantes, automatisées et interactives, capables de répondre à des enjeux concrets.",
    "Aujourd'hui à la recherche d'un stage PFE, je souhaite continuer à approfondir cette vision transversale de la géoinformation et contribuer à des projets qui donnent du sens à la donnée géospatiale.",
  ],
  skillsLabel: 'Compétences transversales',
  skills: [
    "Communication", "Travail d'équipe / Collaboration", "Gestion de projet",
    "Gestion du temps", "Résolution de problèmes", "Adaptabilité",
    "Leadership", "Esprit d'initiative / Proactivité", "Rigueur et sens du détail",
    "Créativité / Innovation", "Sens du service / Orientation client", "Gestion du stress",
  ],
  formationLabel: 'Formation',
  formation: 'Ingénierie Géoinformation',
  universityLabel: 'Université',
  university: 'FSTT — Tanger, Maroc',
  locationLabel: 'Localisation',
  location: 'Maroc, Tanger',
  languagesLabel: 'Langues',
  languagesList: ['Arabe', 'Français', 'Anglais'],
},

experience: {
  title: 'Expérience',
  items: [
    {
      title: 'Ingénieure SIG — Stage PFA',
      place: "Inspection Régionale de l'Urbanisme, de l'Architecture et de l'Aménagement du Territoire (IRUAAT), Tanger",
      period: 'depuis juillet 2026',
      description: "Conception et développement de GeoDoc IRU, une plateforme intégrée combinant gestion documentaire (GED) et géoportail, destinée à centraliser les documents techniques et géospatiaux de l'Inspection (documents d'urbanisme, couches SIG, images satellites, rapports techniques) et à géolocaliser les projets de l'Inspection sur une carte interactive.",
    },
    {
      title: "Ingénieure SIG — Stage d'initiation",
      place: 'Tanger Med Engineering',
      period: 'depuis juillet 2025',
      description: "Développement et conception d'une plateforme WebSIG destinée à la gestion, la visualisation et l'analyse de données géospatiales, permettant une exploitation interactive et centralisée de l'information territoriale.",
    },
  ],
},
    education: {
      title: 'Formations',
      items: [
        {
          degree: "Cycle d'Ingénieur Géoinformation",
          school: 'Faculté des Sciences et Techniques (FST) Tanger',
          period: 'Septembre 2024 - En cours',
          details: [
            "Stage d'initiation - Tanger Med Engineering (Juillet 2025 - Août 2025) : Conception et développement d'une plateforme web SIG pour la gestion et la visualisation des données géographiques.",
            "Stage PFA - L'Inspection Régionale de l'Urbanisme, de l'Architecture et de l'Aménagement du Territoire de la région Tanger-Tétouan-Al Hoceïma (Juillet 2026 - Octobre 2026) : Conception et développement d'une plateforme intégrée de gestion documentaire et de géolocalisation de projets à l'IRUAAT (Tanger-Tétouan-Al Hoceïma).",
          ],
        },
        {
          degree: 'DEUST MIPC',
          school: 'Faculté des Sciences et Techniques (FST) Tanger',
          period: 'Septembre 2022 - Juin 2024',
          details: [
            'Diplôme universitaire en sciences et techniques - Spécialité : Mathématiques, Informatique, Physique et Chimie.',
          ],
        },
        {
          degree: 'Baccalauréat en Sciences Physiques - Option Français',
          school: 'Lycée Ahmed El Hansali',
          period: 'Septembre 2021 - Juin 2022',
          details: [],
        },
      ],
    },
projects: {
  title: 'Projets',
  inProgressLabel: 'En cours',
  allLabel: 'Tous',
  githubLabel: 'Voir sur GitHub',
  reportLabel: 'Voir le rapport',
  readMore: 'Lire plus',
  readLess: 'Lire moins',
  categories: [
    {
      name: 'Télédétection & Analyse Spatiale', tag: 'Télédétection',
      items: [
        {title: 'Plugin QGIS - Aide à la décision (Dérogation & Sentinel)',description: "Plugin QGIS à deux fenêtres. La première analyse les demandes de dérogation en urbanisme : surface minimale de 1 ha, protection des espaces verts, distance minimale entre projets dérogés, zone tampon, intersection avec les types de foncier, calcul des indicateurs et export CSV/PDF. La seconde télécharge des images Sentinel-2 et Sentinel-1 et calcule les indices (NDVI, NDWI, NDBI, NDMI, RVI, VV/VH, NDPI, DPSVI).",tech: 'Python, PyQGIS, PyQt5, Sentinel-1/2',image: '/images/projects/plugin-derogation.PNG',github: 'https://github.com/makhloufiouiam/qgis-derogation-plugin'},
        { title: "Qualité de l'eau - Merja Zerga", description: "Surveillance de la qualité des eaux de la lagune de Merja Zerga (Moulay Bousselham, site Ramsar) par télédétection optique, pour suivre ses variations saisonnières (2025-2026) et l'impact du confinement COVID-19 (2020). Images Landsat 8 et 9 prétraitées sous ENVI : correction radiométrique, correction atmosphérique DOS1, stack multispectral et masque d'eau NDWI. Calcul des indices de turbidité (NDTI), de matières en suspension (NSMI) et de chlorophylle-a, puis classification non supervisée K-Means sous Google Earth Engine en trois classes de qualité (bonne, moyenne, mauvaise). Résultat : une dynamique saisonnière marquée, avec une turbidité maximale en automne due aux apports fluviaux et une prolifération algale en été liée à l'eutrophisation.", tech: "Landsat 8/9, ENVI, Google Earth Engine, K-Means, Indices spectraux (NDWI, NDTI, NSMI, Chl-a)" },
        { title: "Classification des zones brûlées - Rmilat", description: "Détection et cartographie des zones brûlées de la forêt de Rmilat (Tanger) après l'incendie d'août 2023 : images Sentinel-2 avant et après le feu acquises via Google Earth Engine, calcul d'indices spectraux (dNBR, NDVI, NDWI, NDBI), vérité terrain générée par seuillage multi-indices pour quatre classes (brûlé, végétation saine, eau, bâti), puis classification Random Forest optimisée par validation croisée. Accuracy de 96,45 % et surface brûlée estimée à 493,6 ha, avec export de la carte finale en GeoTIFF.", tech: "Python, scikit-learn (Random Forest), rasterio, NumPy, pandas, Google Earth Engine, Sentinel-2, Jupyter", report: '/documents/Rapport_Classification_Random_Forest_Rmilat.pdf' },
        { title: "Analyse spatiale multicritère - Stowe", description: "Recherche du site optimal pour l'implantation d'une nouvelle école à Stowe : combinaison de plusieurs critères pondérés selon leur importance, au moyen d'opérations d'analyse spatiale (intersection, union, découpage...), puis détermination de l'itinéraire le plus optimal entre le site retenu et un carrefour à proximité.", tech: "ArcMap, Analyse multicritère, Géotraitement" },
        { title: "Trait de côte - Baie de Tanger", description: "Étude de l'érosion côtière de la baie de Tanger : digitalisation du trait de côte sur deux images satellites de deux années différentes, puis comparaison des deux tracés pour mesurer son évolution. L'analyse a mis en évidence une érosion de la baie et a permis de classer les zones de la plus dangereuse à la moins dangereuse selon leur distance à la ligne de rivage. Les résultats sont restitués dans une carte de synthèse.", tech: "ArcMap, Digitalisation, Imagerie satellite, Analyse diachronique" },
      ],
    },
    {
      name: 'Plateformes WebSIG & Cartographie Interactive', tag: 'WebSIG',
      items: [
        { title: 'GeoAcadémie', description: "Carte interactive des hôpitaux et centres hospitaliers de la région Tanger-Tétouan-Al Hoceïma, réalisée  sur la plateforme no-code GeoAcadémie : collecte de données via Overpass Turbo et OpenStreetMap, création de la carte avec icônes personnalisées, outils de recherche et filtres liés (nom d'hôpital, ville), fiche d'information éditable organisée en sections thématiques, et tableau de bord avec statistiques (répartition par ville et par type d'établissement).", tech: 'GeoAcadémie, OpenStreetMap, Overpass Turbo', image : '/images/projects/Geoacadimie.PNG' , report: '/documents/geoacademie-rapport.pdf' },
        { title: 'Atlas thématique interactif - Région Rabat-Salé-Kénitra', description: "Problématique : comment se répartissent les dynamiques de développement territorial dans la région Rabat-Salé-Kénitra ? Objectif : mesurer les disparités de la région selon sept dimensions (population, eau, agriculture, sécurité routière, infrastructures, pauvreté, précipitations) à travers un atlas de plus de 15 cartes. Méthodologie : données HCP et OpenStreetMap, statistiques sous Excel et R, indices composites (pression hydrique agricole, risque sanitaire et accidentel), télédétection Sentinel-1/2/5P sous Google Earth Engine (NDVI, inondations 2026, NO₂) et cartographie QGIS/PhilCarto. Résultat : une fracture entre le littoral urbain et un arrière-pays cumulant stress hydrique, pauvreté et faible accessibilité, restituée en atlas PDF et en version web interactive.", tech: 'QGIS, PhilCarto, R, Excel, Google Earth Engine, Sentinel-1/2/5P, OpenStreetMap (QuickOSM, Overpass), Web mapping', image: '/images/projects/Atlas.PNG.jpg', report: '/documents/Rapport_Atlas.pdf' },
        { title: 'AFRICA TICKET - Plateforme billetterie CAN 2025', description: "Plateforme web full-stack de réservation de billets pour la CAN 2025 au Maroc. Comptes utilisateurs sécurisés, calendrier des 52 matchs, équipes par groupe (classements FIFA/CAF, titres CAN), réservation par catégorie (VIP, Standard, Économique) avec panier, tarification dynamique selon la proximité du match et statut « Sold out », paiement via l'API PayPal, génération du billet en PDF (porte, place, date) téléchargeable ou envoyé par WhatsApp. Carte interactive Leaflet/OpenStreetMap des 9 stades avec fiche d'information et itinéraire Google Maps depuis la position de l'utilisateur, et page d'activités culturelles et touristiques filtrées par proximité des stades.", tech: 'PHP 8, MySQL/MariaDB (PDO), HTML5, CSS3, JavaScript, Leaflet, OpenStreetMap, Google Maps API, PayPal API, XAMPP', image: '/images/projects/can_2025.PNG', github: 'https://github.com/makhloufiouiam/can_2025', report: '/documents/Rapport%20exam%20final.pdf' },
        {
  title: "Stage d'initiation - Plateforme WebSIG (Tanger Med Engineering)",
  description: "Stage d'initiation du 4 juillet au 4 août 2025 chez Tanger Med Engineering : conception d'un mini site WebSIG de gestion et de visualisation d'anomalies géographiques. Table des entités, carte interactive (points, lignes, polygones) avec fiche d'information modifiable, ajout d'entités par dessin, et outils SIG reposant sur des requêtes spatiales PostGIS : distance (ST_Distance), intersection (ST_Intersects), voisinage (ST_DWithin), zone tampon (ST_Buffer) et filtrage par titre.",
  tech: 'Angular, OpenLayers, NestJS, TypeORM, PostgreSQL/PostGIS',
  image: '/images/projects/tme-projet.PNG',
  github: 'https://github.com/makhloufiouiam/Projet-TME',
  report: '/documents/Rapport_StageTME.pdf'
},
        {
  title: "PFA - Plateforme intégrée de gestion documentaire et de géolocalisation de projets (IRUAAT)",
  description: "Projet de fin d'années (2026) à l'Inspection Régionale de l'Urbanisme, de l'Architecture et de l'Aménagement du Territoire de Tanger-Tétouan-Al Hoceïma : conception d'une plateforme web unifiée GED + Géoportail. Module GED : import de documents, recherche multicritère, catégories en arborescence, tags, versioning, corbeille, journal d'audit, authentification JWT et contrôle d'accès par rôles (RBAC). Module Géoportail : carte interactive Leaflet avec projets géolocalisés colorés selon leur statut, CRUD des projets, fiche technique, association de documents, affichage des géométries SHP, outils PostGIS de distance (ST_Distance) et de zone tampon (ST_Buffer, ST_DWithin), import/export CSV/GeoJSON et dashboard statistique.",
  tech: 'React, Tailwind CSS, Leaflet, FastAPI, SQLAlchemy, PostgreSQL/PostGIS, MinIO, Alembic, Docker',
  image: '/images/projects/geodoc.PNG',
  github: 'https://github.com/makhloufiouiam/plateforme-gestion-documentaire',
  report: '/documents/Rapport_PFA.pdf'
},
      ],
    },
    {
      name: 'Applications & Interfaces (Python / Java)', tag: 'Applications',
      items: [
        { title: 'Interface Tkinter - Cancer du pancréas', description: "Application interactive d'analyse et de cartographie des données médicales liées au cancer du pancréas au Maroc : exploration des données patients par région, recherche par ID, visualisation des facteurs de risque, tests statistiques de dépendance et génération de rapports PDF.", tech: 'Python, Tkinter, Analyse de données' , image: '/images/projects/Cancer-projet.PNG' , github: 'https://github.com/makhloufiouiam/pancreatic-cancer-gis' , report : '/documents/Rapport_CancerInterface.pdf'},
        {title:  'Interface PyQt6 - Calcul géodésique',description: "Application de calculs géodésiques : informations sur les ellipsoïdes (Clarke 1880, WGS84), calcul des excentricités et de l'aplatissement, rayons de courbure, conversion de coordonnées géographiques vers cartésiennes, longueur d'arc méridien et parallèle, calcul de superficie, résolution des problèmes direct et inverse.",tech: 'Python, PyQt6',image: '/images/projects/geodesie-projet.PNG',github: 'https://github.com/makhloufiouiam/calculs-geodesiques'},
        { title: 'Jeu de dames', description: "Simulation du jeu de dames en Java pour deux joueurs en local, développée en équipe selon l'architecture MVC : plateau 8x8 dessiné dynamiquement, règles complètes (prises obligatoires et multiples, promotion en dame), mise en surbrillance des coups possibles et des pions devant capturer, effets sonores et annonce du gagnant.", tech: 'Java, Swing/AWT, POO/MVC', image: '/images/projects/dames_projet.PNG', github: 'https://github.com/makhloufiouiam/jeu-de-dames-java' , report : '/documents/Rapport_JeuDames.pdf'},
        
      ],
    },
    {
      name: 'Développement Web', tag: 'Web',
      items: [
        { title: 'E-commerce vêtements enfants', description: "Site e-commerce statique pour une boutique de vêtements pour enfants, organisé par tranche d'âge (0-2, 3-5, 6-8 ans) : panier d'achat dynamique avec calcul automatique du total et gestion des quantités, filtre par prix maximum, et espace administrateur pour la gestion des produits (ajout, modification, suppression).", tech: 'HTML5, CSS3, JavaScript', image: '/images/projects/children-store-projet.PNG', github: 'https://github.com/makhloufiouiam/children-clothing-store' },
        { title: 'Gestion de librairie', description: "Application web de gestion pour une librairie (livres et fournitures scolaires) : suivi du stock, caisse avec calcul automatique et mise à jour des quantités selon les ventes et achats, accès multi-appareils pour le vendeur.", tech: 'Développement web, Gestion de stock', inProgress: true },
      ],
    },
  ],
},
    skills: {
      title: 'Compétences',
      categories: [
        { category: 'SIG, Télédétection & Photogrammétrie', items: ['QGIS', 'ArcMap', 'QGIS Server', 'GeoServer', 'MapServer', 'Google Earth Pro', 'Google Earth Engine', 'ENVI', 'ERDAS Imagine', 'Philcarto / Phildigit', 'GéoAcadémie', 'Sentinel-1/2', 'Landsat 8/9', 'Indices spectraux & radar'] },
        { category: 'Développement Web — Front-end', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React 19', 'Angular', 'Tailwind CSS', 'React Router', 'Axios', 'react-leaflet / Leaflet', 'OpenLayers', 'React Portal'] },
        { category: 'Développement Web — Back-end', items: ['Python', 'PHP', 'Java', 'C', 'C++', 'FastAPI', 'NestJS', 'SQLAlchemy', 'GeoAlchemy2', 'Alembic', 'Pydantic', 'JWT (python-jose / bcrypt)', "Conception d'API RESTful"] },
        { category: 'Bases de données & Spatial', items: ['PostgreSQL', 'PostGIS', 'MySQL', 'Modélisation relationnelle et spatiale', 'Index spatiaux GIST', 'Shapefile / GeoJSON', 'pgRouting'] },
        { category: 'Python — Bibliothèques scientifiques', items: ['Pandas', 'NumPy', 'Matplotlib', 'GeoPandas', 'Folium', 'scikit-learn', 'rasterio'] },
        { category: 'GeoAI & Machine Learning', items: ['Random Forest', 'SVM', 'Maximum de vraisemblance', 'Minimum Distance', 'Mahalanobis', 'K-Means', 'ISODATA', 'DBSCAN', 'Validation croisée', 'Matrice de confusion', 'Indice Kappa'] },
        { category: 'Interfaces & Outils Python', items: ['Tkinter', 'PyQt6', 'Apache'] },
        { category: 'Big Data & Statistiques', items: ['R', 'Hadoop', 'Hive', 'Spark / Sedona', 'Cloudera'] },
        { category: 'Modélisation & Méthodologie', items: ['UML', 'Merise', 'Conception logicielle', 'Git / GitHub', 'Méthodologie de gestion de projet'] },
        { category: 'DevOps & Déploiement', items: ['Docker / Docker Compose', 'MinIO', 'Swagger / OpenAPI'] },
        { category: 'Topographie, Photogrammétrie & DAO', items: ['AutoCAD', 'Levés topographiques (station totale Leica)', 'ArcGIS Drone2Map', 'Calibration de caméra', 'Orientation interne, relative et absolue', 'Aérotriangulation', 'SfM / MVS', 'Génération de MNT', 'Orthorectification'] },
      ],
    },
    contact: {
      title: 'Contact',
      text: "N'hésite pas à me contacter pour toute opportunité ou collaboration.",
      email: 'Email', linkedin: 'LinkedIn', github: 'GitHub',
    },
    footer: { text: 'Tous droits réservés.' },
  },

  en: {
    nav: {
      home: 'Home', about: 'About', education: 'Education', experience: 'Experience',
      projects: 'Projects', skills: 'Skills', contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Makhloufi Ouiam',
      role: 'Geoinformation Engineer',
      description: '3rd year engineering student in Geoinformation at FST Tangier, looking for a graduation internship (PFE), specialized in GIS, spatial analysis, remote sensing and geospatial application development.',
      projectsBtn: 'View my projects',
      contactBtn: 'Contact me',
      quote: "No industry without territory. No territory without data. Turning it into decisions is my job.",
    },
about: {
  label: 'About',
  title: 'Professional Profile',
  description: [
    "3rd year engineering student in Geoinformation at the Faculty of Sciences and Techniques of Tangier, I am passionate about a discipline built on three fundamental pillars: the acquisition of geographic information, its analysis and its restitution. This comprehensive approach to geospatial data — from collection to its value for end users — is what deeply motivates me in my training: understanding the territory in all its complexity, then turning that complexity into tools that are clear, accessible and useful for decision-making.",
    'Currently a GIS engineer at the Regional Inspection of Architecture and Urban Planning of Tangier as part of my PFA internship, I am developing my skills in cartography, geomatics applied to land planning, and WebGIS application development. Curious and rigorous, I like combining web and mobile technologies with GIS tools to design innovative, automated and interactive solutions that address real challenges.',
    'Now looking for a graduation internship (PFE), I want to keep deepening this cross-disciplinary vision of geoinformation and contribute to projects that give meaning to geospatial data.',
  ],
  skillsLabel: 'Soft Skills',
  skills: [
    'Communication', 'Teamwork / Collaboration', 'Project management',
    'Time management', 'Problem solving', 'Adaptability',
    'Leadership', 'Initiative / Proactivity', 'Rigor and attention to detail',
    'Creativity / Innovation', 'Customer/service orientation', 'Stress management',
  ],
  formationLabel: 'Education',
  formation: 'Geoinformation Engineering',
  universityLabel: 'University',
  university: 'FSTT — Tangier, Morocco',
  locationLabel: 'Location',
  location: 'Morocco, Tangier',
  languagesLabel: 'Languages',
  languagesList: ['Arabic', 'French', 'English'],
},

experience: {
  title: 'Experience',
  items: [
    {
      title: 'GIS Engineer — PFA Internship',
      place: 'Regional Inspection of Urban Planning, Architecture and Land Use (IRUAAT), Tangier',
      period: 'since July 2026',
      description: "Design and development of GeoDoc IRU, an integrated platform combining document management (GED) and a geoportal, aimed at centralizing the Inspection's technical and geospatial documents (planning documents, GIS layers, satellite images, technical reports) and geolocating the Inspection's projects on an interactive map.",
    },
    {
      title: 'GIS Engineer — Introductory Internship',
      place: 'Tanger Med Engineering',
      period: 'since July 2025',
      description: 'Development and design of a WebGIS platform for managing, visualizing and analyzing geospatial data, enabling interactive and centralized use of territorial information.',
    },
  ],
},


    education: {
      title: 'Education',
      items: [
        {
          degree: 'Geoinformation Engineering Program',
          school: 'Faculty of Sciences and Techniques (FST) Tangier',
          period: 'September 2024 - Present',
          details: [
            'Introductory internship - Tanger Med Engineering (July 2025 - August 2025): Design and development of a WebGIS platform for managing and visualizing geographic data.',
            'PFA internship - Regional Inspection of Urban Planning, Architecture and Land Use of the Tangier-Tetouan-Al Hoceima region (July 2026 - October 2026): Design and development of an integrated platform for document management and project geolocation at IRUAAT (Tangier-Tetouan-Al Hoceima).',
          ],
        },
        {
          degree: 'DEUST MIPC',
          school: 'Faculty of Sciences and Techniques (FST) Tangier',
          period: 'September 2022 - June 2024',
          details: [
            'University diploma in sciences and techniques - Specialty: Mathematics, Computer Science, Physics and Chemistry.',
          ],
        },
        {
          degree: 'Baccalaureate in Physical Sciences - French Option',
          school: 'Ahmed El Hansali High School',
          period: 'September 2021 - June 2022',
          details: [],
        },
      ],
    },
projects: {
  title: 'Projects',
  inProgressLabel: 'In progress',
  allLabel: 'All',
  githubLabel: 'View on GitHub',
  reportLabel: 'View report',
  readMore: 'Read more',
  readLess: 'Read less',
  categories: [
    {
      name: 'Remote Sensing & Spatial Analysis', tag: 'Remote sensing',
      items: [
       {
  title: 'QGIS Plugin - Decision Support (Derogation & Sentinel)',
  description: "Two-window QGIS plugin. The first analyses urban planning derogation requests: 1 ha minimum area, green space protection, minimum distance between derogated projects, buffer zone, intersection with land-tenure types, indicator computation and CSV/PDF export. The second downloads Sentinel-2 and Sentinel-1 imagery and computes indices (NDVI, NDWI, NDBI, NDMI, RVI, VV/VH, NDPI, DPSVI).",
  tech: 'Python, PyQGIS, PyQt5, Sentinel-1/2',
  image: '/images/projects/plugin-derogation.PNG',
  github: 'https://github.com/makhloufiouiam/qgis-derogation-plugin'
},
        { title: 'Impact of Floods on Vegetation', description: 'Analysis of the impact of floods on vegetation using remote sensing and GIS in the Rabat-Salé-Kénitra region.', tech: 'Remote sensing, GIS, Google Earth Engine, QGIS, ARCGIS' },
        { title: "Water Quality - Merja Zerga", description: "Optical remote sensing monitoring of water quality in the Merja Zerga lagoon (Moulay Bousselham, Ramsar site), tracking its seasonal variations (2025-2026) and the impact of the COVID-19 lockdown (2020). Landsat 8 and 9 imagery preprocessed in ENVI: radiometric correction, DOS1 atmospheric correction, multispectral stack and NDWI water mask. Computation of turbidity (NDTI), suspended matter (NSMI) and chlorophyll-a indices, then unsupervised K-Means classification in Google Earth Engine into three quality classes (good, medium, poor). Result: a clear seasonal pattern, with peak turbidity in autumn driven by river inflows and algal blooms in summer linked to eutrophication.", tech: "Landsat 8/9, ENVI, Google Earth Engine, K-Means, Spectral indices (NDWI, NDTI, NSMI, Chl-a)" },
        { title: "Burned Area Classification - Rmilat", description: "Detection and mapping of burned areas in the Rmilat forest (Tangier) after the August 2023 fire: pre- and post-fire Sentinel-2 imagery acquired through Google Earth Engine, spectral indices (dNBR, NDVI, NDWI, NDBI), ground truth generated by multi-index thresholding for four classes (burned, healthy vegetation, water, built-up), then Random Forest classification tuned with cross-validation. 96.45% accuracy and an estimated burned area of 493.6 ha, with the final map exported as GeoTIFF.", tech: "Python, scikit-learn (Random Forest), rasterio, NumPy, pandas, Google Earth Engine, Sentinel-2, Jupyter", report: '/documents/Rapport_Classification_Random_Forest_Rmilat.pdf' },
        { title: "Multi-criteria Spatial Analysis - Stowe", description: "Search for the optimal site for a new school in Stowe: several criteria weighted by importance and combined through spatial analysis operations (intersect, union, clip...), then identification of the optimal route between the selected site and a nearby junction.", tech: "ArcMap, Multi-criteria analysis, Geoprocessing" },
        { title: "Coastline - Bay of Tangier", description: "Study of coastal erosion in the Bay of Tangier: the coastline was digitized on two satellite images from two different years, then the two lines were compared to measure how it changed. The analysis revealed erosion in the bay and ranked areas from most to least at risk according to their distance from the shoreline. The results are presented in a summary map.", tech: "ArcMap, Digitization, Satellite imagery, Multi-temporal analysis" },
      ],
    },
    {
      name: 'WebGIS Platforms & Interactive Cartography', tag: 'WebGIS',
      items: [
        { title: 'GeoAcademy', description: 'Interactive map of hospitals and healthcare centers in the Tangier-Tetouan-Al Hoceima region, built as a team project on the no-code GeoAcademy platform: data collection via Overpass Turbo and OpenStreetMap, map creation with custom icons, linked search and filter tools (hospital name, city), an editable information sheet organized into thematic sections, and a dashboard with statistics (breakdown by city and facility type).', tech: 'GeoAcademy, OpenStreetMap, Overpass Turbo', image : '/images/projects/Geoacadimie.PNG' , report: '/documents/geoacademie-rapport.pdf' },
        { title: 'Interactive Thematic Atlas - Rabat-Salé-Kénitra Region', description: "Problem: how are territorial development dynamics distributed across the Rabat-Salé-Kénitra region? Objective: measure the region's disparities across seven dimensions (population, water, agriculture, road safety, infrastructure, poverty, rainfall) through an atlas of more than 15 maps. Methodology: HCP and OpenStreetMap data, statistics in Excel and R, composite indices (agricultural water pressure, health and accident risk), Sentinel-1/2/5P remote sensing in Google Earth Engine (NDVI, 2026 floods, NO₂) and mapping in QGIS/PhilCarto. Result: a divide between the urban coast and a hinterland combining water stress, poverty and poor accessibility, published as a PDF atlas and an interactive web version.", tech: 'QGIS, PhilCarto, R, Excel, Google Earth Engine, Sentinel-1/2/5P, OpenStreetMap (QuickOSM, Overpass), Web mapping', image: '/images/projects/Atlas.PNG.jpg', report: '/documents/Rapport_Atlas.pdf' },
        { title: 'AFRICA TICKET - AFCON 2025 Ticketing Platform', description: "A full-stack web platform for booking tickets to the 2025 Africa Cup of Nations in Morocco. Secure user accounts, schedule of all 52 matches, teams by group (FIFA/CAF rankings, AFCON titles), booking by category (VIP, Standard, Economy) with a cart, dynamic pricing based on how close the match is and a « Sold out » status, payment through the PayPal API, and PDF ticket generation (gate, seat, date) to download or send via WhatsApp. Interactive Leaflet/OpenStreetMap map of the 9 stadiums with information popups and Google Maps directions from the user's location, plus a page of cultural and tourist activities filtered by proximity to the stadiums.", tech: 'PHP 8, MySQL/MariaDB (PDO), HTML5, CSS3, JavaScript, Leaflet, OpenStreetMap, Google Maps API, PayPal API, XAMPP', image: '/images/projects/can_2025.PNG', github: 'https://github.com/makhloufiouiam/can_2025', report: '/documents/Rapport%20exam%20final.pdf' },
        {
  title: 'Internship - WebGIS Platform (Tanger Med Engineering)',
  description: "Introductory internship from July 4 to August 4, 2025 at Tanger Med Engineering: design of a mini WebGIS site to manage and visualize geographic anomalies. Entity table, interactive map (points, lines, polygons) with an editable information sheet, entity creation by drawing, and GIS tools built on PostGIS spatial queries: distance (ST_Distance), intersection (ST_Intersects), neighborhood search (ST_DWithin), buffer zone (ST_Buffer) and title filtering.",
  tech: 'Angular, OpenLayers, NestJS, TypeORM, PostgreSQL/PostGIS',
  image: '/images/projects/tme-projet.PNG',
  github: 'https://github.com/makhloufiouiam/Projet-TME',
  report: '/documents/Rapport_StageTME.pdf'
},
        {
  title: 'End-of-Year Project - Integrated Document Management and Project Geolocation Platform (IRUAAT)',
  description: "End-of-year project (2026) at the Regional Inspection of Urban Planning, Architecture and Land Management of Tanger-Tétouan-Al Hoceïma: design of a unified web platform combining document management and a geoportal. Document module: file upload, multi-criteria search, hierarchical categories, tags, versioning, trash/restore, audit log, JWT authentication and role-based access control (RBAC). Geoportal module: interactive Leaflet map with status-coded geolocated projects, project CRUD, technical sheet, document association, SHP geometry display, PostGIS distance (ST_Distance) and buffer (ST_Buffer, ST_DWithin) tools, CSV/GeoJSON import/export and a statistics dashboard.",
  tech: 'React, Tailwind CSS, Leaflet, FastAPI, SQLAlchemy, PostgreSQL/PostGIS, MinIO, Alembic, Docker',
  image: '/images/projects/geodoc.PNG',
  github: 'https://github.com/makhloufiouiam/plateforme-gestion-documentaire',
  report: '/documents/Rapport_PFA.pdf'
},
      ],
    },
    {
      name: 'Applications & Interfaces (Python / Java)', tag: 'Applications',
      items: [
        { title: 'Tkinter Interface - Pancreatic Cancer', description: "Interactive application for analyzing and mapping medical data related to pancreatic cancer in Morocco: exploring patient data by region, searching by patient ID, visualizing risk factors, statistical dependency tests, and PDF report generation.", tech: 'Python, Tkinter, Data Analysis', image: '/images/projects/Cancer-projet.PNG', github: 'https://github.com/makhloufiouiam/pancreatic-cancer-gis' , report : '/documents/Rapport_CancerInterface.pdf'},
        {title: 'PyQt6 Interface - Geodesic Calculations',description: "Geodesic calculations application: ellipsoid information (Clarke 1880, WGS84), eccentricity and flattening computation, radii of curvature, geographic-to-Cartesian coordinate conversion, meridian and parallel arc length, area calculation, and direct/inverse geodetic problem solving.",tech: 'Python, PyQt6',image: '/images/projects/geodesie-projet.PNG',github: 'https://github.com/makhloufiouiam/calculs-geodesiques'},
        { title: 'Checkers Game', description: "Checkers simulation in Java for two local players, built as a team using the MVC pattern: dynamically drawn 8x8 board, full rule set (mandatory and multiple captures, promotion to king), highlighting of possible moves and pieces required to capture, sound effects, and winner announcement.", tech: 'Java, Swing/AWT, OOP/MVC', image: '/images/projects/dames_projet.PNG', github: 'https://github.com/makhloufiouiam/jeu-de-dames-java' , report : '/documents/Rapport_JeuDames.pdf'},
      ],
    },
    {
      name: 'Web Development', tag: 'Web',
      items: [
        { title: 'Kids Clothing E-commerce', description: "Static e-commerce website for a children's clothing store, organized by age group (0-2, 3-5, 6-8 years): dynamic shopping cart with automatic total calculation and quantity management, maximum price filter, and an admin panel for product management (add, edit, delete).", tech: 'HTML5, CSS3, JavaScript', image: '/images/projects/children-store-projet.PNG', github: 'https://github.com/makhloufiouiam/children-clothing-store' },
        { title: 'Bookstore Management', description: "Web management application for a bookstore (books and school supplies): stock tracking, checkout with automatic calculation and quantity updates for sales and purchases, multi-device access for the seller.", tech: 'Web development, Inventory management', inProgress: true },
      ],
    },
  ],
},
    skills: {
      title: 'Skills',
      categories: [
        { category: 'GIS, Remote Sensing & Photogrammetry', items: ['QGIS', 'ArcMap', 'QGIS Server', 'GeoServer', 'MapServer', 'Google Earth Pro', 'Google Earth Engine', 'ENVI', 'ERDAS Imagine', 'Philcarto / Phildigit', 'GeoAcademy', 'Sentinel-1/2', 'Landsat 8/9', 'Spectral & radar indices'] },
        { category: 'Web Development — Front-end', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React 19', 'Angular', 'Tailwind CSS', 'React Router', 'Axios', 'react-leaflet / Leaflet', 'OpenLayers', 'React Portal'] },
        { category: 'Web Development — Back-end', items: ['Python', 'PHP', 'Java', 'C', 'C++', 'FastAPI', 'NestJS', 'SQLAlchemy', 'GeoAlchemy2', 'Alembic', 'Pydantic', 'JWT (python-jose / bcrypt)', 'RESTful API design'] },
        { category: 'Databases & Spatial', items: ['PostgreSQL', 'PostGIS', 'MySQL', 'Relational and spatial modeling', 'GIST spatial indexes', 'Shapefile / GeoJSON', 'pgRouting'] },
        { category: 'Python — Scientific Libraries', items: ['Pandas', 'NumPy', 'Matplotlib', 'GeoPandas', 'Folium', 'scikit-learn', 'rasterio'] },
        { category: 'GeoAI & Machine Learning', items: ['Random Forest', 'SVM', 'Maximum Likelihood', 'Minimum Distance', 'Mahalanobis', 'K-Means', 'ISODATA', 'DBSCAN', 'Cross-validation', 'Confusion matrix', 'Kappa index'] },
        { category: 'Python Interfaces & Tools', items: ['Tkinter', 'PyQt6', 'Apache'] },
        { category: 'Big Data & Statistics', items: ['R', 'Hadoop', 'Hive', 'Spark / Sedona', 'Cloudera'] },
        { category: 'Modeling & Methodology', items: ['UML', 'Merise', 'Software design', 'Git / GitHub', 'Project management methodology'] },
        { category: 'DevOps & Deployment', items: ['Docker / Docker Compose', 'MinIO', 'Swagger / OpenAPI'] },
        { category: 'Topography, Photogrammetry & CAD', items: ['AutoCAD', 'Topographic surveys (Leica total station)', 'ArcGIS Drone2Map', 'Camera calibration', 'Interior, relative and absolute orientation', 'Aerial triangulation', 'SfM / MVS', 'DTM generation', 'Orthorectification'] },
      ],
    },
    contact: {
      title: 'Contact',
      text: 'Feel free to reach out for any opportunity or collaboration.',
      email: 'Email', linkedin: 'LinkedIn', github: 'GitHub',
    },
    footer: { text: 'All rights reserved.' },
  },

  ar: {
    nav: {
      home: 'الرئيسية', about: 'من أنا', education: 'التكوين', experience: 'الخبرة',
      projects: 'المشاريع', skills: 'المهارات', contact: 'اتصل بي',
    },
    hero: {
      greeting: 'مرحباً، أنا',
      name: 'مخلوفي ويام',
      role: 'مهندسة في نظم المعلومات الجغرافية',
      description: 'طالبة مهندسة في السنة الثالثة من سلك المهندسين في المعلوماتية الجغرافية بكلية العلوم والتقنيات بطنجة، أبحث عن تدريب نهاية الدراسة (PFE)، متخصصة في نظم المعلومات الجغرافية والتحليل المكاني والاستشعار عن بعد وتطوير التطبيقات الجيومكانية.',
      projectsBtn: 'مشاهدة مشاريعي',
      contactBtn: 'تواصل معي',
      quote: "لا قطاع بدون تراب. لا تراب بدون معطيات. تحويلها إلى قرار هو مهنتي.",
    },
about: {
  label: 'من أنا',
  title: 'الملف المهني',
  description: [
    'طالبة مهندسة في السنة الثالثة من سلك المعلوماتية الجغرافية بكلية العلوم والتقنيات بطنجة، شغوفة بتخصص يقوم على ثلاثة ركائز أساسية: اكتساب المعلومة الجغرافية، تحليلها، وتقديمها. هذه المقاربة الشاملة للمعطيات الجيومكانية — من جمعها إلى تثمينها لدى المستخدمين النهائيين — هي ما يحفزني بعمق في تكويني: فهم التراب بكل تعقيداته، ثم تحويل هذا التعقيد إلى أدوات واضحة وسهلة الاستعمال ومفيدة لاتخاذ القرار.',
    'حالياً مهندسة SIG بالمفتشية الجهوية للهندسة المعمارية والتعمير بطنجة في إطار تدريب مشروع نهاية الدراسة (PFA)، أطور مهاراتي في رسم الخرائط والجيوماتيك المطبق على إعداد التراب وتطوير تطبيقات الويب SIG. فضولية ودقيقة، أحب الجمع بين تقنيات الويب والهاتف المحمول وأدوات SIG لتصميم حلول مبتكرة وآلية وتفاعلية قادرة على الاستجابة لتحديات ملموسة.',
    'أبحث اليوم عن تدريب نهاية الدراسة (PFE)، وأرغب في مواصلة تعميق هذه الرؤية الشمولية للمعلوماتية الجغرافية والمساهمة في مشاريع تمنح معنى للمعطيات الجيومكانية.',
  ],
  skillsLabel: 'المهارات الشخصية',
  skills: [
    'التواصل', 'العمل الجماعي / التعاون', 'تدبير المشاريع',
    'تدبير الوقت', 'حل المشكلات', 'القدرة على التكيف',
    'القيادة', 'روح المبادرة / الاستباقية', 'الدقة والاهتمام بالتفاصيل',
    'الإبداع / الابتكار', 'التوجه نحو الخدمة/العميل', 'تدبير الضغط',
  ],
  formationLabel: 'التكوين',
  formation: 'هندسة المعلوماتية الجغرافية',
  universityLabel: 'الجامعة',
  university: 'كلية العلوم والتقنيات (FSTT) — طنجة، المغرب',
  locationLabel: 'الموقع',
  location: 'المغرب، طنجة',
  languagesLabel: 'اللغات',
  languagesList: ['العربية', 'الفرنسية', 'الإنجليزية'],
},
experience: {
  title: 'الخبرة',
  items: [
    {
      title: 'مهندسة SIG — تدريب مشروع نهاية الدراسة',
      place: 'المفتشية الجهوية للتعمير والهندسة المعمارية وإعداد التراب (IRUAAT)، طنجة',
      period: 'منذ يوليوز 2026',
      description: 'تصميم وتطوير منصة GeoDoc IRU، وهي منصة مندمجة تجمع بين تدبير الوثائق (GED) والبوابة الجغرافية، تهدف إلى مركزة الوثائق التقنية والجغرافية للمفتشية (وثائق التعمير، طبقات SIG، صور ساتلية، تقارير تقنية) وتحديد مواقع مشاريع المفتشية على خريطة تفاعلية.',
    },
    {
      title: 'مهندسة SIG — تدريب تأهيلي',
      place: 'Tanger Med Engineering',
      period: 'منذ يوليوز 2025',
      description: 'تطوير وتصميم منصة WebGIS لتدبير وتصور وتحليل المعطيات الجيومكانية، مما يتيح استغلالاً تفاعلياً ومركزياً للمعلومة الترابية.',
    },
  ],
},



    education: {
      title: 'التكوين',
      items: [
        {
          degree: 'سلك المهندسين في المعلوماتية الجغرافية',
          school: 'كلية العلوم والتقنيات (FST) طنجة',
          period: 'شتنبر 2024 - إلى حدود الآن',
          details: [
            'تدريب تأهيلي - Tanger Med Engineering (يوليوز 2025 - غشت 2025): تصميم وتطوير منصة ويب SIG لتدبير وتصور المعطيات الجغرافية.',
            'تدريب مشروع نهاية الدراسة (PFA) - المفتشية الجهوية للتعمير والهندسة المعمارية وإعداد التراب لجهة طنجة تطوان الحسيمة (يوليوز 2026 - أكتوبر 2026): تصميم وتطوير منصة مندمجة لتدبير الوثائق وتحديد المواقع الجغرافية للمشاريع.',
          ],
        },
        {
          degree: 'دبلوم DEUST MIPC',
          school: 'كلية العلوم والتقنيات (FST) طنجة',
          period: 'شتنبر 2022 - يونيو 2024',
          details: [
            'دبلوم جامعي في العلوم والتقنيات - تخصص: الرياضيات والمعلوميات والفيزياء والكيمياء.',
          ],
        },
        {
          degree: 'البكالوريا في العلوم الفيزيائية - خيار فرنسية',
          school: 'ثانوية أحمد الحنصالي',
          period: 'شتنبر 2021 - يونيو 2022',
          details: [],
        },
      ],
    },
projects: {
  title: 'المشاريع',
  inProgressLabel: 'قيد الإنجاز',
  allLabel: 'الكل',
  githubLabel: 'عرض على GitHub',
  reportLabel: 'عرض التقرير',
  readMore: 'اقرأ المزيد',
  readLess: 'عرض أقل',
  categories: [
    {
      name: 'الاستشعار عن بعد والتحليل المكاني', tag: 'الاستشعار عن بعد',
      items: [
        {
  title: 'إضافة QGIS - دعم القرار (الاستثناء وSentinel)',
  description: "إضافة QGIS من نافذتين. الأولى تحلل طلبات الاستثناء في التعمير: مساحة دنيا قدرها هكتار واحد، حماية المساحات الخضراء، مسافة دنيا بين المشاريع المستثناة، منطقة عازلة، تقاطع مع أصناف العقار، حساب المؤشرات وتصدير CSV/PDF. والثانية تحمّل صور Sentinel-2 وSentinel-1 وتحسب المؤشرات (NDVI وNDWI وNDBI وNDMI وRVI وVV/VH وNDPI وDPSVI).",
  tech: 'Python، PyQGIS، PyQt5، Sentinel-1/2',
  image: '/images/projects/plugin-derogation.PNG',
  github: 'https://github.com/makhloufiouiam/qgis-derogation-plugin'
},
        { title: 'تأثير الفيضانات على الغطاء النباتي', description: 'تحليل تأثير الفيضانات على الغطاء النباتي باستخدام الاستشعار عن بعد ونظم المعلومات الجغرافية في جهة الرباط سلا القنيطرة.', tech: 'Télédétection, SIG, Google Earth Engine, QGIS, ARCGIS' },
        { title: "جودة المياه - مرجة زرقاء", description: "رصد جودة مياه بحيرة مرجة زرقاء (مولاي بوسلهام، موقع رامسار) بالاستشعار عن بعد البصري، لتتبع تغيراتها الموسمية (2025-2026) وأثر الحجر الصحي لكوفيد-19 (2020). معالجة أولية لصور Landsat 8 و9 ببرنامج ENVI: تصحيح إشعاعي، تصحيح جوي بطريقة DOS1، تجميع النطاقات الطيفية وقناع المياه NDWI. حساب مؤشرات العكارة (NDTI) والمواد العالقة (NSMI) والكلوروفيل-أ، ثم تصنيف غير موجه بخوارزمية K-Means على Google Earth Engine إلى ثلاث فئات للجودة (جيدة، متوسطة، رديئة). النتيجة: دينامية موسمية واضحة، مع عكارة قصوى في الخريف بسبب الواردات النهرية وتكاثر للطحالب في الصيف مرتبط بالتخثث.", tech: "Landsat 8/9, ENVI, Google Earth Engine, K-Means, Indices spectraux (NDWI, NDTI, NSMI, Chl-a)" },
        { title: "تصنيف المناطق المحترقة - غابة الرميلات", description: "رصد ورسم خرائط المناطق المحترقة في غابة الرميلات (طنجة) بعد حريق غشت 2023: صور Sentinel-2 قبل الحريق وبعده عبر Google Earth Engine، حساب المؤشرات الطيفية (dNBR، NDVI، NDWI، NDBI)، توليد الحقيقة الميدانية آليًا بتحديد عتبات لعدة مؤشرات لأربع فئات (محترق، غطاء نباتي سليم، ماء، مبني)، ثم تصنيف Random Forest محسَّن بالتحقق المتقاطع. دقة 96,45% ومساحة محترقة مقدرة بـ493,6 هكتار، مع تصدير الخريطة النهائية بصيغة GeoTIFF.", tech: "Python, scikit-learn (Random Forest), rasterio, NumPy, pandas, Google Earth Engine, Sentinel-2, Jupyter", report: '/documents/Rapport_Classification_Random_Forest_Rmilat.pdf' },
        { title: "التحليل المكاني متعدد المعايير - Stowe", description: "البحث عن الموقع الأمثل لإنشاء مدرسة جديدة في Stowe: دمج عدة معايير مرجحة حسب أهميتها باستعمال عمليات التحليل المكاني (التقاطع، الاتحاد، القص...)، ثم تحديد المسار الأمثل بين الموقع المختار وتقاطع طرق قريب.", tech: "ArcMap, Analyse multicritère, Géotraitement" },
        { title: "الخط الساحلي - خليج طنجة", description: "دراسة التعرية الساحلية لخليج طنجة: رقمنة الخط الساحلي على صورتين فضائيتين لسنتين مختلفتين، ثم مقارنة الخطين لقياس تطوره. كشف التحليل عن تعرض الخليج للتعرية، ومكّن من تصنيف المناطق من الأكثر خطورة إلى الأقل خطورة حسب بعدها عن خط الشاطئ. وقد عُرضت النتائج في خريطة تركيبية.", tech: "ArcMap, Digitalisation, Imagerie satellite, Analyse diachronique" },
      ],
    },
    {
      name: 'منصات WebGIS ورسم الخرائط التفاعلي', tag: 'WebSIG',
      items: [
        { title: 'GeoAcadémie', description: 'خريطة تفاعلية للمستشفيات والمراكز الاستشفائية بجهة طنجة تطوان الحسيمة، أُنجزت ضمن فريق على منصة GeoAcadémie اللاكودية: جمع البيانات عبر Overpass Turbo وOpenStreetMap، إنشاء الخريطة برموز مخصصة، أدوات بحث وفلاتر مترابطة (اسم المستشفى، المدينة)، بطاقة معلومات قابلة للتعديل ومنظمة في أقسام موضوعية، ولوحة تحكم بإحصائيات (التوزيع حسب المدينة ونوع المؤسسة).', tech: 'GeoAcadémie, OpenStreetMap, Overpass Turbo',image : 'public/images/projects/Geoacadimie.PNG', report: '/documents/geoacademie-rapport.pdf' },
        { title: 'أطلس موضوعاتي تفاعلي - جهة الرباط سلا القنيطرة', description: "الإشكالية: كيف تتوزع ديناميات التنمية الترابية داخل جهة الرباط سلا القنيطرة؟ الهدف: قياس التفاوتات المجالية للجهة وفق سبعة أبعاد (السكان، الماء، الفلاحة، السلامة الطرقية، البنيات التحتية، الفقر، التساقطات) من خلال أطلس يضم أكثر من 15 خريطة. المنهجية: معطيات المندوبية السامية للتخطيط وOpenStreetMap، معالجة إحصائية بـExcel وR، مؤشرات مركبة (الضغط المائي الفلاحي، الخطر الصحي والطرقي)، استشعار عن بعد بـSentinel-1/2/5P على Google Earth Engine (NDVI، فيضانات 2026، ثاني أكسيد النيتروجين) وإنجاز الخرائط بـQGIS وPhilCarto. النتيجة: فجوة بين الساحل الحضري والمناطق الداخلية التي تجمع بين الإجهاد المائي والفقر وضعف الولوجية، مع نشر الأطلس بصيغة PDF ونسخة ويب تفاعلية.", tech: 'QGIS, PhilCarto, R, Excel, Google Earth Engine, Sentinel-1/2/5P, OpenStreetMap (QuickOSM, Overpass), Web mapping', image: '/images/projects/Atlas.PNG.jpg', report: '/documents/Rapport_Atlas.pdf' },
        { title: 'AFRICA TICKET - منصة تذاكر كان 2025', description: 'منصة ويب متكاملة (full-stack) لحجز تذاكر كأس أمم إفريقيا 2025 بالمغرب. حسابات مستخدمين آمنة، جدول المباريات الـ52، المنتخبات حسب المجموعات (تصنيف FIFA وCAF وعدد الألقاب)، حجز حسب الفئة (VIP، عادية، اقتصادية) مع سلة مشتريات، تسعير ديناميكي حسب اقتراب موعد المباراة مع حالة « Sold out »، دفع عبر واجهة PayPal، وتوليد التذكرة بصيغة PDF (رقم الباب والمقعد والتاريخ) قابلة للتحميل أو الإرسال عبر واتساب. خريطة تفاعلية Leaflet/OpenStreetMap للملاعب التسعة مع بطاقة معلومات ومسار Google Maps انطلاقًا من موقع المستخدم، وصفحة للأنشطة الثقافية والسياحية مصنفة حسب القرب من الملاعب.', tech: 'PHP 8, MySQL/MariaDB (PDO), HTML5, CSS3, JavaScript, Leaflet, OpenStreetMap, Google Maps API, PayPal API, XAMPP', image: '/images/projects/can_2025.PNG', github: 'https://github.com/makhloufiouiam/can_2025', report: '/documents/Rapport%20exam%20final.pdf' },
        {
  title: 'مشروع نهاية السنة - منصة متكاملة لتدبير الوثائق وتحديد المواقع الجغرافية للمشاريع (IRUAAT)',
  description: "مشروع نهاية السنة (2026) بالمفتشية الجهوية للتعمير والهندسة المعمارية وإعداد التراب لجهة طنجة تطوان الحسيمة: تصميم منصة ويب موحدة تجمع بين تدبير الوثائق والبوابة الجغرافية. وحدة الوثائق: رفع الملفات، بحث متعدد المعايير، تصنيفات هرمية، وسوم، إدارة الإصدارات، سلة المحذوفات، سجل التدقيق، مصادقة JWT والتحكم في الولوج حسب الأدوار. وحدة البوابة الجغرافية: خريطة تفاعلية Leaflet بمشاريع ملونة حسب حالتها، إدارة المشاريع (إنشاء، تعديل، حذف)، بطاقة تقنية، ربط الوثائق بالمشاريع، عرض هندسة ملفات SHP، أدوات PostGIS لحساب المسافة (ST_Distance) والمنطقة العازلة (ST_Buffer، ST_DWithin)، استيراد/تصدير CSV/GeoJSON ولوحة إحصائيات.",
  tech: 'React، Tailwind CSS، Leaflet، FastAPI، SQLAlchemy، PostgreSQL/PostGIS، MinIO، Alembic، Docker',
  image: '/images/projects/geodoc.PNG',
  github: 'https://github.com/makhloufiouiam/plateforme-gestion-documentaire',
  report: '/documents/Rapport_PFA.pdf'
},
       {
  title: 'تدريب تمهيدي - منصة نظم المعلومات الجغرافية على الويب (طنجة المتوسط للهندسة)',
  description: "تدريب تمهيدي من 4 يوليوز إلى 4 غشت 2025 بشركة طنجة المتوسط للهندسة: تصميم موقع ويب مصغر لنظم المعلومات الجغرافية لتدبير وعرض الشذوذات الجغرافية. جدول للكيانات، وخريطة تفاعلية (نقاط وخطوط ومضلعات) مع بطاقة معلومات قابلة للتعديل، وإضافة الكيانات بالرسم، وأدوات جغرافية مبنية على استعلامات PostGIS المكانية: المسافة (ST_Distance)، والتقاطع (ST_Intersects)، والجوار (ST_DWithin)، والمنطقة العازلة (ST_Buffer)، والتصفية حسب العنوان.",
  tech: 'Angular، OpenLayers، NestJS، TypeORM، PostgreSQL/PostGIS',
  image: '/images/projects/tme-projet.PNG',
  github: 'https://github.com/makhloufiouiam/Projet-TME',
  report: '/documents/Rapport_StageTME.pdf'
},
      ],
    },
    {
      name: 'تطبيقات وواجهات (بايثون / جافا)', tag: 'تطبيقات',
      items: [
        { title: 'واجهة Tkinter - سرطان البنكرياس', description: 'تطبيق تفاعلي لتحليل ورسم البيانات الطبية المرتبطة بسرطان البنكرياس في المغرب: استكشاف بيانات المرضى حسب الجهة، البحث برقم المريض، تصور عوامل الخطر، اختبارات الاعتماد الإحصائي، وإنشاء تقارير PDF.', tech: 'بايثون، Tkinter، تحليل البيانات', image: '/images/projects/Cancer-projet.PNG', github: 'https://github.com/makhloufiouiam/pancreatic-cancer-gis' , report : '/documents/Rapport_CancerInterface.pdf'},
        { title: 'واجهة PyQt6 - الحسابات الجيوديسية',description: 'تطبيق للحسابات الجيوديسية: معلومات حول الإهليلجيات (Clarke 1880 وWGS84)، حساب الانحرافات والتسطح، أنصاف أقطار الانحناء، تحويل الإحداثيات الجغرافية إلى ديكارتية، طول القوس الزوالي والقوس الموازي، حساب المساحة، وحل المسألتين المباشرة والعكسية.',tech: 'Python، PyQt6',image: '/images/projects/geodesie-projet.PNG',github: 'https://github.com/makhloufiouiam/calculs-geodesiques'},
        { title: 'لعبة الداما', description: 'محاكاة للعبة الداما بلغة Java للعب بين لاعبين محليين، طُوّرت ضمن فريق باستخدام نمط MVC: رقعة 8x8 تُرسم ديناميكيًا، قواعد كاملة (الأسر الإجباري والمتعدد، الترقية إلى الدامة)، إبراز الحركات الممكنة والقطع المجبرة على الأسر، مؤثرات صوتية، وإعلان الفائز.', tech: 'Java، Swing/AWT، برمجة كائنية التوجه', image: '/images/projects/dames_projet.PNG', github: 'https://github.com/makhloufiouiam/jeu-de-dames-java' , report : '/documents/Rapport_JeuDames.pdf'},
      ],
    },
    {
      name: 'تطوير الويب', tag: 'ويب',
      items: [
        { title: 'متجر إلكتروني لملابس الأطفال', description: 'موقع تجارة إلكترونية ثابت لمتجر ملابس أطفال، مصنف حسب الفئة العمرية (0-2، 3-5، 6-8 سنوات): سلة تسوق ديناميكية مع حساب المجموع تلقائيًا وإدارة الكميات، فلتر حسب السعر الأقصى، ولوحة تحكم للمسؤول لإدارة المنتجات (إضافة، تعديل، حذف).', tech: 'HTML5, CSS3, JavaScript', image: '/images/projects/children-store-projet.PNG', github: 'https://github.com/makhloufiouiam/children-clothing-store' },
        { title: 'تدبير مكتبة', description: 'تطبيق ويب لتدبير مكتبة (كتب ولوازم مدرسية): تتبع المخزون، صندوق أداء مع حساب آلي وتحديث الكميات حسب المبيعات والمشتريات، وولوج من عدة أجهزة للبائع.', tech: 'Développement web, Gestion de stock', inProgress: true },
      ],
    },
  ],
},
    skills: {
      title: 'المهارات',
      categories: [
        { category: 'نظم المعلومات الجغرافية، الاستشعار عن بعد والتصوير الجوي', items: ['QGIS', 'ArcMap', 'QGIS Server', 'GeoServer', 'MapServer', 'Google Earth Pro', 'Google Earth Engine', 'ENVI', 'ERDAS Imagine', 'Philcarto / Phildigit', 'GéoAcadémie', 'Sentinel-1/2', 'Landsat 8/9', 'المؤشرات الطيفية والرادارية'] },
        { category: 'تطوير الويب - الواجهة الأمامية', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React 19', 'Angular', 'Tailwind CSS', 'React Router', 'Axios', 'react-leaflet / Leaflet', 'OpenLayers', 'React Portal'] },
        { category: 'تطوير الويب - الواجهة الخلفية', items: ['Python', 'PHP', 'Java', 'C', 'C++', 'FastAPI', 'NestJS', 'SQLAlchemy', 'GeoAlchemy2', 'Alembic', 'Pydantic', 'JWT (python-jose / bcrypt)', 'تصميم واجهات RESTful'] },
        { category: 'قواعد البيانات والمعطيات المكانية', items: ['PostgreSQL', 'PostGIS', 'MySQL', 'النمذجة العلائقية والمكانية', 'مؤشرات مكانية GIST', 'Shapefile / GeoJSON', 'pgRouting'] },
        { category: 'بايثون - المكتبات العلمية', items: ['Pandas', 'NumPy', 'Matplotlib', 'GeoPandas', 'Folium', 'scikit-learn', 'rasterio'] },
        { category: 'الذكاء الاصطناعي الجغرافي والتعلم الآلي', items: ['Random Forest', 'SVM', 'الاحتمال الأقصى', 'أدنى مسافة', 'Mahalanobis', 'K-Means', 'ISODATA', 'DBSCAN', 'التحقق المتقاطع', 'مصفوفة الالتباس', 'مؤشر كابا'] },
        { category: 'واجهات وأدوات بايثون', items: ['Tkinter', 'PyQt6', 'Apache'] },
        { category: 'البيانات الضخمة والإحصاء', items: ['R', 'Hadoop', 'Hive', 'Spark / Sedona', 'Cloudera'] },
        { category: 'النمذجة والمنهجية', items: ['UML', 'Merise', 'تصميم البرمجيات', 'Git / GitHub', 'منهجية تدبير المشاريع'] },
        { category: 'DevOps والنشر', items: ['Docker / Docker Compose', 'MinIO', 'Swagger / OpenAPI'] },
        { category: 'الطوبوغرافيا والمسح التصويري والتصميم بالحاسوب', items: ['AutoCAD', 'رفع طوبوغرافي (محطة شاملة Leica)', 'ArcGIS Drone2Map', 'معايرة الكاميرا', 'التوجيه الداخلي والنسبي والمطلق', 'التثليث الجوي', 'SfM / MVS', 'إنشاء نموذج رقمي للتضاريس', 'التقويم الهندسي للصور'] },
      ],
    },
    contact: {
      title: 'اتصل بي',
      text: 'لا تتردد في التواصل معي لأي فرصة أو تعاون.',
      email: 'Email', linkedin: 'LinkedIn', github: 'GitHub',
    },
    footer: { text: 'جميع الحقوق محفوظة.' },
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr')

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}