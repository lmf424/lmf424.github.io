/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/22/my-first.html","e38eaa06c15c7e2ea55df7c820cbd0cc"],["/2019/07/22/my-first/first.jpg","91811b412d80117b423807c82e9a965b"],["/2019/07/23/dijstra.html","4273127e7400b55ec15696fc14eae444"],["/2019/07/23/dijstra/1563862729194.png","c351da19bddd597ef308b7008b7a89d7"],["/2019/07/23/dijstra/1563862773804.png","d2ef8e5214e4cb08a7ebb2b4abff5cd9"],["/2019/07/23/dijstra/1563863527940.png","d7c25b68d6da4748cf51f124d007502f"],["/2019/07/23/dijstra/1563863664903.png","916f0eb2824884b2ff9d8caf0d51b221"],["/2019/07/23/dijstra/1563863742582.png","53f773c112fdf466d7d4cc1631647de5"],["/2019/07/23/dijstra/1563863819140.png","6157732cc76cf43428774f04885321e0"],["/2019/07/23/dijstra/1563863951516.png","331845801b6e652ad0e55083ebb51bb8"],["/2019/07/23/dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/2019/07/23/dijstra/lalala.gif","7f1a7b175d3bc6f0677878dce5dfb494"],["/2019/07/24/poj1797.html","16d6e228da420d665e45e6806c957aa7"],["/2019/07/24/poj2253.html","cb2c7e6289840f644cc9f9579921d553"],["/2019/07/24/poj2253/2253.png","4bdc4a5f70e03a8dc36f6a6f26916a0b"],["/2019/07/24/poj2387.html","6d3d5be32b9c6db98dcfecd917118376"],["/2019/07/25/floyd.html","956e6ff995dd208d53866c9210221f46"],["/2019/07/25/floyd/1564051171338.png","949302f6746383db0dc8014e72a9019c"],["/2019/07/25/floyd/1564051237886.png","c9cbaafa349fb7612b220ff21b3f2452"],["/2019/07/25/floyd/1564052208614.png","55c4add1388037dded482bbd26bfc20f"],["/2019/07/25/floyd/1564052291135.png","d1670d7be56d8b7accdbf52ab27388ff"],["/2019/07/25/floyd/1564052336765.png","e383255981a29476458550b5e2661cb1"],["/2019/07/25/floyd/1564052379218.png","94424d00cb50187880100216cadbef9f"],["/2019/07/25/poj3268.html","70029ba599e05f189e054cc20e0ce71f"],["/2019/07/26/bellman.html","bd88fac709426245ae3af2c23a69ae00"],["/2019/07/26/bellman/1564125629485.png","f443984402b0d4d92ed6be05efc198c1"],["/2019/07/26/bellman/1564125848909.png","f0eedabc94d6be668886906b615e3adc"],["/2019/07/26/bellman/1564126314876.png","f79ceb47caec9fe7254b43a41e70da5f"],["/2019/07/26/bellman/1564126386305.png","782a01565bc272e5c1baefd1594cb038"],["/2019/07/26/bellman/1564127047514.png","bcbe76a8077444a17546517a3a9cff69"],["/2019/07/26/poj1860.html","834624aedcf53704be00a506d7e9a767"],["/2019/07/28/poj1502.html","9f9faa1fbf8161c6faeaeb469ad96301"],["/2019/07/28/poj3259.html","f0643a35b2fe78b918405dccaf91764f"],["/2019/07/28/poj3660.html","4b2eeba29d900fb978d155f96a1de235"],["/2019/07/29/poj2240.html","296911a70b803a61ca0934f69c1453c7"],["/2019/07/30/Topological-sort.html","a1d0b03493d33f870a903294b597524e"],["/2019/07/30/spfa.html","9e6d38628b5e39af18fb3dacf6516ff8"],["/2019/07/30/spfa/1.jpg","f66ede4b7980b55c3898850ca38b5658"],["/2019/07/30/spfa/1_1.png","d003c9a18904d8b89d5097e6f4f36f2a"],["/2019/07/30/spfa/2.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/3.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/4.jpg","34c831a37ed4b9d415f9e6ab66e8e034"],["/2019/07/30/spfa/5.jpg","7b521f213e987d149defbaa840708d8f"],["/2019/07/30/spfa/6.jpg","095973f611b03cef9e04d508694ac993"],["/2019/07/30/spfa/7.jpg","c2327afc6a604a1b01b145a637e7fb51"],["/2019/07/30/spfa/8.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/30/spfa/9.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/31/poj1511.html","f54e8f867eaad12adfef12cf5e18a534"],["/2019/08/01/priority-queue.html","3925a80f5e718c7cb8c647b0e487fde6"],["/2019/08/02/P4779.html","b0196c45888f119dcdd61bdecb642c3c"],["/2019/08/02/poj2502.html","ef9fd2be31aa41d6e6b8cfa1d24c8170"],["/2019/08/02/poj3159.html","ae29620f267ffbb1b2a3ae4172b9444f"],["/2019/08/03/hdu4370.html","89d99e748957fc7f351bce6321e66b08"],["/2019/08/03/hdu4370/1564895169459.png","c9d9dd1007807ef29a97f9b57b210b3c"],["/2019/08/03/poj1847.html","c32b8c25de9e6691f0998629d9987a51"],["/2019/08/03/poj3169.html","1be60da4bfac4c48e198a9bfd6c97a81"],["/2019/08/04/Prim.html","d04e0e0f684530500e9ed0e298f964e0"],["/2019/08/04/hdu1232.html","9f3c5af92c0eaaa2f06b8ae378269750"],["/2019/08/04/lightoj1074.html","3f1e86d77fb17428b52752f683427803"],["/2019/08/04/poj2236.html","7a68f3e5e9987bd35ba008c374e18127"],["/2019/08/04/poj2236/1564991288139.png","dc70efba4f25563cf53b1142c82fb57e"],["/2019/08/04/poj2236/1565003068075.png","cdab9be76174fa45908f5f928e45fb9d"],["/2019/08/04/poj2236/1565003423379.png","31bd5dfffb61185f597ca2e191a97365"],["/2019/08/04/poj2236/TIM图片20190805190547-1565004175371.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805190547.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805191700.gif","1c35756af776c1667b9f2602ac44d685"],["/2019/08/04/并查集.html","190f255d131a598985f31a96c09c7200"],["/2019/08/07/poj1611.html","a1fbf1880e07cdf8b39e94fdaef94758"],["/2019/08/07/七夕.html","527ab9835bbc6f2b10275703aa72f855"],["/2019/08/09/hdu1213.html","801f8e088d1d6b63c2a9199fd84c7641"],["/2019/08/10/hdu3038.html","ae8540d51427f7e640f13d6415bf60ef"],["/2019/08/10/poj1135.html","484b4c87fe6d6ba9d814c52758124dd9"],["/2019/08/11/poj1251.html","eb328d514d6547cd1f7a8ddd2c2eee5b"],["/2019/08/12/poj1287.html","5008b28872493b5a1b52ce1240ddd797"],["/2019/08/12/poj2031.html","0e2e951e2cb31e8c45de41b21f7261fe"],["/2019/08/12/poj2421.html","ddf099feadf8e2cd3f0265c24868ae17"],["/2019/08/12/zoj1586.html","47e92974befbe8cacb7729979060baf4"],["/2019/08/12/快速输入.html","443c0cf7df74c4998b096762c51a8ef5"],["/2019/08/13/poj1789.html","24fc1e09f550a65131661a9ebfec9163"],["/about/index.html","a82cdc0205b7745eb9d09b3b4d64883f"],["/archives/2019/07/index.html","d7c15bbc276c143cb72ef89f404ac13d"],["/archives/2019/07/page/2/index.html","b367d00714ac351bf2909608cd3f3d00"],["/archives/2019/08/index.html","bc525804981ee16e1e263b8715ae0ac8"],["/archives/2019/08/page/2/index.html","aa0fe12368607c58e7154b3266d5dad3"],["/archives/2019/08/page/3/index.html","8eab0da4aa9f4d3d6a5d176dc76b1ebd"],["/archives/2019/index.html","5df5730003e6c31cc5a21fbcfbe84793"],["/archives/2019/page/2/index.html","134e1adfc6a7d16f0e01b247c8099301"],["/archives/2019/page/3/index.html","1f41e8b24eac5c7db97a70f269f94a49"],["/archives/2019/page/4/index.html","eabfcc867a28b1f43ab10647e5752ef7"],["/archives/index.html","4ad1bbcecf2d4b54be49d0e68f9a76cf"],["/archives/page/2/index.html","9e3a3d3740ae409f26dbd6b26bc26b5e"],["/archives/page/3/index.html","29e3e96d67992dc70ed8cdd133241622"],["/archives/page/4/index.html","04705586b8ca1bffba9bc0723c1b9e7e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/STL/index.html","5751c5c32e14426fc32f22e282fc28f8"],["/categories/algorithm/index.html","847432f843507dae8eb002391f34a7b3"],["/categories/hdu/index.html","dab8e1801af416acd4c2577c494907aa"],["/categories/index.html","45aa343b57f224aeda5a39033fe350dc"],["/categories/lightoj/index.html","3497ad0255946d341462238426cd2b16"],["/categories/poj/index.html","219b9e860cffade190a14ba371c439f8"],["/categories/poj/page/2/index.html","c7216ce0ba20e66f454226be51dc8bae"],["/categories/poj/page/3/index.html","9b6392b6686023eaf61794fcb2e3c2bc"],["/categories/somethings/index.html","004ac9e42fa971a40618c30684c07744"],["/categories/xiu/index.html","02060dc235ea3e4c68ccee7d13e12069"],["/categories/zoj/index.html","e75170078f605b88e743e9f214126810"],["/categories/洛谷/index.html","7f67518309ba96e2061fc0749717e987"],["/css/main.css","a5c7b1ef4e0993a11df6797d0cf10e6c"],["/gallery/index.html","96e160fcfae0d183c63337b3105790e1"],["/image/Dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/image/background.jpg","7690c13196e365259e8f8dcd00b45063"],["/image/car.gif","96d8c992ffb5c53f362fbe6f755999b3"],["/image/first.jpg","91811b412d80117b423807c82e9a965b"],["/image/funny.gif","3e53ae588ec2b3770bab717488a519e1"],["/image/lolicon.jpg","3f8af0326fdbc545ac41693e8b24d765"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","82eae3dadaadf5abc6de47a6e2fe9ea9"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","7690c13196e365259e8f8dcd00b45063"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","6369d89cc4135be42f8855a89848b28d"],["/images/favicon-32x32-next.png","a6e67811320dd6a4a4f6c729eb08cf67"],["/images/header.jpg","91811b412d80117b423807c82e9a965b"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","e3fb689f9141eae65aa87db4fd050563"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","20dc6e0b2af9ee197bf49a43401af576"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-ribbon/README.html","d540d011a6ba2495875860814f76f0ab"],["/lib/canvas-ribbon/canvas-nest-nomobile.min.js","698ea0710bd84dc7640093bab947d64f"],["/lib/canvas-ribbon/canvas-nest.min.js","95e027408a9183dfe8c9878492ec2c38"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","7c36d540924fd38774a46dc1c80b8ae2"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d55721ff5e4023d3570eea6469137f97"],["/live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["/live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","450a889136df8a90f0d94cc8d8ace1a8"],["/live2d-widget/waifu.css","8c5d3363aca0e43de45ed1a8e51b688f"],["/page/2/index.html","2437a975ea7439f10fcd15ba887fde33"],["/page/3/index.html","6d9c2b9d0170921f93e062eecf4dcbe8"],["/page/4/index.html","53953656c3020b09ab51cac7510ad69c"],["/page/5/index.html","a34b5a87e9f6f801a6b9eea32916cdda"],["/page/6/index.html","a5945f5786790e76d6f85c81b98ebd05"],["/page/7/index.html","f960fd04daab22ef50a1d1e0ae0e9c76"],["/page/8/index.html","b8a8be3070aa7603307229b1dc9e12de"],["/sw-register.js","61bbf83dfd48ebcf81b45c7388cbdcc8"],["/tags/Prim/index.html","1d1bbfeec0a44c32c978201cd1aaeb2d"],["/tags/STL/index.html","ed22b584eaf00aa2c257de3ccebdec23"],["/tags/bellman/index.html","87981dca4bebe09dbd0c5c22f03061ea"],["/tags/dijstra/index.html","14e96cac2298338408936eb7a084f7f1"],["/tags/dijstra/page/2/index.html","816f1fe68f63a0fad20babaad687748d"],["/tags/floyd/index.html","0f5ad7639a1588a7acd5829bff121f8c"],["/tags/hdu/index.html","67238ad80b68687adf388ea4bd0df2b5"],["/tags/index.html","85eff72ef3571a48d42fcf0d1c8661e6"],["/tags/kuangbin/index.html","8bda6d18e35bfc3fbeb9f10b869ce934"],["/tags/kuangbin/page/2/index.html","a2c5a5ac10141d4f94b11108b7527ac2"],["/tags/kuangbin/page/3/index.html","a26a9673ec76a124a1283cdb41090fd0"],["/tags/lightoj/index.html","90362cd7df4a0a5b65cfd76f614a4917"],["/tags/poj/index.html","9d647509f64561ac2ecb62c846dc815a"],["/tags/poj/page/2/index.html","a415a3e8c6f09dc1a3f032dd1e69601a"],["/tags/poj/page/3/index.html","0662e21a5f46c233a6fad9ba9c7e21d0"],["/tags/spfa/index.html","f5fed715931e85ed9915dfc5b5c0dbe6"],["/tags/test/index.html","9a47948160e19e6b79bf8a5b446dbc2b"],["/tags/topsort/index.html","106d0208a7e890c05f3bc55f91da1fde"],["/tags/xiu/index.html","7900614d8b82f012994abf4198673149"],["/tags/zoj/index.html","f1def35f39a74238f33c1ac8bc8859b2"],["/tags/并查集/index.html","b4be88e8ef195e7a2c1268ce6ff23073"],["/tags/洛谷/index.html","eb8c15c00b6acb83b3685c89b5a7593b"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","3b2737a1f2f84e86fdefecd86573b7b9"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
