export const home = "/";
const work = "/work";
const about = "/about"
const contact = "/contact";

// Visible names of the routes in the navigation bar (header)
const visual_work = "Work";
const visual_about = "About";
const visual_contact = "Contact";

export default [
  {
    visual: visual_work,
    route: work,
    icon: "fa-code"
  },
  {
    visual: visual_about,
    route: about,
    icon: "fa-user-o"
  },
  {
    visual: visual_contact,
    route: contact,
    icon: "fa-envelope-o"
  }
]
