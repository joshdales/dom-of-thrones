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
  nedContainer.style.position = 'absolute';
  nedContainer.style.width = '10%;';
  nedContainer.style.height = '37%';
  nedContainer.style.top = '55%';
  nedContainer.style.bottom = '50%';
  nedContainer.style.left = '25%';
  ned.style.position = 'absolute';
  ned.style.top = '0';
  ned.style.width = '70%';
  leather.style.position = 'absolute';
  leather.style.bottom = '0';
  nedContainer.appendChild(ned);
  nedContainer.appendChild(leather);
  stage.append(nedContainer);

  var joffContainer = document.createElement('div');
  var joffrey = document.querySelector('#joffrey');
  var king = document.querySelector('#king');
  joffContainer.style.position = "absolute";
  offContainer.style.bottom = '0';
  joffrey.style.position = 'absolute';
  joffrey.style.top = '0';
  joffrey.style.right = '0';
  joffrey.style.width = '58%';
  king.style.position = 'absolute'
  king.style.bottom: '0';
  joffContainer.appendChild(joffrey);
  joffContainer.appendChild(king);
  stage.append(joffContainer);



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
