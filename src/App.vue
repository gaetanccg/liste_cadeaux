<script setup lang="ts">
import {ref, onMounted} from 'vue'
import GiftList from './components/GiftList.vue'

const gifts = ref([
    {
        id: 1,
        nom: 'Stream Deck Elgato',
        prix: 169.99,
        description: 'Un Stream Deck, c\'est une mini console de controle du PC avec des boutons personnalisables. Je m\'en servirai pour mes montages, pour le developpement et aussi pour le jeu forcement. C\'est surtout utile pour faire de la gestion de taches rapides pour effecturer des actions sur le pc en 1 clic plutot que de devoir chercher dans les menus ou sur internet etc...',
        image: '/images/stream_deck.jpg',
        lien: 'https://www.elgato.com/fr/fr/p/stream-deck-mk2-black'
    },
    {
        id: 2,
        nom: 'AOC AM420B - Double Bras Écran',
        prix: 89.95,
        description: 'Actuellement je suis obligé d\'incliner mes ecrans pour qu\'ils tiennent en équilibre sans s\'écrouler xD. Un bras double et de bonne qualité serait parfait pour arranger tout ça et gagner de la place sur mon bureau.',
        image: '/images/AOC.jpg',
        lien: 'https://www.ldlc.com/fiche/PB00607372.html'
    },
    {
        id: 3,
        nom: 'Sac à dos à rabat roulé Tommy Hilfiger',
        prix: 139.90,
        description: 'J\'aimerai bien un nouveau sac à dos pour remplacer mon sac trop petit pour rentrer mon PC, ma gourde, mon livre et le reste de mes affaires.',
        image: '/images/sac-travail.webp',
        lien: 'https://fr.tommy.com/sac-%C3%A0-dos-%C3%A0-rabat-roul%C3%A9-am0am13644pa7'
    },
    {
        id: 4,
        nom: 'DJI Avata 2',
        prix: 489,
        description: 'Ce drone m\'a toujours fait de l\'oeil. Il me permettrait de faire de la vidéo immersive en FPV et je pourrais bien me faire kiffer et commencer à poster sur mon compte TikTok et insta qui sont désert en ce moment mdr.',
        image: '/images/avata2.jpg',
        lien: 'https://store.dji.com/fr/product/dji-avata-2-drone-only?vid=164691'
    },
    {
        id: 5,
        nom: 'DJI Jeu de Filtres ND Mini 4 Pro',
        prix: 48.49,
        description: 'C\'est le petit cadeau très utile, je ne vais pas rentrer dans la technique mais en gros ça permet de filmer dans un format très spécifique, plus adapté pour faire de la retouche derrière en post prod avec mon drone cinématique.',
        image: '/images/filtresNd.jpg',
        lien: 'https://amzn.eu/d/jg6tBhB'
    },
    {
        id: 6,
        nom: 'ASUS ROG Moonstone Ace L Black - Tapis de Souris Gaming',
        prix: 86.22,
        description: 'C\'est LA révolution des tapis de souris, les tapis en verre trempé. C\'est super agréable au toucher, ça glisse tout seul et en plus c\'est super beau. Du coup je voulais changer mon tapis AliExpress :)',
        image: '/images/tapis.jpg',
        lien: 'https://amzn.eu/d/91ev9x9'
    },
    {
        id: 7,
        nom: 'K&F CONCEPT Sac à Dos pour Appareil Photo / Drone',
        prix: 85.99,
        description: 'Mon sac à dos AliExpress se déchire de partout sans rien faire... J\'ai eu un petit coup de coeur pour ce sac à dos qui a l\'air super pratique et costaud tout en restant beau. Je pourrais y ranger mon drone et tout mon matos sans soucis.',
        image: '/images/sac-drone.jpg',
        lien: 'https://amzn.eu/d/0VfBaPC'
    },
    {
        id: 8,
        nom: 'Tommy Hilfiger CENTRAL REPORTER - Sac bandoulière - black',
        prix: 69.95,
        description: 'J\'ai envie d\'une petite sacoche pratique pour sortir léger mais jolie quand je sors en ville. Je kiff la marque Tommy Hilfiger et je la trouve bien sympa et elle change de celle que j\'ai déjà.',
        image: '/images/sacoche.webp',
        lien: 'https://www.zalando.fr/tommy-hilfiger-central-reporter-sac-bandouliere-black-to152h0or-q11.html'
    },
    {
        id: 9,
        nom: 'Pier One UNISEX - Sac ordinateur - black',
        prix: 30.49,
        description: 'Une petite sacoche très sympa pour mon PC Portable pour quand je veux voyager léger et pas prendre mon gros sac à dos. Elle est simple mais efficace et pas trop chère.',
        image: '/images/sac-pc.webp',
        lien: 'https://www.zalando.fr/pier-one-unisex-sac-ordinateur-black-pi954h060-q11.html'
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
            <p>Fait avec ❤️ et beaucoup d'amour</p>
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
