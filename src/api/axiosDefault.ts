import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

// 기본적으로 JSON으로 요청하도록 설정
axios.defaults.headers.post['Content-Type'] = 'application/json';

// response에서 data 부분만 가져오도록 설정
axios.defaults.transformResponse = (data) => JSON.parse(data).data;

// error를 throw하는 대신 에러 메시지만 출력하도록 설정
axios.defaults.validateStatus = (status) => status < 500;

export default axios;
