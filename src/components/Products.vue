<script setup>
import {ref} from 'vue'
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const router = useRouter()
const productsStore = useProductsStore()
const products= productsStore.products

function view(product){
   productsStore.updateSelectedProduct(product) // keep track of the selected item
    router.push('/product_detail')
}

//cart
const cartStore = useCartStore()
const quantity = ref(1)

function buy(product){
    product.quantity = quantity.value
    cartStore.updateCart(product)
}
</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <div class="text-display-medium mb-12 mt-12 text-center">
                    Browse products
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="product in products">
                <v-card class="h-100 d-flex flex-column" width="250">
                    <v-img :src="product.image" height="200px" class="mt-4"></v-img>
                    <v-card-title class="overflow-y-auto">{{ product.name }}</v-card-title>
                    <v-card-subtitle>{{ product.price }}</v-card-subtitle>
                    <v-card-text>{{ product.description }}</v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" variant="elevated" @click="buy(product)">Add to Cart</v-btn>
                        <v-btn color="primary" variant="elevated" @click="view(product)">View</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>