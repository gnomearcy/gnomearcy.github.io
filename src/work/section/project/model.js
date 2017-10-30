function ProjectObj(name, role, image, url){
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

  this.url = url;
  // If there's an url, click on the project view will take us there
  this.clickable = url !== undefined;
}

export default ProjectObj;
