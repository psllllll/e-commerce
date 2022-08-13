//对axios进行二次分装
import axios from 'axios'

//1.利用axios对象的方法create，区创建一个axios实例
//request就是axios
const requests = axios.create({
    baseURL:"http://101.43.181.13:8080'",
    //请求超时的时间
    timeout:5000
});

// 添加请求拦截器，在请求头中加token
//在连接端口之前，通过axios拦截器添加token，保证拥有获取数据的权限.
requests.interceptors.request.use(config=>{
    //console.log(config);
    //为请求头对象添加token验证的Authorization字段
    config.headers.token=window.localStorage.getItem('token')
    console.log(config.headers.token);
    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{
//成功的回调
    return res.data
},(error)=>{
//失败的回调
    return Promise.reject(new Error('faile'))
});

//对外暴露
export default axios