<script setup lang="ts">
import ProductFilter from '../components/filter/ProductFilter.vue';
import RelatedKey from '../components/related/RelatedKey.vue';
import ProductList from '../components/product/ProductList.vue';
import TagList from '../components/tag/TagList.vue';
</script>

<template>
    <div class="wrapper">
        <ProductFilter></ProductFilter>
        <RelatedKey></RelatedKey>
        <ProductList></ProductList>
    </div>
    <TagList></TagList>
</template>

<style scoped>
div.wrapper {
    box-shadow: 0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24);
    border-radius: 8px;
    padding: 16px;
    max-width: calc(100% - 6px);
}
</style>
