<script setup lang="ts">
interface IProduct {
    thumbnail: string;
    title: string;
    price: number;
    rate: number;
    desc: string;
}
defineProps<IProduct>();
</script>

<template>
    <div class="product-item">
        <img :src="thumbnail" :alt="title" class="thumbnail" />
        <p class="title">{{ title }}</p>
        <p class="price">${{ price }}</p>
        <p class="desc">{{ desc }}</p>
        <div class="action-and-rate">
            <div class="rate">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="avg-star">{{ rate }}</i>
            </div>
            <div class="action">
                <i class="fa-regular fa-heart"></i>
                Watch
            </div>
        </div>
    </div>
</template>

<style scoped>
.product-item {
    width: calc((100% - 48px) / 4);
    padding: 16px 16px 12px 16px;
    box-sizing: border-box;
    margin-top: 16px;
    transition: 0.3s ease-in-out;
}

.product-item:hover {
    box-shadow: 0px 4px 8px rgba(59, 69, 123, 0.2), 0px 4px 8px rgba(92, 107, 192, 0.2);
    border-radius: 8px;
    cursor: pointer;
}

.product-item .title {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 150%;
    letter-spacing: 0.0275em;
    color: #19191d;
}

.product-item .thumbnail {
    max-width: 100%;
}

.product-item .price {
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.87);
}

.product-item .desc {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 143%;
    letter-spacing: 0.018em;
    color: #787885;
}

.product-item .action-and-rate {
    display: flex;
    justify-content: space-between;
}

.action-and-rate .rate {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 222%;
    letter-spacing: 0.1px;
    color: #fb8200;
}

.action-and-rate .rate i.avg-star {
    color: #5e6366;
    margin-left: 8px;
}

.action-and-rate .action {
    display: flex;
    background: #ffffff;
    border: 1px solid #9dc2ff;
    border-radius: 4px;
    padding: 4px 12px;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 143%;
    letter-spacing: 0.018em;
    color: #2264d1;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    transition: 0.1s ease-in-out;
    box-sizing: border-box;
}

.action-and-rate .action:hover {
    border: 2px solid #336dca;
    cursor: pointer;
    /*font-weight: 600;*/
}

.action-and-rate .action .fa-heart {
    margin-right: 6px;
}

@media only screen and (max-width: 1024px) and (min-width: 768px) {
    .product-item {
        width: calc((100% - 16px) / 2);
    }
}

@media only screen and (max-width: 767px) and (min-width: 520px) {
    .product-item {
        width: calc((100% - 16px) / 2);
    }
}

@media only screen and (max-width: 520px) {
    .product-item {
        width: 100%;
    }
}
</style>
