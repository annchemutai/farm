import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products',  {
   state: () => {
        const products= {
            0:{
                id: 1,
                name: "Tomato",
                category: "Fruit",
                price: 200,
                availability: true,
                image: '/home1.jpg'
            },
            1:{
                id: 1,
                name: "Tomato",
                category: "Fruit",
                price: 200,
                availability: true,
                image: '/home1.jpg'
            },
            2:{
                id: 1,
                name: "Tomato",
                category: "Fruit",
                price: 200,
                availability: true,
                image: '/home1.jpg'
            },
            3:{
                id: 1,
                name: "Tomato",
                category: "Fruit",
                price: 200,
                availability: true,
                image: '/home1.jpg'
            },
            4:{
                id: 1,
                name: "Tomato",
                category: "Fruit",
                price: 200,
                availability: true,
                image: '/home1.jpg'
            },
            5:{
                id: 1,
                name: "Tomato",
                category: "Fruit",
                price: 200,
                availability: true,
                image: '/tomato.jpg'
            },
        }
        const selectedProduct = ref(null)
       
        return{
            products, selectedProduct
        }
   },
   actions:{
       updateSelectedProduct (payload) {
            this.selectedProduct = payload
        },
   },
   persist: true,
})