<template>
    <div class="cs-input"
         @click="toggled=!toggled"
    >
        <label>{{ label }}: {{ modelValue }}</label>
    </div>

    <div v-if="toggled"
         class="cs-options"
         tabindex="0"
         ref="selectoptions"
         @focusout="toggled=false"
    >
        <div v-for="option in options" @click="selectOption(option)">{{ option }}</div>
    </div>
</template>


<script>
import { nextTick } from 'vue'

export default {
    props: [
        'modelValue',
        'label',
        'options',
    ],

    emits: ['update:modelValue'],

    data() {
        return {
            toggled: false,
        }
    },

    watch: {
        toggled(new_val)
        {
            if (!new_val) return

            nextTick().then(() => {
                this.$refs.selectoptions.focus()
            })
        }
    },

    methods: {
        selectOption(option)
        {
            this.$emit('update:modelValue', option)
            this.toggled = false
        }
    },

    mounted()
    {
        this.$emit('update:modelValue', this.options[0])
    }
}
</script>


<style scoped>
    .cs-options:focus {
        outline: 0;
    }
</style>
