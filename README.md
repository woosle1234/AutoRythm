# Open Jam 2018
### THEME: SPAM TO WIN

Phaser 3.14.0 Open Jam 2018 project, built upon: https://github.com/Sidaroth/Phaser3.Boilerplate </br>
Documentation for Phaser: https://photonstorm.github.io/phaser3-docs/index.html

## Description
TL;DR: A rhythm game that generates its own song maps based on audio signal processing. 

<b>Controls: You play using Z, X, , and . in the field. Song Selection can also be navigated with the arrow keys.</b></br>
An open source rhythm game, where the goal is to hit the notes at the correct time.

Every song is parsed and mapped automatically by the AI, based on the frequencies in the audio-file. Each song is unique, but the generation process yields the same result for the same song each time.

As notemaps are generated by the AI (and it was written in a couple of days) the difficulty curve can be a bit... difficult at time. Keep that in mind as you play the game. 

Scoring per note is calculated based on your current combo, and how accurately you hit the note. (There's a distance away from center based function for this). 

Future ideas include: Rate modifiers, noteskins, general visual and algorithmic improvements, youtube integration or some other form of user provided audio, applying an ANN or some other machine learning algorithm to this, key configuration, lots of community features like export to other rhythm game formats, online leaderboards, local scores, grading of scores, pass fail, more effects etc.

The hardest challenge for this was/is to balance the very quiet songs (or parts of songs) with the loudest parts, without one or the other ending up empty or insanely dense. We got some of the way there, but there's much more work to be done on the algorithms to call this a complete product.

### Team
Our team for the jam consisted of 3 people.

##### Programming and Game Design
 - [Sidaroth](https://github.com/sidaroth)
 - [Garlov](https://github.com/garlov)

##### Audio
- [bleepbloopbleep1](https://github.com/bleepbloopbleep1)

### Tools
-   [Visual Studio Code](https://github.com/Microsoft/vscode)
-   [Phaser 3.14](https://github.com/photonstorm/phaser)
- Git (of course)
- Special thanks to [dsp.js](https://github.com/corbanbrook/dsp.js)'s RFFT algorithm.

### Requirements to build/host
-   Node.js and NPM

### How to use
1. Clone the repository
2. Copy into a new folder/repository
3. npm install
4. npm start


### Contribute
If you want to contribute to the project, any pull requests are very much welcome! If you have any ideas for additional features, improvements or have found any bugs feel free to open an issue and we'll get to it as soon as time allows.

### Attributions
Music (CC-0):
- All Alone - Hospitalized from WOWA.me
- Bowers & Wilkins - JNGS from WOWA.me
