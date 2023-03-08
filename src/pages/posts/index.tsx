import React, { useEffect, useState } from 'react';
import ContentList from '../../components/blogPost/ContentList';
import { ContentMeta } from '../../types/common';
import api from '../../api/api';

function PostIndex() {
  const [contentList, setContentList] = useState<ContentMeta[]>([]);

  const getContentList = async () => {
    const res = await api.content.getList({
      page: 1,
      limit: 10,
    });

    setContentList(res.data);
  };

  useEffect(() => {
    getContentList();
  }, []);

  return (
    <div>
      <ContentList contentList={contentList} />
    </div>
  );
}

export default PostIndex;
