<template>
    <div class="lg:flex ">
        <div class="main-news m-4 ">
            <div class="main-news__pic my-2 ">
                <img class="aspect-square  sm:aspect-auto sm:object-contain"
                    src="@/assets/images/image-web-3-desktop.jpg" alt="main-news">
            </div>
            <div class="main-news__text ">
                <div class="lg:grid lg:grid-cols-2 lg:gap-8">
                    <h1 class="news_title  text-4xl lg:text-5xl font-bold lg:w-[100%]">The Bright<br> Future of Web <br>
                        3.0 ?
                    </h1>
                    <div class="lg:flex lg:flex-col">
                        <p class="news_preview my-2 leading-7">We dive into the next evolution of the web that claims to
                            put the
                            power
                            of the
                            platforms
                            back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button
                            class="btn read_more py-2 px-4 mt-4 mb-8 font-bold tracking-widest lg:w-fit lg:px-8 cursor-pointer">READ
                            MORE</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- news list -->
        <div class="news-list text-white m-4 p-6 lg:mt-[25px]">
            <h2>New</h2>
            <div class="news-item mb-8 ">
                <div class="news_title text-lg font-bold">Hydrogen VS Electric Cars</div>
                <div class="news_preview my-2 mb-8">Will hydrogen-fueled cars ever catch up to EVs?
                </div>
                <!-- <div class="split-line h-0.5 bg-white"></div> -->
            </div>
            <div class="news-item mb-8">
                <div class="news_title text-lg font-bold">The Downsides of AI Artistry</div>
                <div class="news_preview my-2 mb-8">What are the possible adverse effects of on-demand AI image
                    generation?
                </div>
                <!-- <div class="split-line h-0.5 bg-white"></div> -->
            </div>
            <div class="news-item mb-8">
                <div class="news_title text-lg font-bold">Is VC Funding Drying Up?</div>
                <div class="news_preview my-2 ">Private funding by VC firms is down 50% YOY. We take a look at what that
                    means.
                </div>
                <!-- <div class="split-line h-0.5 bg-white"></div> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.news_preview {
    color: var(--neutral-dark-grayish-blue);
}

.read_more {
    background-color: var(--primary-red);
}

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