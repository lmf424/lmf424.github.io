/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/22/my-first.html","ca2bf194ad2218a700b350de2f0d56a0"],["/2019/07/22/my-first/first.jpg","91811b412d80117b423807c82e9a965b"],["/2019/07/23/dijstra.html","c92aad0907f3fa5d7c6ce986692e786e"],["/2019/07/23/dijstra/1563862729194.png","c351da19bddd597ef308b7008b7a89d7"],["/2019/07/23/dijstra/1563862773804.png","d2ef8e5214e4cb08a7ebb2b4abff5cd9"],["/2019/07/23/dijstra/1563863527940.png","d7c25b68d6da4748cf51f124d007502f"],["/2019/07/23/dijstra/1563863664903.png","916f0eb2824884b2ff9d8caf0d51b221"],["/2019/07/23/dijstra/1563863742582.png","53f773c112fdf466d7d4cc1631647de5"],["/2019/07/23/dijstra/1563863819140.png","6157732cc76cf43428774f04885321e0"],["/2019/07/23/dijstra/1563863951516.png","331845801b6e652ad0e55083ebb51bb8"],["/2019/07/23/dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/2019/07/23/dijstra/lalala.gif","7f1a7b175d3bc6f0677878dce5dfb494"],["/2019/07/24/poj1797.html","cf41de975d5faee758e3311d67ff54a8"],["/2019/07/24/poj2253.html","155dc4457058a52eaa25bc1a25c1173f"],["/2019/07/24/poj2253/2253.png","4bdc4a5f70e03a8dc36f6a6f26916a0b"],["/2019/07/24/poj2387.html","1451ae1e0fa091f8ea729b31d633f7d6"],["/2019/07/25/floyd.html","d00bac1d113d77a2c3c43474d068a39b"],["/2019/07/25/floyd/1564051171338.png","949302f6746383db0dc8014e72a9019c"],["/2019/07/25/floyd/1564051237886.png","c9cbaafa349fb7612b220ff21b3f2452"],["/2019/07/25/floyd/1564052208614.png","55c4add1388037dded482bbd26bfc20f"],["/2019/07/25/floyd/1564052291135.png","d1670d7be56d8b7accdbf52ab27388ff"],["/2019/07/25/floyd/1564052336765.png","e383255981a29476458550b5e2661cb1"],["/2019/07/25/floyd/1564052379218.png","94424d00cb50187880100216cadbef9f"],["/2019/07/25/poj3268.html","9c3602417eaba6f4265c643b5fa61111"],["/2019/07/26/bellman.html","4ff1aba43f3a9baf61a90dc41350e1ea"],["/2019/07/26/bellman/1564125629485.png","f443984402b0d4d92ed6be05efc198c1"],["/2019/07/26/bellman/1564125848909.png","f0eedabc94d6be668886906b615e3adc"],["/2019/07/26/bellman/1564126314876.png","f79ceb47caec9fe7254b43a41e70da5f"],["/2019/07/26/bellman/1564126386305.png","782a01565bc272e5c1baefd1594cb038"],["/2019/07/26/bellman/1564127047514.png","bcbe76a8077444a17546517a3a9cff69"],["/2019/07/26/poj1860.html","904d2470361cfb91a1dfebe1ff952afd"],["/2019/07/28/poj1502.html","3f9a045700757b369382faa4a0afa2e7"],["/2019/07/28/poj3259.html","789b391b278f8d96b00fa06cf6b45f1a"],["/2019/07/28/poj3660.html","848f0f1e0f74e33074b088dd03a0faa2"],["/2019/07/29/poj2240.html","16494f8db26a8305022f8f45db6fb5a2"],["/2019/07/30/Topological-sort.html","49f2abf0f8426017508c1561aef124bb"],["/2019/07/30/spfa.html","eef1a7edd206b51d9225973873a6266a"],["/2019/07/30/spfa/1.jpg","f66ede4b7980b55c3898850ca38b5658"],["/2019/07/30/spfa/1_1.png","d003c9a18904d8b89d5097e6f4f36f2a"],["/2019/07/30/spfa/2.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/3.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/4.jpg","34c831a37ed4b9d415f9e6ab66e8e034"],["/2019/07/30/spfa/5.jpg","7b521f213e987d149defbaa840708d8f"],["/2019/07/30/spfa/6.jpg","095973f611b03cef9e04d508694ac993"],["/2019/07/30/spfa/7.jpg","c2327afc6a604a1b01b145a637e7fb51"],["/2019/07/30/spfa/8.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/30/spfa/9.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/31/poj1511.html","323780a1441eb46a19f2864859973a18"],["/2019/08/01/priority-queue.html","e68c0b5f7a597d2cd46fa6ad21941093"],["/2019/08/02/P4779.html","c2ad434a74dc1052a87bc54d00f1fb33"],["/2019/08/02/poj2502.html","5c0198d4025b66dcc99638f85b48741c"],["/2019/08/02/poj3159.html","37307506605476fbb89f6a317bd2ed3f"],["/2019/08/03/hdu4370.html","98cabf7dc4b983e9598a8080a8c7ae2b"],["/2019/08/03/hdu4370/1564895169459.png","c9d9dd1007807ef29a97f9b57b210b3c"],["/2019/08/03/poj1847.html","2560bfaa785f58e3b81f1af500dfa9f4"],["/2019/08/03/poj1847/8.3.1.png","3961f834d9f63a9e28cc120819017b40"],["/2019/08/03/poj3169.html","6b99521ba73df0fcaa37565dc3645320"],["/2019/08/04/Prim.html","45ef94b8e528e51da03b67113cc8df0b"],["/2019/08/04/hdu1232.html","c3ba25e4b5a579bb7fd620ec0f61b758"],["/2019/08/04/lightoj1074.html","692062e3e956154ccf6e5b39f50cd168"],["/2019/08/04/poj2236.html","0cba5d416f548ce2a665343b4973fc4d"],["/2019/08/04/poj2236/1564991288139.png","dc70efba4f25563cf53b1142c82fb57e"],["/2019/08/04/poj2236/1565003068075.png","cdab9be76174fa45908f5f928e45fb9d"],["/2019/08/04/poj2236/1565003423379.png","31bd5dfffb61185f597ca2e191a97365"],["/2019/08/04/poj2236/TIM图片20190805190547-1565004175371.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805190547.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805191700.gif","1c35756af776c1667b9f2602ac44d685"],["/2019/08/04/并查集.html","fe4dd4bccb5632b58977f0f6a0dff798"],["/2019/08/07/poj1611.html","0fec90ebd79d6619ecf01e97d1f9ba8d"],["/2019/08/07/七夕.html","2f1fbe684f622e8e6a7592e3b2ff213a"],["/2019/08/09/hdu1213.html","693cf7bc9e612887e4af4d9fc2a9bee4"],["/2019/08/10/hdu3038.html","6e01e63e37d330020d548551d0c1f881"],["/2019/08/10/poj1135.html","d651a0a482dc1182827a9b10ece905e2"],["/2019/08/11/poj1251.html","990cc39b8509ce0ce4e03d615f4bcd8b"],["/2019/08/12/poj1287.html","c70d9c35ec9b36fb76e348b36af8ccf9"],["/2019/08/12/poj2031.html","c69d4e7516c0668ba3490eebfabc2e36"],["/2019/08/12/poj2421.html","fbcfaaa58cf47f532989a323d759267e"],["/2019/08/12/zoj1586.html","95451fa8f32102eaed5e819c3fe585ae"],["/2019/08/12/快速输入.html","fe4b24af00a6e7ff388728e1b26edca7"],["/2019/08/13/kruskal.html","85d8ce3a54f45046f7075274b5da7ac7"],["/2019/08/13/poj1258.html","0e2ca587c4d5bf380d0a26508969ae36"],["/2019/08/13/poj1751.html","4862586bbacf84263951d6e40e43760e"],["/2019/08/13/poj1789.html","09857d391be7f3bd8cb9a41388f0fc70"],["/2019/08/13/poj2349.html","0df103ef7a59684732358d2302df442b"],["/2019/08/15/poj1321.html","48b6ed5d5f1e9daa2b1aad6ec0fbeee9"],["/2019/08/16/Miller-Rabin.html","5f26c6695d3ffe7353c4a8acc4d77854"],["/2019/08/16/Miller-Rabin/1565940377100.png","2fd224d239512ab17624872566ff3f6b"],["/2019/08/16/Miller-Rabin/1565940708448.png","45595b686eb7caaa173a57a4f087706b"],["/2019/08/16/Miller-Rabin/1565941020088.png","24bca44110574da91eb510bb1d4e9a0c"],["/2019/08/16/Miller-Rabin/1565941050512.png","b2fa442d96edeac214dd4e0e8d238b48"],["/2019/08/16/poj1426.html","63d00974dba4e572fb7a4ea9b6f38622"],["/2019/08/16/poj2251.html","870429740379d746570961df05c800f6"],["/2019/08/16/poj3087.html","5229c69c9cde6fe8828c5c658893c677"],["/2019/08/16/poj3126.html","8f1e706d7c7b80a0dbac7417680df3a6"],["/2019/08/16/poj3278.html","e674662de5ce032fab14fd362670d469"],["/2019/08/16/poj3279.html","6ab7b0f87063be6fb65744c6fc0d06aa"],["/2019/08/16/朴素的素数判断.html","89a490c883ed1ab0da996e213602fcaf"],["/2019/08/22/hdu1233.html","ea3dd07b0e63c8a00cac0333c9f7e832"],["/2019/08/22/hdu1301.html","eeee69bee1977107ada168b2ebbc7b81"],["/2019/08/22/hdu1875.html","5bb6551fa56ba7b1ab4ce065289b5bbd"],["/2019/08/22/poj1679.html","43801c6bc31bcbada2c4b5ea71585d81"],["/2019/08/31/2018ningchuanCCPC网络赛.html","763b8000b6bf6298716f5c5107111fd6"],["/about/index.html","e0ce43cf61673e5149e6aa997f1b91e3"],["/archives/2019/07/index.html","c4ae59592bccc478231b33ca2e047f56"],["/archives/2019/07/page/2/index.html","b06eaad79243b4655f1ac30967206615"],["/archives/2019/08/index.html","402f046b411d2be5c3509422ce357749"],["/archives/2019/08/page/2/index.html","936344d543bb7a26b6053b83885400a1"],["/archives/2019/08/page/3/index.html","bafb64855037828d4ffd7ac3189db967"],["/archives/2019/08/page/4/index.html","f8a8003bd0946e2a39c649dd5330d3fa"],["/archives/2019/08/page/5/index.html","8126c3e6442dd2075fcc572526172832"],["/archives/2019/index.html","475b817ae76a19ee70fd77e62dd422f2"],["/archives/2019/page/2/index.html","202ba292d6fbdcf57fcd6914b8ed51ab"],["/archives/2019/page/3/index.html","7e1f4aa9c6af17eea9f415cefcc46d6e"],["/archives/2019/page/4/index.html","57c1f99c1e5353a672df307abbf66395"],["/archives/2019/page/5/index.html","9905d5cce5f486f46bd4c243bb077f96"],["/archives/2019/page/6/index.html","b34026a4fd4452a6c756d664a130d5cc"],["/archives/index.html","2e2028c85b51782331c2caf56e280e4f"],["/archives/page/2/index.html","1ada9fcd39e5822d59285440ab7c0e86"],["/archives/page/3/index.html","8f24c00c9270aff719c3f8a627c6bfec"],["/archives/page/4/index.html","d96a8af1234c06e1766198c1611f9496"],["/archives/page/5/index.html","710c09c1624610e8d7aa450f50661d04"],["/archives/page/6/index.html","656d8c5a96e7ab2ff215cd51eb8cbe20"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/STL/index.html","1dff2458cb5ed733eb7908348439e2a2"],["/categories/algorithm/index.html","ae61d5a15add4d8f624450ba643a141f"],["/categories/hdu/index.html","b56fb99b08d6e5c1938fd0abd114a2a6"],["/categories/index.html","d4f7e0c8b5fb923350b6d9819893ba82"],["/categories/lightoj/index.html","6a2636bc0a5fb5fb60267e69dcca2b56"],["/categories/poj/index.html","8254fe915899a09123d2f22299592632"],["/categories/poj/page/2/index.html","52da12e90de5936747359330f58725f0"],["/categories/poj/page/3/index.html","0e31f7d696a7f34966d1b48aa4aaf1c5"],["/categories/poj/page/4/index.html","5fbd17ddcbf5adcdad0650f05b8e02f7"],["/categories/somethings/index.html","0fca75a8caa4462f592e5ace9454e2ae"],["/categories/xiu/index.html","a24ed77af332eafc8e3411b681d0cd20"],["/categories/zoj/index.html","b51bf130e098aaeaf2a58830dade6ffa"],["/categories/洛谷/index.html","f9de2d1664e01b45c33f3fff9e18f702"],["/css/main.css","88258d5e1f5132334de139f6c8937e48"],["/gallery/index.html","90b9e02ffe2f729fc8d99e19f358dd61"],["/image/Dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/image/background.jpg","7690c13196e365259e8f8dcd00b45063"],["/image/car.gif","96d8c992ffb5c53f362fbe6f755999b3"],["/image/first.jpg","91811b412d80117b423807c82e9a965b"],["/image/funny.gif","3e53ae588ec2b3770bab717488a519e1"],["/image/lolicon.jpg","3f8af0326fdbc545ac41693e8b24d765"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","82eae3dadaadf5abc6de47a6e2fe9ea9"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","7690c13196e365259e8f8dcd00b45063"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","6369d89cc4135be42f8855a89848b28d"],["/images/favicon-32x32-next.png","a6e67811320dd6a4a4f6c729eb08cf67"],["/images/header.jpg","91811b412d80117b423807c82e9a965b"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","691a2be7ce8f6275db59b72c9e9081d2"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","20dc6e0b2af9ee197bf49a43401af576"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-ribbon/README.html","ca4597d455ad5160db99b00f13aa58da"],["/lib/canvas-ribbon/canvas-nest-nomobile.min.js","698ea0710bd84dc7640093bab947d64f"],["/lib/canvas-ribbon/canvas-nest.min.js","95e027408a9183dfe8c9878492ec2c38"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","7c36d540924fd38774a46dc1c80b8ae2"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d55721ff5e4023d3570eea6469137f97"],["/live2d-widget/demo/demo1.html","f3a5c8536c8e915bb3e8180b4fbde425"],["/live2d-widget/demo/demo2.html","e1f2247124a3b0fc343ef3ef3bed8ad3"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","450a889136df8a90f0d94cc8d8ace1a8"],["/live2d-widget/waifu.css","8c5d3363aca0e43de45ed1a8e51b688f"],["/page/10/index.html","d11649e7a41c0a06b7586ab30d5e5a39"],["/page/11/index.html","8c6bc912e3075aa22d90626fd31ab2b1"],["/page/12/index.html","746a6060f3b8b8ed6b7464e640f916a3"],["/page/2/index.html","f8ab7bf7e3a720e2afd173ce7c6803a7"],["/page/3/index.html","b43d854d496ca4952b7652751a9acdd6"],["/page/4/index.html","952b6d43d2c45903bbf959b569d3912f"],["/page/5/index.html","fec1067f610ef19e0e3b47f3564ec1d3"],["/page/6/index.html","738e8ed3b33b20c102c1bd6b959ad4f1"],["/page/7/index.html","caa600632f0b8bef4f575dcf406e1833"],["/page/8/index.html","ee1f141f00f07640cdbc7dfec8f051f5"],["/page/9/index.html","4e6774dec0c27d0eb3a202c0a4efae10"],["/sw-register.js","b9852b8342d09af9d3b7bf3e237787d4"],["/tags/Miller-Rabin/index.html","db912f3370998c513b0ce8a71d87a416"],["/tags/Prim/index.html","69dca007561661efd77278906470e165"],["/tags/STL/index.html","7d437ecb28b49620ee102b4eddcca7f2"],["/tags/bellman/index.html","549df5b308d03930e5a23e94300394bd"],["/tags/bfs/index.html","632a37cff4208ce9713e180e5d001cb3"],["/tags/dfs/index.html","6829c9fe0f3c15effb9c1d5e83638bfc"],["/tags/dijstra/index.html","f2f64c15e9e719584caf2384371469e3"],["/tags/dijstra/page/2/index.html","c5b7366d8485b6f182f2fbdc791f51e1"],["/tags/floyd/index.html","fadddaa1723d15d526216a5e606c226d"],["/tags/hdu/index.html","ba966de4f384bdf45f8982d3fc4bc359"],["/tags/index.html","2f718fb4bab225c2b64f36d2ece9aeaa"],["/tags/kruskal/index.html","d9d40a5d5056de68b6fe17198bf6e34d"],["/tags/kuangbin/index.html","a03b8bc6cbc1b93ecb6d4f937110c498"],["/tags/kuangbin/page/2/index.html","d37906bf989ab51399bf6a85a1c54baf"],["/tags/kuangbin/page/3/index.html","a45124ab0c587b4216b18788d333a203"],["/tags/kuangbin/page/4/index.html","cb6e80e6caaf6a1ec4f0bdecbce87ccc"],["/tags/lightoj/index.html","7911313da47e38b0e7290f9ec1cf59c3"],["/tags/poj/index.html","80d0fbc96445e20838af297585123420"],["/tags/poj/page/2/index.html","0d3d99647b0a326946b29f81e4162cff"],["/tags/poj/page/3/index.html","feb3cfab5c5e251de5865ba5d6d0868e"],["/tags/poj/page/4/index.html","91eb5619300dd168542e2d3ad0a9010f"],["/tags/prime/index.html","622f6594c581087d5631de0d70be68d5"],["/tags/spfa/index.html","5077f18b8a89f8be4ed12c93816b5ed5"],["/tags/test/index.html","bac1ba4d4e269df62163f87923810a86"],["/tags/topsort/index.html","4f4d95d0b8c1da0bb2bc18b7b6bc303e"],["/tags/xiu/index.html","e6f4559c51c84dcfc00437dbfba694ab"],["/tags/zoj/index.html","e9e14182297d93412686d127b58af93a"],["/tags/并查集/index.html","b438a0b4519bbd3a1e2b72d3fd3d1b03"],["/tags/模拟/index.html","1dad1433f763e3bea9bddc662988d9a8"],["/tags/洛谷/index.html","62172d42ba7c9cf1e16f4c2ac8d7c077"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","3b2737a1f2f84e86fdefecd86573b7b9"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
