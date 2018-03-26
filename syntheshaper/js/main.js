//   ____________________   //
//  { syntheshaper projet } //
//   --------------------   //
//   by antonio nogueras    //

// * // * // * // ~   .   , . ^ › · ‚ ° ` ˘ ˚
// *  SIGHT  * // *  ∞ °⁄ · ° • º `
// * // * // * // ~  ~~ `


var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Render = Matter.Render,
    Composites = Matter.Composites,
    Bodies = Matter.Bodies;

    var engine = Engine.create({
      render: {
        element: document.body,
          options: {
            // width: 500,
            // height: 500,
          }
        }
     });

     function boxCreate() {
       var Random = Math.floor((Math.random() * 50) + 1);
       var posRandom = Math.floor((Math.random() * 800) + 1);
       var boxA = Bodies.rectangle(posRandom, Random, Random, Random);
       var boxB = Bodies.circle(posRandom, Random, Random, Random);
       var boxC = Bodies.circle(posRandom, Random, Random, Random);
       var boxD = Bodies.rectangle(posRandom, Random, Random, Random);
       var boxE = Bodies.circle(posRandom, Random, Random, Random);
       var boxF = Bodies.circle(posRandom, Random, Random, Random);
       var boxG = Bodies.circle(posRandom, Random, Random, Random);
       var boxH = Bodies.rectangle(posRandom, Random, Random, Random);

       World.add(engine.world, [boxA, boxB, boxC, boxD, boxE, boxF, boxG, boxH]);
     }


     Engine.run(engine);


// * // * // * // ~   .   , . ^ › · ‚ ° ` ˘ ˚
// *  SOUND  * // *  ∞ °⁄ · ° • º `
// * // * // * // ~  ~~ `


Tone.Transport.bpm.value = 120
var freeverb = new Tone.Freeverb().toMaster();
var vibrato =  new Tone.Vibrato(0.0, 5.0);
var feedbackDelay = new Tone.FeedbackDelay("16n", 0.5).toMaster();
var distortion = new Tone.Distortion(0.01);
var tremolo = new Tone.Tremolo(0.00).start();
var polySynth = new Tone.PolySynth(5, Tone.FMSynth).chain(tremolo, distortion, 
                                                          vibrato, feedbackDelay, 
                                                          freeverb, Tone.Master);

// * * * K E Y  E V E N T S * * * //

function playNote(note) {
  var noteTime = "16n";
  
  polySynth.triggerAttackRelease(note, noteTime);
  boxCreate();
}

window.onkeydown = function(event) {
  var action = event.keyCode;

    switch(action) {
      case 65: playNote('C4');  break;
      case 83: playNote('D4');  break;
      case 68: playNote('E4');  break;
      case 70: playNote('F4');  break;
      case 71: playNote('G4');  break;
      case 72: playNote('A4');  break;
      case 74: playNote('B4');  break;
      case 75: playNote('C5');  break;
      case 87: playNote('C#4'); break;
      case 69: playNote('D#4'); break;
      case 84: playNote('F#4'); break;
      case 89: playNote('G#4'); break;
      case 85: playNote('A#4'); break;
    }
  }
