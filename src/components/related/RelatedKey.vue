<script setup lang="ts">
import relatedKeyList from '../../data/related';
</script>

<template>
    <div class="related">
        <p>Related</p>
        <div v-for="(key, index) in relatedKeyList" :key="index" class="related-key">
            {{ key }}
        </div>
    </div>
</template>

<style scoped>
.related {
    display: flex;
    margin-top: 24px;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
}

.related > p {
    font-size: 1.4rem;
    color: #19191d;
    font-weight: 500;
}

.related-key {
    background: #ededf0;
    border-radius: 99px;
    margin: 8px;
    color: #4a4b57;
    padding: 0px 16px;
    line-height: 32px;
    letter-spacing: 0.018em;
    font-weight: 400;
    font-size: 1.4rem;
}
</style>
