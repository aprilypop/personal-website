const nameCode = document.querySelector("#bg-feature");

/*
let tfw = Math.random()*-20-40;
let tfh = Math.random()*-20-40;
let rot2 = Math.random()*30-15;
//nameCode.style='transform: translate(-50%,-50%) rotate('+rot2+'deg)';
nameCode.style='transform: translate('+tfw+'%,'+tfh+'%) rotate('+rot2+'deg)';
*/

nameCode.style.fontSize="0px";
//const designerName = document.querySelector("#designer-name");
let w = nameCode.clientWidth;
let h = nameCode.clientHeight;
//let name = nameCode.textContent || nameCode.innerText;
let funkyText = 'under'+'\n'+'construction';
var nodes = nameCode.childNodes;
var nameText = '';

let font;
let nTiles;
let tileSize;
let pgTileSize;
let f;
let txt;
let rand;
let count=0;
let tRatio=1;
let quote1;
let rot = true,
		rotX = 0,
		rotY=0;
let ts2=0;

let txtInput,
		slider,
		slider2,
		mySelect,
		button,
		button2,
		exportText;

function preload() {
  font = loadFont('https://cdn.prod.website-files.com/6727c03b0e43326a1f949b07/67acc93411ca64d547b6bfa9_SHIFTSans-Heavy-Nov17.otf'); // Preload the font. For 3D to work, we need a font file (not a linked font). 
	console.log(font);
}


function setup() {
    frameRate(15);
    let cnv = createCanvas(w,h);
    cnv.parent(nameCode);
    cnv.style("position", "relative");
    cnv.style("visibility", "visible");
	pg = createGraphics(w/f,h/f,WEBGL);
	quote = funkyText;
	quote1=quote;
	
	txtInput = createElement('textarea',funkyText);
    txtInput.position(25, 25);
    //nameCode.child(txtInput);
        
	slider = createSlider(0, 999, 0);
    slider.position(200, 25);
    slider.size(150);
	
	slider2 = createSlider(-1000, 1000, 0);
  slider2.position(200, 50);
  slider2.size(150);
	
	mySelect = createSelect();
  mySelect.position(375, 25);

  mySelect.option('red', '#FF4500');
  mySelect.option('orange', '#FF4500');
  mySelect.option('yellow', '#FFF200');
  mySelect.option('green', '#51DA4C');
  mySelect.option('cyan', '#00E8FC');
  mySelect.option('blue', '#1F41FF');
  mySelect.option('magenta', '#FF36AD');
  mySelect.option('none');
	
	mySelect.selected(random(['#FF4500','#FF4500','#51DA4C','#00E8FC','#1F41FF','#FF36AD']));

	button = createButton('randomize!');
	button.position(475,25);
  
	button2 = createButton('export!');
	button2.position(575,25);
	
	exportText = createP('Press TAB to pause');
	exportText.position(25, 50);
  slider.value(400);
  
  button.hide();
  button2.hide();
  exportText.hide();
  mySelect.hide();
  slider.hide();
  slider2.hide();
  txtInput.hide();
  
	//pixelDensity(3);
}

function draw() {
  pg.textSize(160/f);
	tRatio = pg.textWidth(quote)/pg.width/0.8213903743315508;
	let c = mySelect.selected();
	// f = map(mouseX,0,width,2,15);
	ts2 = 10**map(slider2.value(),-1000,1000,-1,1);
	f = map (slider.value(),0,999,2,30);
	noSmooth();
	pg.resizeCanvas(w/f,h/f);
	pg.clear();
	if (c=='none'){
		background(255);
		clear();
	} else {
		background(c);
	}
  //clear();
  pg.textFont(font);
  pg.textAlign(CENTER,CENTER);
	ts = 160/f/tRatio*ts2;
  pg.textSize(ts);
	pg.textLeading((ts)*.9);
  pg.push();
	if (rot){
		rotX=map(mouseY,0,height,HALF_PI-1,-HALF_PI+1);
		rotY=map(mouseX,0,width,-HALF_PI+1,HALF_PI-1);
	}
  pg.rotateX(rotX);
  pg.rotateY(rotY);
  for(let i=0; i<100; i++) {
    if (i<95){
      pg.fill(20);
    } else {
      pg.fill(230);
    }
    pg.translate(0,0,0.7/f/tRatio*ts2);
    pg.text(quote,0,0);
  }
  pg.pop(); 
	image(pg,0,-20,width,height);
	
	button.mousePressed(()=>{
		slider.value(random(0,999));
		mySelect.selected(random(['#FF4500','#FFC300','#FFF200','#51DA4C','#00E8FC','#1F41FF','#FF36AD']));
	});
	
	button2.mousePressed(()=>{
		saveCanvas('shiftCanvas', 'png');
	});

}

function windowResized() {
	w = nameCode.clientWidth;
  h = nameCode.clientHeight;
  resizeCanvas(w, h*.875);
  background(255);
	pg.textSize(160/f);
	tRatio = pg.textWidth(quote)/pg.width/0.8213903743315508;
}

function keyPressed() {
	setTimeout(function(){
		quote = `${txtInput.value()}`;
		// print(quote);
		if (keyCode == TAB) {
			rot=!rot;
			print(rot);
		} else {
			quote1=quote;
			pg.textSize(160/f);
			tRatio = pg.textWidth(quote)/pg.width/0.8213903743315508;
		}
	}, 10);
}

function mousePressed() {
    tfw = Math.random()*-20-40;
    tfh = Math.random()*-20-40;
    rot2 = Math.random()*30-15;
    nameCode.style='transform: translate('+tfw+'%,'+tfh+'%) rotate('+rot2+'deg)';
    mySelect.selected(random(['#FF4500','#FF4500','#51DA4C','#00E8FC','#1F41FF','#FF36AD']));
}
