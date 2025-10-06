<script setup lang="ts">
import {ref} from 'vue'

interface Gift {
    id: number
    nom: string
    prix: number
    description: string
    image: string
    lien: string
}

defineProps<{
    gift: Gift
}>()

const isHovered = ref(false)
</script>

<template>
    <div
        class="gift-card"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        :class="{ 'hovered': isHovered }"
    >
        <div class="card-border"></div>

        <div class="image-container">
            <img :src="gift.image" :alt="gift.nom" class="gift-image" />
            <div class="image-overlay"></div>
        </div>

        <div class="card-content">
            <h2 class="gift-name">{{ gift.nom }}</h2>

            <div class="price-tag">
                <span class="price">{{ gift.prix.toFixed(2) }}€</span>
            </div>

            <p class="gift-description">{{ gift.description }}</p>

            <a
                :href="gift.lien"
                target="_blank"
                rel="noopener noreferrer"
                class="buy-button"
            >
                <span>ACHETER</span>
                <span class="arrow">→</span>
            </a>
        </div>
    </div>
</template>

<style scoped>
.gift-card{
    background: linear-gradient(135deg, rgba(20, 20, 20, 0.95), rgba(30, 30, 30, 0.95));
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.gift-card::before{
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
    background-size: 300% 300%;
    border-radius: 22px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s;
    animation: gradient-rotate 3s linear infinite;
}

.gift-card.hovered::before{
    opacity: 1;
}

.gift-card.hovered{
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 50px rgba(255, 0, 255, 0.3);
}

@keyframes gradient-rotate{
    0%, 100%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
}

.card-border{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, #ff00ff22, #00ffff22);
    pointer-events: none;
}

.image-container{
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
}

.gift-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.gift-card.hovered .gift-image{
    transform: scale(1.15) rotate(2deg);
}

.image-overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
    pointer-events: none;
}

.card-content{
    padding: 25px;
    position: relative;
}

.gift-name{
    font-size: 1.5rem;
    font-weight: 900;
    margin: 0 0 15px 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: linear-gradient(90deg, #ff00ff, #00ffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
}

.price-tag{
    display: inline-block;
    background: linear-gradient(135deg, #ff00ff, #ff0080);
    padding: 8px 20px;
    border-radius: 50px;
    margin-bottom: 15px;
    box-shadow: 0 4px 15px rgba(255, 0, 255, 0.4);
    animation: glow 2s ease-in-out infinite;
}

@keyframes glow{
    0%, 100%{
        box-shadow: 0 4px 15px rgba(255, 0, 255, 0.4);
    }
    50%{
        box-shadow: 0 4px 25px rgba(255, 0, 255, 0.7);
    }
}

.price{
    font-size: 1.3rem;
    font-weight: 900;
    color: white;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.gift-description{
    color: #ddd;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0 0 20px 0;
}

.buy-button{
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #00ffff, #00ff88);
    color: #000;
    text-decoration: none;
    padding: 12px 30px;
    border-radius: 50px;
    font-weight: 900;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
    position: relative;
    overflow: hidden;
}

.buy-button::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.buy-button:hover::before{
    width: 300px;
    height: 300px;
}

.buy-button:hover{
    transform: scale(1.05);
    box-shadow: 0 6px 25px rgba(0, 255, 255, 0.5);
}

.arrow{
    font-size: 1.5rem;
    transition: transform 0.3s;
}

.buy-button:hover .arrow{
    transform: translateX(5px);
}

@media (max-width: 768px){
    .image-container{
        height: 200px;
    }

    .card-content{
        padding: 20px;
    }

    .gift-name{
        font-size: 1.3rem;
    }

    .price{
        font-size: 1.1rem;
    }

    .gift-description{
        font-size: 0.9rem;
    }
}
</style>
