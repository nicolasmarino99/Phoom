# Phoom a JavaScript Platformer game

Phoom is a Platformer game built with Phaserjs

## Table of Contents

- [Objective](#Objective)
- [Story](#Story)
- [Gameplay](#Gameplay)
- [How to Play](#How-to-Play)
- [Technologies Used](#Technologies-Used)
- [Live Version](#Live-version)
- [Install and Run](#How-to-Install-and-Run-in-Your-Computer)
- [Acknowledgments](#Acknowledgments)

### Objective

The main goal of this project is to explore and learn the javascript game engine 'phaser', integrating modern technologies (EcmaScript, webpack, npm) for extending the capabilities of the tool (phaser) while testing some code and consuming third party API's.

In this game you could find:

- A fully functional hero with 3 types of attacks, jumps, and slides
- A set 
-

The following features are under construction:

- Health and item's manager 
- Combat system between characters
- Enemies AI
- Enemies health

[Up](#Table-of-Contents)

### Story

[Up](#Table-of-Contents)

### Gameplay

You control a character on the screen which represents your team. You start on the top left corner and you have to navigate through the map to find the exit of the forest.

You will get attacked by a varying number of different enemies during your journey. These are randomly chosen by the game.

When attacked you enter the battle screen where you decide which enemy to attack each time. This is a turn-based RPG so each of your team members attacks only once. The same applies to the enemies when you finish attacking. The battle continues until you defeat all foes or be defeated by them.

Do not worry about your health it is been restored to full after each battle.

If you reach the other end of the forest you are victorious and you can go on to Arcadia to save it from the orc attack. But this is another story...

[Up](#Table-of-Contents)

### How to Play

1. #### Start Screen

<p align="center">
<img src="assets/screens/input.png">
</p>

Enter your name or avatar on the first screen and click on 'Play Now' button.

<p align="center">
<img src="assets/screens/menu.png">
</p>

Next screen is where you control the game. You have 4 options:

2. #### Play

<p align="center">
<img src="assets/screens/play.png">
</p>

Here is where the fun begins. By clicking 'Play' you are transferred to the forest. You move your character on the screen by using the four arrow keys. You can move up, down, left, right, and even diagonally if you keep to arrows pressed simultaneously.

- #### Battlefield

<p align="center">
<img src="assets/screens/battle.png">
</p>

When attacked by foes you are transferred to the Battlefield. On the left side of the screen appear the attacking enemies. On the right side is your team. You, the Warrior, the Knight, and the Beast. Below them are three blue areas. The left area lists the names of the enemies, the right area the names of your team, and in the middle are the available commands. Currently, the only available command is 'Attack'.

Your team starts attacking first, one at a time. The attacker's name is in yellow letters. By pressing the up and down arrow you can select which foe to attack. After selecting press space to commence the attack.

If you kill all the enemies you return to the forest and you can proceed with your quest. If you lose all your team it is 'Game Over' and you are transferred to the 'Game Over' scene.

Your score is updated after each battle. If you get out of the forest you will see the 'Victory' scene and your score.

3. #### Options

<p align="center">
<img src="assets/screens/options.png">
</p>

'Music Enabled' checkbox controls whether you will have music during playing or not.

'Sound Enabled' button is not operational yet.

4. #### Credits

<p align="center">
<img src="assets/screens/credits.png">
</p>

The credits for this game.

5. #### LeaderBoard

<p align="center">
<img src="assets/screens/leaders.png">
</p>

The six all-time best scores are listed on the LeaderBoard.

[Up](#Table-of-Contents)

### Technologies Used

- Node, npm
- Phaser 3
- JavaScript
- Webpack
- Babel
- Jest
- ESlint
- HTML/CSS
- Netlify
- Microverse Leaderboard API

[Up](#Table-of-Contents)

### Live version

The game is hosted on two different servers, macexperts.gr and netlify.com. Both use the same API to store the scores so it does not matter in which one you play. You can play the game here: 
- [**Dark Forest**](https://darkforest.netlify.app) @ netlify 
- [**Dark Forest**](https://macexperts.gr/darkforest) @ macexperts

### How to Install and Run in Your Computer

To run the scripts **npm** is required. To get npm you have to install [Node.js](https://nodejs.org). Follow the installation instructions for your system Mac, Linux or Windows.

Use your terminal and run the commands after each instruction.

| Command                                             | Description                                           |
| --------------------------------------------------- | ----------------------------------------------------- |
| `git clone https://github.com/macnick/RPG-game.git` | Clone the repository to you computer                  |
| `cd RPG-game`                                       | Navigate to the newly created folder                  |
| `npm install`                                       | Install dependencies and launch browser with examples |
| `npm start`                                         | Makes the build and starts the development server     |
|                                                     | Press `Ctrl + c` to kill **http-server** process      |
| `http://localhost:8000`                             | Visit this link to play the game                      |

[Up](#Table-of-Contents)

## Acknowledgements

- Dark Forest Background image By Zeyu Ren 任泽宇
- Button and enemy images by pennomi, Buch, cemkalyoncu at [opengameart.org](https://opengameart.org/)
- Title image created using [textcraft.net](https://textcraft.net)
- Player images by [craftpix.net](https://craftpix.net/)

[Up](#Table-of-Contents)

## 👤 Author

- Github: [@macnick](https://github.com/macnick)
- Twitter: [@mac_experts](https://twitter.com/mac_experts)
- Linkedin: [Nick Haralampopoulos](https://www.linkedin.com/in/nick-haralampopoulos/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/macnick/RPG-game/issues).

1. Fork it (https://github.com/macnick/RPG-game/fork)
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

## Show your support

Give a ⭐️ if you enjoyed this project!

## 📝 License

This project is [MIT](lic.url) licensed.
