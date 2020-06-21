function man(name){
  return{
    name,
    greet:function(){
      console.log('Hey, my name is ' + name)
    }
  }
}

function Man(name){
  this.name = name;
  this.greet = function(){
    console.log('Hey, my name is ' + name)
  }
}
