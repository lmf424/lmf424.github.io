/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/22/my-first.html","b4142ccea320ae433093b571b3b75c74"],["/2019/07/22/my-first/first.jpg","91811b412d80117b423807c82e9a965b"],["/2019/07/23/dijstra.html","eb052c7617bbb39c52f6ecd681ef1827"],["/2019/07/23/dijstra/1563862729194.png","c351da19bddd597ef308b7008b7a89d7"],["/2019/07/23/dijstra/1563862773804.png","d2ef8e5214e4cb08a7ebb2b4abff5cd9"],["/2019/07/23/dijstra/1563863527940.png","d7c25b68d6da4748cf51f124d007502f"],["/2019/07/23/dijstra/1563863664903.png","916f0eb2824884b2ff9d8caf0d51b221"],["/2019/07/23/dijstra/1563863742582.png","53f773c112fdf466d7d4cc1631647de5"],["/2019/07/23/dijstra/1563863819140.png","6157732cc76cf43428774f04885321e0"],["/2019/07/23/dijstra/1563863951516.png","331845801b6e652ad0e55083ebb51bb8"],["/2019/07/23/dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/2019/07/23/dijstra/lalala.gif","7f1a7b175d3bc6f0677878dce5dfb494"],["/2019/07/24/poj1797.html","1a04a0dbc23d2deddf04150e9c4a0e2e"],["/2019/07/24/poj2253.html","4c482bc27bc773fd6e9bbd5c254472d3"],["/2019/07/24/poj2253/2253.png","4bdc4a5f70e03a8dc36f6a6f26916a0b"],["/2019/07/24/poj2387.html","614a3973d4178fef3f82c2a2bb8a8d05"],["/2019/07/25/floyd.html","8c185cb1acd3b7aeaaf2d75e59e1a829"],["/2019/07/25/floyd/1564051171338.png","949302f6746383db0dc8014e72a9019c"],["/2019/07/25/floyd/1564051237886.png","c9cbaafa349fb7612b220ff21b3f2452"],["/2019/07/25/floyd/1564052208614.png","55c4add1388037dded482bbd26bfc20f"],["/2019/07/25/floyd/1564052291135.png","d1670d7be56d8b7accdbf52ab27388ff"],["/2019/07/25/floyd/1564052336765.png","e383255981a29476458550b5e2661cb1"],["/2019/07/25/floyd/1564052379218.png","94424d00cb50187880100216cadbef9f"],["/2019/07/25/poj3268.html","bc9c526a83247f9ef9071b3b6ee2ce71"],["/2019/07/26/bellman.html","3ec1457776d0940f31c57704db5bf984"],["/2019/07/26/bellman/1564125629485.png","f443984402b0d4d92ed6be05efc198c1"],["/2019/07/26/bellman/1564125848909.png","f0eedabc94d6be668886906b615e3adc"],["/2019/07/26/bellman/1564126314876.png","f79ceb47caec9fe7254b43a41e70da5f"],["/2019/07/26/bellman/1564126386305.png","782a01565bc272e5c1baefd1594cb038"],["/2019/07/26/bellman/1564127047514.png","bcbe76a8077444a17546517a3a9cff69"],["/2019/07/26/poj1860.html","1da3c88135b5e580a98eb9f689bb27cb"],["/2019/07/28/poj1502.html","056ad10a3ccd6b2d4e4c53d36d0fabd0"],["/2019/07/28/poj3259.html","5688ac6197009ec5e50acf23566c4057"],["/2019/07/28/poj3660.html","e21619385f725b548179d96319100179"],["/2019/07/29/poj2240.html","167bb6ab7c2d3f149b481266c4c4a426"],["/2019/07/30/Topological-sort.html","0b2531fd81e1ce185aeb59b5c758a889"],["/2019/07/30/spfa.html","7fe24476cde6b62c1a4a0bfd71dd6569"],["/2019/07/30/spfa/1.jpg","f66ede4b7980b55c3898850ca38b5658"],["/2019/07/30/spfa/1_1.png","d003c9a18904d8b89d5097e6f4f36f2a"],["/2019/07/30/spfa/2.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/3.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/4.jpg","34c831a37ed4b9d415f9e6ab66e8e034"],["/2019/07/30/spfa/5.jpg","7b521f213e987d149defbaa840708d8f"],["/2019/07/30/spfa/6.jpg","095973f611b03cef9e04d508694ac993"],["/2019/07/30/spfa/7.jpg","c2327afc6a604a1b01b145a637e7fb51"],["/2019/07/30/spfa/8.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/30/spfa/9.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/31/poj1511.html","2bd6282f60435bb7cea6c0fa9195ffea"],["/2019/08/01/priority-queue.html","b803e76674f0fccea9adbcbe09ef9e7a"],["/2019/08/02/P4779.html","103f58bea3c7bb0ed30ff46228ae7297"],["/2019/08/02/poj2502.html","fb3ed5534829ab9fc45c37887eca7e69"],["/2019/08/02/poj3159.html","40f9523f8a6521a8e3b48abd5b4537e0"],["/2019/08/03/hdu4370.html","7faa412c9f70323ed314348615cc1904"],["/2019/08/03/hdu4370/1564895169459.png","c9d9dd1007807ef29a97f9b57b210b3c"],["/2019/08/03/poj1847.html","9da90437d277bc642e34ef0b64874f45"],["/2019/08/03/poj1847/8.3.1.png","3961f834d9f63a9e28cc120819017b40"],["/2019/08/03/poj3169.html","b561f7bb16a97fc265efbc2fbd80f2be"],["/2019/08/04/Prim.html","d320cfce9d25d1f5cdee2a90a0cdcbd5"],["/2019/08/04/hdu1232.html","31472cd373d801811bae66197b1293bc"],["/2019/08/04/lightoj1074.html","9a79b83a36521d5c7143a19b49e2f79d"],["/2019/08/04/poj2236.html","0e54bc623d17e51f7305f31caa263b6f"],["/2019/08/04/poj2236/1564991288139.png","dc70efba4f25563cf53b1142c82fb57e"],["/2019/08/04/poj2236/1565003068075.png","cdab9be76174fa45908f5f928e45fb9d"],["/2019/08/04/poj2236/1565003423379.png","31bd5dfffb61185f597ca2e191a97365"],["/2019/08/04/poj2236/TIM图片20190805190547-1565004175371.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805190547.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805191700.gif","1c35756af776c1667b9f2602ac44d685"],["/2019/08/04/并查集.html","7871ca0567de7f76bf43993db5f471a2"],["/2019/08/07/poj1611.html","d23d49a58e16eb8825ede390063d9084"],["/2019/08/07/七夕.html","8e666c24615ec6ed8bd669e38b60a518"],["/2019/08/09/hdu1213.html","33c616d9a4cf131eb16eff04e19f69ef"],["/2019/08/10/hdu3038.html","2261bd4d8f28a844c7f084d86ff8376a"],["/2019/08/10/poj1135.html","f404e8739d7f92b20ab55d0a677b49de"],["/2019/08/11/poj1251.html","4158a6dd18fa461862453d9385c0b16b"],["/2019/08/12/poj1287.html","d4231bc7b1ef8ebcd7575e9300002c51"],["/2019/08/12/poj2031.html","bd54e24e8f0e9ef85cd12cc82454e9ef"],["/2019/08/12/poj2421.html","e5111eb103c6f7a2cfc0b0ab95b535bf"],["/2019/08/12/zoj1586.html","ed2d2c05de4fa1545b1377518ccaf2f5"],["/2019/08/12/快速输入.html","0e8ab4ead5c94eefdd1bf5115393a8e7"],["/2019/08/13/kruskal.html","0000840c9c632e65c0d7aacca6297c9c"],["/2019/08/13/poj1258.html","3bb7aaa492652c2484bc51f31280e69b"],["/2019/08/13/poj1751.html","8ddf91880c91c4a3b4cede113425691a"],["/2019/08/13/poj1789.html","203ac6997b625eaa5c0d7ffc4e11e61e"],["/2019/08/13/poj2349.html","084e6b4a639286769425164013852db1"],["/2019/08/15/poj1321.html","e0bfbb1ed6545f97c5baf4ba9e6d986f"],["/2019/08/16/Miller-Rabin.html","b229b251bc7410d1eda22bb1f9e1c197"],["/2019/08/16/Miller-Rabin/1565940377100.png","2fd224d239512ab17624872566ff3f6b"],["/2019/08/16/Miller-Rabin/1565940708448.png","45595b686eb7caaa173a57a4f087706b"],["/2019/08/16/Miller-Rabin/1565941020088.png","24bca44110574da91eb510bb1d4e9a0c"],["/2019/08/16/Miller-Rabin/1565941050512.png","b2fa442d96edeac214dd4e0e8d238b48"],["/2019/08/16/poj1426.html","7d5943561e0c52c89393e931c1d56ac1"],["/2019/08/16/poj2251.html","305fbe4fa2514af901fedccd603e15fc"],["/2019/08/16/poj3087.html","fda387216438bc72debc3c52b81a227b"],["/2019/08/16/poj3126.html","2f1f8432cc5ad1e64d63776aa740487c"],["/2019/08/16/poj3278.html","8b65356a5b93f677276c6ca3e2d48723"],["/2019/08/16/poj3279.html","3d623a005909df77f940fb773813dc98"],["/2019/08/16/朴素的素数判断.html","62cbacc9f2c22cafef82c594196bb283"],["/2019/08/22/hdu1233.html","639f06980a2c6b971ad9e3b86ce5e3f1"],["/2019/08/22/hdu1301.html","cf108862d36a69f989282c6c9d782ad3"],["/2019/08/22/hdu1875.html","629073ba768a928107c4e2676b93b195"],["/2019/08/22/poj1679.html","c4a2fd2068e3569f33b9505d5849d18e"],["/2019/08/31/2018ningchuanCCPC网络赛.html","f5c6c9b62c6f20cab1e19d3f7cc10f43"],["/2019/09/11/hdu2121.html","82c4fa4ef526698b071bd28abb5491c6"],["/2019/09/11/uva10462.html","fc2a97c8cc75f4195ae1a7336822ca09"],["/2019/09/11/uva10600.html","49debfd7b1542c8174fc0e84cf59295b"],["/2019/09/11/uva11183.html","d85bd02802f7e528bda063ce313a37b7"],["/2019/09/11/朱刘算法.html","6790764acd596bbf85eed0d212b12bc5"],["/2019/09/20/RMQ.html","aecffd2d78fa20df00c48ffc8ce2853b"],["/2019/09/20/born-kerbosch.html","689147b202e958364969476170602a8d"],["/2019/09/20/tarjan.html","6ac7d18229b5293a79447e54d626d234"],["/about/index.html","0c858fda6b1703b40fb108efe9c3d660"],["/archives/2019/07/index.html","88b0b803278de3064a47f5a1dc499b6f"],["/archives/2019/07/page/2/index.html","4580ae034c74d71a55bc06179f5b8e82"],["/archives/2019/08/index.html","3f01823b4079070b8bf0b9da9a669aac"],["/archives/2019/08/page/2/index.html","4af559c3baba81799b7873ca6565a2e2"],["/archives/2019/08/page/3/index.html","4739a2f4ddaf7373c65d649037d980af"],["/archives/2019/08/page/4/index.html","98095c99cc18c62a38e02a349756f066"],["/archives/2019/08/page/5/index.html","d36423d534a8f65f76186b35be3702c8"],["/archives/2019/09/index.html","251b31af159cc9dc364b2fcc710f006d"],["/archives/2019/index.html","a7bd575662b5e2da62bbc27f757ff593"],["/archives/2019/page/2/index.html","0fa8fbe12e4f0ce5cb739c1da5288c3d"],["/archives/2019/page/3/index.html","1caa78e7d71f737fa1bf088f260a29e6"],["/archives/2019/page/4/index.html","c4cbef9de71f14932534006faa6e41d9"],["/archives/2019/page/5/index.html","648834f2ca50fe6a1bb5e72d56402e7f"],["/archives/2019/page/6/index.html","0e76d416c0d47ca1d5ca9f68dec7eb18"],["/archives/2019/page/7/index.html","606f0d889bf7ab91da5768326920e129"],["/archives/index.html","a9654ee886522ec699564b5e49a4ece4"],["/archives/page/2/index.html","448ff774486eff6827fc8c8a1223cad3"],["/archives/page/3/index.html","f26717d235e09cfaa6d02e704890458a"],["/archives/page/4/index.html","bbc61607f628df216fa2fcebab61b5d2"],["/archives/page/5/index.html","6befac2b3ae86da33c342b6d87ed0019"],["/archives/page/6/index.html","ad2b2fee4960ab0db17cc7dab31dcb6a"],["/archives/page/7/index.html","0892db74b4508f783d24f695a20b9fd8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/STL/index.html","99aaf7a9316473f75fd4fc1cf29428c3"],["/categories/algorithm/index.html","25da637149f9d54920808dcfe4cddc0d"],["/categories/algorithm/page/2/index.html","28d291edb432ed3671235321291f1c33"],["/categories/algoritm/index.html","f77b4632845a008500aca13a612e60e3"],["/categories/hdu/index.html","b897bd0692b788ad87589113ed49734d"],["/categories/index.html","8b611067392199aa173a6bf5f6ff1624"],["/categories/lightoj/index.html","59e2489646d76e564e0770c0dcd4fb11"],["/categories/poj/index.html","133dd26b8a4b6e75e5a6b60ee3cd6c2d"],["/categories/poj/page/2/index.html","3fd559f65451fdef7cd6fc21d39453a9"],["/categories/poj/page/3/index.html","3d0f984def8da8a48838daa7f8221d6e"],["/categories/poj/page/4/index.html","89a5374e421d2039ec656ff8a80a5065"],["/categories/somethings/index.html","647e44156d79d0ba8ec87e6eedba97db"],["/categories/uva/index.html","adb72c797439ffbcd65d40744281068d"],["/categories/xiu/index.html","679bef55585be6c3fbe62fb8926063ca"],["/categories/zoj/index.html","1b020668d7eee6b87cfa73837aa101ad"],["/categories/洛谷/index.html","81d2f24ca31df1595089a084ff4fa15a"],["/css/main.css","a3d0791d496c538c5e41ac116f1bc36b"],["/gallery/index.html","972e7f9c1247210ca343286ac8395b92"],["/image/Dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/image/background.jpg","7690c13196e365259e8f8dcd00b45063"],["/image/car.gif","96d8c992ffb5c53f362fbe6f755999b3"],["/image/first.jpg","91811b412d80117b423807c82e9a965b"],["/image/funny.gif","3e53ae588ec2b3770bab717488a519e1"],["/image/lolicon.jpg","3f8af0326fdbc545ac41693e8b24d765"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","82eae3dadaadf5abc6de47a6e2fe9ea9"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","7690c13196e365259e8f8dcd00b45063"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","6369d89cc4135be42f8855a89848b28d"],["/images/favicon-32x32-next.png","a6e67811320dd6a4a4f6c729eb08cf67"],["/images/header.jpg","91811b412d80117b423807c82e9a965b"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","cae2f9155897b499ea93ced439aaaa75"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","20dc6e0b2af9ee197bf49a43401af576"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-ribbon/README.html","dd7ebef2c33dcc14d47081bee826fdcd"],["/lib/canvas-ribbon/canvas-nest-nomobile.min.js","698ea0710bd84dc7640093bab947d64f"],["/lib/canvas-ribbon/canvas-nest.min.js","95e027408a9183dfe8c9878492ec2c38"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","7c36d540924fd38774a46dc1c80b8ae2"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d55721ff5e4023d3570eea6469137f97"],["/live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["/live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","450a889136df8a90f0d94cc8d8ace1a8"],["/live2d-widget/waifu.css","8c5d3363aca0e43de45ed1a8e51b688f"],["/page/10/index.html","20e2c4e2f3a0d6eaeab89ff335876436"],["/page/11/index.html","89a5745a765fa8f4a71feb5914741f36"],["/page/12/index.html","e3e61ad4ab4671423fcae12ebb93a80b"],["/page/13/index.html","a52da4140802b1e28b38ed63457b1320"],["/page/14/index.html","a5e649e02d71cea25c1d42948b4288a9"],["/page/2/index.html","2d811f0275008ffc6781ac530b52bbdd"],["/page/3/index.html","560bc42543e149f34d3222dfbf5ad105"],["/page/4/index.html","2fce169cd04d5fff28006f24f7e84a73"],["/page/5/index.html","81bce109dc04c5ad419426ac9b1a6afe"],["/page/6/index.html","78fcf3475c056104ba46fe04f6b3261e"],["/page/7/index.html","94e2262390e6673b9d10825668cfd95e"],["/page/8/index.html","033f8e9116405f92be1e3076e144cce0"],["/page/9/index.html","df540b9e634c59bec096068033a364e7"],["/sw-register.js","3249934c8533e35a2ddcc60f9f8cd351"],["/tags/Miller-Rabin/index.html","7f6ef400d04b10589e07595f9f81c869"],["/tags/Prim/index.html","cb3ddb220580b77c6f1f36cd6ae53f62"],["/tags/RMQ/index.html","53c1bdf9b90ed461b29b09ad0335f171"],["/tags/STL/index.html","635cbfd89d5263b1609c74bef5d28e57"],["/tags/bellman/index.html","e16d10d67c9d574654104a4db1cdf0cb"],["/tags/bfs/index.html","6f1d539900d1abe36f9950ae63dd2871"],["/tags/born-kerbosch/index.html","77476566f1ddca5169b72895e63dacb2"],["/tags/dfs/index.html","ab7e265b8680b42408e34d31de532454"],["/tags/dijstra/index.html","fde44f8edaea07979c308e0aac84a004"],["/tags/dijstra/page/2/index.html","c7e8e94d2f367421da364dbc7f2a8238"],["/tags/floyd/index.html","d68ebe326387564cc1a029b56601f9ae"],["/tags/hdu/index.html","931a5dbd34708694b24d4fedfaf41626"],["/tags/index.html","14f2a51469789e78c956e9a72eaac898"],["/tags/kruskal/index.html","f1a2c15154f750f71831343a0a8006c1"],["/tags/kuangbin/index.html","6f91960be307b68f243c4d9736748dab"],["/tags/kuangbin/page/2/index.html","113b8019aa85bdaf502a1a3411589dbd"],["/tags/kuangbin/page/3/index.html","130a24cfbb9e65b493dc7fdeb1a2f618"],["/tags/kuangbin/page/4/index.html","b54f65d714f191c96c17746c763b3574"],["/tags/kuangbin/page/5/index.html","3940551424a1d5eac6b2dfa796717364"],["/tags/lightoj/index.html","f0d7a2bee55294dc709c8f1f11df6a2d"],["/tags/poj/index.html","e0147da4e3f65ad1a8c0cb44582f5cb0"],["/tags/poj/page/2/index.html","03877125b4588aedac7e4ca9008b836e"],["/tags/poj/page/3/index.html","e8d86c6b9b37c99ec0a72e7eb0538afb"],["/tags/poj/page/4/index.html","8397d7994254340ae26d372c44b0ffd6"],["/tags/prime/index.html","dae1b0d82b22cfb775af922f23c87f84"],["/tags/spfa/index.html","f9d995640041bde884bd56905074c6fb"],["/tags/tarjan/index.html","5d665bd293b9488916a2bda170adbb03"],["/tags/test/index.html","0b02fa04149ace6bc10d91a19d6447bb"],["/tags/topsort/index.html","84e3aeca73261934bcf4d56f2e4a4f5f"],["/tags/uva/index.html","7e5c846a05aed0aa842c996fa237679c"],["/tags/xiu/index.html","4d92562f3495c78e1f47c75878fe39ae"],["/tags/zoj/index.html","ac3bbfc50d69d1a5a8c71dc5b4fe7c65"],["/tags/并查集/index.html","1433fd2432cc8bf0e4d35a2eac169284"],["/tags/最小树形图/index.html","f1282811853856650701dbf6029b0fd6"],["/tags/朱刘算法/index.html","ff7da500c5842580d65ee49270f2f864"],["/tags/模拟/index.html","a1892249e8ead1f6f215ff873fb5f211"],["/tags/次小生成树/index.html","c05e109590612f786b25a804dae093af"],["/tags/洛谷/index.html","0ae3d519d3285d4bc4c4ddc3743d3b4b"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","3b2737a1f2f84e86fdefecd86573b7b9"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
