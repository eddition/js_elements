function make$Element(option){
  if(option){
  return $('<p id="cat">').attr("class", "dog");
} else {
  return $('div');
}
}

function Model(option){
  this.options = option || {};
}

Model.prototype.get = function(arg){
  return this.options[arg]
}

Model.prototype.set = function(arg) {
  this.options = arg;
}