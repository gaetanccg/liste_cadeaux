<script setup lang="ts">
import {ref} from 'vue'
import GiftList from '../components/GiftList.vue'

const gifts = ref([
    {
        id: 1,
        nom: 'Bracelet Holzkern FORTE',
        prix: 139,
        description: 'Je trouve le bracelet FORTE vraiment très beau, que ce soit le bleu ou le vert. Je connais cette marque depuis un moment mais je n\'ai jamais acheter de bijoux chez eux. Celui ci me plairait beaucoup.',
        image: '/images/bracelet.jpg',
        lien: 'https://www.holzkern.com/fr/boutique/bracelets.html'
    }
    // {
    //     id: 2,
    //     nom: '',
    //     prix: 1,
    //     description: '',
    //     image: '',
    //     lien: ''
    // }
])
</script>

<template>
    <header class="hero">
        <h1 class="title glitch" data-text="Liste secrète 🎅">
            Liste secrète 🎅
        </h1>
        <p class="subtitle">Pour les initiés seulement 😏</p>
    </header>

    <GiftList :gifts="gifts" />
</template>
