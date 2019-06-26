<template>
    <div class="message-window">
        <div v-bind:key="message.id" v-for="message in messages">
            <MessageItem v-if="message.messageType === 'Chat'" v-bind:message="message" />
            <StatusMessageItem v-else v-bind:message="message" />
        </div>
    </div>
</template>

<script>
    import MessageItem from './MessageItem';
    import StatusMessageItem from './StatusMessageItem';

    export default {
        name: "MessageWindow",
        props: {
            messages: Array
        },
        components: {
            MessageItem,
            StatusMessageItem
        }
    }
</script>

<style scoped>
    .message-window {
        width: 80%;
        max-width: 1200px;
    }

    .message-window div {
        background-color: #CCC;
        padding: 5px;
    }

    .message-window div:nth-child(2n) {
        background-color: #FFF;
    }
</style>