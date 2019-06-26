<template>
    <div class="send-message">
        <form id="send-message-form" @submit.prevent="handleSubmit">
            <label for="message-input"></label>
            <input type="text" id="message-input" v-model="message">
            <button type="submit" id="send-message-button">Send</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SendMessage",
        data() {
            return {
                message: ''
            }
        },
        methods: {
            handleSubmit() {
                this.$emit('send-message', this.message);
                this.message = '';
            }
        }
    }
</script>

<style scoped>
    #message-input {
        flex-grow: 1;
    }
</style>