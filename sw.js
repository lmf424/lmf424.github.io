/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/22/my-first.html","d96c929018f9b7d79b6d369d6f40eeb1"],["/2019/07/22/my-first/first.jpg","91811b412d80117b423807c82e9a965b"],["/2019/07/23/dijstra.html","4df3f3259cacebe835585484bb0f1f04"],["/2019/07/23/dijstra/1563862729194.png","c351da19bddd597ef308b7008b7a89d7"],["/2019/07/23/dijstra/1563862773804.png","d2ef8e5214e4cb08a7ebb2b4abff5cd9"],["/2019/07/23/dijstra/1563863527940.png","d7c25b68d6da4748cf51f124d007502f"],["/2019/07/23/dijstra/1563863664903.png","916f0eb2824884b2ff9d8caf0d51b221"],["/2019/07/23/dijstra/1563863742582.png","53f773c112fdf466d7d4cc1631647de5"],["/2019/07/23/dijstra/1563863819140.png","6157732cc76cf43428774f04885321e0"],["/2019/07/23/dijstra/1563863951516.png","331845801b6e652ad0e55083ebb51bb8"],["/2019/07/23/dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/2019/07/23/dijstra/lalala.gif","7f1a7b175d3bc6f0677878dce5dfb494"],["/2019/07/24/poj1797.html","6d1b43971af62bf6cadf33cb5d513911"],["/2019/07/24/poj2253.html","fc0c951cf60d39e5ccca534fa99884fa"],["/2019/07/24/poj2253/2253.png","4bdc4a5f70e03a8dc36f6a6f26916a0b"],["/2019/07/24/poj2387.html","6f4d29074c595c4207223bd5199c6858"],["/2019/07/25/floyd.html","58e8d9d0778c247323cdfc2049cd3228"],["/2019/07/25/floyd/1564051171338.png","949302f6746383db0dc8014e72a9019c"],["/2019/07/25/floyd/1564051237886.png","c9cbaafa349fb7612b220ff21b3f2452"],["/2019/07/25/floyd/1564052208614.png","55c4add1388037dded482bbd26bfc20f"],["/2019/07/25/floyd/1564052291135.png","d1670d7be56d8b7accdbf52ab27388ff"],["/2019/07/25/floyd/1564052336765.png","e383255981a29476458550b5e2661cb1"],["/2019/07/25/floyd/1564052379218.png","94424d00cb50187880100216cadbef9f"],["/2019/07/25/poj3268.html","390d4b94e445c784b1de68d1defab4e3"],["/2019/07/26/bellman.html","0486b7716ee4c0dc79b0f2cc816a0488"],["/2019/07/26/bellman/1564125629485.png","f443984402b0d4d92ed6be05efc198c1"],["/2019/07/26/bellman/1564125848909.png","f0eedabc94d6be668886906b615e3adc"],["/2019/07/26/bellman/1564126314876.png","f79ceb47caec9fe7254b43a41e70da5f"],["/2019/07/26/bellman/1564126386305.png","782a01565bc272e5c1baefd1594cb038"],["/2019/07/26/bellman/1564127047514.png","bcbe76a8077444a17546517a3a9cff69"],["/2019/07/26/poj1860.html","d6a75f8eac78543ccfebea2e0808955b"],["/2019/07/28/poj1502.html","ab1e1512c37e12d1745a6de90bbdc8a0"],["/2019/07/28/poj3259.html","9f51bea7763c9a95f4690d79d9117931"],["/2019/07/28/poj3660.html","07fe1c883548f6e3ebfd6a4dcbc64f89"],["/2019/07/29/poj2240.html","c484f7fa0a37c625f1a3fe0e5082a160"],["/2019/07/30/Topological-sort.html","6553897e023e395ee091a1f9510273c1"],["/2019/07/30/spfa.html","09a3d1f6ff5f28426abfde7954190cfa"],["/2019/07/30/spfa/1.jpg","f66ede4b7980b55c3898850ca38b5658"],["/2019/07/30/spfa/1_1.png","d003c9a18904d8b89d5097e6f4f36f2a"],["/2019/07/30/spfa/2.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/3.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/4.jpg","34c831a37ed4b9d415f9e6ab66e8e034"],["/2019/07/30/spfa/5.jpg","7b521f213e987d149defbaa840708d8f"],["/2019/07/30/spfa/6.jpg","095973f611b03cef9e04d508694ac993"],["/2019/07/30/spfa/7.jpg","c2327afc6a604a1b01b145a637e7fb51"],["/2019/07/30/spfa/8.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/30/spfa/9.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/31/poj1511.html","07f7f5aeaf56061cb3dbc1f86f49e9a2"],["/2019/08/01/priority-queue.html","3c68302f620b0fd94e82e7f81dec2213"],["/2019/08/02/P4779.html","0bf608ae81c0c9c4e180747ce3b87887"],["/2019/08/02/poj2502.html","6cc39c0c2a028e3a21b004a04195b5fb"],["/2019/08/02/poj3159.html","ab86cbea74ebc1c59a8eb287b1e40b00"],["/2019/08/03/hdu4370.html","2fae5cf3cedec222a63295009fdcf767"],["/2019/08/03/hdu4370/1564895169459.png","c9d9dd1007807ef29a97f9b57b210b3c"],["/2019/08/03/poj1847.html","ae9d300a5f9d41d1d239714295ba9956"],["/2019/08/03/poj1847/8.3.1.png","3961f834d9f63a9e28cc120819017b40"],["/2019/08/03/poj3169.html","761138b7f73f3d8c321d41f2998ead3c"],["/2019/08/04/Prim.html","77035de7be655a78af47fe4aa13dd620"],["/2019/08/04/hdu1232.html","40542090866b6cf309e0d1f84844c491"],["/2019/08/04/lightoj1074.html","63562e9311f9e4e4bfd2076cab02f59c"],["/2019/08/04/poj2236.html","f08216d3386061f701073e18b3f163d0"],["/2019/08/04/poj2236/1564991288139.png","dc70efba4f25563cf53b1142c82fb57e"],["/2019/08/04/poj2236/1565003068075.png","cdab9be76174fa45908f5f928e45fb9d"],["/2019/08/04/poj2236/1565003423379.png","31bd5dfffb61185f597ca2e191a97365"],["/2019/08/04/poj2236/TIM图片20190805190547-1565004175371.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805190547.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805191700.gif","1c35756af776c1667b9f2602ac44d685"],["/2019/08/04/并查集.html","513596478de51c7457eef46060adefc5"],["/2019/08/07/poj1611.html","f610963fde39ff754428a2f00e9af5f4"],["/2019/08/09/hdu1213.html","a3ab5186d36a14ad7c14c612ba8c29e3"],["/2019/08/10/hdu3038.html","7eace6a3ac5d85f9349372d3357baa64"],["/2019/08/10/poj1135.html","2be2498380523d132f39336722f70d38"],["/2019/08/11/poj1251.html","0bfc8a684b8d831701fe1c28b42aeb8a"],["/2019/08/12/poj1287.html","12862f5387d58201b99003ead4947337"],["/2019/08/12/poj2031.html","5ec0e4de739164990f5bc69f10519398"],["/2019/08/12/poj2421.html","38ac7774adca115ffee0ab3e6dae8877"],["/2019/08/12/zoj1586.html","18aa271f56861ddd9c4a4ff9cc7f4dc1"],["/2019/08/12/快速输入.html","7eca4c1474c3897e1a137cb40ac1ad2e"],["/2019/08/13/kruskal.html","c0a56d396d7161e8ba015f5c979e9b4e"],["/2019/08/13/poj1258.html","9fbbb24e7196728d6a974e9f31d9bb9d"],["/2019/08/13/poj1751.html","f6037e84a48877766b8fa5b3c164ad9f"],["/2019/08/13/poj1789.html","b36d38b073b8c244cf2a147e0ce3b131"],["/2019/08/13/poj2349.html","c3116acd0cbd8d03bc3d3b76f63b44a8"],["/2019/08/15/poj1321.html","d9b286fcbb5b3bc8d7d7314786d09353"],["/2019/08/16/Miller-Rabin.html","a5e950222c754d29c2879f2f1f45c614"],["/2019/08/16/Miller-Rabin/1565940377100.png","2fd224d239512ab17624872566ff3f6b"],["/2019/08/16/Miller-Rabin/1565940708448.png","45595b686eb7caaa173a57a4f087706b"],["/2019/08/16/Miller-Rabin/1565941020088.png","24bca44110574da91eb510bb1d4e9a0c"],["/2019/08/16/Miller-Rabin/1565941050512.png","b2fa442d96edeac214dd4e0e8d238b48"],["/2019/08/16/poj1426.html","df749dd037dbd4ec008fd87951606237"],["/2019/08/16/poj2251.html","64025b77d9fee71ed37388722b8617e1"],["/2019/08/16/poj3087.html","cdbb6ce6c18285135c56a10673abf402"],["/2019/08/16/poj3126.html","9501cdd7782945c65eeb12d897721ed3"],["/2019/08/16/poj3278.html","e6388b77e27f14d226b0212d67b097dc"],["/2019/08/16/poj3279.html","3ab549faa33331f28af22058d62a59c1"],["/2019/08/16/朴素的素数判断.html","af40718c4347ad6305d279654d6a5df0"],["/2019/08/22/hdu1233.html","256897111c14cf3a1562b2c30d727a98"],["/2019/08/22/hdu1301.html","822227ae0f1bf771ed85c84d658485fc"],["/2019/08/22/hdu1875.html","f0fb54845282ccec92d5ac85eda3bd2d"],["/2019/08/22/poj1679.html","d483c92a82152d1f82b2229bc93fafac"],["/2019/08/31/2018ningchuanCCPC网络赛.html","8682d2dc43cc24b7f23d707723e4d25f"],["/2019/09/11/hdu2121.html","400335ad90037b4de52bbf66a06da665"],["/2019/09/11/uva10462.html","a1f9d09f65b4656e736923f5391fe6c3"],["/2019/09/11/uva10600.html","ed25f587cf336e4b44661824ddcf7c88"],["/2019/09/11/uva11183.html","02cd25120abba76d348623fbb2d84753"],["/2019/09/11/朱刘算法.html","a306eb13786c559560e75953940b7caa"],["/2019/09/20/RMQ.html","155f46437a9c6da778466229c87b4395"],["/2019/09/20/born-kerbosch.html","d922d8d696c10fcd7e51a37e9a636b87"],["/2019/09/20/tarjan.html","272b58bb5f40e4758c38f6d9fd1aa2c1"],["/2019/09/25/LCA.html","e76f202fe9f8b3930f9116e5a576b425"],["/2019/09/25/LCA/1209138-20170729151024207-1541824194.png","2e1d13b5b261a3ed30f21fd97559b8cf"],["/2019/10/08/这一年的十月八日.html","cf69418bebe557ff6c6daa2a75a7350f"],["/about/index.html","3612c108ab8122026effe76481d6535c"],["/archives/2019/07/index.html","04cc8016b18c975271d4cf1bd960a71c"],["/archives/2019/07/page/2/index.html","3add52e8f12c8f70c70e572712b58694"],["/archives/2019/08/index.html","5a988d0d8501fb8d9a909bedf7ec2583"],["/archives/2019/08/page/2/index.html","8052258c725797ec56412d4bf571aa92"],["/archives/2019/08/page/3/index.html","b2a61c20706bf4b0cb5b26edcf523ec9"],["/archives/2019/08/page/4/index.html","ecdd2d6caff87583700dc1e5415e45c2"],["/archives/2019/08/page/5/index.html","6222363199b7a358f005f48ed932443e"],["/archives/2019/09/index.html","5c4780781a7f2334ecf95d81e952736f"],["/archives/2019/10/index.html","5c380b979d09588e9fac8479ab7f6136"],["/archives/2019/index.html","673a59ca3ab4b08a6d1a1f64593acf30"],["/archives/2019/page/2/index.html","7fa607b0d4d183108f556dfb2b9df6cc"],["/archives/2019/page/3/index.html","fa7a80554b7cd16c764c84663fe47ef7"],["/archives/2019/page/4/index.html","f45e34cbc7c5160ac989c7f697872586"],["/archives/2019/page/5/index.html","61a65d293b6c49e16cffbfb87631ef35"],["/archives/2019/page/6/index.html","8a4061322a3f60dcd09ab0a7bc0927ed"],["/archives/2019/page/7/index.html","aa178e882ab4b297c1811c3afbda2d07"],["/archives/index.html","20978b42b690e4788587dc1c288c7e31"],["/archives/page/2/index.html","a22df2d7e6a1ea1c8390593adb8c2a6e"],["/archives/page/3/index.html","cd6cf3c9ecba669f42a3c3a7ca314485"],["/archives/page/4/index.html","61d084182b58b9a2ae99ed6cefacfbad"],["/archives/page/5/index.html","53dd3e21733db0e7be682132369cedb6"],["/archives/page/6/index.html","9bb7538f76479195d1504c70963436a3"],["/archives/page/7/index.html","67e6f4f50fa054789e2fc295a1a14640"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/STL/index.html","e7f4471c40009af5be581b08de358e6c"],["/categories/algorithm/index.html","e7111e2610693e12489002c2806f2947"],["/categories/algorithm/page/2/index.html","7e4989971d6d5b989a6e8ffb5d9146b2"],["/categories/algoritm/index.html","1a4fc6b6dae9c5dd796c7ecf69b67160"],["/categories/hdu/index.html","b5d98bb404c222d71f4a137f7c20e2ce"],["/categories/index.html","d5f59ce83e97500e8b35da732a1e369b"],["/categories/lightoj/index.html","02add126d2e3ff1a0d1c7ea9493e5f87"],["/categories/poj/index.html","5650deeed92566ebf14d0b11d493271a"],["/categories/poj/page/2/index.html","44c7e3ac858f52d4e9c7d0cf305e7638"],["/categories/poj/page/3/index.html","8a63d1564e7a6589da425bd5ac730191"],["/categories/poj/page/4/index.html","e7ada4443c4b719b8ff56385c7ba503b"],["/categories/somethings/index.html","c7e1c20150f493fa0f9319e62024652f"],["/categories/uva/index.html","1cc12d01272004c2303c3c3d1f1c8acc"],["/categories/xiu/index.html","0175a70c94081e37c56052772c4e1227"],["/categories/zoj/index.html","aa39f4d133cdb1ca50fd607dceeb0645"],["/categories/洛谷/index.html","14c98033b01875a593bd38cf16bc7ac6"],["/css/main.css","a141786e2e7b2ec6fe637551868aed07"],["/gallery/index.html","f9b010c1516c626fe68f2cfa95c6dadb"],["/image/Dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/image/background.jpg","7690c13196e365259e8f8dcd00b45063"],["/image/car.gif","96d8c992ffb5c53f362fbe6f755999b3"],["/image/first.jpg","91811b412d80117b423807c82e9a965b"],["/image/funny.gif","3e53ae588ec2b3770bab717488a519e1"],["/image/lolicon.jpg","3f8af0326fdbc545ac41693e8b24d765"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","82eae3dadaadf5abc6de47a6e2fe9ea9"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","7690c13196e365259e8f8dcd00b45063"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","6369d89cc4135be42f8855a89848b28d"],["/images/favicon-32x32-next.png","a6e67811320dd6a4a4f6c729eb08cf67"],["/images/header.jpg","91811b412d80117b423807c82e9a965b"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","596f9304eca3758ce4513dfb2c538cb1"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","20dc6e0b2af9ee197bf49a43401af576"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-ribbon/README.html","be75a5e4c28aee30fac72dff4f9b613a"],["/lib/canvas-ribbon/canvas-nest-nomobile.min.js","698ea0710bd84dc7640093bab947d64f"],["/lib/canvas-ribbon/canvas-nest.min.js","95e027408a9183dfe8c9878492ec2c38"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","7c36d540924fd38774a46dc1c80b8ae2"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d55721ff5e4023d3570eea6469137f97"],["/live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["/live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","450a889136df8a90f0d94cc8d8ace1a8"],["/live2d-widget/waifu.css","8c5d3363aca0e43de45ed1a8e51b688f"],["/page/10/index.html","4dc79ec0059c51d48de1ebef253e65e9"],["/page/11/index.html","48ff09321e8606898a443329f75c2c97"],["/page/12/index.html","f231930375290689314843f62d5d12f6"],["/page/13/index.html","d7c64189d8fd1c1fa6a936b1585a69ae"],["/page/14/index.html","083a715d553741eebfcb299d62fa506d"],["/page/2/index.html","c93d254db3d579253e0f58fd13717979"],["/page/3/index.html","a06f0e6ec348fdf237d03afb5345d4d9"],["/page/4/index.html","b9202631f225474e72e51ea14e8a4982"],["/page/5/index.html","66e2faa566e6e4cb8080959e40ba568b"],["/page/6/index.html","794348acc45cb25cab8c906fcf4449f4"],["/page/7/index.html","1ce2f10967dbb9648fef4ae4ff69ad95"],["/page/8/index.html","667013fe2fc6be0a87f7c93f1583713d"],["/page/9/index.html","4c0a7d628dbdea5cf61acc4e3b0f2c6e"],["/sw-register.js","689a70332ed2ffc292812233d313f82c"],["/tags/LCA/index.html","b3426f79692136cf2074dedb688d30cc"],["/tags/Miller-Rabin/index.html","f1c75a3152a9d8fa3b2c25c2cc1064ed"],["/tags/Prim/index.html","9912fe3aa386036d178387460f6e57e0"],["/tags/RMQ/index.html","c8ea6fc87d29b8e174f1973f23f17af2"],["/tags/STL/index.html","36a10e12a4bc25afee8ac613f33c588e"],["/tags/bellman/index.html","b0f90e8fcbde6d3a3caf11cbe58bf639"],["/tags/bfs/index.html","b450efd2d7680c26541700a46d045540"],["/tags/born-kerbosch/index.html","7f7c0e5299d9125c803f74d363617ef0"],["/tags/dfs/index.html","8ef74c02f7a4bc71d21d2a3fb5a6219b"],["/tags/dijstra/index.html","b30b7c5e8c94d8dc18953a36f6ae5364"],["/tags/dijstra/page/2/index.html","757a7ccfbbbfc6aaf7532075c1967c58"],["/tags/floyd/index.html","982c136f1ef1955a03e5b6548a90a49f"],["/tags/hdu/index.html","361036182da1050096c92ec65c6965d8"],["/tags/index.html","d1178e5245fa895bf4cfcf182fcfc9a3"],["/tags/kruskal/index.html","1d6fe5ab38f9faccb364a1ab0fddc9ae"],["/tags/kuangbin/index.html","97b78fef91e04bdd4d556b77906b9568"],["/tags/kuangbin/page/2/index.html","b457e3bf7ec65b84dac464c39bdf09da"],["/tags/kuangbin/page/3/index.html","64996f5283e3e8235f556f14e5c8b0c5"],["/tags/kuangbin/page/4/index.html","6be10b8a56b653f7fcae993160dd6f03"],["/tags/kuangbin/page/5/index.html","ae8d67e08ae619c72f297b6af11b239b"],["/tags/lightoj/index.html","049b621a45d0110bb1d3118505dc9a1e"],["/tags/poj/index.html","f99a9af27def0504844ddf07f85eac53"],["/tags/poj/page/2/index.html","c9b67012a3f0c94399c0dadb3801619f"],["/tags/poj/page/3/index.html","f913645a113aac5264e6f2547975eb06"],["/tags/poj/page/4/index.html","7e622f945d97276011244c8e7279c1d8"],["/tags/prime/index.html","d34e98671ebb37834b6d344b3edabda3"],["/tags/spfa/index.html","b46c4eeb38148ec13ffe32656b78a26f"],["/tags/tarjan/index.html","de56c3db6b6852dc9e2c2dd4f1e19ce3"],["/tags/test/index.html","e54886360b7f8b258880d4a1a7bb2cac"],["/tags/topsort/index.html","6d25a66d2165f74fd168eea968179789"],["/tags/uva/index.html","2912dba2105173a80efba2e926561bd3"],["/tags/xiu/index.html","59b88a9a0c2d4a9870e9a5bd288f756d"],["/tags/zoj/index.html","1d58a74596e29702ec7b58c1388039ad"],["/tags/并查集/index.html","903da0ca427ad53231dd18e75fdfee06"],["/tags/最小树形图/index.html","8b2dffd4e07b74a8cf27595743e91c28"],["/tags/朱刘算法/index.html","68ebc2ce69df737d2460d7f21f01f52f"],["/tags/模拟/index.html","f7b2ddb2034a6d853f3a2f06a02c7be3"],["/tags/次小生成树/index.html","70be38af189206b1fcec27baae43493f"],["/tags/洛谷/index.html","9eb9be51a3ee35353e3f4dc6be6f44f6"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","3b2737a1f2f84e86fdefecd86573b7b9"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
