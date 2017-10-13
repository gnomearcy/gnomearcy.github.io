/*
    Data source for Home component
*/

import model from '../project_group/model'
import android from '../assets/android_project.png'
import games from '../assets/games_project.png'

const showcases = [];

// TODO: find out the proper hyperlink to location
showcases.push(new model(android, "/work"))
showcases.push(new model(games, "/work"))

export default showcases;
