function make$Element(option){
  if(option){
    var tag = option["tagName"];
    var className = option["className"];
    var id = option["id"];
    return $("<"+tag+">").attr("class", className).attr("id", id);
  } else {
    return $('<div>');
  }
}

function Model(option){
  this.options = option || {};
}

Model.prototype.get = function(arg){
  return this.options[arg]
}

Model.prototype.set = function(arg) {
  for(var opt in arg) {
    this.options[opt] = arg[opt];
  }
}