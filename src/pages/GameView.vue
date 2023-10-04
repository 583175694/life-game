<!-- Game.vue -->
<template>
    <div class="game">
        <Event :event="currentEvent" @option-selected="handleOptionSelected" :playerAttributes="getPlayerAttributes()" />
    </div>
</template>

<script>
import Event from './Event.vue';
import GameEngine from '../modules/GameEngine';

export default {
    components: {
        Event,
    },
    data() {
        return {
            gameEngine: new GameEngine(),
            currentEvent: null,
        };
    },
    methods: {
        handleOptionSelected(optionId) {
            this.currentEvent = this.gameEngine.handleOptionSelection(optionId);
            // this.playerAttributes = this.currentEvent.updateAttributes;
        },
        getPlayerAttributes() {
            return this.gameEngine.getPlayerAttributes();
        }
    },
    created() {
        this.currentEvent = this.gameEngine.startGame();
    },
};
</script>
