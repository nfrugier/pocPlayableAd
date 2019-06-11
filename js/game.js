var game, config, options, chrono;
var score = 0;
var timer = 10;
var endGame = ["Rejouez", "Rejoignez-nous pour en savoir plus sur l'advergame !"];
var startGame = ["A VOUS DE JOUER",
                "Tirez sur les meteorites avant\nqu'elles ne vous atteignent",
                ];
var paused = true;

var bg = "data:image/png;base64,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";

var logo = "data:image/png;base64,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";
var url = "http://advergame.armstrong.space/mission";

window.onload = ()=>{
    config = {
        type: Phaser.CANVAS,
        scale:{
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width : 400,
            height : 400,
            parent:'game',
        },
        backgroundColor : 0x000000,
        physics: {
            default: "arcade",
            arcade: {
                gravity: {
                    x:0,
                    y:0
                }
            }
        },
        audio:{
            noAudio: true
        },
        scene : [Boot,Intro,Main]
    }

    game = new Phaser.Game(config);
    playOver()
}

function isMobile(){
/**a completer */
}

function playOver(){
    let theDiv = document.getElementById('game');
    if(theDiv.hasChildNodes()){
        if(theDiv.firstChild.nodeName === "CANVAS"){
            var theCanvas = theDiv.firstChild;
            theCanvas.addEventListener('mouseover', () => {
                paused = false;
                game.scene.resume("Main");
            });
            theCanvas.addEventListener('mouseout', () => {
                paused = true;
                game.scene.pause("Main");

            })
        }
    }
}

class Boot extends Phaser.Scene{
    constructor(){
        super({key:'Boot'})
    }

    preload() {
        this.textures.addBase64("bg", bg);
        this.textures.addBase64("ast", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiCAYAAAA3WXuFAAAACXBIWXMAAAsSAAALEgHS3X78AAAC20lEQVRYhc2YzWsTQRjGJzs7s7vZNJ9NpVhM0jQVQW285+A/4AdS9SgEr0I9ir0JHtWDYA8S2pttFSsoiCAUm1w8KMEeLG3VHiWUxljyYb7kjU3YJjvJZmdTfA6Z7Gzm5Zd3nndmdm31eh39TxJ7sXwcu7K1v/8n7HDQbVkW757dWlocJD8zQ18i12K5XOldqVRVtP2KImYVhcxFvy3fOTKgdPjqzN5e8UGtVrexBhIiVBwOukBEfO/05uLOwIA+BadfZrPFy0YDCIKtPjREP1CKZ89sLiUtA1qPXA/kC+X34BezwcBnkoQfT20vP+ICYvnFrMBnsiy+OPf9+U1TQKveC7VufjEr8Jmq0teU4BmjPmsArfkvlsvlWs8lwKzAZw6VpiUZ3+rlMwE+JEm0rEr0BNnP/S5FM5n8GqxrUMVdgQgRVgcJpBUUze5u4WHq2KX859D00/b7LVMD/VFBaQU+s9tJSqLiDfBZq+yB2IoqGw+5O/qq1ToqFCtdx2HBVjz19ZnSMrJExY1SqRrlgXE6JaSqlHmvhzZQ00MgkQhveWBAHrfMM3z+EBDvZkkINpIF40DoYIU1G83FB/PKn0xkO4AoxWmzEX0+rnpYaX45BEQIfmImmqoS+DPWA8FpEJb5fqN53FzZWWhOVwcQ+uejn/1Ew9jGa+YV7UUHEKX4TT8wY8edjdakfvmTie5AoijMG4ktyyKaCHstzY4uEBwPYH/pFmXYZ0eRCS+vkY0BgRSZrOv1w9TAXjU66uAFAe20TxcTSG8bgdI+OTnM3KtMqAOGDYSFOe31yIiKxkMeHvPqSderzAdFOI5UKjUlcMJlZVaagukK6t3QzRBq7E3y/cmILzUAGMTKDuqWIa0ysTick87DoeCgDXAChfzJxA/TQDqAbg1cE9RlcHjan0wwD4KWvY7JxOLBtixOMX56259MMJ9sB/p+KBOLawGhhalmTtfAgfoWQugviREFNEbm7CUAAAAASUVORK5CYII=");
        this.textures.addBase64("ship", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAACGCAYAAACMs5kmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA0LTI1VDA5OjU3OjE5KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNC0yNVQxMDowNjo1NSswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wNC0yNVQxMDowNjo1NSswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzFmYTVlYmItMDFmZC0xZTRkLTlmNzctZWY0NzIyMTZjYWQ1IiB4bXBNTTpEb2N1bWVudElE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");
        this.textures.addBase64('shot', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAoCAYAAADUgSt0AAAACXBIWXMAAAsSAAALEgHS3X78AAAANElEQVQYlWP8////AgYGBgYQ4z+IwcLAwLAQJgKiGZgYoIB2DJClqM6g0K5B4guIMxgYGAB4txkDDbbwGgAAAABJRU5ErkJggg==');
        this.textures.addBase64('logo', logo);
    }

    update(){
        this.scene.start('Intro')
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super({key:'Intro'});
    }
    create() {
        this.bg = this.add.image(game.config.width/2, game.config.height/2, "bg").setDepth(1);
        this.btn = this.add.image(game.config.width/2, game.config.height/2, "logo").setDepth(5).setScale(0.35);
        this.startText = this.add.text(game.config.width/2, game.config.height * 0.8, "CLIQUEZ POUR JOUER", {fontFamily:'Helvetica'}).setDepth(30).setOrigin(0.5);

        this.bumpy = this.tweens.add({
            targets : this.btn,
            delay:0,
            alpha:0,
            yoyo:true,
            repeat : -1
        })
        this.btn.setInteractive({useHandCursor:true}).on('pointerdown', ()=>{
            this.scene.start('Main');
        })
    }
    update() {

    }
}

class Main extends Phaser.Scene {
    constructor(){
        super({
            key : 'Main'
        });
    }

    preload(){

    }

    create(){
        this.bg = this.add.image(game.config.width/2, game.config.height/2, "bg").setDepth(1);
        this.score = this.add.text(10, 10, "Score : " + score, {fontFamily:'Helvetica',}).setDepth(10);
        this.timerTxt = this.add.text(game.config.width/2, 10, "00s",{fontFamily:'Helvetica',}).setDepth(10);

        this.enemies = this.add.group();
        this.playerLasers = this.add.group();

        this.player = new Player(
            this,
            this.game.config.width/2,
            this.game.config.height * 0.9,
            'ship'
            ).setDepth(5).setScale(0.75);

        this.instructions1 = this.add.text(0,-15,startGame[0], {
            fontFamily:'Helvetica',
            fontSize:'28px',
            color : 'white'
        }).setOrigin(0.5);
        this.instructions2 = this.add.text(0,25,startGame[1],{
            fontFamily:'Helvetica',
            fontSize:'12px',
            color:'white',
            align:'center'
        }).setOrigin(0.5);
        this.instructions = this.add.container(this.game.config.width/2,
            this.game.config.height * 0.4,
            [this.instructions1, this.instructions2]
            ).setDepth(30);

        this.fading = this.tweens.add({
            targets : this.instructions,
            delay : 1000,
            alpha : 0,
            duration : 500
        });

        chrono = this.time.addEvent({
            delay: 1000,
            callback: () => {
                timer--;
                if (timer === 0) {
                    this.player.onDestroy();
                    chrono.paused = true;
                    this.spawner.paused = true;
                }
            },
            callbackScope: this,
            loop: true,
        });

        this.spawner = this.time.addEvent({
            delay: 500,
            callback: () => {
                if (this.enemies.getChildren().length <= 5) {
                    var enemy = null;
                    enemy = new Asteroid(
                        this,
                        Phaser.Math.Between(this.game.config.width * 0.05, this.game.config.width * 0.95),
                        0
                    );
                    if (enemy !== null) {
                        enemy.setDepth(5);
                        this.enemies.add(enemy);
                    }
                }
            },
            callbackScope: this,
            loop: true
        });

        //coliders
        //player-ast
        this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
            if (!player.getData('isDead') && !enemy.getData('isDead') && player.getData('isHitable' === true)) {
                player.Hit();
            } else (!player.getData("isDead") &&
                !enemy.getData("isDead") &&
                player.getData("isHitable") === false)
            {
                enemy.givePoints(false);
                enemy.explode(true);
            }
        });

        //laser-ast
        this.physics.add.overlap(this.playerLasers, this.enemies, (playerLaser, enemy) => {
            if (enemy) {
                enemy.givePoints(true);
                enemy.explode(true);
                playerLaser.destroy();
            }
        })
    }

            update(){
                if(paused){this.scene.pause()}
                this.score.setText("Score : "+ Math.trunc(score));
                this.timerTxt.setText(timer+"s");

                if(!this.player.getData("isDead") || timer > 0){
                    this.player.update();
                    if (this.input.mousePointer.x < this.player.x -10){
                        this.player.moveLeft();
                    } else if(this.input.mousePointer.x > this.player.x +10){
                        this.player.moveRight();
                    }
                } else {
                    this.player.body.velocity.x = 0;
                }

                this.player.setData('isShooting', true);

                for(let i=0; i<this.enemies.getChildren().length;i++){
                    var enemy = this.enemies.getChildren()[i];
                    enemy.update();

                    if (enemy.x < -enemy.displayWidth ||
                        enemy.x > this.game.config.width + enemy.displayWidth ||
                        enemy.y < -enemy.displayHeight * 4 ||
                        enemy.y > this.game.config.height + enemy.displayHeight || timer ==0) {

                            if (enemy) {
                                if (enemy.onDestroy !== undefined) {
                                    enemy.onDestroy();
                                }
                                enemy.destroy();
                            }
                        }
                    }

                    for (var i = 0; i < this.playerLasers.getChildren().length; i++) {
                        var laser = this.playerLasers.getChildren()[i];
                        laser.update();
                        if (laser.x < -laser.displayWidth ||
                            laser.x > this.game.config.width + laser.displayWidth ||
                            laser.y < -laser.displayHeight * 4 ||
                            laser.y > this.game.config.height + laser.displayHeight) {
                                if (laser) {
                                    laser.destroy();
                                }
                            }
                        }
                    }

                }

class Entity extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, type) {
        super(scene, x, y, texture);
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setData("type", type);
        this.setData("isDead", false);
    }

    onDestroy() {
        this.setData("isDead", true);
    }

    givePoints(canScore) {
        if (canScore) {
            if (this.getData("type") != "player") {
                score += 500;
            }
        }
    }

    explode(canDestroy) {

        if (!this.getData("isDead")) {


            if (canDestroy) {
                this.destroy();
            }
            else {
                this.setVisible(false);
            }
            this.setData("isDead", true);
        }
    }

}

class Player extends Entity {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture, "Player");
        this.setData("speed", 750);
        this.setData("isHitable", true);
        this.setData("isShooting", false);
        this.setData("timerShootDelay", 10);
        this.setData('timerShootTick', this.getData("timerShootDelay") - 1);
    }

    moveLeft() {
        this.body.velocity.x = -this.getData('speed');
    }
    moveRight() {
        this.body.velocity.x = this.getData('speed');
    }

    onDestroy() {
        super.onDestroy();
        let replay = this.scene.add.text(this.scene.game.config.width / 2, this.scene.game.config.height *0.4, endGame[0], {fontFamily:'Helvetica',}).setOrigin(0.5).setDepth(30);
        replay.setInteractive({useHandCursor : true}).on('pointerdown', ()=>{
            this.destroy();
            score = 0;
            timer = 10;
            game.scene.start('Main');
        });
        let link = this.scene.add.text(this.scene.game.config.width / 2,
            this.scene.game.config.height * 0.6, endGame[1],
            {fontFamily:'Helvetica',}).setDepth(30).setOrigin(0.5);
        link.setInteractive({useHandCursor:true}).on('pointerdown', ()=>{
            window.open(url,"new window", "_blank")
        })
        /**ajouter un timer/lien/whatever */
        this.setVisible(false);
    }

    Hit() {
        this.scene.tweens.add({
            targets: this,
            delay: 0,
            alpha: 0,
            duration: 200,
            repeat: 6,
            yoyo: true,
            onYoyo: () => {
                this.setData("isHitable", false);
            },
            onYoyoScope: this,
            onComplete: () => {
                this.setData("isHitable", true);
            },
            onCompleteScope: this
        });
    }

    update() {
            this.body.setVelocity(0, 0);

            this.x = Phaser.Math.Clamp(this.x, this.displayWidth / 2,
            this.scene.game.config.width - this.width / 2);

            //shooting
            if (this.getData('isShooting')) {
                if (this.getData("timerShootTick") < this.getData('timerShootDelay')) {
                    this.setData("timerShootTick", this.getData("timerShootTick") + 1);
                    }
                else {
                    var laser = new playerLaser(this.scene, this.x, this.y - this.height / 2).setDepth(4);
                    this.scene.playerLasers.add(laser);
                    this.setData('timerShootTick', 0);
                    }
            }
    }
}

class Asteroid extends Entity {
    constructor(scene, x, y) {
        super(scene, x, y, "ast", "Ast");
        this.body.velocity.y = Phaser.Math.Between(80, 100);
    }

    update() {
        this.body.velocity.y -= 0.1;
    }
}

class playerLaser extends Entity {
    constructor(scene, x, y) {
        super(scene, x, y, "shot");
        this.body.velocity.y -= 700;
    }
}

