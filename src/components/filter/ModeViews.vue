<script setup lang="ts"></script>

<template>
    <div class="mode-views">
        <div class="mode-view-item">
            <i class="fa-solid fa-list"></i>
        </div>
        <div class="mode-view-item active">
            <i class="fas fa-th-large"></i>
        </div>
    </div>
</template>

<style scoped>
.mode-views {
    color: #787885;
    display: flex;
    width: 136px;
    border-radius: 4px;
    background-color: #ebf2ff;
    font-size: 1.7rem;
    justify-content: space-around;
    margin-left: auto;
    max-height: 36px;
}

.mode-view-item {
    width: 50%;
    padding: 6px 0px;
}

.mode-view-item:hover {
    cursor: pointer;
    color: #356ac1;
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
    .mode-views {
        display: none;
    }
}
</style>
