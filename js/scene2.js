function scene2() {
  console.log('Executing scene 2!');
  // Setup Stage
  var castle = document.querySelector('#castle');
  var stageImg = stage.querySelector('#stage-img')
  var castleImgSrc = castle.getAttribute('src');
  stageImg.setAttribute('src', castleImgSrc);

  // Setup Cast
  var nedContainer = document.createElement('div');
  stage.append(nedContainer);
  nedContainer.style.position = 'absolute';
  nedContainer.style.width = '10%;';
  nedContainer.style.height = '37%';
  nedContainer.style.top = '50%';
  nedContainer.style.bottom = '50%';
  nedContainer.style.left = '25%';

  var ned = document.querySelector('#ned');
  nedContainer.appendChild(ned);
  ned.style.position = 'absolute';
  ned.style.top = 0;
  ned.style.width = '70%';

  var leather = document.querySelector('#leather-armour');
  nedContainer.appendChild(leather);
  leather.style.position = 'absolute';
  leather.style.bottom = 0;

  var joffContainer = document.createElement('div')
  joffContainer.id = 'joff-container'
  stage.append(joffContainer)
  joffContainer.style.width = '8%'
  joffContainer.style.position = 'absolute'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '55%'
  joffContainer.style.left = '55%'

  var joff = document.querySelector('#joffrey')
  joffContainer.append(joff)
  joff.style.width = '75%'
  joff.style.position = 'absolute'
  joff.style.left = '33%'

  var kingWardrobe = document.querySelector('#king')
  joffContainer.append(kingWardrobe)
  kingWardrobe.style.position = 'absolute'
  kingWardrobe.style.bottom = 0

  // Character 1

  // Character 2

  // Setup Props
  var sword = document.querySelector('#sword')
  stage.append(sword)

  // Prop 1
  sword.style.position = 'absolute'
  sword.style.top = '78%'
  sword.style.left = '26%'
  sword.style.height = '5%'
  sword.style.transform = 'rotateY(150deg)'

  // Prop 2

  // Action!

  // Stage direction 1
  frame(function() {
    sword.style.top = '78%'
    sword.style.left = '26%'
  })

  frame(function() {
    sword.style.top = '75%'
    sword.style.left = '32%'
  })

  frame(function() {
    sword.style.top = '72%'
    sword.style.left = '39%'
  })

  frame(function() {
    sword.style.top = '67%'
    sword.style.left = '46%'
  })

  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '52%'
  })

  // Stage direction 2
  frame(function() {
    joff.style.transform = 'rotateZ(30deg)';
    joff.style.left = '70%';
  })

}
