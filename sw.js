/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/22/my-first.html","f28bca2d3d1003ecb1892c0a8b3120cc"],["/2019/07/22/my-first/first.jpg","91811b412d80117b423807c82e9a965b"],["/2019/07/23/dijstra.html","ff4da538b982b566b4c839a708afc380"],["/2019/07/23/dijstra/1563862729194.png","c351da19bddd597ef308b7008b7a89d7"],["/2019/07/23/dijstra/1563862773804.png","d2ef8e5214e4cb08a7ebb2b4abff5cd9"],["/2019/07/23/dijstra/1563863527940.png","d7c25b68d6da4748cf51f124d007502f"],["/2019/07/23/dijstra/1563863664903.png","916f0eb2824884b2ff9d8caf0d51b221"],["/2019/07/23/dijstra/1563863742582.png","53f773c112fdf466d7d4cc1631647de5"],["/2019/07/23/dijstra/1563863819140.png","6157732cc76cf43428774f04885321e0"],["/2019/07/23/dijstra/1563863951516.png","331845801b6e652ad0e55083ebb51bb8"],["/2019/07/23/dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/2019/07/23/dijstra/lalala.gif","7f1a7b175d3bc6f0677878dce5dfb494"],["/2019/07/24/poj1797.html","3f36ab0ba08234bdad44a1eee76dcf68"],["/2019/07/24/poj2253.html","d4886beb20eb1f592e4506ca18d0b5ba"],["/2019/07/24/poj2253/2253.png","4bdc4a5f70e03a8dc36f6a6f26916a0b"],["/2019/07/24/poj2387.html","de7663222d3cc44e6bb30f5331fdc958"],["/2019/07/25/floyd.html","f8bf70b60abec6066a6ad93aa44c8729"],["/2019/07/25/floyd/1564051171338.png","949302f6746383db0dc8014e72a9019c"],["/2019/07/25/floyd/1564051237886.png","c9cbaafa349fb7612b220ff21b3f2452"],["/2019/07/25/floyd/1564052208614.png","55c4add1388037dded482bbd26bfc20f"],["/2019/07/25/floyd/1564052291135.png","d1670d7be56d8b7accdbf52ab27388ff"],["/2019/07/25/floyd/1564052336765.png","e383255981a29476458550b5e2661cb1"],["/2019/07/25/floyd/1564052379218.png","94424d00cb50187880100216cadbef9f"],["/2019/07/25/poj3268.html","def3168f847ecf958a32ef86ff088374"],["/2019/07/26/bellman.html","36b8c6030703331a286674b96b116a22"],["/2019/07/26/bellman/1564125629485.png","f443984402b0d4d92ed6be05efc198c1"],["/2019/07/26/bellman/1564125848909.png","f0eedabc94d6be668886906b615e3adc"],["/2019/07/26/bellman/1564126314876.png","f79ceb47caec9fe7254b43a41e70da5f"],["/2019/07/26/bellman/1564126386305.png","782a01565bc272e5c1baefd1594cb038"],["/2019/07/26/bellman/1564127047514.png","bcbe76a8077444a17546517a3a9cff69"],["/2019/07/26/poj1860.html","916bdd7717c8f37438655a096376818c"],["/2019/07/28/poj1502.html","2f6fb207949892bdda7c7b9ecc24d1dc"],["/2019/07/28/poj3259.html","bbf3f38658578a3d4ad910ea49454980"],["/2019/07/28/poj3660.html","faa45cd38c7ae5810e38d7e1c7f0ce38"],["/2019/07/29/poj2240.html","df22e4e6cf9e8a1bd6f0f4acc81fb8b4"],["/2019/07/30/Topological-sort.html","36cefb959c19aca1b8bdaee0b20347a4"],["/2019/07/30/spfa.html","7a4b01e0dcbcd85246aafea4027dec76"],["/2019/07/30/spfa/1.jpg","f66ede4b7980b55c3898850ca38b5658"],["/2019/07/30/spfa/1_1.png","d003c9a18904d8b89d5097e6f4f36f2a"],["/2019/07/30/spfa/2.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/3.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/4.jpg","34c831a37ed4b9d415f9e6ab66e8e034"],["/2019/07/30/spfa/5.jpg","7b521f213e987d149defbaa840708d8f"],["/2019/07/30/spfa/6.jpg","095973f611b03cef9e04d508694ac993"],["/2019/07/30/spfa/7.jpg","c2327afc6a604a1b01b145a637e7fb51"],["/2019/07/30/spfa/8.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/30/spfa/9.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/31/poj1511.html","d11cffaf5a4613fb9f96d4ebcb879ff5"],["/2019/08/01/priority-queue.html","4d44284a102c2541723d3f78a4ccfee8"],["/2019/08/02/P4779.html","f5c0ca194d1e12f776855be7a7cfedf9"],["/2019/08/02/poj2502.html","3214b4d8c5280f95b727e437c8805d3c"],["/2019/08/02/poj3159.html","3ab8eeb1efe6096378b5228678110de9"],["/2019/08/03/hdu4370.html","9330ef63c79280682cc783a47264046e"],["/2019/08/03/hdu4370/1564895169459.png","c9d9dd1007807ef29a97f9b57b210b3c"],["/2019/08/03/poj1847.html","14eb407656eea850b7dc1ae19358d009"],["/2019/08/03/poj1847/8.3.1.png","3961f834d9f63a9e28cc120819017b40"],["/2019/08/03/poj3169.html","1f7b5c49f2d4dc2a5db105c4e1cf3112"],["/2019/08/04/Prim.html","665c10e8d1ee36b9f6bb5969d2097f0a"],["/2019/08/04/hdu1232.html","4d770fdc1338c98a431d94bbc19c540b"],["/2019/08/04/lightoj1074.html","0ddc829e5f38f37f170d01bae4a2f0dc"],["/2019/08/04/poj2236.html","c1ef31fa4adba9763019f7aa2497b55d"],["/2019/08/04/poj2236/1564991288139.png","dc70efba4f25563cf53b1142c82fb57e"],["/2019/08/04/poj2236/1565003068075.png","cdab9be76174fa45908f5f928e45fb9d"],["/2019/08/04/poj2236/1565003423379.png","31bd5dfffb61185f597ca2e191a97365"],["/2019/08/04/poj2236/TIM图片20190805190547-1565004175371.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805190547.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805191700.gif","1c35756af776c1667b9f2602ac44d685"],["/2019/08/04/并查集.html","11a9d89d4e09cf18b0d2d7a46858de37"],["/2019/08/07/poj1611.html","33cefe602f68259cc3badf2c15a49b46"],["/2019/08/07/七夕.html","f50d015d7265afc6c7d6015b090362b3"],["/2019/08/09/hdu1213.html","600088f68d0a1ae3e18ee1fc5470f617"],["/2019/08/10/hdu3038.html","d003612b41dd4f465d02333853198e54"],["/2019/08/10/poj1135.html","e02fa38cd8280d70cb49673e347e907e"],["/2019/08/11/poj1251.html","7037173a5b703238e980fcb8b13fa502"],["/2019/08/12/poj1287.html","981a2fa05ac419c4a5cf711d71281350"],["/2019/08/12/poj2031.html","be8de65dbf93db81f990781408030138"],["/2019/08/12/poj2421.html","469fc8f0ce3fc0ab949307d6e31b6b8c"],["/2019/08/12/zoj1586.html","41a21489b716983e17ebe323de54698e"],["/2019/08/12/快速输入.html","d9b6fe25921f607013bbd65239927530"],["/2019/08/13/kruskal.html","fca03d866af381d40baa8077d16b9f6a"],["/2019/08/13/poj1258.html","a5985c1d00a6fb2b59292e821f888c97"],["/2019/08/13/poj1751.html","d18c896d7c1d5512ba0ac1e7eaf0c9b9"],["/2019/08/13/poj1789.html","8161131049b12df403ed2993d68bac85"],["/2019/08/13/poj2349.html","2eed62b5f64acbe64485dadae0e2ee87"],["/2019/08/15/poj1321.html","c404906bc56d5b40e73a35829da3ed36"],["/2019/08/16/Miller-Rabin.html","bb344e51c314344adefd9e41ace9ff98"],["/2019/08/16/Miller-Rabin/1565940377100.png","2fd224d239512ab17624872566ff3f6b"],["/2019/08/16/Miller-Rabin/1565940708448.png","45595b686eb7caaa173a57a4f087706b"],["/2019/08/16/Miller-Rabin/1565941020088.png","24bca44110574da91eb510bb1d4e9a0c"],["/2019/08/16/Miller-Rabin/1565941050512.png","b2fa442d96edeac214dd4e0e8d238b48"],["/2019/08/16/poj1426.html","5f23946ef0e7ca571d47c1826724eff1"],["/2019/08/16/poj2251.html","c9127cb3be29d48bee917f520ecb6178"],["/2019/08/16/poj3087.html","e1f8f487d87630d4c31878a3b9c1ca3f"],["/2019/08/16/poj3126.html","69ec37cfcd54256048112545e4b4a6f9"],["/2019/08/16/poj3278.html","30e8b2ff08ce198ae62a53ba843b34e3"],["/2019/08/16/poj3279.html","5b1e1e3547ecf5c500d8541ae90cd921"],["/2019/08/16/朴素的素数判断.html","0b86482477e201a0c0e2ca58406c5cde"],["/2019/08/22/hdu1233.html","55fff75e714ea7a9c312f2b50b48e6e8"],["/2019/08/22/hdu1301.html","6359d750194a48c8df84e4e759b97249"],["/2019/08/22/hdu1875.html","14999d64d01eb21e484d8cacc70aadb3"],["/2019/08/22/poj1679.html","9b0aa7bff8f8a3e4f2a64b30653b45bc"],["/about/index.html","1e35aefef20aba7dd454b651d9a27dcd"],["/archives/2019/07/index.html","853f4aa616b575af6dbd7847a236e6bd"],["/archives/2019/07/page/2/index.html","71381621d8ce37851411cda5eab9b17b"],["/archives/2019/08/index.html","b0fb3729271f30c1100ba42bdc6e735d"],["/archives/2019/08/page/2/index.html","bec6cb84337f94786bb3bae884929a22"],["/archives/2019/08/page/3/index.html","a5fc2fe0b0884400d295680be1134957"],["/archives/2019/08/page/4/index.html","4a99b16c4fa95e9bbea4d2db3f8c5109"],["/archives/2019/08/page/5/index.html","0202e2a7468d5eb40b4a5eb3f242a8cc"],["/archives/2019/index.html","3911faaf482fdcac531b626c8b0469f3"],["/archives/2019/page/2/index.html","3753ee682c601b895114b4ff54edde3e"],["/archives/2019/page/3/index.html","23341becde68f97c35f228b91399f1f2"],["/archives/2019/page/4/index.html","664d46a397ddc6022be923d418dd897f"],["/archives/2019/page/5/index.html","75287a785e948b0440583a3703f478b7"],["/archives/2019/page/6/index.html","be1f5d59aa2ca15a24997fb145081e8a"],["/archives/index.html","0a153e057a95ae4660a68d95be96ff3f"],["/archives/page/2/index.html","890423caad60c54ca64501a93ec8522d"],["/archives/page/3/index.html","3a4b88e3dd9ab7a48719a0b679870f26"],["/archives/page/4/index.html","845fb0fd1170c44e2f4ea53d9a612b2c"],["/archives/page/5/index.html","787e70191b035aed2f52e0b4a27f382c"],["/archives/page/6/index.html","5f345f46225a90f2b2b40c83c1345204"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/STL/index.html","062c42c86f63e270a6e8e27244b254fc"],["/categories/algorithm/index.html","0238253443698a9d35ccb459c7756e40"],["/categories/hdu/index.html","f686499c33a7fc8041c9003032aff945"],["/categories/index.html","9a0993e7a1766d3e28ceb293d3c9b847"],["/categories/lightoj/index.html","67ef1e2127134c9ccda67d29abaeb4cb"],["/categories/poj/index.html","0e99dc20392fd8851c2ad90c827dee84"],["/categories/poj/page/2/index.html","5587ed7616df1717069ac3187224705b"],["/categories/poj/page/3/index.html","4f063caa62ba52b85d7b0043553fac77"],["/categories/poj/page/4/index.html","c3e6a432c75f037223a855d63cdb0a2c"],["/categories/somethings/index.html","2df14492492866ad59c9eea1d62d1431"],["/categories/xiu/index.html","28e81eb4f35e77287e38bddeba9c0fb4"],["/categories/zoj/index.html","84a788d4881ee27f12945efd08f70685"],["/categories/洛谷/index.html","bcff763fb723078dd9c4fd31d2811246"],["/css/main.css","88258d5e1f5132334de139f6c8937e48"],["/gallery/index.html","583204c1d5fa54e705ed3378c2d50042"],["/image/Dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/image/background.jpg","7690c13196e365259e8f8dcd00b45063"],["/image/car.gif","96d8c992ffb5c53f362fbe6f755999b3"],["/image/first.jpg","91811b412d80117b423807c82e9a965b"],["/image/funny.gif","3e53ae588ec2b3770bab717488a519e1"],["/image/lolicon.jpg","3f8af0326fdbc545ac41693e8b24d765"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","82eae3dadaadf5abc6de47a6e2fe9ea9"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","7690c13196e365259e8f8dcd00b45063"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","6369d89cc4135be42f8855a89848b28d"],["/images/favicon-32x32-next.png","a6e67811320dd6a4a4f6c729eb08cf67"],["/images/header.jpg","91811b412d80117b423807c82e9a965b"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","c72bb392c639eb67929eba9a1dc6d208"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","20dc6e0b2af9ee197bf49a43401af576"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-ribbon/README.html","e98103dd6217e0ea88c2cac1beb9e468"],["/lib/canvas-ribbon/canvas-nest-nomobile.min.js","698ea0710bd84dc7640093bab947d64f"],["/lib/canvas-ribbon/canvas-nest.min.js","95e027408a9183dfe8c9878492ec2c38"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","7c36d540924fd38774a46dc1c80b8ae2"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d55721ff5e4023d3570eea6469137f97"],["/live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["/live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","450a889136df8a90f0d94cc8d8ace1a8"],["/live2d-widget/waifu.css","8c5d3363aca0e43de45ed1a8e51b688f"],["/page/10/index.html","33c1b3c4addc9f6ebf5b03c1b1d43f71"],["/page/11/index.html","1caebdada50abe30a0902a2cc194f931"],["/page/12/index.html","f893f0a0211baa140bc056ac967c715e"],["/page/2/index.html","04b729509b65ec9d6373a65edd7c9a3d"],["/page/3/index.html","f84aeb55d8d9b944faf2338e27e711f4"],["/page/4/index.html","05afffa73b9d39fafad10f6ca9e67304"],["/page/5/index.html","9bc6701f37ce515ecb965353bb117141"],["/page/6/index.html","c7d7124db40ebde530a4176ba4262622"],["/page/7/index.html","c3478bce0f231d8ad86e38c8ff171e41"],["/page/8/index.html","3e7c0de5e383d45d64e4681da83f2ba1"],["/page/9/index.html","7d5ae0c22f3278d8b59aa9ae1e80744e"],["/sw-register.js","d5734981816f9aff5d2b1dcd9fb7a32d"],["/tags/Miller-Rabin/index.html","565de9cf1ff4860dc25023ba5c26a83b"],["/tags/Prim/index.html","291d56ae18c4b302eb9bc20d84d882af"],["/tags/STL/index.html","33961b7a332c7fe5e7d0ebbcfac9c005"],["/tags/bellman/index.html","9ecac5b10afe52562e9a29f557a493d9"],["/tags/bfs/index.html","0d356fb59c5cbb07b0476ba3dd0a41a2"],["/tags/dfs/index.html","40c28b7381a672ae51b166dc2383d88a"],["/tags/dijstra/index.html","c6caa914ec631ce063a20feef376eab1"],["/tags/dijstra/page/2/index.html","7bc8212a9bc1c1eba487b0dd815e24da"],["/tags/floyd/index.html","e6cc15e761159b6caa2e58e914295920"],["/tags/hdu/index.html","e2ac1112d42547aa622d6d6693af59eb"],["/tags/index.html","7f82ecd14505af86c71d32af5afca622"],["/tags/kruskal/index.html","c11418e1e2d9303e7554f4bca1647eac"],["/tags/kuangbin/index.html","b461b399f46ae74cd74aefd089c11b13"],["/tags/kuangbin/page/2/index.html","8c1320a8e6636eaea46587bc64c0dd8d"],["/tags/kuangbin/page/3/index.html","c8d93cbb4f7d39c1b8727ef0fe31d1fd"],["/tags/kuangbin/page/4/index.html","f8a9a358ee327073732e8517133ee730"],["/tags/lightoj/index.html","55fd51c982ee29fe7576682a29d5ffbd"],["/tags/poj/index.html","53229bf7be63be6c220f7e87fff111ac"],["/tags/poj/page/2/index.html","bbe904f0c0863c231016105dab9a8d46"],["/tags/poj/page/3/index.html","5610a53b9c2b1a31b29d20711dd46c88"],["/tags/poj/page/4/index.html","b77e4187c393cf9db8d6707c7359b86d"],["/tags/prime/index.html","96173c6c95d4aa160a60444487331e42"],["/tags/spfa/index.html","54fca2a417bf455a896eef3a6d2d8290"],["/tags/test/index.html","dd853119227965c8df9fef8b732683be"],["/tags/topsort/index.html","548ff26d267502a5e7b6bcfad08099bb"],["/tags/xiu/index.html","ffa535eee7b7f4f04a6eb4d633de1781"],["/tags/zoj/index.html","0eeed213e064524d37c7b5a52022ea33"],["/tags/并查集/index.html","80c2e2e76ccbaf7feda113405a93a13e"],["/tags/模拟/index.html","b51fdfc0177810451e693fd657128cf0"],["/tags/洛谷/index.html","4b243da894968ab55d25324913c9d853"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","3b2737a1f2f84e86fdefecd86573b7b9"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
