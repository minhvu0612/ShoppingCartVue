<script setup lang="ts">
import TagItem from './TagItem.vue';
import tagList from '../../data/tag';
</script>

<template>
    <div class="tag-list">
        <TagItem
            v-for="(tag, index) in tagList"
            :icon="tag.icon"
            :title="tag.title"
            :sub="tag.sub"
            :key="index"
        ></TagItem>
    </div>
</template>

<style scoped>
.tag-list {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    flex-wrap: wrap;
}
</style>
