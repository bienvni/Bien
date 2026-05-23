function BuiltinRead(x){

  const skulpt = Sk.builtinFiles;
  if(skulpt===undefined || 
     skulpt["files"][x]===undefined)

     throw`File not found: "${x}"`;

  return skulpt["files"][x];

}


function runit(){

  //Sk.pre = "output";
  Text=arg=>prin.innerHTML += arg;

  Sk.configure(
    { output:Text, read:BuiltinRead }
  ); 

  (Sk.TurtleGraphics || 
   (Sk.TurtleGraphics={})).target = 
  'screen';

  const myPromise = 
  Sk.misceval.asyncToPromise(()=>{

    return Sk.importMainWithBody(
      "<stdin>",false,
      python.value,true
    );

  });

  myPromise.then(function(mod){},

    function(err){

      console.log(err.toString());

  });

}



window.onload = runit;
