<script setup>
const props = defineProps({
    icon: String,
    title: String,
    href: String,
})
</script>

<template>
  <a class="card" :href="$props.href">
    <div v-if="$props.icon">
        {{ icon }}
    </div>

    <div v-if="$props.title" class="card-title">
        {{ title }}
    </div>
    
    <div v-if="$slots.default" class="card-content">
      <slot />
    </div>
</a>
</template>

<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        
        flex: 0 0 25%;

        border: solid 2px;
        border-color: hsla(0, 0%, 50%, 0.25);
        border-radius: 0.25rem;

        text-decoration: none;
        color: inherit;

        padding: 2rem;

        transition: transform 0.125s ease-in-out;
    }

    .card:hover {
        color: inherit;

        border-color: var(--vp-c-brand-1);
        transform: translateY(-3px);
    }

    .card-title {
        opacity: 0.85;
        letter-spacing: -0.025rem;
        font-weight: 500;
        font-size: medium;
    }

    .card-content {
        opacity: 0.5;
        letter-spacing: -0.025rem;
        font-weight: 400;
        font-size: small;
    }
</style>
