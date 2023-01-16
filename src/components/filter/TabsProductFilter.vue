<script setup lang="ts">
const state = {
    active_1: "tab-item",
    active_2: "tab-item active",
    active_3: "tab-item"
}

const changeToOne = () => {
    state.active_1 = "tab-item active";
    state.active_2 = "tab-item";
    state.active_3 = "tab-item";
}
const changeToTwo = () => {
    state.active_1 = "tab-item";
    state.active_2 = "tab-item active";
    state.active_3 = "tab-item";
}
const changeToThree = () => {
    state.active_1 = "tab-item";
    state.active_2 = "tab-item";
    state.active_3 = "tab-item active";
    console.log("3");
}
</script>

<template>
    <div class="tabs-filter">
        <button :class="state.active_1" @click="changeToOne">Show all</button>
        <button :class="state.active_2" @click="changeToTwo">Auction</button>
        <button :class="state.active_3" @click="changeToThree">Buy now</button>
    </div>
</template>

<style scoped>
.tabs-filter {
    color: #787885;
    display: flex;
    min-width: 256px;
    border-radius: 4px;
    background-color: #ebf2ff;
    font-size: 1.4rem;
    margin-right: 16px;
    max-height: 36px;
}

.tab-item {
    width: calc(100% / 3);
    padding: 6px 0px;
    border: none;
    transition: 0.3s ease-in-out;
}

.tab-item:hover {
    cursor: pointer;
    color: #043586;
}

.active {
    color: #2264d1;
    background-color: #ffffff;
    box-shadow: 0px 1px 2px rgba(27, 78, 163, 0.24), 0px 2px 4px rgba(41, 121, 255, 0.24);
    border-radius: 4px;
}

.active:hover {
    color: #043586;
}

@media only screen and (max-width: 1024px) {
    .tabs-filter {
        width: 100%;
        margin-top: 16px;
        margin-left: 0px;
    }
}
</style>
