function SectionObj(title, description, projects){
  if(title === undefined || description === undefined || projects === undefined){
    throw "undefined argument"
  }

  if(typeof title !== "string" || typeof description !== "string" || typeof projects !== "object"){
    throw "wrong argument type"
  }

  if(title.length === 0 || description.length === 0  || projects.length === 0){
    throw "one of the arguments is empty"
  }
  this.title = title;
  this.description = description;
  this.projects = projects;
}

export default SectionObj
