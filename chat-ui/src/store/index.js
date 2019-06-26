export default {
    state: {
        username: ''
    },
    setUsername(username) {
        this.state = { ...this.state, username};
    }
}