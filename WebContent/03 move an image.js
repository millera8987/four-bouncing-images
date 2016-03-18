
var game = new Phaser.Game(800, 480, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var Bug = function(x,y,dx,dy,width,height, who){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.width = width;
	this.height = height;
	this.image = game.add.sprite(x, y, who);
	this.image.scale.setTo(width/this.image.width, height/this.image.height);

	
	this.move = function(lb,rb,tb,bb){
		
		this.x+=this.dx;
		this.y+=this.dy;
		this.image.x = this.x;
		this.image.y = this.y;
		if ((this.dx < 0 && this.x + this.dx  < lb) || (this.dx > 0 && this.x + this.dx +this.width > rb)){
			this.dx = -this.dx;
		}
		if ((this.dy < 0 && this.y + this.dy  <tb) || (this.dy > 0 && this.y + this.dy + this.height > bb)){
			this.dy = -this.dy;
		}
	};
	this.toString = function(){
		return "" + this.image.x + ", " + this.image.y + "--" + this.dx + ", " + this.dy + " - " + this.image.width;
	};
};
var text;
var bug1, bug2, bug3, bug4;


function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('bug1', 'assets/pics/darkBugClip.png');
    game.load.image('bug2', 'assets/pics/greenBugClip.png');
    game.load.image('bug3', 'assets/pics/redBug.png');
    game.load.image('bug4', 'assets/pics/roundBugClip.png');
    
    game.load.image('b1', 'assets/pics/floor1.png');
    game.load.image('b2', 'assets/pics/floor2.png');
    game.load.image('b3', 'assets/pics/floor3.png');
    game.load.image('b4', 'assets/pics/floor4.png');
   
}

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
   // var image = game.add.sprite(0, 0, 'einstein');

    //game.physics.enable(image, Phaser.Physics.ARCADE);

    //image.body.velocity.x=150;
	var floor1 = new Bug(0,0,0,0,game.width/2,game.height/2,"b1");
	var floor2 = new Bug(game.width/2,0,0,0,game.width/2,game.height/2,"b2");
	var floor3 = new Bug(0,game.height/2,0,0,game.width/2,game.height/2,"b3");
	var floor4 = new Bug(game.width/2,game.height/2,0,0,game.width/2,game.height/2,"b4");
	
	
	bug1 = new Bug(0,0,5,5,50,50,'bug1');
	bug2 = new Bug(game.width/2,0,3,3,75,75,'bug2');
	bug3 = new Bug(game.width/2,game.height/2,3,3,125,125,'bug3');
	bug4 = new Bug(0,game.height/2,3,3,100,100,'bug4');
	
	 var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    //  The Text is positioned at 0, 100
    //text = game.add.text(0, 200, "Hello", style);

}

function update() {
	//text.text = bug1.toString();
	bug1.move(0,game.width/2,0,game.height/2);
	bug2.move(game.width/2,game.width,0,game.height/2);
	bug3.move(game.width/2,game.width,game.height/2,game.height);
	bug4.move(0,game.width/2,game.height/2,game.height);
}


