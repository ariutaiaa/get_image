const Router = require('koa-router');
const fs = require('fs');
const router = new Router();

router.prefix('/index');

router.get('/home', async ctx => {
    ctx.body = 'home'
})

router.post('/image', async ctx => {

    let request = ctx.request; // 获取上传文件
    let req_body = request.body;
    let base_data = req_body.data;

    console.log(base_data.length)

    /**
     *   站长工具：http://tool.chinaz.com/tools/imgtobase/
     *   这里问题：拿到base_data数据，是Base64编码格式在站长工具里不能还原图片，但在index.html输出的Base64可以在站长工具里转换成图片
     *   两份浏览器上和服务端的字符串数量一致，问题是到了服务端后编码无法转换成图片，导致图片文件损坏，现在解决怎么把图片能够正确成功编码并能展示图片
     *   下面1234.txt是上面拿到图片base数据保存在文档里，可以拿到站长工具试看看
     */
    fs.writeFile('./public/image/1234.txt', base_data, function(err) {

    });

    ctx.body={sum:'ok'}
})

module.exports = router;
