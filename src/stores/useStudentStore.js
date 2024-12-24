// stores/globalStore.js
import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    isSidebarExpanded: false, 
    isRightSidebarExpanded: false,
    // 사이드바 열림 상태 (기본값: false)
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded; // 사이드바 상태 토글
    },
    openSidebar() {
      this.isSidebarExpanded = true; // 사이드바 열기
    },
    closeSidebar() {
      this.isSidebarExpanded = false; // 사이드바 닫기
    },
    toggleSidebar() {
      this.isRightSidebarExpanded = !this.isRightSidebarExpanded;
    },
    closeSidebar() {
      this.isRightSidebarExpanded = false;
    },
  }
});
// export const useCurryStore = defineStore('curry', {
//   state: () => ({days: [

//   ]}),
//   actions: {
//       async fetchcurry() {
//           const response = await axios.get("https://0680c256-7cab-4754-bed0-6e37fa22faa6.mock.pstmn.io/getcurry");
//           this.products = response.data;
//       }
//   }
// })