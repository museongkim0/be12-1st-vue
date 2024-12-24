import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    isSidebarExpanded: false,
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded;
    }
  }
});

// import { defineStore } from 'pinia';

// export const useGlobalStore = defineStore('global', {
//   state: () => ({
//     isRightSidebarExpanded: false,
//   }),
//   actions: {
//     toggleSidebar() {
//       this.isRightSidebarExpanded = !this.isRightSidebarExpanded;
//     },
//     closeSidebar() {
//       this.isRightSidebarExpanded = false;
//     },
//   },
// });