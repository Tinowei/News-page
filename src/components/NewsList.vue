<template>
    <!-- news list 2-->
    <div class="news-list-2 my-12 lg:flex">
        <div class="news flex m-4 gap-8 ">
            <div class="pic">
                <img class="min-w-[120px] max-h-[150px]" src="@/assets/images/image-retro-pcs.jpg" alt="">
            </div>
            <div class="news_text ">
                <h2 class="text-3xl font-extrabold">01</h2>
                <div class="title font-bold text-xl">Reviving Retro PCs</div>
                <p class="news_prview text-sm leading-5 my-4">What happens when old PCs are given modern upgrades?
                </p>
            </div>
        </div>

        <div class="news flex m-4 gap-8  ">
            <div class="pic">
                <img class="min-w-[120px] max-h-[150px]" src="@/assets/images/image-top-laptops.jpg" alt="">
            </div>
            <div class="news_text ">
                <h2 class="text-3xl font-extrabold">02</h2>
                <div class="title  font-bold text-xl">Top 10 Laptops of 2022</div>
                <p class="news_prview text-sm leading-5 my-4">Our best picks for various needs and budgets.

                </p>
            </div>
        </div>

        <div class="news flex m-4 gap-8 ">
            <div class="pic ">
                <img class="min-w-[120px] max-h-[150px]" src="@/assets/images/image-gaming-growth.jpg" alt="">
            </div>
            <div class="news_text ">
                <h2 class="text-3xl font-extrabold">03</h2>
                <div class="title font-bold  text-xl">The Growth of Gaming</div>
                <p class="news_prview text-sm leading-5 my-4">How the pandemic has sparked fresh opportunities.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.news-list {
    background-color: var(--neutral-very-dark-blue);
}

.news-list h2 {
    color: var(--primary-orange);
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 20px;
}

.news-item:first {
    border-bottom: 1px solid var(--neutral-dark-grayish-blue);
}

.news-item:nth-child(2),
.news-item:nth-child(3) {
    border-bottom: 1px solid var(--neutral-dark-grayish-blue);
}

.news_text h2 {
    color: var(--primary-red);
}

.news_text p {
    color: var(--neutral-dark-grayish-blue);
}
</style>