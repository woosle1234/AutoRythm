import Phaser from 'phaser';
import gameConfig from 'configs/gameConfig';
import AudioManager from 'core/AudioManager';
import UI from 'scenes/UI';
import MusicSelect from 'scenes/MusicSelect';
import PlayField from 'scenes/PlayField';
import createKeyboard from 'core/Keyboard';
import eventConfig from 'configs/eventConfig';
import canListen from 'components/canListen';
import getFunctionUsage from 'utils/getFunctionUsage';
import pipe from 'utils/pipe';

/**
 * Responsible for delegating the various levels, holding the various core systems and such.
 */
const Game = function GameFunc() {
    const state = new Phaser.Scene(gameConfig.SCENES.GAME);
    let audioManager;
    const gui = UI();
    const keyboard = createKeyboard();

    function cameraSetup() {
        // state.cameras.main.startFollow(state.player); // or whatever else.
        state.cameras.main.setViewport(0, 0, gameConfig.GAME.VIEWWIDTH, gameConfig.GAME.VIEWHEIGHT);
        state.cameras.main.setZoom(0.8);
    }

    function _onSongSelected(e) {
        audioManager.stopMusic();
        state.scene.manager.getScene(gameConfig.SCENES.MUSIC_SELECT).destroy();
        state.scene.remove(gameConfig.SCENES.MUSIC_SELECT);
        state.scene.add(gameConfig.SCENES.PLAY_FIELD, PlayField(e.key), true);
    }

    function _onSongEnded(e) {
        state.scene.manager.getScene(gameConfig.SCENES.PLAY_FIELD).destroy();
        state.scene.remove(gameConfig.SCENES.PLAY_FIELD);
        state.scene.add(gameConfig.SCENES.MUSIC_SELECT, MusicSelect(), true);
    }

    function setupListeners() {
        state.listenGlobal(eventConfig.EVENTS.GAME.PLAY_ENDED, _onSongEnded);
        state.listenGlobal(eventConfig.EVENTS.GAME.SONG_SELECTED, _onSongSelected);
    }

    function init() {
        // After assets are loaded.
        state.scene.add(gameConfig.SCENES.UI, gui, true);

        audioManager = AudioManager()
            .setScene(gui)
            .setPauseOnBlur(false)
            .init();

        setupListeners();
        keyboard.enable();
        state.scene.add(gameConfig.SCENES.MUSIC_SELECT, MusicSelect(), true);
    }

    function getKeyboard() {
        return keyboard;
    }

    function getAudioManager() {
        return audioManager;
    }

    function create() {
        cameraSetup();
    }

    function update(time, delta) {}

    function destroy() {}

    const canListenState = canListen(state);

    const localState = {
        // props
        // methods
        init,
        getAudioManager,
        getKeyboard,
        create,
        update,
        destroy,
    };

    const states = [{ state, name: 'state' }, { state: localState, name: 'localState' }, { state: canListenState, name: 'canListen' }];

    getFunctionUsage(states, 'Game');
    return Object.assign(...states.map(s => s.state), {
        // pipes and overrides
        update: pipe(
            state.update,
            localState.update,
        ),
        destroy: pipe(
            localState.destroy,
            canListenState.destroy,
        ),
    });
};

export default Game;
