<!-- Event.vue -->
<template>
    <div class="event">
        <p>{{ event.event }}</p>
        <div class="attributes">
            <div class="attribute">
                <span>智力:</span>
                <span>{{ playerAttributes.intelligence }}</span>
            </div>
            <div class="attribute">
                <span>颜值:</span>
                <span>{{ playerAttributes.appearance }}</span>
            </div>
            <div class="attribute">
                <span>体质:</span>
                <span>{{ playerAttributes.constitution }}</span>
            </div>
            <div class="attribute">
                <span>家境:</span>
                <span>{{ playerAttributes.wealth }}</span>
            </div>
        </div>
        <div class="options">
            <button v-for="option in event.options" :key="option.id" @click="selectOption(option.id)">
                {{ option.text }}
            </button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'EventView',
    props: {
        event: Object,
        playerAttributes: Object,
    },
    methods: {
        selectOption(optionId) {
            this.$emit('option-selected', optionId);
        },
    },
};
</script>
  