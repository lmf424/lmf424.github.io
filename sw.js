/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/22/my-first.html","ef1a2504c55dd721189652425dd063f9"],["/2019/07/22/my-first/first.jpg","91811b412d80117b423807c82e9a965b"],["/2019/07/23/dijstra.html","05469f18ed613b55becd13a92cf40d34"],["/2019/07/23/dijstra/1563862729194.png","c351da19bddd597ef308b7008b7a89d7"],["/2019/07/23/dijstra/1563862773804.png","d2ef8e5214e4cb08a7ebb2b4abff5cd9"],["/2019/07/23/dijstra/1563863527940.png","d7c25b68d6da4748cf51f124d007502f"],["/2019/07/23/dijstra/1563863664903.png","916f0eb2824884b2ff9d8caf0d51b221"],["/2019/07/23/dijstra/1563863742582.png","53f773c112fdf466d7d4cc1631647de5"],["/2019/07/23/dijstra/1563863819140.png","6157732cc76cf43428774f04885321e0"],["/2019/07/23/dijstra/1563863951516.png","331845801b6e652ad0e55083ebb51bb8"],["/2019/07/23/dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/2019/07/23/dijstra/lalala.gif","7f1a7b175d3bc6f0677878dce5dfb494"],["/2019/07/24/poj1797.html","501de5008e0374677db4968a6d8dbb40"],["/2019/07/24/poj2253.html","32c5206b33c1e9544e20d26771f8da67"],["/2019/07/24/poj2253/2253.png","4bdc4a5f70e03a8dc36f6a6f26916a0b"],["/2019/07/24/poj2387.html","c643ac13f85386e6fe9f0d4f0d1a5981"],["/2019/07/25/floyd.html","55215282c0f6d7cb849383525eb1a733"],["/2019/07/25/floyd/1564051171338.png","949302f6746383db0dc8014e72a9019c"],["/2019/07/25/floyd/1564051237886.png","c9cbaafa349fb7612b220ff21b3f2452"],["/2019/07/25/floyd/1564052208614.png","55c4add1388037dded482bbd26bfc20f"],["/2019/07/25/floyd/1564052291135.png","d1670d7be56d8b7accdbf52ab27388ff"],["/2019/07/25/floyd/1564052336765.png","e383255981a29476458550b5e2661cb1"],["/2019/07/25/floyd/1564052379218.png","94424d00cb50187880100216cadbef9f"],["/2019/07/25/poj3268.html","af1ab446e0a020a91e21f50039ad5e21"],["/2019/07/26/bellman.html","60c853e954ce01e8cc349e099ff6b2ea"],["/2019/07/26/bellman/1564125629485.png","f443984402b0d4d92ed6be05efc198c1"],["/2019/07/26/bellman/1564125848909.png","f0eedabc94d6be668886906b615e3adc"],["/2019/07/26/bellman/1564126314876.png","f79ceb47caec9fe7254b43a41e70da5f"],["/2019/07/26/bellman/1564126386305.png","782a01565bc272e5c1baefd1594cb038"],["/2019/07/26/bellman/1564127047514.png","bcbe76a8077444a17546517a3a9cff69"],["/2019/07/26/poj1860.html","05a7e47ead95aefd435084342c88f662"],["/2019/07/28/poj1502.html","e324de0560a5302fd1705f6cb753d9fd"],["/2019/07/28/poj3259.html","828833b724229bdf64138ea346b16767"],["/2019/07/28/poj3660.html","ce7dcd330c99ca135f29af3030169f58"],["/2019/07/29/poj2240.html","b37ebad6a3a153c8835a210865f3a33d"],["/2019/07/30/Topological-sort.html","d55f8cccae41eded7711527160d3e1f8"],["/2019/07/30/spfa.html","6e117097348af7cb1b80a0310d5af82e"],["/2019/07/30/spfa/1.jpg","f66ede4b7980b55c3898850ca38b5658"],["/2019/07/30/spfa/1_1.png","d003c9a18904d8b89d5097e6f4f36f2a"],["/2019/07/30/spfa/2.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/3.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/4.jpg","34c831a37ed4b9d415f9e6ab66e8e034"],["/2019/07/30/spfa/5.jpg","7b521f213e987d149defbaa840708d8f"],["/2019/07/30/spfa/6.jpg","095973f611b03cef9e04d508694ac993"],["/2019/07/30/spfa/7.jpg","c2327afc6a604a1b01b145a637e7fb51"],["/2019/07/30/spfa/8.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/30/spfa/9.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/31/poj1511.html","155dfef935c355c4b9d1b8272b60b7d0"],["/2019/08/01/priority-queue.html","f9ffc0a4fc3dbb2605f469248ba2089d"],["/2019/08/02/P4779.html","8388a6cca7e2c442c63625b7e8e74314"],["/2019/08/02/poj2502.html","286aa822f7ebffea2e7086f4085a8681"],["/2019/08/02/poj3159.html","bcc3b5973e6b47dad65f7d3b1cf01510"],["/2019/08/03/hdu4370.html","52ba3b8049f9678e0ac759d6e3b66694"],["/2019/08/03/hdu4370/1564895169459.png","c9d9dd1007807ef29a97f9b57b210b3c"],["/2019/08/03/poj1847.html","4b867cf967ddd444f0d0a3fe014ab3f6"],["/2019/08/03/poj1847/8.3.1.png","3961f834d9f63a9e28cc120819017b40"],["/2019/08/03/poj3169.html","b337a69fc5a8b22b6b0366dc3c988002"],["/2019/08/04/Prim.html","4667d01948770b2fabb8283efa163f99"],["/2019/08/04/hdu1232.html","3daaa7347317d51996cedba2bcac1ba3"],["/2019/08/04/lightoj1074.html","afe4f5197229439e2e8ad86774f79376"],["/2019/08/04/poj2236.html","aeeeb9140b79dbda0c97a058698c53cb"],["/2019/08/04/poj2236/1564991288139.png","dc70efba4f25563cf53b1142c82fb57e"],["/2019/08/04/poj2236/1565003068075.png","cdab9be76174fa45908f5f928e45fb9d"],["/2019/08/04/poj2236/1565003423379.png","31bd5dfffb61185f597ca2e191a97365"],["/2019/08/04/poj2236/TIM图片20190805190547-1565004175371.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805190547.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805191700.gif","1c35756af776c1667b9f2602ac44d685"],["/2019/08/04/并查集.html","ff02f83f46cfd912a334da5cc3d0979f"],["/2019/08/07/poj1611.html","b72d080241ae7eb44f6cc8a7ce3de16e"],["/2019/08/07/七夕.html","29bbeddaf6a325bc26e1749f6f9eaffc"],["/2019/08/09/hdu1213.html","ef925d2f4b4900537a5f8d018df9e73e"],["/2019/08/10/hdu3038.html","88a8ee92f9ed7df8ec1451598b2658b4"],["/2019/08/10/poj1135.html","6dad60acc6540184ba765d2a7f659f71"],["/2019/08/11/poj1251.html","f294849446c6c4764eb15053ce237524"],["/2019/08/12/poj1287.html","ca1608b30da5d951de6ea8999d79ee5e"],["/2019/08/12/poj2031.html","973d4bd2853e7cc389715636b092eea8"],["/2019/08/12/poj2421.html","3a73865918e2f3fe57e0ba878751edc5"],["/2019/08/12/zoj1586.html","60a72d5fedc4cc2a0dcfb8d974ad8b15"],["/2019/08/12/快速输入.html","6e8d1e25423b7eaf1f6886ea9db1a699"],["/2019/08/13/kruskal.html","2333d6ad876f49dbfaebad1d769e061f"],["/2019/08/13/poj1258.html","dcea9c369fed6c80ca47ab42561c39b9"],["/2019/08/13/poj1751.html","f79fcd87dfb167b33e21b5a04cda3fbc"],["/2019/08/13/poj1789.html","d53f95d6dcaf617e41c1e0165c6bdb1b"],["/2019/08/13/poj2349.html","736ea7d265a888add80a1628a6632b78"],["/2019/08/15/poj1321.html","f1ee1d0027bad168153d036836da6d84"],["/2019/08/16/Miller-Rabin.html","45bd2f1b642a68d67cfc2c9101c8e3f8"],["/2019/08/16/Miller-Rabin/1565940377100.png","2fd224d239512ab17624872566ff3f6b"],["/2019/08/16/Miller-Rabin/1565940708448.png","45595b686eb7caaa173a57a4f087706b"],["/2019/08/16/Miller-Rabin/1565941020088.png","24bca44110574da91eb510bb1d4e9a0c"],["/2019/08/16/Miller-Rabin/1565941050512.png","b2fa442d96edeac214dd4e0e8d238b48"],["/2019/08/16/poj1426.html","fd04be9b290089f3893526f6d2e2d71a"],["/2019/08/16/poj2251.html","1f8474f100f73350b2cb22a10a94a470"],["/2019/08/16/poj3087.html","c84524dc06564cf2cb5ce9756341213f"],["/2019/08/16/poj3126.html","447a36f79c0566bb11831c6f5f26c2e3"],["/2019/08/16/poj3278.html","a8155d785823f33426c7a142c2913da8"],["/2019/08/16/poj3279.html","d87217c0be634d1d4946f2828bbab6ec"],["/2019/08/16/朴素的素数判断.html","6ef841986df1a16a64664c38856490b8"],["/about/index.html","d5a3f55a9be01460b5b472801bb6d99c"],["/archives/2019/07/index.html","5ab99cf03f84f6b1e606639b122ec949"],["/archives/2019/07/page/2/index.html","0453f3ccbaf205ed83d03fdd8e8fda9b"],["/archives/2019/08/index.html","31d5fcca6ec24291ed1e0c6cce0535c1"],["/archives/2019/08/page/2/index.html","49f978d2b7982af5da1f2fb99afab72b"],["/archives/2019/08/page/3/index.html","265b717aeda706517f7464569c782396"],["/archives/2019/08/page/4/index.html","02eb3857058fbaa5ed9686a0b609bca7"],["/archives/2019/index.html","931202b087bd6caee1ae188bcf2d966d"],["/archives/2019/page/2/index.html","c7462d8f2c23ec6e087d7725d49d0572"],["/archives/2019/page/3/index.html","858014fbbc39af29c2edfba38852a6b4"],["/archives/2019/page/4/index.html","5fab89dc47449c8ac08fb0e5980815be"],["/archives/2019/page/5/index.html","621f818edbea8730952e15de4c2e5c31"],["/archives/2019/page/6/index.html","12a8ddf20e115547a6411ce414cea2c9"],["/archives/index.html","b91d92e6bc5b375ae8b82824ff667c5f"],["/archives/page/2/index.html","c6ae0866b685f03f6da141c520390f77"],["/archives/page/3/index.html","642764e45b0cb438a9c77b85ada98915"],["/archives/page/4/index.html","4cb8de9dcac0efc4abb669e7fd4ed654"],["/archives/page/5/index.html","85cd5527fe8ef996d974e63891da7b0c"],["/archives/page/6/index.html","6b9d0d7e5b92da5d35753e791aedecee"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/STL/index.html","9d173483dfb171fb6d3f0da722d98eeb"],["/categories/algorithm/index.html","bdce5731fc09af79c86a66d44ff21a96"],["/categories/hdu/index.html","c8c24c69f4eb7b79590269e5cedaefb2"],["/categories/index.html","0fb10bc442a9fb830e403a69df15d923"],["/categories/lightoj/index.html","3091f74abeec8d946635ee277189a271"],["/categories/poj/index.html","ec76def2d9197e24d234079d29c91753"],["/categories/poj/page/2/index.html","21f8310dc314764bb06b696c6cbad5f4"],["/categories/poj/page/3/index.html","fd111b1d93904f1ada0127699193e4d6"],["/categories/somethings/index.html","953d7a51736bb9b9ed0151553e58704b"],["/categories/xiu/index.html","086eedc62dd7b58e0033cc233fc6001f"],["/categories/zoj/index.html","fdea30da1f27c03e79626e3af7aa63a5"],["/categories/洛谷/index.html","12289b13bd1392248a6dcb3c8318a4f7"],["/css/main.css","3b95c8678e890a5920200d8cf1498d5b"],["/gallery/index.html","76d7aa73b80b8ebc293f250f6a5a39e0"],["/image/Dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/image/background.jpg","7690c13196e365259e8f8dcd00b45063"],["/image/car.gif","96d8c992ffb5c53f362fbe6f755999b3"],["/image/first.jpg","91811b412d80117b423807c82e9a965b"],["/image/funny.gif","3e53ae588ec2b3770bab717488a519e1"],["/image/lolicon.jpg","3f8af0326fdbc545ac41693e8b24d765"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","82eae3dadaadf5abc6de47a6e2fe9ea9"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","7690c13196e365259e8f8dcd00b45063"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","6369d89cc4135be42f8855a89848b28d"],["/images/favicon-32x32-next.png","a6e67811320dd6a4a4f6c729eb08cf67"],["/images/header.jpg","91811b412d80117b423807c82e9a965b"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","2108e8282ce2cf8650d9fd0c6ffc256b"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","20dc6e0b2af9ee197bf49a43401af576"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-ribbon/README.html","61e09118240bbc922d08932ff2875fbe"],["/lib/canvas-ribbon/canvas-nest-nomobile.min.js","698ea0710bd84dc7640093bab947d64f"],["/lib/canvas-ribbon/canvas-nest.min.js","95e027408a9183dfe8c9878492ec2c38"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","7c36d540924fd38774a46dc1c80b8ae2"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d55721ff5e4023d3570eea6469137f97"],["/live2d-widget/demo/demo1.html","f3a5c8536c8e915bb3e8180b4fbde425"],["/live2d-widget/demo/demo2.html","e1f2247124a3b0fc343ef3ef3bed8ad3"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","450a889136df8a90f0d94cc8d8ace1a8"],["/live2d-widget/waifu.css","8c5d3363aca0e43de45ed1a8e51b688f"],["/page/10/index.html","1963b9faba932f58d127b653effc12b1"],["/page/11/index.html","1e729b0f60797a5b0712eeea0fda6d6e"],["/page/2/index.html","215f923720ae592620ba2303b559bb55"],["/page/3/index.html","d23e51f6be01dc85be0442721b06f70b"],["/page/4/index.html","a7ac801f03736bf0870ca6d9028ac7ad"],["/page/5/index.html","72935ae5ead17d7235477a2a37a491ac"],["/page/6/index.html","f8fbd4028aa1911bc4b1f5d2c0e2b657"],["/page/7/index.html","2d807609a815aa3884b427ff88c3d5b7"],["/page/8/index.html","911983f66f865ddca29478393b52e587"],["/page/9/index.html","2b9ddada61be575fde8bba1117a7cd6e"],["/sw-register.js","450f5065f222813998175a6d9b5bbd8e"],["/tags/Miller-Rabin/index.html","0569d24edfb58003d3816cd0ec71c66a"],["/tags/Prim/index.html","70ca454942bfeeba2b39c784a39aa9fd"],["/tags/STL/index.html","dc68a8317a11566aed5a33e7ed8dc8a0"],["/tags/bellman/index.html","7aff902bcd67265dd4c67548db4fef6a"],["/tags/bfs/index.html","4da6b288162007b29ec907150e7cc0c5"],["/tags/dfs/index.html","ba2177545c60c736f9a263c9bf690ce7"],["/tags/dijstra/index.html","984baededf5b58d21774d44b9c033caa"],["/tags/dijstra/page/2/index.html","2b2887d3a0416d49ec45830ae31f45c2"],["/tags/floyd/index.html","96b17c4cd0cca306d5b9a6858a26a7ae"],["/tags/hdu/index.html","11c7ec799e443f69de9409ea398a59a2"],["/tags/index.html","f0de5cc6299669a97629e4fa3440d363"],["/tags/kruskal/index.html","9dc690dc5406bf4e30185276b7530b52"],["/tags/kuangbin/index.html","85f8bf6b68de3d3171dbcda576211da2"],["/tags/kuangbin/page/2/index.html","914425c83a02cbf04378ffc2bd939733"],["/tags/kuangbin/page/3/index.html","1ecd60f09fdd6bf12ddf44942ec2dcb9"],["/tags/kuangbin/page/4/index.html","79197240fcdfee02759b4dc729ad88c6"],["/tags/lightoj/index.html","f76d52917530446e14fca6b00758417c"],["/tags/poj/index.html","dcdd6398837cb92eb584a48958c8d2a7"],["/tags/poj/page/2/index.html","d23bcc810bf2745e523841c100d3f771"],["/tags/poj/page/3/index.html","432c53965bd9c2c21ce707c5506d7341"],["/tags/poj/page/4/index.html","c880bfa8df4b4f468feea87653023558"],["/tags/prime/index.html","64bc26bebbeab14e1bc08193a16e667c"],["/tags/spfa/index.html","6987f59586288928e0a33e101000029a"],["/tags/test/index.html","a068ca951a8d40e9ee07456dab3fd0c3"],["/tags/topsort/index.html","1b5889cd2662a0a9fe5a97f52c39cc81"],["/tags/xiu/index.html","1e2ead2e51edb4a440acc09d29d75927"],["/tags/zoj/index.html","dacd30d385b94a50ae2f91990ad1a63a"],["/tags/并查集/index.html","11b18dc3f55b073cf42e15eaccc7ba74"],["/tags/模拟/index.html","567e151fdad2669aac5db76ee26027c9"],["/tags/洛谷/index.html","7d51013d4aa90229139663b4f3b1673a"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","3b2737a1f2f84e86fdefecd86573b7b9"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
