<template>
    <div class="app-container">
        <div class="stars"></div>
        <div class="stars2"></div>
        <div class="floating-gifts">
            <div
                class="gift-icon"
                v-for="n in 15"
                :key="n"
                :style="{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${15 + Math.random() * 10}s`
        }"
            >
                🎁
            </div>
        </div>

        <router-view />

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
</style>

<script setup lang="ts">
</script>
