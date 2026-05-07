<script setup>
import CardGrid from './CardGrid.vue';
import Card from './Card.vue';

import { VPImage } from 'vitepress/theme';
import { useData } from 'vitepress';

const { theme } = useData();
</script>

<template>
    <main>
        <h1>Documentation</h1>

        <CardGrid>
            <slot></slot>
        </CardGrid>
    </main>
</template>

<style lang="css" scoped>
    main {
        margin: 1rem;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    main > h1 {
        margin-bottom: 6rem;
    }

    .HomeLogo {
        width: 40%;
    }
</style>
