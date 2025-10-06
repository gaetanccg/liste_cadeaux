<script setup lang="ts">
import {ref, onMounted} from 'vue'
import GiftList from './components/GiftList.vue'

const gifts = ref([
    {
        id: 1,
        nom: 'Stream Deck Elgato',
        prix: 169.99,
        description: 'Boîtier de contrôle pour PC à 15 touches. Déclenchez des actions, lancez des applications et contrôlez l\'ensemble de votre configuration à partir d\'un deck hyper personnalisable avec touches LCD lumineuses.',
        image: '/images/stream_deck.jpg',
        lien: 'https://www.elgato.com/fr/fr/p/stream-deck-mk2-black'
    },
    {
        id: 2,
        nom: 'AOC AM420B - Double Bras Écran',
        prix: 89.95,
        description: 'Double bras avec système de ressort mécanique à gaz pour 2 écrans jusqu\'à 34 pouces (9 kg max) - angle de rotation de 360°',
        image: '/images/AOC.jpg',
        lien: 'https://www.ldlc.com/fiche/PB00607372.html'
    },
    {
        id: 3,
        nom: 'Sac à Dos Élégant Noir',
        prix: 100,
        description: 'Un sac à dos pour homme noir élégant avec assez d\'espace pour PC + affaires + 1 livre. Au choix, je suis pas difficile!',
        image: '/images/sac.jpg',
        lien: ''
    },
    {
        id: 4,
        nom: 'DJI Avata 2',
        prix: 489,
        description: 'Drone uniquement - j\'ai déjà tout le matos! Le drone FPV ultime pour des prises de vue immersives et spectaculaires.',
        image: '/images/avata2.jpg',
        lien: 'https://store.dji.com/fr/product/dji-avata-2-drone-only?vid=164691'
    },
    {
        id: 5,
        nom: 'DJI Jeu de Filtres ND Mini 4 Pro',
        prix: 48.49,
        description: 'Pack de 3 filtres ND (ND16/64/256) pour DJI Mini 4 Pro - parfait pour filmer en plein jour avec des vitesses d\'obturation optimales!',
        image: '/images/filtresNd.jpg',
        lien: 'https://amzn.eu/d/jg6tBhB'
    }
])

const showContent = ref(false)

onMounted(() => {
    setTimeout(() => {
        showContent.value = true
    }, 100)
})
</script>

<template>
    <div class="app-container">
        <div class="stars"></div>
        <div class="stars2"></div>
        <div class="floating-gifts">
            <div class="gift-icon" v-for="n in 15" :key="n" :style="{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${15 + Math.random() * 10}s`
      }">🎁
            </div>
        </div>

        <header class="hero" :class="{ 'show': showContent }">
            <h1 class="title glitch" data-text="La liste de cadeaux de Gaëtan pour 2025">
                La liste de cadeaux de Gaëtan pour 2025
            </h1>
            <p class="subtitle">🎄 Noël & Anniversaire Edition 🎁</p>
        </header>

        <GiftList :gifts="gifts" />

        <footer class="footer">
            <p>Fait avec ❤️ et beaucoup de café</p>
        </footer>
    </div>
</template>

<style scoped>
.app-container{
    min-height: 100vh;
    padding: 20px;
    position: relative;
    overflow: hidden;
}

.stars,
.stars2{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}

.stars{
    background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="10" cy="10" r="1" fill="%23ff00ff"/><circle cx="50" cy="30" r="1" fill="%2300ffff"/><circle cx="80" cy="60" r="1" fill="%23ffff00"/><circle cx="30" cy="80" r="1" fill="%23ff00ff"/></svg>') repeat;
    animation: twinkle 3s infinite;
}

.stars2{
    background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="20" cy="50" r="1" fill="%2300ff00"/><circle cx="70" cy="20" r="1" fill="%23ff00ff"/><circle cx="40" cy="70" r="1" fill="%2300ffff"/></svg>') repeat;
    animation: twinkle 4s infinite reverse;
}

@keyframes twinkle{
    0%, 100%{
        opacity: 0.3;
    }
    50%{
        opacity: 0.8;
    }
}

.floating-gifts{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
}

.gift-icon{
    position: absolute;
    top: -100px;
    font-size: clamp(20px, 3vw, 40px);
    opacity: 0.3;
    animation: float-down linear infinite;
    filter: drop-shadow(0 0 10px rgba(255, 0, 255, 0.5));
}

@keyframes float-down{
    0%{
        top: -100px;
        transform: translateX(0) rotate(0deg);
    }
    50%{
        transform: translateX(50px) rotate(180deg);
    }
    100%{
        top: 100vh;
        transform: translateX(-50px) rotate(360deg);
    }
}

.hero{
    text-align: center;
    padding: 60px 20px 40px;
    position: relative;
    z-index: 1;
    opacity: 0;
    transform: translateY(-30px);
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hero.show{
    opacity: 1;
    transform: translateY(0);
}

.title{
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 900;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-shift 3s ease infinite, float 3s ease-in-out infinite;
    position: relative;
    text-shadow: 0 0 30px rgba(255, 0, 255, 0.5);
}

.glitch{
    position: relative;
}

.glitch::before,
.glitch::after{
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    -webkit-background-clip: text;
    background-clip: text;
}

.glitch::before{
    animation: glitch-1 2s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translateX(-2px);
}

.glitch::after{
    animation: glitch-2 3s infinite;
    clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
    transform: translateX(2px);
}

@keyframes glitch-1{
    0%, 100%{
        transform: translateX(0);
    }
    20%{
        transform: translateX(-3px);
    }
    40%{
        transform: translateX(3px);
    }
    60%{
        transform: translateX(-3px);
    }
}

@keyframes glitch-2{
    0%, 100%{
        transform: translateX(0);
    }
    25%{
        transform: translateX(3px);
    }
    50%{
        transform: translateX(-3px);
    }
    75%{
        transform: translateX(3px);
    }
}

@keyframes gradient-shift{
    0%, 100%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
}

@keyframes float{
    0%, 100%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(-10px);
    }
}

.subtitle{
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: #00ffff;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    margin-top: 10px;
    font-weight: 700;
    text-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4);
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse{
    0%, 100%{
        opacity: 1;
    }
    50%{
        opacity: 0.7;
    }
}

.footer{
    text-align: center;
    padding: 40px 20px;
    color: #ff00ff;
    font-size: 1rem;
    position: relative;
    z-index: 1;
    text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
}

@media (max-width: 768px){
    .hero{
        padding: 40px 15px 30px;
    }

    .title{
        letter-spacing: 0.05em;
    }

    .subtitle{
        letter-spacing: 0.2em;
    }
}
</style>
