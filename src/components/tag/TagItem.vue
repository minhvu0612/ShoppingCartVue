<script setup lang="ts">
interface ICard {
    icon: string;
    title: string;
    sub: string;
}
defineProps<ICard>();
</script>

<template>
    <div class="tag">
        <img :src="icon" :alt="title" />
        <p class="title">{{ title }}</p>
        <p class="sub">{{ sub }}</p>
    </div>
</template>

<style scoped>
.tag {
    width: calc((100% - 32px) / 3);
    background: #ededf0;
    border-radius: 8px;
    padding: 26px 16px 24px 16px;
    text-align: center;
    box-sizing: border-box;
}
.tag:hover {
    box-shadow: 0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24);
    cursor: pointer;
    background: #ededf012;
}
.tag .title {
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.0075em;
    color: rgba(0, 0, 0, 0.87);
    margin: 6px 0px 0px;
}
.tag .sub {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.018em;
    color: #5a5b6a;
    margin: 6px 0px 0px;
}

@media only screen and (max-width: 720px) {
    .tag {
        width: 100%;
    }
    .tag:not(:first-child) {
        margin-top: 16px;
    }
}
</style>
