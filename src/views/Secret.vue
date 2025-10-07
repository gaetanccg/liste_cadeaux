<script setup lang="ts">
import {ref} from 'vue'
import GiftList from '../components/GiftList.vue'

const gifts = ref([
    {
        id: 1,
        nom: 'Bracelet Holzkern',
        prix: 90,
        description: 'Je trouve les bracelets de chez Holzkern magnifiques, j\'aimerais beaucoup en avoir un !',
        image: '/images/bracelet.jpg',
        lien: 'https://www.holzkern.com/fr/boutique/bracelets.html'
    },
    {
        id: 2,
        nom: 'Une bague plus classique',
        prix: 109,
        description: 'J\'aimerais bien avoir une bague plus classique et venant de toi, pour changer de ma bague noir et bleue que j\'ai déjà et la porter tous les jours. (à voir en magasin)',
        image: '/images/bague.webp',
        lien: 'https://www.histoiredor.com/fr_FR/p/bague-madine-acier-blanc-diamant/61610055816R43.html'
    },
    {
        id: 3,
        nom: 'Une veste de mi saison',
        prix: 100,
        description: 'J\'aimerais bien une veste de mi saison, pour changer de ma veste noire que j\'ai déjà qui commence à être un peu vieille.',
        image: '/images/veste.webp',
        lien: ''
    }
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
