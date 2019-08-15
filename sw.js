/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/22/my-first.html","fffb8b2e3ac87a64250eb9743f23988f"],["/2019/07/22/my-first/first.jpg","91811b412d80117b423807c82e9a965b"],["/2019/07/23/dijstra.html","96757fb57d22e6f681f6948fba1dadc8"],["/2019/07/23/dijstra/1563862729194.png","c351da19bddd597ef308b7008b7a89d7"],["/2019/07/23/dijstra/1563862773804.png","d2ef8e5214e4cb08a7ebb2b4abff5cd9"],["/2019/07/23/dijstra/1563863527940.png","d7c25b68d6da4748cf51f124d007502f"],["/2019/07/23/dijstra/1563863664903.png","916f0eb2824884b2ff9d8caf0d51b221"],["/2019/07/23/dijstra/1563863742582.png","53f773c112fdf466d7d4cc1631647de5"],["/2019/07/23/dijstra/1563863819140.png","6157732cc76cf43428774f04885321e0"],["/2019/07/23/dijstra/1563863951516.png","331845801b6e652ad0e55083ebb51bb8"],["/2019/07/23/dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/2019/07/23/dijstra/lalala.gif","7f1a7b175d3bc6f0677878dce5dfb494"],["/2019/07/24/poj1797.html","3bcff6c1aa6ea63ce53b9c77452cbe2a"],["/2019/07/24/poj2253.html","07d3e1c5e80fa5fd3652c2e99d3ed010"],["/2019/07/24/poj2253/2253.png","4bdc4a5f70e03a8dc36f6a6f26916a0b"],["/2019/07/24/poj2387.html","09493e805cd7a96a37635c0d79943fbe"],["/2019/07/25/floyd.html","a4f0a8839dac2a1df334e8d6cf67a196"],["/2019/07/25/floyd/1564051171338.png","949302f6746383db0dc8014e72a9019c"],["/2019/07/25/floyd/1564051237886.png","c9cbaafa349fb7612b220ff21b3f2452"],["/2019/07/25/floyd/1564052208614.png","55c4add1388037dded482bbd26bfc20f"],["/2019/07/25/floyd/1564052291135.png","d1670d7be56d8b7accdbf52ab27388ff"],["/2019/07/25/floyd/1564052336765.png","e383255981a29476458550b5e2661cb1"],["/2019/07/25/floyd/1564052379218.png","94424d00cb50187880100216cadbef9f"],["/2019/07/25/poj3268.html","33a215fa90e23438a00891190f507abe"],["/2019/07/26/bellman.html","34a300db7117c5a15cffb27e28037067"],["/2019/07/26/bellman/1564125629485.png","f443984402b0d4d92ed6be05efc198c1"],["/2019/07/26/bellman/1564125848909.png","f0eedabc94d6be668886906b615e3adc"],["/2019/07/26/bellman/1564126314876.png","f79ceb47caec9fe7254b43a41e70da5f"],["/2019/07/26/bellman/1564126386305.png","782a01565bc272e5c1baefd1594cb038"],["/2019/07/26/bellman/1564127047514.png","bcbe76a8077444a17546517a3a9cff69"],["/2019/07/26/poj1860.html","fa3525a6051a7b16175fd6cbd785a50a"],["/2019/07/28/poj1502.html","52dca1911f279932a5086cae6ae109de"],["/2019/07/28/poj3259.html","18501a73a3f50c1968c4884726934752"],["/2019/07/28/poj3660.html","154a5bad1110cb0b888a6b22b651357a"],["/2019/07/29/poj2240.html","341e866dfa05d68e4d90d0094b947266"],["/2019/07/30/Topological-sort.html","d055ae1a03f3c8e07b74912962f95c14"],["/2019/07/30/spfa.html","a55b734838699e3016d43972aca72ef3"],["/2019/07/30/spfa/1.jpg","f66ede4b7980b55c3898850ca38b5658"],["/2019/07/30/spfa/1_1.png","d003c9a18904d8b89d5097e6f4f36f2a"],["/2019/07/30/spfa/2.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/3.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/4.jpg","34c831a37ed4b9d415f9e6ab66e8e034"],["/2019/07/30/spfa/5.jpg","7b521f213e987d149defbaa840708d8f"],["/2019/07/30/spfa/6.jpg","095973f611b03cef9e04d508694ac993"],["/2019/07/30/spfa/7.jpg","c2327afc6a604a1b01b145a637e7fb51"],["/2019/07/30/spfa/8.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/30/spfa/9.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/31/poj1511.html","1b8572cbae81eb00b95891e96c72f4c7"],["/2019/08/01/priority-queue.html","0a09e90f72e7ccd243235a88ad8bb6dc"],["/2019/08/02/P4779.html","7d6c432a90cbbb938658dc41d342915b"],["/2019/08/02/poj2502.html","84208f1fc4ab9d1092a7ef3175c6464e"],["/2019/08/02/poj3159.html","a0de0e4f3173099a4236a1866db87994"],["/2019/08/03/hdu4370.html","45562cc64cc2fb0afd44c4d034715e5a"],["/2019/08/03/hdu4370/1564895169459.png","c9d9dd1007807ef29a97f9b57b210b3c"],["/2019/08/03/poj1847.html","508805def5f02527b7ecfb2c4d80e67e"],["/2019/08/03/poj1847/8.3.1.png","3961f834d9f63a9e28cc120819017b40"],["/2019/08/03/poj3169.html","7cf71922a9309df3f53be9a5c42b5f61"],["/2019/08/04/Prim.html","aca4726f10a2f13f4dc0b9e8371b8770"],["/2019/08/04/hdu1232.html","e2ddb6f59cd5f2b6149ee26efb7967dd"],["/2019/08/04/lightoj1074.html","3c4755d1261f8327b12ba04dbdf60319"],["/2019/08/04/poj2236.html","17e29e0020bddc47a6836e374c734044"],["/2019/08/04/poj2236/1564991288139.png","dc70efba4f25563cf53b1142c82fb57e"],["/2019/08/04/poj2236/1565003068075.png","cdab9be76174fa45908f5f928e45fb9d"],["/2019/08/04/poj2236/1565003423379.png","31bd5dfffb61185f597ca2e191a97365"],["/2019/08/04/poj2236/TIM图片20190805190547-1565004175371.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805190547.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805191700.gif","1c35756af776c1667b9f2602ac44d685"],["/2019/08/04/并查集.html","c21a0e8cb3b5f6aec2ea00c2969276cf"],["/2019/08/07/poj1611.html","c57820e083b9bba8fc614c6f97d9a180"],["/2019/08/07/七夕.html","a80576bb8e0f86d09f8ad88fe2e03661"],["/2019/08/09/hdu1213.html","5c2b7d9f28bf5ad1f9e531bd1033462d"],["/2019/08/10/hdu3038.html","d6c8590d19ee5a32629da7fedbb64850"],["/2019/08/10/poj1135.html","959344f7ab94127500c30707d5893153"],["/2019/08/11/poj1251.html","4bea75c0df4de1ace796d78792752b24"],["/2019/08/12/poj1287.html","9cb8f8f52e4ff2559aa2aa94add915c9"],["/2019/08/12/poj2031.html","ddcede3c1c9c2f817a75d7bf88507442"],["/2019/08/12/poj2421.html","2d88c6a15a2f68cc10ef917cab7ca58e"],["/2019/08/12/zoj1586.html","07b4040344e5b61f7904d92982241892"],["/2019/08/12/快速输入.html","191e252341473883cfdeff0c6b9d7c19"],["/2019/08/13/kruskal.html","f7bcb21394a2adae07f00b7defdbec98"],["/2019/08/13/poj1258.html","a444d32523a3e93707f0f269051a8164"],["/2019/08/13/poj1751.html","edfc0651bf3f10c74f674f26e71eb2fb"],["/2019/08/13/poj1789.html","883c2015e92864314a6adf21eb8a91a6"],["/2019/08/13/poj2349.html","4c4dd8eb05a780504a089bdbe2a3009f"],["/about/index.html","9ab597a86c9a0fa8fab30f2b80a2fbf0"],["/archives/2019/07/index.html","ddcef25303ebae26c37898115deb3f6b"],["/archives/2019/07/page/2/index.html","d29d0bdc8a84bbfa3bc3390d177ece5f"],["/archives/2019/08/index.html","8bf7c4bf3187aa437e0fd84e51a61a62"],["/archives/2019/08/page/2/index.html","df2e41ad602cd47542269910d6df52df"],["/archives/2019/08/page/3/index.html","ac39e7d3ed50ca66429fb368860e0daf"],["/archives/2019/index.html","d0c1e700db1c37f2ac29001ddc4945b6"],["/archives/2019/page/2/index.html","2ba1a29e56f740cbadc6f1c470835482"],["/archives/2019/page/3/index.html","b70391aa98e6a85d57623a18a9412992"],["/archives/2019/page/4/index.html","e1bbf3ec80334fce9615eb902641ac7c"],["/archives/2019/page/5/index.html","d19572f567b17bbad3ddb719612ab58d"],["/archives/index.html","6cf42fb057372a5b27298432c3e713e6"],["/archives/page/2/index.html","5bf137682f9f1d1404322d8f7d75d9bd"],["/archives/page/3/index.html","cde73fd8de8fa1bf6858c2a32a581587"],["/archives/page/4/index.html","73755c7a0e6ae60b92930a34733c5fd7"],["/archives/page/5/index.html","a26476948173a793bfbe588955c618a9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/STL/index.html","6c91cc6142aeb6f676267b4701278828"],["/categories/algorithm/index.html","2d5f0b953927e468fdc3d2612db0629e"],["/categories/hdu/index.html","4fafde9831251970ebfcd60bbde4376f"],["/categories/index.html","449dc9d6ecc64400bddf309ed77a17d9"],["/categories/lightoj/index.html","32917ece6a55255da30a4473e03ddfaa"],["/categories/poj/index.html","5f90307f245c636477dc5cb8f9c74095"],["/categories/poj/page/2/index.html","86cfe67ee45f2c63c7a6007557cccc6f"],["/categories/poj/page/3/index.html","f3e3b170266e6087a0a8e612563fe97f"],["/categories/somethings/index.html","fdff23e52d063a2963bcf760a4bbfe52"],["/categories/xiu/index.html","eee3f5a77f570645faaa8a86dede37af"],["/categories/zoj/index.html","5f961c5f1db390b33f4a6d3e5801df56"],["/categories/洛谷/index.html","d2e7d7978f4747c3448050624822839a"],["/css/main.css","4e6453bad93a432a3029b48bdb12cc8a"],["/gallery/index.html","25e3125b7451a9371bb73f8dc2609523"],["/image/Dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/image/background.jpg","7690c13196e365259e8f8dcd00b45063"],["/image/car.gif","96d8c992ffb5c53f362fbe6f755999b3"],["/image/first.jpg","91811b412d80117b423807c82e9a965b"],["/image/funny.gif","3e53ae588ec2b3770bab717488a519e1"],["/image/lolicon.jpg","3f8af0326fdbc545ac41693e8b24d765"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","82eae3dadaadf5abc6de47a6e2fe9ea9"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","7690c13196e365259e8f8dcd00b45063"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","6369d89cc4135be42f8855a89848b28d"],["/images/favicon-32x32-next.png","a6e67811320dd6a4a4f6c729eb08cf67"],["/images/header.jpg","91811b412d80117b423807c82e9a965b"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","e973ca1486ad03c640844f70d7f61834"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","20dc6e0b2af9ee197bf49a43401af576"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-ribbon/README.html","165c3e3a300c4f06217dad22551ee46c"],["/lib/canvas-ribbon/canvas-nest-nomobile.min.js","698ea0710bd84dc7640093bab947d64f"],["/lib/canvas-ribbon/canvas-nest.min.js","95e027408a9183dfe8c9878492ec2c38"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","7c36d540924fd38774a46dc1c80b8ae2"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d55721ff5e4023d3570eea6469137f97"],["/live2d-widget/demo/demo1.html","f3a5c8536c8e915bb3e8180b4fbde425"],["/live2d-widget/demo/demo2.html","e1f2247124a3b0fc343ef3ef3bed8ad3"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","450a889136df8a90f0d94cc8d8ace1a8"],["/live2d-widget/waifu.css","8c5d3363aca0e43de45ed1a8e51b688f"],["/page/2/index.html","59c55ad11f3c22ec5dbf692316c2dbe5"],["/page/3/index.html","3beeb511551d2b7560fbade9ed2edc4d"],["/page/4/index.html","4c85d7d859f0365aac83c4cec91e6f60"],["/page/5/index.html","8f2def95ace65aa3bea6d5b7fd6a180d"],["/page/6/index.html","c6ed24bea0b4f37ef9ac3281c0df3112"],["/page/7/index.html","4e0cc73123d3cf410c86565c9f0e6dff"],["/page/8/index.html","d3a9ea505571ba5421e95030985e606e"],["/page/9/index.html","6c8f10dc3e1c4ad320aa31f280c82251"],["/sw-register.js","fa202796675dae1154c2f44323f578c4"],["/tags/Prim/index.html","58696c47facb278200062f072fff0317"],["/tags/STL/index.html","32362e81992113e8d983db20ac2e6759"],["/tags/bellman/index.html","ecb266124bd080afaefa6fa745777802"],["/tags/dijstra/index.html","ad3cab1b1f740d8bf721b13929cec178"],["/tags/dijstra/page/2/index.html","df1e29be8d0b7935b8ec7bea9dc46c9c"],["/tags/floyd/index.html","49845325c049668f87d62f3f08c9e0fb"],["/tags/hdu/index.html","8f39ae04971d9325349f61bd210a9e39"],["/tags/index.html","39390345d7bd804cf112e6b8cfd10f34"],["/tags/kruskal/index.html","3309c682e14c1d880d48c633e370548b"],["/tags/kuangbin/index.html","97ebc5d2b243ed486911f362a8fb4ffa"],["/tags/kuangbin/page/2/index.html","324c4b9df7f2c3bc5298a373b0f28216"],["/tags/kuangbin/page/3/index.html","584cafd9e4ce58393620ebf6072fec17"],["/tags/lightoj/index.html","b02714807f54017419e1bccc1b439f33"],["/tags/poj/index.html","0bd727e02a5b58480ef690515f2715c8"],["/tags/poj/page/2/index.html","b9eb55a540047b3a59989386163ebfe6"],["/tags/poj/page/3/index.html","5ce082cc408277814e855bed4ed30d5a"],["/tags/spfa/index.html","654a3b2d94f5ddfb15ffb282d19b7f83"],["/tags/test/index.html","c43a5b9c62639f469e5309a413b74a0a"],["/tags/topsort/index.html","1810d5b4a3f33d1f9a5f12b6d0f2aafa"],["/tags/xiu/index.html","298eec95aa08baccb08e943b076be780"],["/tags/zoj/index.html","ab95feb221a6684a11afb5dafa66aaac"],["/tags/并查集/index.html","04354f41d89c97c2fe0b880d9006bd6b"],["/tags/洛谷/index.html","e5f3bb3622edbfb9cf79643ca9ac7a18"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","3b2737a1f2f84e86fdefecd86573b7b9"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
