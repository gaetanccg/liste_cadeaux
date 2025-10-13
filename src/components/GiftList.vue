<script setup lang="ts">
import {ref, onMounted} from 'vue'
import GiftCard from './GiftCard.vue'

interface Gift {
    id: number
    nom: string
    prix: number
    description: string
    image: string
    lien: string
}

defineProps<{
    gifts: Gift[]
}>()

const showCards = ref(false)

onMounted(() => {
    setTimeout(() => {
        showCards.value = true
    }, 400)
})
</script>

<template>
    <div class="gift-list">
        <TransitionGroup name="card-list">
            <GiftCard
                v-for="(gift, index) in gifts"
                v-show="showCards"
                :key="gift.id"
                :gift="gift"
                :style="{ transitionDelay: `${index * 0.1}s` }"
            />
        </TransitionGroup>
    </div>
</template>

<style scoped>
.gift-list{
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    position: relative;
    z-index: 1;
}

.card-list-enter-active{
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-list-enter-from{
    opacity: 0;
    transform: translateY(30px) scale(0.9);
}

@media (max-width: 768px){
    .gift-list{
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 15px;
    }
}
</style>
