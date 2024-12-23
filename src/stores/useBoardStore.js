import { defineStore } from "pinia";
import axios from "axios";

export const useBoardStore = defineStore('board', {
    state: () => (
        {
            // axios 결과를 처리하는 변수 
            axiosStatus: false,
            // 게시판 전체 목록을 가져오는 데이터
            boardList: [],
            // 게시판의 게시글 정보를 가져오는 데이터
            board: {}, 
            // 게시글 댓글을 가져오는 데이터
            boardComments: [],
            // 공지사항 목록을 가져오는 데이터
            noticeList: [],
            // 공지사항 정보를 가져오는 데이터
            notice: {},
        }),
    getters: {

    },
    actions: {
        // 게시판 전체 목록을 가져오는 데이터
        async getBoardList() {
            const response = await axios.get("게시판 리스트 url");
            this.boardList = response.data;
        },

        // 게시글 상세 목록을 가져오는 데이터
        async getBoard() {
            const response = await axios.get("게시판 상세 보기/게시글idx");
            this.board = response.data;
        },

        // 게시글 댓글을 가져오는 데이터
        async getBoardComments() {
            const response = await axios.get("댓글 목록 보기/게시글idx");
            this.boardComments = response.data;
        },

        async getNoticeList() {
            const response = await axios.get("공지사항 리스트 url");
            this.noticeList = response.data;
        },

        // 게시글 상세 목록을 가져오는 데이터
        async getBoard() {
            const response = await axios.get("공지사항 상세 보기/공지사항idx");
            this.notice = response.data;
        },
      },
})