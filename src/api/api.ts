import axios from './axiosDefault';

const api = {
  content: {
    getContentTypeList: (req) =>
      axios({
        url: 'content-type',
        method: 'get',
        params: req,
      }),

    getContentList: (req) =>
      axios({
        url: 'content',
        method: 'get',
        params: req,
      }),

    getContentDetail: (req) =>
      axios({
        url: `content/${req.contentId}`,
        method: 'get',
      }),
  },
};

export default api;
