<script setup>

</script>

<template>
    <!-- Main Content Wrapper -->
    <main class="main-content w-full px-[var(--margin-x)]">
        <div class="flex justify-center items-center min-h-screen">
          <div class="w-full lg:w-8/12 py-6">
            <div class="mt-5 text-center">
              <p style="font-size: 24px; font-weight: bold;">
                POSTS
              </p>
              <p class="border-b border-slate-200 pb-2 text-base text-slate-800 dark:border-navy-600 dark:text-navy-100">
                <!-- 입력 필드 -->
                <div class="flex justify-center items-center mt-3">
                  <svg class="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                  </svg>
                  <input 
                      id="search" 
                      type="text" 
                      class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2" 
                      placeholder="Search...">
                </div>
              </p>
            </div>
            
            <div class="mt-3 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
              <!-- 카드 목록들 (블로그 포스트들) -->
              <div class="flex justify-between space-x-2">
                <div class="flex flex-1 flex-col justify-between">
                  <div>
                    <p class="text-xs font-medium line-clamp-1">06 Nov</p>
                    <div class="mt-1 text-slate-800 line-clamp-3 dark:text-navy-100">
                      <a href="https://lineone.piniastudio.com/pages-blog-details.html#" class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">이거 모르겠어요~~~~</a>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <p class="text-xs font-medium line-clamp-1">김유진</p>
                    <div class="flex">
                      <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                      </button>
                      <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-between space-x-2">
                <div class="flex flex-1 flex-col justify-between">
                  <div>
                    <p class="text-xs font-medium line-clamp-1">06 Nov</p>
                    <div class="mt-1 text-slate-800 line-clamp-3 dark:text-navy-100">
                      <a href="https://lineone.piniastudio.com/pages-blog-details.html#" class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">이거 모르겠어요~~~~</a>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <p class="text-xs font-medium line-clamp-1">김유진</p>
                    <div class="flex">
                      <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                      </button>
                      <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-between space-x-2">
                <div class="flex flex-1 flex-col justify-between">
                  <div>
                    <p class="text-xs font-medium line-clamp-1">06 Nov</p>
                    <div class="mt-1 text-slate-800 line-clamp-3 dark:text-navy-100">
                      <a href="https://lineone.piniastudio.com/pages-blog-details.html#" class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">이거 모르겠어요~~~~</a>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <p class="text-xs font-medium line-clamp-1">김유진</p>
                    <div class="flex">
                      <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                      </button>
                      <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-between space-x-2">
                <div class="flex flex-1 flex-col justify-between">
                  <div>
                    <p class="text-xs font-medium line-clamp-1">06 Nov</p>
                    <div class="mt-1 text-slate-800 line-clamp-3 dark:text-navy-100">
                      <a href="https://lineone.piniastudio.com/pages-blog-details.html#" class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">이거 모르겠어요~~~~</a>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <p class="text-xs font-medium line-clamp-1">김유진</p>
                    <div class="flex">
                      <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                      </button>
                      <button class="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
      
              <!-- 반복되는 블로그 포스트들 -->
              <!-- ... 동일한 블록을 반복하여 추가 -->
      
            </div>
      
            <div class="pagination text-center mt-4">
              <a href="#">&laquo;</a>
              <a href="#" class="active">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">&raquo;</a>
            </div>
          </div>
        </div>
    </main>
</template>

<style scoped></style>
