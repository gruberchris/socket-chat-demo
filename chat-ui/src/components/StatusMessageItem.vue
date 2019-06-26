<template>
    <div class="status-message-item">
        <span class="status-message-text">{{message.messageText}}</span>
    </div>
</template>

<script>
    export default {
        name: "StatusMessageItem",
        props: {
            message: Object
        }
    }
</script>

<style scoped>

</style>