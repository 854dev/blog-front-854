import React from 'react'
import { useRouter } from 'next/router'


function Post() {
const router = useRouter()
const { contentId } = router.query
  

  return (
    <div>{contentId}</div>
  )
}

export default Post