// export const home = "/";
// const work = "/work";
// const about = "/about"
// const contact = "/contact";

// Visible names of the routes in the navigation bar (header)
// const visual_work = "Work";
// const visual_about = "About";
// const visual_contact = "Contact";

function Feature(name, code, href, icon){
  this.name = name
  this.code = code
  this.href = href
  this.icon = icon
}

const route_mapping = {
  HOME: 0,
  WORK: 1,
  ABOUT: 2,
  CONTACT: 3
}

const home = new Feature(
  "Home",
  route_mapping.HOME,
  "/",
  undefined
)
const work = new Feature(
  "Work",
  route_mapping.WORK,
  "/work",
  "fa-code"
)

const about = new Feature(
  "About",
  route_mapping.ABOUT,
  "/about",
  "fa-user-o"
)

const contact = new Feature(
  "Contact",
  route_mapping.CONTACT,
  "/contact",
  "fa-envelope-o"
)

const routes = [
  home,
  work,
  about,
  contact
]

const nav_links = [
  work, about, contact
]
export {
    home, work, about, contact,
    routes, nav_links
}
