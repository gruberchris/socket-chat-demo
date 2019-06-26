<template>
    <div id="profile">
        <h2>What user name would you like to use?</h2>
        <form id="user-profile-form" @submit.prevent="handleSubmit">
            <label>
                Username:
                <input type="text" id="username-input" v-model="username">
            </label>
            <button type="submit" id="save-user-profile-button">Submit</button>
        </form>
    </div>
</template>

<script>
    import store from '../store';

    export default {
        name: "Profile",
        data() {
            return {
                username: store.state.username
            }
        },
        methods: {
            handleSubmit() {
                store.setUsername(this.username);
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>

</style>