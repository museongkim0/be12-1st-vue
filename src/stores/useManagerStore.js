import { defineStore } from "pinia";
import axios from "axios";
// 수강생 등록, 거부
// 수강생 조회 O
// 수강생 제적
// 수업 등록 O
// 강사 등록, 해제 O
// 매니저 추가, 삭제 O
// 출결 관리 O
// 시험 등록 삭제

export const useManagerStore = defineStore("manager", {
    state: () => ({
        // axios 결과를 처리하는 변수 
        axiosStatus: false,
        // 수강 신청한 학생들 목록을 위한 데이터
        students: [],
        // 수강 신청한 학생 1명의 상세 정보를 보기 위한 데이터
        studentInfo: {},
        // 강사 목록을 가져오는 데이터
        instructors: [],
        // 강사 상세 정보를 가져오는 데이터
        instructorInfo: {},
        // 매니저 목록을 가져오는 데이터
        managers: [],
        // 매니저 상세 정보를 가져오는 데이터
        managerInfo: {},
        // 수업 목록을 가져오는 데이터
        courses: [],
        // 수업 상세 정보를 가져오는 데이터
        course: {},
        // 출결 목록을 가져오는 데이터
        attendances: [],
        // 출결 상세 정보를 가져오는 데이터 (몇시 출석 했고 몇시 퇴실 했는지 조퇴 여부 등)
        attendanceInfo: {},
        // 시험 목록을 가져오는 데이터
        tests: [],
        // 시험 상세 정보를 가져오는 데이터 (합격자 수, 평균 점수 등)
        testInfo: {},
    }),
    actions: {
        // 수강 신청한 학생들 목록을 가져오는 함수
        async getStudents() {
            const response = await axios.get("수강신청 학생 정보 목록 url");
            this.students = response.data;
        },

        // 수강 신청한 학생의 상세 정보를 가져오는 함수
        async getStudentInfo() {
            const response = await axios.get("학생 상세 정보 url/신청학생idx");
            this.studentInfo = response.data;
        },

        // 강사들 목록을 가져오는 함수
        async getInstructors() {
            const response = await axios.get("강사 목록 url");
            this.instructors = response.data;
        },

        // 강사의 상세 정보를 가져오는 함수
        async getInstructorInfo() {
            const response = await axios.get("강사 상세 정보 url/강사idx");
            this.instructorInfo = response.data;
        },

        // 매니저들 목록을 가져오는 함수
        async getManagers() {
            const response = await axios.get("매니저 목록 url");
            this.managers = response.data;
        },

        // 매니저의 상세 정보를 가져오는 함수
        async getManagerInfo() {
            const response = await axios.get("매니저 상세 정보 url/매니저idx");
            this.managerInfo = response.data;
        },

        // 수업 목록을 가져오는 함수
        async getCourses() {
            const response = await axios.get("수업 목록 url");
            this.courses = response.data;
        },

        // 수업의 상세 정보를 가져오는 함수
        async getCourse() {
            const response = await axios.get("수업 상세 정보 url/수업idx");
            this.course = response.data;
        },

        //  출석 목록을 가져오는 함수
        async getAttendances() {
            const response = await axios.get("출석 목록 url");
            this.attendances = response.data;
        },

        // 출석 상세 정보를 가져오는 함수
        async getAttendanceInfo() {
            const response = await axios.get("출석 상세 정보 url/출석idx");
            this.attendanceInfo = response.data;
        },

        //  시험 목록을 가져오는 함수
        async getTests() {
            const response = await axios.get("시험 목록 url");
            this.tests = response.data;
        },

        // 시험 상세 정보를 가져오는 함수
        async getTestInfo() {
            const response = await axios.get("시험 상세 정보 url/시험idx");
            this.testInfo = response.data;
        },
    }
})