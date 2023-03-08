import axios from './axiosDefault';

const api = {
  content: {
    getList: (req) =>
      axios({
        url: 'content',
        method: 'get',
        params: req,
      }),
    getDetail: (id) =>
      axios({
        url: `content/${id}`,
        method: 'get',
      }),
  },
};

export default api;
