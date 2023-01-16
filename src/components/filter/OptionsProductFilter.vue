<script setup lang="ts"></script>

<template>
    <div class="options-filter">
        <div class="option-item">
            <span>Useless first</span> <i class="fa-solid fa-caret-down"></i>
            <div class="note-option-item">Sort By</div>
        </div>
        <div class="option-item">
            <span>Condition</span> <i class="fa-solid fa-caret-down"></i>
        </div>
        <div class="option-item">
            <span>Delivery options</span> <i class="fa-solid fa-caret-down"></i>
        </div>
    </div>
</template>

<style scoped>
.options-filter {
    width: 62%;
    color: #787885;
    display: flex;
    font-size: 1.4rem;
}

.option-item {
    position: relative;
    padding: 6px 12px;
    border: 1px solid #b4b4bb;
    border-radius: 4px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    text-align: center;
}

.option-item .note-option-item {
    position: absolute;
    left: 12px;
    top: -12px;
    font-size: 10px;
    line-height: 16px;
    align-items: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #787885;
    border: 4px solid #ffffff;
    background-color: #fff;
}

.option-item:hover {
    cursor: pointer;
    color: #19191d;
    border: 1px solid #5a5b6a;
}

.option-item > span {
    margin-right: 8px;
}

@media only screen and (max-width: 780px) {
    .options-filter {
        width: 100%;
        justify-content: space-around;
    }
    .option-item {
        width: calc(100% / 3);
    }
}
</style>
