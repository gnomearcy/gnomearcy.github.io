function ProjectObj(name, role, image){
  if(name === undefined || role === undefined || image === undefined){
    throw "undefined argument"
  }

  if(typeof name !== "string" || typeof role !== "string" || typeof image !== "string"){
    throw "wrong argument type"
  }

  if(name.length === 0 || role.length === 0  || image.length === 0){
    throw "one of the arguments is empty"
  }

  this.name = name;
  this.role = role;
  this.image = image;
}

export default ProjectObj;
