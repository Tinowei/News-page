<template>
    <!-- sidebar -->
    <div class="relative">
        <!-- mask -->
        <div v-if="isSidebarOpen" id="overlay" class="fixed inset-0  bg-black/30 z-30" @click="closeSidebar">
        </div>

        <div class="sidebar fixed top-0 right-0 h-full w-[250px] bg-white z-40 transition-all duration-300 lg:hidden"
            :class="{ 'translate-x-0': isSidebarOpen, 'translate-x-full': !isSidebarOpen }">
            <div class="container">
                <div class="flex justify-end m-4 cursor-pointer" @click="closeSidebar">
                    <img src="@/assets/icon-menu-close.svg" alt="close" />
                </div>
                <ul class="flex flex-col mx-4 my-8 gap-8">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- header / menu -->
    <header class="flex justify-between items-center  p-4">
        <div class="logo flex items-center cursor-pointer">
            <img src="@/assets/images/logo.svg" alt="logo圖">
        </div>
        <div class="menu flex items-center cursor-pointer">
            <img src="@/assets/icon-menu.svg" alt="menu" @click="openSidebar">
        </div>

        <nav class="nav flex items-center">
            <ul class="flex gap-8 ">
                <li><a href="#">Home</a></li>
                <li><a href="#">New</a></li>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Categories</a></li>
            </ul>
        </nav>

    </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const isSidebarOpen = ref(false)

const openSidebar = () => {
    isSidebarOpen.value = true
}

const closeSidebar = () => {
    isSidebarOpen.value = false
}

// 鎖定 / 解鎖捲動
watch(isSidebarOpen, (newVal) => {
    document.body.style.overflow = newVal ? 'hidden' : ''
})
</script>

<style scoped>
nav.nav {
    display: none;
}

.sidebar {
    background-color: var(--neutral-offwhite);
    color: var(--neutral-dark-grayish-blue);
}


/* max-lg -> 1024px */
@media screen and (min-width:1024px) {
    .menu {
        display: none;
    }

    nav.nav {
        display: block;
        color: var(--neutral-dark-grayish-blue)
    }
}
</style>