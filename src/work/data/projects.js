import project_model from '../section/project/model'

import PodobnikImage from '../assets/app_podobnik.png'
import PoliceImage from '../assets/app_police.png'
import RoomAssistant from '../assets/app_ra.png'

import GamesProjectImage from '../assets/app_game.png'
import DormImage from '../assets/model_dorm.png'

const android = [
  // Podobnik
  new project_model(
    "Podobnik",
    "Full iOS rewrite",
    PodobnikImage,
    "https://play.google.com/store/apps/details?id=eu.span.dev.osijek.podobnik"
  ),

  new project_model(
    "Mol - Safety and Trust",
    "Design & implementation",
    PoliceImage,
    "https://play.google.com/store/apps/details?id=eu.span.devosijek.mup"
  ),

  new project_model(
    "Room Assistant",
    "Implementation & integration",
    RoomAssistant,
    "https://span.eu/poslovna-rjesenja/span-rjesenja/room-assistant/"
  )
];

const games = [
  new project_model(
    "Toma-X",
    "Full game development",
    GamesProjectImage,
    "https://github.com/gnomearcy/masters_game"
  )
];

const modeling = [
  new project_model(
    "Student dorm Osijek",
    "Modeling & simulation",
    DormImage,
    "https://www.youtube.com/watch?v=8IVQFFQcQXA"
  ),
];

export {
  android,
  games,
  modeling
}
