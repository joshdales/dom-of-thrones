function scene2() {
  console.log('Executing scene 2!');
  // Setup Stage
  var castle = document.querySelector('#castle');
  var stageImg = stage.querySelector('#stage-img')
  var castleImgSrc = castle.getAttribute('src');
  stageImg.setAttribute('src', castleImgSrc);

  // Setup Cast
  var nedContainer = document.createElement('div')
  var ned = document.querySelector('#ned');
  var leather = document.querySelector('#leather-armour');
  nedContainer.style = 'position: absolute; width: 10%; height: 37%; top: 55%; bottom: 50%; border: none; background: none; left: 25%;';
  ned.style = "border: none; width: 70%; position: absolute; top: 0px;";
  leather.style = "border: none; position: absolute; bottom: 0px;";
  nedContainer.appendChild(ned);
  nedContainer.appendChild(leather);
  stage.append(nedContainer);

  // Character 1

  // Character 2

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
