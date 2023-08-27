export default {
    install(Vue){
        console.log("创建自定义插件");
        console.log(Vue);
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,2)
        })
        //给Vue原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.hello = ()=>{alert('hello')}
    }
}