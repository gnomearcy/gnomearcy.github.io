export default function ProjectInfo(image_path, uri_target){
    if(image_path === undefined || uri_target === undefined){
      throw "undefined argument"
    }

    if(typeof image_path !== "string" || typeof uri_target !== "string"){
      throw "argument wrong type"
    }

    if(image_path.length === 0 || uri_target.length === 0){
      throw "argument is empty"
    }

    this.image = image_path;
    this.uri = uri_target;
}
