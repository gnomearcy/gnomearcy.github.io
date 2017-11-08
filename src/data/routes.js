function Feature(name, code, href, icon){
  this.name = name
  this.code = code
  this.href = href
  this.icon = icon
}

const route_mapping = {
  ABOUT: 1,
  WORK: 2,
  CONTACT: 3
}

// const home = new Feature(
//   "Home",
//   route_mapping.HOME,
//   "/",
//   undefined
// )

const work = new Feature(
  "Work",
  route_mapping.WORK,
  "/work",
  "fa-code"
)

const about = new Feature(
  "About",
  route_mapping.ABOUT,
  "/",
  "fa-user-o"
)

const contact = new Feature(
  "Contact",
  route_mapping.CONTACT,
  "/contact",
  "fa-envelope-o"
)

const routes = [
  work,
  about,
  contact
]

const nav_links = [
  work, contact
]

const main_route = about.href;

export {
    work, about, contact,
    routes, nav_links,
    main_route
}
