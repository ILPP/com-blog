import axios from 'axios'
import qs from 'qs'

const base = 'http://150.109.122.226:8081/api'

/**
 * 上传文章
 */

export const uploadBlog = (content,title,type) => {
  let postData = {
    content,
    title,
    type
  }
  return axios.post(`${base}/upload/blog`,postData)
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}

/**
 * 获取文章
 */
export const backBlog = () => {
  return axios.post(`${base}/back/blog`)
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}