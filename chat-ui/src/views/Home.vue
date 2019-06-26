<template>
    <div id="home">
        <MessageWindow v-bind:messages="messages" />
        <SendMessage v-on:send-message="handleSendMessage" />
    </div>
</template>

<script>
    import MessageWindow from '../components/MessageWindow';
    import SendMessage from '../components/SendMessage';
    import store from '../store';

    export default {
        name: "Home",
        components: {
            MessageWindow,
            SendMessage
        },
        data() {
            return {
                username: store.state.username,
                messages: []
            }
        },
        created() {
            if (!this.username) {
                this.$router.push("profile");
            }
        },
        mounted() {
            if (this.username) {
                const joinedStatusMessage = {
                    messageText: `${this.username} joined`,
                    createDateTime: Date(Date.now()),
                    username: this.username,
                    messageType: 'Status'
                };

                this.appendMessage(joinedStatusMessage);
                this.$socket.emit('userConnected', joinedStatusMessage);
            }
        },
        beforeDestroy() {
            if (this.username) {
                const leaveStatusMessage = {
                    messageText: `${this.username} left`,
                    createDateTime: Date(Date.now()),
                    username: this.username,
                    messageType: 'Status'
                };

                this.appendMessage(leaveStatusMessage);
                this.$socket.emit('userDisconnected', leaveStatusMessage);
            }
        },
        sockets: {
            chatMessage(data) {
                this.appendMessage(data);
            },
            userConnected(data) {
                this.appendMessage(data);
            },
            userDisconnected(data) {
                this.appendMessage(data);
            }
        },
        methods: {
            handleSendMessage(message) {
                const newMessage = {
                    messageText: message,
                    createDateTime: Date(Date.now()),
                    username: this.username,
                    messageType: 'Chat'
                };

                this.appendMessage(newMessage);

                this.$socket.emit('chatMessage', newMessage);
            },
            appendMessage(message) {
                this.messages = [...this.messages, message];
            }
        }
    }
</script>

<style scoped>
    #home {

    }
</style>