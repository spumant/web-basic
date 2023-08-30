import Mock from 'mockjs'

Mock.mock('/user', 'get', () => {
    return Mock.mock({
        id: "@id",
        name: "@cname",
        age: "@integer(18,80)"
    })
})