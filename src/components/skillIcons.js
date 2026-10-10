import {
  AppWindow, BadgeCheck, Boxes, BrainCircuit, Camera, ChartScatter, Compass, Database, GitBranch, GitFork, Grid3x3,
  Layers, Map, MapPinned, Mountain, Network, Plane, Radar, Ruler, Satellite, ScanLine, Server, Target, Workflow,
} from 'lucide-react'

// Colored brand logos: devicon (pinned) first, simple-icons for GIS tools devicon lacks
const dev = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${path}.svg`
const si = (slug, color) => `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ''}`

// Keyed by the skill label as written in translations (tool names are identical across locales)
const logos = {
  'QGIS': si('qgis'),
  'QGIS Server': si('qgis'),
  'ArcMap': si('arcgis'),
  'Google Earth Pro': si('googleearth'),
  'Google Earth Engine': si('googleearthengine'),
  'HTML': dev('html5/html5-original'),
  'CSS': dev('css3/css3-original'),
  'JavaScript': dev('javascript/javascript-original'),
  'TypeScript': dev('typescript/typescript-original'),
  'React 19': dev('react/react-original'),
  'React Portal': dev('react/react-original'),
  'Angular': dev('angular/angular-original'),
  'Tailwind CSS': dev('tailwindcss/tailwindcss-original'),
  'React Router': dev('reactrouter/reactrouter-original'),
  'Axios': dev('axios/axios-plain'),
  'react-leaflet / Leaflet': si('leaflet'),
  'OpenLayers': si('openlayers'),
  'Python': dev('python/python-original'),
  'PHP': dev('php/php-original'),
  'Java': dev('java/java-original'),
  'C': dev('c/c-original'),
  'C++': dev('cplusplus/cplusplus-original'),
  'FastAPI': dev('fastapi/fastapi-original'),
  'NestJS': dev('nestjs/nestjs-original'),
  'SQLAlchemy': si('sqlalchemy', 'white'),
  'Pydantic': si('pydantic'),
  'JWT (python-jose / bcrypt)': si('jsonwebtokens', 'white'),
  'PostgreSQL': dev('postgresql/postgresql-original'),
  'MySQL': si('mysql'),
  'Pandas': si('pandas', 'white'),
  'NumPy': dev('numpy/numpy-original'),
  'Matplotlib': dev('matplotlib/matplotlib-original'),
  'GeoPandas': si('geopandas'),
  'Folium': si('folium'),
  'PyQt6': si('qt'),
  'Apache': dev('apache/apache-original'),
  'R': dev('r/r-original'),
  'Cloudera': si('cloudera'),
  'Hadoop': dev('hadoop/hadoop-original'),
  'Hive': si('apachehive'),
  'Spark / Sedona': dev('apachespark/apachespark-original'),
  'scikit-learn': dev('scikitlearn/scikitlearn-original'),
  'Landsat 8/9': si('nasa'),
  'ArcGIS Drone2Map': si('arcgis'),
  'UML': si('uml'),
  'Git / GitHub': dev('git/git-original'),
  'Docker / Docker Compose': dev('docker/docker-original'),
  'MinIO': si('minio'),
  'Swagger / OpenAPI': dev('swagger/swagger-original'),
  'AutoCAD': si('autocad'),
}

// Generic icons for tools without a public logo
const fallbacks = {
  'GeoServer': Server,
  'MapServer': Server,
  'ENVI': Satellite,
  'ERDAS Imagine': Satellite,
  'Philcarto / Phildigit': Map,
  'GéoAcadémie': MapPinned,
  'GeoAcademy': MapPinned,
  'PostGIS': Database,
  'GeoAlchemy2': Database,
  'Alembic': GitBranch,
  'Shapefile / GeoJSON': Layers,
  'Tkinter': AppWindow,
  'Merise': Network,
  'Sentinel-1/2': Satellite,
  'rasterio': Grid3x3,
  'pgRouting': GitFork,
  'SfM / MVS': Boxes,
}

// Concept skills are translated, so match them by keyword in FR / EN / AR
const keywordIcons = [
  [/radar|رادار/i, Radar],
  [/random forest|svm|vraisemblance|likelihood|minimum distance|mahalanobis|الاحتمال|أدنى مسافة/i, BrainCircuit],
  [/k-means|isodata|dbscan/i, ChartScatter],
  [/validation|kappa|confusion|التحقق|الالتباس|كابا/i, Target],
  [/calibra|معايرة/i, Camera],
  [/orientation|التوجيه/i, Compass],
  [/triangulation|التثليث/i, Plane],
  [/MNT|DTM|التضاريس/, Mountain],
  [/orthorectif|التقويم/i, ScanLine],
  [/leica|topograph|طوبوغرافي/i, Ruler],
]

export function getSkillIcon(name) {
  if (logos[name]) return { src: logos[name] }
  if (fallbacks[name]) return { Icon: fallbacks[name] }
  const match = keywordIcons.find(([pattern]) => pattern.test(name))
  if (match) return { Icon: match[1] }
  if (/model|modél|نمذجة|design|conception|تصميم|méthodolog|methodolog|منهجية/i.test(name)) return { Icon: Workflow }
  return { Icon: BadgeCheck }
}
