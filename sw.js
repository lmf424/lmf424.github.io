/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/22/my-first.html","8ab979e52c1c46e883e01750468e9ac3"],["/2019/07/22/my-first/first.jpg","91811b412d80117b423807c82e9a965b"],["/2019/07/23/dijstra.html","f17c877353c32e64593d5223e3f84250"],["/2019/07/23/dijstra/1563862729194.png","c351da19bddd597ef308b7008b7a89d7"],["/2019/07/23/dijstra/1563862773804.png","d2ef8e5214e4cb08a7ebb2b4abff5cd9"],["/2019/07/23/dijstra/1563863527940.png","d7c25b68d6da4748cf51f124d007502f"],["/2019/07/23/dijstra/1563863664903.png","916f0eb2824884b2ff9d8caf0d51b221"],["/2019/07/23/dijstra/1563863742582.png","53f773c112fdf466d7d4cc1631647de5"],["/2019/07/23/dijstra/1563863819140.png","6157732cc76cf43428774f04885321e0"],["/2019/07/23/dijstra/1563863951516.png","331845801b6e652ad0e55083ebb51bb8"],["/2019/07/23/dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/2019/07/23/dijstra/lalala.gif","7f1a7b175d3bc6f0677878dce5dfb494"],["/2019/07/24/poj1797.html","b01b10c6c043beb550f47a2e09e9f946"],["/2019/07/24/poj2253.html","4c533a1e6258b52ee91307a14015bb47"],["/2019/07/24/poj2253/2253.png","4bdc4a5f70e03a8dc36f6a6f26916a0b"],["/2019/07/24/poj2387.html","318fbfa2a24fa43055291402b6a865df"],["/2019/07/25/floyd.html","05795890eca574617f747606b611b3b2"],["/2019/07/25/floyd/1564051171338.png","949302f6746383db0dc8014e72a9019c"],["/2019/07/25/floyd/1564051237886.png","c9cbaafa349fb7612b220ff21b3f2452"],["/2019/07/25/floyd/1564052208614.png","55c4add1388037dded482bbd26bfc20f"],["/2019/07/25/floyd/1564052291135.png","d1670d7be56d8b7accdbf52ab27388ff"],["/2019/07/25/floyd/1564052336765.png","e383255981a29476458550b5e2661cb1"],["/2019/07/25/floyd/1564052379218.png","94424d00cb50187880100216cadbef9f"],["/2019/07/25/poj3268.html","8a888f1a9f2419d1941e73ae89e2cb16"],["/2019/07/26/bellman.html","ecad456a64122df3198f60e929b3a9e8"],["/2019/07/26/bellman/1564125629485.png","f443984402b0d4d92ed6be05efc198c1"],["/2019/07/26/bellman/1564125848909.png","f0eedabc94d6be668886906b615e3adc"],["/2019/07/26/bellman/1564126314876.png","f79ceb47caec9fe7254b43a41e70da5f"],["/2019/07/26/bellman/1564126386305.png","782a01565bc272e5c1baefd1594cb038"],["/2019/07/26/bellman/1564127047514.png","bcbe76a8077444a17546517a3a9cff69"],["/2019/07/26/poj1860.html","9abe5809825e41f75c129a4d4d796f0d"],["/2019/07/28/poj1502.html","afd0d598d70207f775177a54c46664ca"],["/2019/07/28/poj3259.html","3f073447ee9abbed908055cb6c1c934c"],["/2019/07/28/poj3660.html","77de4f5d21f8475c2d7ea842afbc10d7"],["/2019/07/29/poj2240.html","c20f589640f6dc908b4e33bdc88d3169"],["/2019/07/30/Topological-sort.html","55b703d641e144bb5f6ff7bd7d9339c1"],["/2019/07/30/spfa.html","4935b550f9a23b29123613d2e8d5fe70"],["/2019/07/30/spfa/1.jpg","f66ede4b7980b55c3898850ca38b5658"],["/2019/07/30/spfa/1_1.png","d003c9a18904d8b89d5097e6f4f36f2a"],["/2019/07/30/spfa/2.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/3.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/4.jpg","34c831a37ed4b9d415f9e6ab66e8e034"],["/2019/07/30/spfa/5.jpg","7b521f213e987d149defbaa840708d8f"],["/2019/07/30/spfa/6.jpg","095973f611b03cef9e04d508694ac993"],["/2019/07/30/spfa/7.jpg","c2327afc6a604a1b01b145a637e7fb51"],["/2019/07/30/spfa/8.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/30/spfa/9.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/31/poj1511.html","84a5533e73888b92636b2617b0ea4772"],["/2019/08/01/priority-queue.html","2574750ae4356d466cd71fed452f59af"],["/2019/08/02/P4779.html","1ad31cfd3f256094d52df32dc4c9720e"],["/2019/08/02/poj2502.html","b2acf7f444ccef82c398ddf97b2339ec"],["/2019/08/02/poj3159.html","c3974abaadebe4712743a7447970367f"],["/2019/08/03/hdu4370.html","27498d1efc4777b6ae9d62dd4b2bea76"],["/2019/08/03/hdu4370/1564895169459.png","c9d9dd1007807ef29a97f9b57b210b3c"],["/2019/08/03/poj1847.html","25b7b828ad14d21eb275959af0603f1c"],["/2019/08/03/poj3169.html","d63abcea83e5234b2abcafd277441eda"],["/2019/08/04/Prim.html","2ca11e7e4230d5de4bb2ab837999c16e"],["/2019/08/04/hdu1232.html","a7f390122297bc8ec553c88d6a80ba30"],["/2019/08/04/lightoj1074.html","f0788c5a37f1eac963031f8dcc38ea2b"],["/2019/08/04/poj2236.html","50a9aeb1cd1251e744ff48149bbbc57f"],["/2019/08/04/poj2236/1564991288139.png","dc70efba4f25563cf53b1142c82fb57e"],["/2019/08/04/poj2236/1565003068075.png","cdab9be76174fa45908f5f928e45fb9d"],["/2019/08/04/poj2236/1565003423379.png","31bd5dfffb61185f597ca2e191a97365"],["/2019/08/04/poj2236/TIM图片20190805190547-1565004175371.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805190547.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805191700.gif","1c35756af776c1667b9f2602ac44d685"],["/2019/08/04/并查集.html","59349218a2c0ec12d00b8f01081947c6"],["/2019/08/07/poj1611.html","4b4b5c171d7379334e489cef3e104fda"],["/2019/08/07/七夕.html","d8b94d0a50ea18ea33e568bb4c19bbf0"],["/about/index.html","e185cb9d9a330d92a905e031f3749a70"],["/archives/2019/07/index.html","bd8e4ecc7b363bc1e587f4b09af8dde4"],["/archives/2019/07/page/2/index.html","211f35cbd29541a950e374b13dc98da1"],["/archives/2019/08/index.html","38d2bd81b7e5ba6aeeaf14e05b8de1cb"],["/archives/2019/08/page/2/index.html","2de55d2deb910b25841142db7e27dd8d"],["/archives/2019/index.html","1239e2c3999192abc937bd1c5e2e497e"],["/archives/2019/page/2/index.html","e9480257042a152e1d9b6211356f34f9"],["/archives/2019/page/3/index.html","4d2b2776aa065878e95f125f24e6d869"],["/archives/index.html","5691bf4fdfdccc9003a27600f42b4be0"],["/archives/page/2/index.html","42ddf7e77a3f10c1c87cbfee9fb06f07"],["/archives/page/3/index.html","e56c779721cef7d4df62522639e4f132"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/STL/index.html","a24f74bd24f732204f713d642f9af9ad"],["/categories/algorithm/index.html","356b800e98844ee7a9d6aa1e25bf1979"],["/categories/hdu/index.html","70ebdc7ea4e9a969b6814129b577138f"],["/categories/index.html","7e5e300f346f2d1bdbe705133e24a435"],["/categories/lightoj/index.html","9d28a45ce414564b2cc866d3d6d674bc"],["/categories/poj/index.html","6fa1be2d1e284e8abbb06dad47b33c0d"],["/categories/poj/page/2/index.html","9401ebf8f9a85ebe6985d0c9177ea3ab"],["/categories/somethings/index.html","18c5451fa2e4ec958e632d5c8248c0a6"],["/categories/洛谷/index.html","d498c58f8c861c8ca4df660ea49849d1"],["/css/main.css","f4c5f209f940cf28a6ba499469e15094"],["/gallery/index.html","8cdaed3c609a85b6200613eaacb8fe6b"],["/image/Dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/image/background.jpg","7690c13196e365259e8f8dcd00b45063"],["/image/car.gif","96d8c992ffb5c53f362fbe6f755999b3"],["/image/first.jpg","91811b412d80117b423807c82e9a965b"],["/image/funny.gif","3e53ae588ec2b3770bab717488a519e1"],["/image/lolicon.jpg","3f8af0326fdbc545ac41693e8b24d765"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","82eae3dadaadf5abc6de47a6e2fe9ea9"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","7690c13196e365259e8f8dcd00b45063"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","6369d89cc4135be42f8855a89848b28d"],["/images/favicon-32x32-next.png","a6e67811320dd6a4a4f6c729eb08cf67"],["/images/header.jpg","91811b412d80117b423807c82e9a965b"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","a2e2cfd67ea69206267a023d461ec320"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","20dc6e0b2af9ee197bf49a43401af576"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-ribbon/README.html","c0025f684cb5489bfbaf1a6f7b3e3da4"],["/lib/canvas-ribbon/canvas-nest-nomobile.min.js","698ea0710bd84dc7640093bab947d64f"],["/lib/canvas-ribbon/canvas-nest.min.js","95e027408a9183dfe8c9878492ec2c38"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","7c36d540924fd38774a46dc1c80b8ae2"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d55721ff5e4023d3570eea6469137f97"],["/live2d-widget/demo/demo1.html","f3a5c8536c8e915bb3e8180b4fbde425"],["/live2d-widget/demo/demo2.html","e1f2247124a3b0fc343ef3ef3bed8ad3"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","450a889136df8a90f0d94cc8d8ace1a8"],["/live2d-widget/waifu.css","8c5d3363aca0e43de45ed1a8e51b688f"],["/page/2/index.html","4099959fc4dbe093d0aa312ae26daabc"],["/page/3/index.html","be2eea19917935f4a630d2106e679f9a"],["/page/4/index.html","2a8aaf7504a026b2a9cdfbf9853d488a"],["/page/5/index.html","20da2094092a89969f47d662a69671cb"],["/page/6/index.html","4ec8a606669c25064a56d96ae357f348"],["/sw-register.js","550ada3faf7cc3f13a14d8d385354b65"],["/tags/Prim/index.html","28207772fa7f6f5e394b68fe9f103b27"],["/tags/STL/index.html","55be5eb956c8981d0f304883bdb64042"],["/tags/bellman/index.html","e0a911b4d4b174933629fb9ff0b11645"],["/tags/dijstra/index.html","37739effd05626d16e5dae05100cf518"],["/tags/dijstra/page/2/index.html","2998dfc31610934c13dfc00c699b260b"],["/tags/floyd/index.html","2c64ab92579fa98d18f7521e90fd808b"],["/tags/hdu/index.html","63648004484bd626cf84b68025093966"],["/tags/index.html","91cdd10f4c50210f3a78994a3f3158e7"],["/tags/kuangbin/index.html","98b4d6948e271fc575c2ac923939ac27"],["/tags/kuangbin/page/2/index.html","db48f1bf5cb127320b026d5fdf75a7dd"],["/tags/lightoj/index.html","61906b7c5b9a23f566d6e98e771f7dd4"],["/tags/poj/index.html","a3955fdac04a29aa69e5eb35151acd8a"],["/tags/poj/page/2/index.html","0dcc4bf351b98d07275782ff6909f10f"],["/tags/somethings/index.html","fbf35d9c7e2dcd77943da9ebe637d0af"],["/tags/spfa/index.html","a218520b5f799d3889e127b95ffe4322"],["/tags/test/index.html","50604e4327d5da511825037e20c47463"],["/tags/topsort/index.html","a5092d98a5cd1195b7d59d46b2a22523"],["/tags/并查集/index.html","bacf94fc3e499e8263e3f67400e99ad4"],["/tags/洛谷/index.html","420c8c861044851f029b47410ce4f51f"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","3b2737a1f2f84e86fdefecd86573b7b9"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
