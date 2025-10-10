<script setup lang="ts">
import {ref} from 'vue'
import GiftList from '../components/GiftList.vue'

const gifts = ref([
    {
        id: 1,
        nom: 'Pull Urek Mazino',
        prix: 80.95,
        description: 'Je le trouve vraiment très stylé, peut être un peu cher mais je kiff le style, le design et la couleur !',
        image: '/images/urek.webp',
        lien: 'https://torokami.com/products/mazino-hoodie-tower-of-god?variant=42229862465632'
    },
    {
        id: 2,
        nom: 'Bracelet Holzkern FORTE',
        prix: 139,
        description: 'Je trouve le bracelet FORTE vraiment très beau, que ce soit le bleu ou le vert. Je connais cette marque depuis un moment mais je n\'ai jamais acheter de bijoux chez eux. Celui ci me plairait beaucoup.',
        image: '/images/bracelet.jpg',
        lien: 'https://www.holzkern.com/fr/boutique/bracelets.html'
    },
    {
        id: 3,
        nom: 'Une veste de mi saison',
        prix: 69.99,
        description: 'J\'aimerais bien une veste de mi saison, pour changer de ma veste noire que j\'ai déjà qui commence à être un peu vieille. (faut qu\'on aille au magasin ensemble pour choisir la veste parfaite 😏)',
        image: '/images/veste.jpg',
        lien: 'https://www.celio.com/fr-fr/p/bomber-matelasse---noir/1166170.html'
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
