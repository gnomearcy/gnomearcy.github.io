import {
  android,
  games,
  modeling
} from './projects'

import section_model from '../section/model'

const sections = [];
const android_description = "To this point I have implemented two mobile native applications in Java that were released on Google Play. Non-public projects include internal projects while employed. Details for public applications can be reviewed here:"
const games_description = "I'm a long-time gamer and therefor I decided to make a game of my own. One and only game was made as part of the Masters degree project."
const modeling_description = "As part of game development, modeling plays a crucial role. Here are some models made in various modeling software such as Blender or Google Sketchup. The game props were modeled in Blender while the whole student dorm project was modeled and rendered in Google Sketchup."

sections.push(new section_model("Android", android_description, android));
sections.push(new section_model("Games", games_description, games));
sections.push(new section_model("3D modeling", modeling_description, modeling));

export default sections
