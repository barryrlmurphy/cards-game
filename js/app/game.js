var game = new Phaser.Game(800, 600, Phaser.AUTO);

// setup the game states
var gameState = {
	// load game assets before game starts
	preload: function() {
		this.load.image('background', 'images/game-map-large.jpg');
		this.load.image('boat', 'images/boat.svg');
		this.load.image('character', 'images/army-1.png');
	},
	// execute after everything is loaded
	create: function() {
		this.background = this.game.add.sprite(0, 0, 'background');
		console.log(this.game.world);
		game.world.setBounds(0, 0, 7107, 5321);
		this.character = this.game.add.sprite(6900, 200, 'character');
		this.character.anchor.setTo(0.5,0.5);
		this.character.scale.setTo(0.3); // use minus number to flip the image

		game.camera.follow(this.character);
		
	 	cursors = game.input.keyboard.createCursorKeys();
	},
	// executed many times per second
	update: function() {
		// console.log("key: " + Phaser.key);
		if (cursors.up.isDown){
			this.character.y -= 1;
			game.camera.y -= 2;
		}
		if (cursors.down.isDown){
			this.character.y += 1;
			game.camera.y += 2;
		}
		if (cursors.left.isDown){	
			this.character.scale.setTo(0.3);
			this.move(this.character,-1);
			game.camera.x -= 2;
		}
		if (cursors.right.isDown){
			this.character.scale.setTo(-0.3, 0.3);
			this.move(this.character,1);
			game.camera.x += 2;
		}
		
	},
	move: function(object, distance){
		object.x = object.x + distance * Math.cos(object.rotation);
		object.y = object.y + distance * Math.sin(object.rotation);	
	}
};

game.state.add('gameState', gameState);
game.state.start('gameState');
