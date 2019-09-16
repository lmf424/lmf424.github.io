/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/22/my-first.html","8b10a8e66da5f47ba46e26b1182658c3"],["/2019/07/22/my-first/first.jpg","91811b412d80117b423807c82e9a965b"],["/2019/07/23/dijstra.html","9a523a42998fea6ecc0d356f92b58bd2"],["/2019/07/23/dijstra/1563862729194.png","c351da19bddd597ef308b7008b7a89d7"],["/2019/07/23/dijstra/1563862773804.png","d2ef8e5214e4cb08a7ebb2b4abff5cd9"],["/2019/07/23/dijstra/1563863527940.png","d7c25b68d6da4748cf51f124d007502f"],["/2019/07/23/dijstra/1563863664903.png","916f0eb2824884b2ff9d8caf0d51b221"],["/2019/07/23/dijstra/1563863742582.png","53f773c112fdf466d7d4cc1631647de5"],["/2019/07/23/dijstra/1563863819140.png","6157732cc76cf43428774f04885321e0"],["/2019/07/23/dijstra/1563863951516.png","331845801b6e652ad0e55083ebb51bb8"],["/2019/07/23/dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/2019/07/23/dijstra/lalala.gif","7f1a7b175d3bc6f0677878dce5dfb494"],["/2019/07/24/poj1797.html","17d127866ca76da6e51e7d940a0e5363"],["/2019/07/24/poj2253.html","7e5927f8eae66f0514c325f0d68d6bf3"],["/2019/07/24/poj2253/2253.png","4bdc4a5f70e03a8dc36f6a6f26916a0b"],["/2019/07/24/poj2387.html","a066e0cc5af2294897c838d443c3e85d"],["/2019/07/25/floyd.html","1177a07ebad4d639784d339222182bd2"],["/2019/07/25/floyd/1564051171338.png","949302f6746383db0dc8014e72a9019c"],["/2019/07/25/floyd/1564051237886.png","c9cbaafa349fb7612b220ff21b3f2452"],["/2019/07/25/floyd/1564052208614.png","55c4add1388037dded482bbd26bfc20f"],["/2019/07/25/floyd/1564052291135.png","d1670d7be56d8b7accdbf52ab27388ff"],["/2019/07/25/floyd/1564052336765.png","e383255981a29476458550b5e2661cb1"],["/2019/07/25/floyd/1564052379218.png","94424d00cb50187880100216cadbef9f"],["/2019/07/25/poj3268.html","06e6078e790334263eba04dfb2f761fe"],["/2019/07/26/bellman.html","8cfba6a275b539ecef1ffa0ab10dab55"],["/2019/07/26/bellman/1564125629485.png","f443984402b0d4d92ed6be05efc198c1"],["/2019/07/26/bellman/1564125848909.png","f0eedabc94d6be668886906b615e3adc"],["/2019/07/26/bellman/1564126314876.png","f79ceb47caec9fe7254b43a41e70da5f"],["/2019/07/26/bellman/1564126386305.png","782a01565bc272e5c1baefd1594cb038"],["/2019/07/26/bellman/1564127047514.png","bcbe76a8077444a17546517a3a9cff69"],["/2019/07/26/poj1860.html","f221ab2a7849c5478c993a46a3fa09a3"],["/2019/07/28/poj1502.html","abcd19299929ce3d573219c566f23ae1"],["/2019/07/28/poj3259.html","b2ed7686b38dd0afce1e05b4cc86f5f8"],["/2019/07/28/poj3660.html","4d2150d22f158b4bbb0d43a643dfcce6"],["/2019/07/29/poj2240.html","cba5854441f1146854ca53a944d6407a"],["/2019/07/30/Topological-sort.html","b40c5317e348f4848f53e2ae4f96b3c9"],["/2019/07/30/spfa.html","c6dfd25e837a0f621fb09af2cf0fe99b"],["/2019/07/30/spfa/1.jpg","f66ede4b7980b55c3898850ca38b5658"],["/2019/07/30/spfa/1_1.png","d003c9a18904d8b89d5097e6f4f36f2a"],["/2019/07/30/spfa/2.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/3.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/4.jpg","34c831a37ed4b9d415f9e6ab66e8e034"],["/2019/07/30/spfa/5.jpg","7b521f213e987d149defbaa840708d8f"],["/2019/07/30/spfa/6.jpg","095973f611b03cef9e04d508694ac993"],["/2019/07/30/spfa/7.jpg","c2327afc6a604a1b01b145a637e7fb51"],["/2019/07/30/spfa/8.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/30/spfa/9.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/31/poj1511.html","cc6f662d1dffb245f00cd50e8ead5fd1"],["/2019/08/01/priority-queue.html","d27ebf47bed4b09a3f8c5db6c9b76d9a"],["/2019/08/02/P4779.html","fc56f5e73b3b8168a84dbb82e402c915"],["/2019/08/02/poj2502.html","6d95de7c729d00c49aedf046d789222a"],["/2019/08/02/poj3159.html","7e8adfa9e44d862b33d6866ed0a78a70"],["/2019/08/03/hdu4370.html","210fd62fef1d73a6ccfca51683fde53c"],["/2019/08/03/hdu4370/1564895169459.png","c9d9dd1007807ef29a97f9b57b210b3c"],["/2019/08/03/poj1847.html","475d5067d00e2bb31f8b8667555d82af"],["/2019/08/03/poj1847/8.3.1.png","3961f834d9f63a9e28cc120819017b40"],["/2019/08/03/poj3169.html","e2ce85a0fb6e1bd27e3bcee2efbaa6e9"],["/2019/08/04/Prim.html","a3f30fb0fd2eb11501201c22349f9ca6"],["/2019/08/04/hdu1232.html","9643225f74789d30fbf30b027fe9bda1"],["/2019/08/04/lightoj1074.html","5bb0cc79ca558d1a717115d92067a2d2"],["/2019/08/04/poj2236.html","1a5df7ade13f4b2903b5611f0a03f5be"],["/2019/08/04/poj2236/1564991288139.png","dc70efba4f25563cf53b1142c82fb57e"],["/2019/08/04/poj2236/1565003068075.png","cdab9be76174fa45908f5f928e45fb9d"],["/2019/08/04/poj2236/1565003423379.png","31bd5dfffb61185f597ca2e191a97365"],["/2019/08/04/poj2236/TIM图片20190805190547-1565004175371.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805190547.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805191700.gif","1c35756af776c1667b9f2602ac44d685"],["/2019/08/04/并查集.html","857bff3048cc42fbc862f0b9e8f228e3"],["/2019/08/07/poj1611.html","d71c1c9a882f510f097594da8ccfea21"],["/2019/08/07/七夕.html","d89a1b2daa606a5bb1bea7ac9805f839"],["/2019/08/09/hdu1213.html","3bcb234a083496391125fd08f29f746f"],["/2019/08/10/hdu3038.html","0b11b317b16e9d7dde4abea6c7623521"],["/2019/08/10/poj1135.html","e14cbc880dfc199b8a2aad57527e7a12"],["/2019/08/11/poj1251.html","846d612c20816989a4dabf6be019fc34"],["/2019/08/12/poj1287.html","9598dfc8c496aeca117960748f5a9886"],["/2019/08/12/poj2031.html","95feaa61915885c1248e331b78d8b737"],["/2019/08/12/poj2421.html","9634dd40ca7a9edb6eaba62dd505d7ae"],["/2019/08/12/zoj1586.html","966de8ff68b3e31f02dc15f74b2145bc"],["/2019/08/12/快速输入.html","3d7359ea7219d06f39bc83fc6d2950ef"],["/2019/08/13/kruskal.html","a62620f6f1faa8aaf6bf1f73c16e056a"],["/2019/08/13/poj1258.html","3d4397773d82f3c5b04cea056d773de0"],["/2019/08/13/poj1751.html","ced60f21d0d0aec8a966d180c964c2f8"],["/2019/08/13/poj1789.html","93f0c4b65a90590411b8a210ede013f6"],["/2019/08/13/poj2349.html","3513f70e93e18fd0e240fde0b7fa38af"],["/2019/08/15/poj1321.html","d9b9227011b9ce40dea32682848b9711"],["/2019/08/16/Miller-Rabin.html","dd1f34f9a2791e786e7a37790c68eb1a"],["/2019/08/16/Miller-Rabin/1565940377100.png","2fd224d239512ab17624872566ff3f6b"],["/2019/08/16/Miller-Rabin/1565940708448.png","45595b686eb7caaa173a57a4f087706b"],["/2019/08/16/Miller-Rabin/1565941020088.png","24bca44110574da91eb510bb1d4e9a0c"],["/2019/08/16/Miller-Rabin/1565941050512.png","b2fa442d96edeac214dd4e0e8d238b48"],["/2019/08/16/poj1426.html","dca64b3b8aa654c871878a73664711b9"],["/2019/08/16/poj2251.html","93e71fdcead49f466e4ff4df4ae0ba74"],["/2019/08/16/poj3087.html","02c12952d8ac6e3696c366b0aa047677"],["/2019/08/16/poj3126.html","f9a5feff777a3556db7aea9f7668a564"],["/2019/08/16/poj3278.html","1f730a5f5a68343c0c2c84582f41f0c3"],["/2019/08/16/poj3279.html","3bca4cb35e81222ae83e7b6c317957ed"],["/2019/08/16/朴素的素数判断.html","9ab3537175d1cead7788bcae2d66e7ce"],["/2019/08/22/hdu1233.html","a64e830956d4c8f1ebb8ac4291cdbfc5"],["/2019/08/22/hdu1301.html","764e8ee2fe59e1e0f036cd677f5239c6"],["/2019/08/22/hdu1875.html","908d2c876a6241c6a36fe6314c4e6c61"],["/2019/08/22/poj1679.html","e30e3cb0bcee03ae0d8d491362ad42f1"],["/2019/08/31/2018ningchuanCCPC网络赛.html","e5e6eab58f30a7d30c4cc6eea286a79e"],["/2019/09/11/hdu2121.html","b065cb8244f13c495bd04ceaf256facd"],["/2019/09/11/uva10462.html","b3743fce03bb210f561095313635b4a1"],["/2019/09/11/uva10600.html","920336965066959b6ae97135f5316dfe"],["/2019/09/11/uva11183.html","8f772a9b267d4faa179042b70e8ee4ab"],["/2019/09/11/朱刘算法.html","6cab1429818293af132f4a6103634298"],["/about/index.html","4a4af6ef3950000f0bd56bd94475fdd3"],["/archives/2019/07/index.html","5f2df951ac7ea77156f7496c26d8ba32"],["/archives/2019/07/page/2/index.html","4abc0f5d3a913206e1c015115c2dd07b"],["/archives/2019/08/index.html","d0c3d33a4a0e7091593bf0c1e2b65b95"],["/archives/2019/08/page/2/index.html","6fe81bdda41a4a15bd476693f361efe0"],["/archives/2019/08/page/3/index.html","fbad45d24114d09fc9c55f082d8b3b59"],["/archives/2019/08/page/4/index.html","fd0ba41db14e8a657c7b332ac25d538a"],["/archives/2019/08/page/5/index.html","d6f6ce3ed1f87c1d0f37e6aadf2d8765"],["/archives/2019/09/index.html","0dda4a8c7f3c1f83e913c97d3758eea2"],["/archives/2019/index.html","14c284fc69de9c837e0ba4c045fccc46"],["/archives/2019/page/2/index.html","387b6f6010d837fb70f6f566d95079aa"],["/archives/2019/page/3/index.html","4e832520e65ffc7fd66dc2eb5750591a"],["/archives/2019/page/4/index.html","eca9b79cddbb05d16abb894fe436447c"],["/archives/2019/page/5/index.html","3268ad7eb0dddd44e6c3f56f30db162f"],["/archives/2019/page/6/index.html","420a9cc3c047e415f6a9fc3970af7577"],["/archives/2019/page/7/index.html","dfbb085bdfda578186307ef7e616658e"],["/archives/index.html","f4abee26c1b1d09bb9c840d8608d7fe1"],["/archives/page/2/index.html","c20b347e8752ba4511278f1a4e669678"],["/archives/page/3/index.html","d773ebaa3ec4add344fbbc6000c4b5ae"],["/archives/page/4/index.html","522695dd67ed57e600871e84eedf0e82"],["/archives/page/5/index.html","14854e1c65ba68c66320500a33927055"],["/archives/page/6/index.html","829ed07b59333abf0c791464661cba6c"],["/archives/page/7/index.html","16bc3191fc0e455da019e3b6fd4042bb"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/STL/index.html","48cd214add795f6e4329c6844f5a7554"],["/categories/algorithm/index.html","de9fea27d832652e3b8307878da6cf5b"],["/categories/algorithm/page/2/index.html","49729489b88dabfc10debbf536e0aed4"],["/categories/hdu/index.html","08415a6069488f9b8b47f1838b6a38a8"],["/categories/index.html","2dcd404871b81554f9dc9aa01d7a63d8"],["/categories/lightoj/index.html","c9f3e25a2171704188b2d9a0c388d217"],["/categories/poj/index.html","113828dca61ed16a3129b9085f84372e"],["/categories/poj/page/2/index.html","e0da2d2e6aa553460bdd89a5e38825f3"],["/categories/poj/page/3/index.html","89beffe768d9736e3f742ec980fa3670"],["/categories/poj/page/4/index.html","664086206c1cbfe67617fe0a820bcb5b"],["/categories/somethings/index.html","fd6a0fbe9c2e267f3fd944ffd79d0813"],["/categories/uva/index.html","8900effc08fd6e9e35a3890a74f58ecb"],["/categories/xiu/index.html","c0c83094deb2250d089ba9362ae57a99"],["/categories/zoj/index.html","2b24d48b79a782d5fe94e93480990e54"],["/categories/洛谷/index.html","066eba723dba618ecbee1c55599c96e3"],["/css/main.css","fd5fd5bf9694dab658e58b696a9e0c5c"],["/gallery/index.html","e755d8153020f4eac3a0bc9519d6433a"],["/image/Dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/image/background.jpg","7690c13196e365259e8f8dcd00b45063"],["/image/car.gif","96d8c992ffb5c53f362fbe6f755999b3"],["/image/first.jpg","91811b412d80117b423807c82e9a965b"],["/image/funny.gif","3e53ae588ec2b3770bab717488a519e1"],["/image/lolicon.jpg","3f8af0326fdbc545ac41693e8b24d765"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","82eae3dadaadf5abc6de47a6e2fe9ea9"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","7690c13196e365259e8f8dcd00b45063"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","6369d89cc4135be42f8855a89848b28d"],["/images/favicon-32x32-next.png","a6e67811320dd6a4a4f6c729eb08cf67"],["/images/header.jpg","91811b412d80117b423807c82e9a965b"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","a0ea388df3f430bb969e5b86e4690621"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","20dc6e0b2af9ee197bf49a43401af576"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-ribbon/README.html","b5ad1a5a19d74fe3c875c4fbd75ddd31"],["/lib/canvas-ribbon/canvas-nest-nomobile.min.js","698ea0710bd84dc7640093bab947d64f"],["/lib/canvas-ribbon/canvas-nest.min.js","95e027408a9183dfe8c9878492ec2c38"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","7c36d540924fd38774a46dc1c80b8ae2"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d55721ff5e4023d3570eea6469137f97"],["/live2d-widget/demo/demo1.html","f3a5c8536c8e915bb3e8180b4fbde425"],["/live2d-widget/demo/demo2.html","e1f2247124a3b0fc343ef3ef3bed8ad3"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","450a889136df8a90f0d94cc8d8ace1a8"],["/live2d-widget/waifu.css","8c5d3363aca0e43de45ed1a8e51b688f"],["/page/10/index.html","1b0aa5cde953f9c52cd7982a77de0f9e"],["/page/11/index.html","893bf9672c75a39ae2f4658b11756549"],["/page/12/index.html","d7384e03e44bcf1d948da2402721040d"],["/page/13/index.html","1148151cc6e8756a321ee3c104e39452"],["/page/2/index.html","0da4eb49b5c502492b71c0de7321b975"],["/page/3/index.html","acb2d2f9dbc86819ad7665615ad07ff4"],["/page/4/index.html","334c548ed0034d0ba9175e370f564e2a"],["/page/5/index.html","b4e7c5e5e2c545b269b0fa74175fbb2a"],["/page/6/index.html","ef46cb952a3c59191421b9f6b0010f80"],["/page/7/index.html","7035ea8f79e85c218fde7b1f6e8ac0fd"],["/page/8/index.html","6cbb21fda939434692f6364c22c6adc0"],["/page/9/index.html","cbcf84b53a36368cbc94334b56e0bf71"],["/sw-register.js","3a26d4def1483d164c19668f767e44a0"],["/tags/Miller-Rabin/index.html","d4a292770741b546829a61e99230d3d4"],["/tags/Prim/index.html","703bc2e014748f9a4d9be5119e167d40"],["/tags/STL/index.html","1df3559a31dc5ae060999afe05cb6d01"],["/tags/bellman/index.html","554c40ed503bbdc926f31e686ed7891a"],["/tags/bfs/index.html","c72a23aeb1de72b00c0875e675275df0"],["/tags/dfs/index.html","c56ed9be10a37cb0d2a27d2e704a2f66"],["/tags/dijstra/index.html","4b93d3135708af2ff0850194f8c51311"],["/tags/dijstra/page/2/index.html","0714b27338ba69bd67aedcc92ba9ac48"],["/tags/floyd/index.html","7c24af4ef6130815053c8acb14f322c8"],["/tags/hdu/index.html","13c949f7adecab3e83a590176df2a9a6"],["/tags/index.html","b70478e21eba8228d908cca8f89efb84"],["/tags/kruskal/index.html","40cc677a5f6ca9b99bb3fa6eb602e135"],["/tags/kuangbin/index.html","8aff9617d639d048ab55d77963a7bc81"],["/tags/kuangbin/page/2/index.html","b10ece09e15318fc2cb5648c410ff23f"],["/tags/kuangbin/page/3/index.html","43931050883f4086683581596505a8d9"],["/tags/kuangbin/page/4/index.html","bbe8298a7a5ae49f0bdb62fca41f3ad0"],["/tags/kuangbin/page/5/index.html","6410be6094e08b0095f3cf009624f28f"],["/tags/lightoj/index.html","3713060e3292910c3cf7ce589e1aa225"],["/tags/poj/index.html","0701765258a666b70031332c928cd5ff"],["/tags/poj/page/2/index.html","0a5dc71fd4cad7619470289a95107c72"],["/tags/poj/page/3/index.html","0403d7f92cc11822a2baf5bff7b0b2b3"],["/tags/poj/page/4/index.html","fb8365841a10c588c3e91fa5e8fa74b4"],["/tags/prime/index.html","d71eb50c0ef7eaefd6658d4ea2dddbc5"],["/tags/spfa/index.html","e44412721469a28ba27acd3320962234"],["/tags/test/index.html","02652e6812f4d9c9da407abbd1363725"],["/tags/topsort/index.html","516add3b1ab8cef2969a70cacde88ffd"],["/tags/uva/index.html","08aa24c56579e038fd78543c073e18c6"],["/tags/xiu/index.html","4808f16220188733c981e053338a784a"],["/tags/zoj/index.html","b7c4e48197a368abb46f1d2e0c55d673"],["/tags/并查集/index.html","01926406b5f8b76be89bf5aa87949482"],["/tags/最小树形图/index.html","b3fa29f37456e84564515e724b828e05"],["/tags/朱刘算法/index.html","5f60b54c644fb78848eeb81c162b0c4a"],["/tags/模拟/index.html","3d95b3d89729ce3db4fa128cbef1faaa"],["/tags/次小生成树/index.html","f0603b81164c693e19994a1d0197f585"],["/tags/洛谷/index.html","a43f9fa85267ab4415fe9656a6ea2ba2"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","3b2737a1f2f84e86fdefecd86573b7b9"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
