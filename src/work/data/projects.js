import project_model from '../section/project/model'
import AndroidProjectImage from '../assets/android_project.png'
import GamesProjectImage from '../assets/games_project.png'

const android = [];
const games = [];
const modeling = [];
const make = (name, role, path) => {return new project_model(name, role, path)}
android.push(make("Android 1", "UX / UI", AndroidProjectImage))
android.push(make("Android 1", "Full stack implementation", AndroidProjectImage))
android.push(make("Android 1", "testing / design / implementation", AndroidProjectImage))
games.push(make("Games 1", "Models", GamesProjectImage));
games.push(make("Games 1", "Tech lead", GamesProjectImage));
modeling.push(make("Model 1", "Wireframing / prototypes", GamesProjectImage));

export {
  android,
  games,
  modeling
}
