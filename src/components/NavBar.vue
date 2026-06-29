<script setup>

</script>

<template>
    <v-app-bar color="primary">
        <v-app-bar-title> 
            <router-link to="/">
                <v-img src="/logo.png" width="12%" height="12%"></v-img>
            </router-link>
        </v-app-bar-title>
        <v-btn to="/home">Home</v-btn>
        <v-btn to="/products">Products</v-btn>
        <v-btn to="/seller_view">Seller</v-btn>
        <v-btn to="/admin">Admin</v-btn>
        <v-btn to="/profile">Profile</v-btn>
        <v-btn to="/login">Login</v-btn>
    </v-app-bar>
</template>