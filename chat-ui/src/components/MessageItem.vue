<template>
    <div class="message-item">
        <span class="message-text">{{message.username}}: {{message.messageText}}</span>
    </div>
</template>

<script>
    export default {
        name: "MessageItem",
        props: {
            message: Object
        }
    }
</script>

<style scoped>

</style>