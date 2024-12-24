<script setup>
    import { useGlobalStore } from '/src/stores/globalStore.js';
    import { onMounted, ref } from 'vue';
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.css';

    const element = document.querySelector('#app');
    console.log("@@@@@@@@@@@@@@@@@@@@");
    console.log(element);
    const globalStore = useGlobalStore();

    const swiperInstance = ref(null);

    onMounted(() => {
        swiperInstance.value = new Swiper('.swiper', {
            slidesPerView: 'auto',
            spaceBetween: 18,
            simulateTouch: true,
            grabCursor: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    });

    const days = ref([
        { title: 'Linux 환경 설정', color: 'bg-red-500', date: '1일차', isPing: true },
        { title: 'Linux 환경 설정', color: 'bg-blue-500', date: '2일차', isPing: false },
        { title: 'Linux 환경 설정', color: 'bg-green-500', date: '3일차', isPing: false },
        { title: 'Linux 환경 설정', color: 'bg-yellow-500', date: '4일차', isPing: true },
        { title: 'Linux 환경 설정', color: 'bg-purple-500', date: '5일차', isPing: false },
        { title: 'Linux 환경 설정', color: 'bg-pink-500', date: '6일차', isPing: false },
    ]);

</script>


<template>
    <main class="main-content w-full pb-8">
                    <div class="mt-5 px-[var(--margin-x)] transition-all duration-[.25s]">
                        <p class="text-base font-medium text-slate-700 dark:text-navy-100">
                            커리큘럼 진행도

                        </p>

                    </div>

                    <div class="flex">
                        <div class="swiper mx-0 mt-4 px-[var(--margin-x)] transition-all duration-[.25s]"
                            ref="swiperContainer">
                            <div class="swiper-wrapper" id="swiper-wrapper-ebe87e3b10cd3dc74" aria-live="polite">
                                <div class="card swiper-slide flex w-72 shrink-0 justify-between rounded-xl border-l-4 border-primary p-4 swiper-slide-active"
                                    role="group" aria-label="1 / 6" style="margin-right: 18px;">
                                    <div>
                                        <p
                                            class="font-medium tracking-wide text-slate-700 line-clamp-2 dark:text-navy-100">
                                            기반 기술
                                        </p>
                                    </div>

                                    <div class="mt-6">
                                        <div x-tooltip.primary="'0% Completed'"
                                            class="progress h-1 bg-slate-150 dark:bg-navy-500">
                                            <div class="w-0/12 rounded-full bg-primary dark:bg-accent"></div>
                                        </div>

                                        <div
                                            class="mt-2 flex items-center justify-between text-primary dark:text-accent-light">
                                            <a href="#">
                                                <div class="size-7">
                                                    <button
                                                        class="menu-toggle ml-0.5 flex size-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
                                                        :class="{ active: globalStore.isSidebarExpanded }"
                                                        @click="globalStore.toggleSidebar">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </button>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="card swiper-slide flex w-72 shrink-0 justify-between rounded-xl border-l-4 border-secondary p-4 swiper-slide-next"
                                    role="group" aria-label="2 / 6" style="margin-right: 18px;">
                                    <div>
                                        <p
                                            class="font-medium tracking-wide text-slate-700 line-clamp-2 dark:text-navy-100">
                                            데이터베이스
                                        </p>
                                    </div>

                                    <div class="mt-6">
                                        <div x-tooltip.secondary="'0% Completed'"
                                            class="progress h-1 bg-slate-150 dark:bg-navy-500">
                                            <div class="w-0/12 rounded-full bg-secondary"></div>
                                        </div>

                                        <div
                                            class="mt-2 flex items-center justify-between text-secondary dark:text-secondary-light">
                                            <a href="#">
                                                <div class="size-7">
                                                    <button
                                                        class="menu-toggle ml-0.5 flex size-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
                                                        :class="{ active: globalStore.isSidebarExpanded }"
                                                        @click="globalStore.toggleSidebar">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </button>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="card swiper-slide flex w-72 shrink-0 justify-between rounded-xl border-l-4 border-warning p-4"
                                    role="group" aria-label="3 / 6" style="margin-right: 18px;">
                                    <div>
                                        <p
                                            class="font-medium tracking-wide text-slate-700 line-clamp-2 dark:text-navy-100">
                                            프론트엔드
                                        </p>
                                    </div>

                                    <div class="mt-6">
                                        <div x-tooltip.warning="'0% Completed'"
                                            class="progress h-1 bg-slate-150 dark:bg-navy-500">
                                            <div class="w-0/12 rounded-full bg-warning"></div>
                                        </div>

                                        <div class="mt-2 flex items-center justify-between text-warning">
                                            <a href="#">
                                                <div class="size-7">
                                                    <button
                                                        class="menu-toggle ml-0.5 flex size-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
                                                        :class="{ active: globalStore.isSidebarExpanded }"
                                                        @click="globalStore.toggleSidebar">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </button>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="card swiper-slide flex w-72 shrink-0 justify-between rounded-xl border-l-4 border-primary p-4"
                                    role="group" aria-label="4 / 6" style="margin-right: 18px;">
                                    <div>
                                        <p
                                            class="font-medium tracking-wide text-slate-700 line-clamp-2 dark:text-navy-100">
                                            백엔드
                                        </p>
                                    </div>

                                    <div class="mt-6">
                                        <div x-tooltip.primary="'0% Completed'"
                                            class="progress h-1 bg-slate-150 dark:bg-navy-500">
                                            <div class="w-0/12 rounded-full bg-primary dark:bg-accent"></div>
                                        </div>

                                        <div
                                            class="mt-2 flex items-center justify-between text-primary dark:text-accent-light">
                                            <a href="#">
                                                <div class="size-7">
                                                    <button
                                                        class="menu-toggle ml-0.5 flex size-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
                                                        :class="{ active: globalStore.isSidebarExpanded }"
                                                        @click="globalStore.toggleSidebar">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </button>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="card swiper-slide flex w-72 shrink-0 justify-between rounded-xl border-l-4 border-secondary p-4"
                                    role="group" aria-label="5 / 6" style="margin-right: 18px;">
                                    <div>
                                        <p
                                            class="font-medium tracking-wide text-slate-700 line-clamp-2 dark:text-navy-100">
                                            데브옵스
                                        </p>
                                    </div>

                                    <div class="mt-6">
                                        <div x-tooltip.secondary="'0% Completed'"
                                            class="progress h-1 bg-slate-150 dark:bg-navy-500">
                                            <div class="w-0/12 rounded-full bg-secondary"></div>
                                        </div>

                                        <div
                                            class="mt-2 flex items-center justify-between text-secondary dark:text-secondary-light">
                                            <a href="#">
                                                <div class="size-7">
                                                    <button
                                                        class="menu-toggle ml-0.5 flex size-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
                                                        :class="{ active: globalStore.isSidebarExpanded }"
                                                        @click="globalStore.toggleSidebar">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </button>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="card swiper-slide flex w-72 shrink-0 justify-between rounded-xl border-l-4 border-warning p-4"
                                    role="group" aria-label="6 / 6" style="margin-right: 18px;">
                                    <div>
                                        <p
                                            class="font-medium tracking-wide text-slate-700 line-clamp-2 dark:text-navy-100">
                                            최종 프로젝트
                                        </p>
                                    </div>

                                    <div class="mt-6">
                                        <div x-tooltip.warning="'0% Completed'"
                                            class="progress h-1 bg-slate-150 dark:bg-navy-500">
                                            <div class="w-0/12 rounded-full bg-warning"></div>
                                        </div>

                                        <div class="mt-2 flex items-center justify-between text-warning">
                                            <a href="#">
                                                <div class="size-7">
                                                    <button
                                                        class="menu-toggle ml-0.5 flex size-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
                                                        :class="{ active: globalStore.isSidebarExpanded }"
                                                        @click="globalStore.toggleSidebar">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </button>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                    </div>
                    <div
                        class="mt-4 grid grid-cols-12 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
                        <div class="card col-span-12 pb-3 lg:col-span-6">
                            <div class="mt-3 flex h-8 items-center justify-between px-4 sm:px-5">
                                <h2 class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
                                    커리큘럼 진척도
                                </h2>


                                <div x-data="usePopper({placement:'bottom-end',offset:4})"
                                    @click.outside="isShowPopper && (isShowPopper = false)" class="inline-flex">
                                    <button x-ref="popperRef" @click="isShowPopper = !isShowPopper"
                                        class="btn -mr-1.5 size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>


                        </div>
                        <div
                            class="order-first col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:order-none lg:col-span-6 lg:gap-6">
                            <div class="card justify-between p-5">
                                <p class="font-medium">출석</p>
                                <div class="flex items-center justify-between pt-4">
                                    <p class="text-3xl font-semibold text-slate-700 dark:text-navy-100 chool">
                                        0
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="size-10 text-primary dark:text-accent" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="card justify-between p-5">
                                <p class="font-medium">남은 휴가</p>
                                <div class="flex items-center justify-between pt-4">
                                    <p class="text-3xl font-semibold text-slate-700 dark:text-navy-100 huga">
                                        999
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="size-10 text-primary dark:text-accent" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div class="card justify-between p-5">
                                <p class="font-medium">지각</p>
                                <div class="flex items-center justify-between pt-4 ">
                                    <p class="text-3xl font-semibold text-slate-700 dark:text-navy-100 delay">
                                        0
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="size-10 text-secondary dark:text-secondary-light" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div class="card justify-between p-5">
                                <p class="font-medium">조퇴</p>
                                <div class="flex items-center justify-between pt-4">
                                    <p class="text-slate-700 dark:text-navy-100">
                                        <span class="text-3xl font-semibold jotae">0</span>
                                        <!-- <span class="text-xl font-medium">21m</span> -->
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="size-10 text-warning" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div class="card justify-between p-5">
                                <p class="font-medium">외출</p>
                                <div class="flex items-center justify-between pt-4">
                                    <p class="text-3xl font-semibold text-slate-700 dark:text-navy-100 outside">
                                        0
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="size-10 text-success" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div class="flex items-center justify-between">
                                <h2 class="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                                    게시판
                                </h2>
                                <a x-data="usePopper({placement:'bottom-end', offset:4})"
                                    href="/html/common/board_list.html"
                                    @click.outside="isShowPopper && (isShowPopper = false)" class="inline-flex">
                                    <button x-ref="popperRef" @click="isShowPopper = !isShowPopper"
                                        class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
                                            </path>
                                        </svg>
                                    </button>
                                </a>
                            </div>
                            <div class="mt-3 flex flex-col justify-between space-y-4">

                                <div class="card p-4">
                                    <p class="font-medium text-slate-700 dark:text-navy-100">
                                        이거 코드 어케 해야해여?
                                    </p>
                                    <p class="mt-1 text-xs+">아시는분 좀 알려주세...</p>
                                    <div class="mt-4 flex flex-wrap -space-x-2">

                                    </div>
                                    <div class="mt-2 flex items-end justify-between">
                                        <p class="flex items-center space-x-2 text-slate-400 dark:text-navy-300">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="size-4.5 text-slate-400 dark:text-navy-300" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                </path>
                                            </svg>
                                            <span class="text-xs">06 June, 2022</span>

                                            <span> 작성자 : 하하</span>
                                        </p>
                                        <button
                                            class="btn size-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="size-5 rotate-45" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                            </svg>
                                        </button>
                                    </div>

                                </div>
                                <div class="card p-4">
                                    <p class="font-medium text-slate-700 dark:text-navy-100">
                                        이거 코드 어케 해야해여?
                                    </p>
                                    <p class="mt-1 text-xs+">아시는분 좀 알려주세...</p>
                                    <div class="mt-4 flex flex-wrap -space-x-2">

                                    </div>
                                    <div class="mt-2 flex items-end justify-between">
                                        <p class="flex items-center space-x-2 text-slate-400 dark:text-navy-300">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="size-4.5 text-slate-400 dark:text-navy-300" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                </path>
                                            </svg>
                                            <span class="text-xs">06 June, 2022</span>

                                            <span> 작성자 : 하하</span>
                                        </p>
                                        <button
                                            class="btn size-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="size-5 rotate-45" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                            </svg>
                                        </button>
                                    </div>

                                </div>
                                <div class="card p-4">
                                    <p class="font-medium text-slate-700 dark:text-navy-100">
                                        이거 코드 어케 해야해여?
                                    </p>
                                    <p class="mt-1 text-xs+">아시는분 좀 알려주세...</p>
                                    <div class="mt-4 flex flex-wrap -space-x-2">

                                    </div>
                                    <div class="mt-2 flex items-end justify-between">
                                        <p class="flex items-center space-x-2 text-slate-400 dark:text-navy-300">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="size-4.5 text-slate-400 dark:text-navy-300" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                </path>
                                            </svg>
                                            <span class="text-xs">06 June, 2022</span>

                                            <span> 작성자 : 하하</span>
                                        </p>
                                        <button
                                            class="btn size-7 rounded-full bg-slate-150 p-0 font-medium text-slate-800 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-200/50 focus:bg-slate-200 focus:shadow-lg focus:shadow-slate-200/50 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:hover:shadow-navy-450/50 dark:focus:bg-navy-450 dark:focus:shadow-navy-450/50 dark:active:bg-navy-450/90">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="size-5 rotate-45" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                                            </svg>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-4">
                            <div class="flex items-center justify-between">
                                <h2 class="font-medium tracking-wide text-slate-700 dark:text-navy-100">
                                    과제현황
                                </h2>
                                <div x-data="usePopper({placement:'bottom-end',offset:4})"
                                    @click.outside="isShowPopper && (isShowPopper = false)" class="inline-flex">
                                    <a x-data="usePopper({placement:'bottom-end', offset:4})"
                                        href="/html/common/board.html"
                                        @click.outside="isShowPopper && (isShowPopper = false)" class="inline-flex">
                                        <button x-ref="popperRef" @click="isShowPopper = !isShowPopper"
                                            class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
                                                </path>
                                            </svg>
                                        </button>
                                    </a>

                                    <div x-ref="popperRoot" class="popper-root" :class="isShowPopper && 'show'"
                                        style="position: fixed; inset: 0px 0px auto auto; margin: 0px; transform: translate(-64px, 608px);"
                                        data-popper-placement="bottom-end">
                                        <div
                                            class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                                            <ul>
                                                <li>
                                                    <a href="https://lineone.piniastudio.com/dashboards-education.html#"
                                                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Action</a>
                                                </li>
                                                <li>
                                                    <a href="https://lineone.piniastudio.com/dashboards-education.html#"
                                                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Another
                                                        Action</a>
                                                </li>
                                                <li>
                                                    <a href="https://lineone.piniastudio.com/dashboards-education.html#"
                                                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Something
                                                        else</a>
                                                </li>
                                            </ul>
                                            <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                                            <ul>
                                                <li>
                                                    <a href="https://lineone.piniastudio.com/dashboards-education.html#"
                                                        class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Separated
                                                        Link</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-1">
                                <div class="card p-2.5">
                                    <div class="flex justify-between space-x-2">
                                        <div class="flex flex-1 flex-col justify-between">
                                            <div>
                                                <a href="https://lineone.piniastudio.com/dashboards-education.html#"
                                                    class="font-medium text-slate-700 outline-none transition-colors line-clamp-2 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">Learn
                                                    JavaScript Unit Testing</a>
                                                <a href="https://lineone.piniastudio.com/dashboards-education.html#"
                                                    class="text-xs text-slate-400 hover:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100">Konnor
                                                    Guzman</a>
                                            </div>

                                        </div>
                                        <img class="size-24 rounded-lg object-cover"
                                            src="./Lineone - Education Dashboard_files/testing-sm.jpg" alt="image">
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </main>

</template>
<!-- 
              This is a place for Alpine.js Teleport feature 
              @see https://alpinejs.dev/directives/teleport
            -->
<!-- <div id="x-teleport-target"></div> -->
<style scoped>
    /* Swiper container styling */
    .swiper-container {
        width: 100%;
        padding-bottom: 1rem;
    }

    .swiper-slide {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border-radius: 10px;
    }

    .swiper-pagination {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }

    .swiper-button-next,
    .swiper-button-prev {
        position: absolute;
        top: 50%;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 10px;
        border-radius: 50%;
    }

    .swiper-button-next {
        right: 10px;
    }

    .swiper-button-prev {
        left: 10px;
    }

    /* 사이드바 열릴 때 */
    .sidebar-expanded {
        transform: translateX(0);
        /* 사이드바가 열릴 때 */
        transition: transform 0.3s ease;
        /* 부드러운 전환 효과 */
    }

    /* 사이드바 닫힐 때 */
    .sidebar-collapsed {
        transform: translateX(-100%);
        /* 사이드바가 화면 밖으로 밀려나게 함 */
        transition: transform 0.3s ease;
        /* 부드러운 전환 효과 */
    }

    /* 사이드바의 기본 스타일 */
    .sidebar-panel {
        position: fixed;
        top: 0;
        left: 0;
        width: 250px;
        /* 사이드바 너비 */
        height: 100vh;
        /* 화면 높이 */
        background-color: white;
        z-index: 999;
        /* 화면 위에 나타나게 */
    }
</style>








