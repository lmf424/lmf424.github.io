/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/22/my-first.html","d4436b8cc4567c0fa2016c8c2c9fc2b8"],["/2019/07/22/my-first/first.jpg","91811b412d80117b423807c82e9a965b"],["/2019/07/23/dijstra.html","408d746d569b396fdf169055c1141e6f"],["/2019/07/23/dijstra/1563862729194.png","c351da19bddd597ef308b7008b7a89d7"],["/2019/07/23/dijstra/1563862773804.png","d2ef8e5214e4cb08a7ebb2b4abff5cd9"],["/2019/07/23/dijstra/1563863527940.png","d7c25b68d6da4748cf51f124d007502f"],["/2019/07/23/dijstra/1563863664903.png","916f0eb2824884b2ff9d8caf0d51b221"],["/2019/07/23/dijstra/1563863742582.png","53f773c112fdf466d7d4cc1631647de5"],["/2019/07/23/dijstra/1563863819140.png","6157732cc76cf43428774f04885321e0"],["/2019/07/23/dijstra/1563863951516.png","331845801b6e652ad0e55083ebb51bb8"],["/2019/07/23/dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/2019/07/23/dijstra/lalala.gif","7f1a7b175d3bc6f0677878dce5dfb494"],["/2019/07/24/poj1797.html","a1bf598fb2aff5dc3559e8af1d9407bf"],["/2019/07/24/poj2253.html","5caa498683444b8b5fbb5730fad6e9be"],["/2019/07/24/poj2253/2253.png","4bdc4a5f70e03a8dc36f6a6f26916a0b"],["/2019/07/24/poj2387.html","89df0380c3d4e06490b98f916722b428"],["/2019/07/25/floyd.html","82c86873b40f67ebe25c1093cfa20bdb"],["/2019/07/25/floyd/1564051171338.png","949302f6746383db0dc8014e72a9019c"],["/2019/07/25/floyd/1564051237886.png","c9cbaafa349fb7612b220ff21b3f2452"],["/2019/07/25/floyd/1564052208614.png","55c4add1388037dded482bbd26bfc20f"],["/2019/07/25/floyd/1564052291135.png","d1670d7be56d8b7accdbf52ab27388ff"],["/2019/07/25/floyd/1564052336765.png","e383255981a29476458550b5e2661cb1"],["/2019/07/25/floyd/1564052379218.png","94424d00cb50187880100216cadbef9f"],["/2019/07/25/poj3268.html","f4babf7250f9b7fcb782fbe644f52152"],["/2019/07/26/bellman.html","d5bb8fcd61a985314b568b818dfd66e8"],["/2019/07/26/bellman/1564125629485.png","f443984402b0d4d92ed6be05efc198c1"],["/2019/07/26/bellman/1564125848909.png","f0eedabc94d6be668886906b615e3adc"],["/2019/07/26/bellman/1564126314876.png","f79ceb47caec9fe7254b43a41e70da5f"],["/2019/07/26/bellman/1564126386305.png","782a01565bc272e5c1baefd1594cb038"],["/2019/07/26/bellman/1564127047514.png","bcbe76a8077444a17546517a3a9cff69"],["/2019/07/26/poj1860.html","7d5aa55151a55f5931000750a2e672d6"],["/2019/07/28/poj1502.html","5e80600ca888dd60450240b43d87e544"],["/2019/07/28/poj3259.html","4feee49349feee81821a6fe31898a932"],["/2019/07/28/poj3660.html","829d4848ed16028cd890c8d880b2b60f"],["/2019/07/29/poj2240.html","f4f0d8c6966ad949180349cf6e4b90cd"],["/2019/07/30/Topological-sort.html","026966590856661ecc88bf1118784a2e"],["/2019/07/30/spfa.html","241f81a02183a7e990dd79faa7a4f0a9"],["/2019/07/30/spfa/1.jpg","f66ede4b7980b55c3898850ca38b5658"],["/2019/07/30/spfa/1_1.png","d003c9a18904d8b89d5097e6f4f36f2a"],["/2019/07/30/spfa/2.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/3.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/4.jpg","34c831a37ed4b9d415f9e6ab66e8e034"],["/2019/07/30/spfa/5.jpg","7b521f213e987d149defbaa840708d8f"],["/2019/07/30/spfa/6.jpg","095973f611b03cef9e04d508694ac993"],["/2019/07/30/spfa/7.jpg","c2327afc6a604a1b01b145a637e7fb51"],["/2019/07/30/spfa/8.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/30/spfa/9.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/31/poj1511.html","3adabcce6830c9f7eba77f8cb6d6e3a7"],["/2019/08/01/priority-queue.html","02d63b3aca448ef48aa8f565936eea13"],["/2019/08/02/P4779.html","23778fcb6697a037aeee6219627bd5d1"],["/2019/08/02/poj2502.html","53fe6c3c15ab74b945002359d5a09b5c"],["/2019/08/02/poj3159.html","d989088709ab2c5b7ce92e7c50cebc03"],["/2019/08/03/hdu4370.html","c82c585e112075a485a3190f91a6bc17"],["/2019/08/03/hdu4370/1564895169459.png","c9d9dd1007807ef29a97f9b57b210b3c"],["/2019/08/03/poj1847.html","f9efe30e3b0bc125416596f72df31d3d"],["/2019/08/03/poj1847/8.3.1.png","3961f834d9f63a9e28cc120819017b40"],["/2019/08/03/poj3169.html","87fe729c07411e376fa691ee244594a0"],["/2019/08/04/Prim.html","0d5742537cfca14a4e00e50c4199180a"],["/2019/08/04/hdu1232.html","cb280a6b1d0f208b4047fa900027e1bd"],["/2019/08/04/lightoj1074.html","ed14a1951953bb8eb2cf7ccc943871b2"],["/2019/08/04/poj2236.html","cfb9f8529b43a56b481518c83c327aee"],["/2019/08/04/poj2236/1564991288139.png","dc70efba4f25563cf53b1142c82fb57e"],["/2019/08/04/poj2236/1565003068075.png","cdab9be76174fa45908f5f928e45fb9d"],["/2019/08/04/poj2236/1565003423379.png","31bd5dfffb61185f597ca2e191a97365"],["/2019/08/04/poj2236/TIM图片20190805190547-1565004175371.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805190547.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805191700.gif","1c35756af776c1667b9f2602ac44d685"],["/2019/08/04/并查集.html","7cef31e93664861ceb7bd5e21d56f18e"],["/2019/08/07/poj1611.html","e8a35ce0cf8f6c96de218c0549609083"],["/2019/08/07/七夕.html","26230010bca64bb0ece9ed82d56aa70f"],["/2019/08/09/hdu1213.html","a3380ee88258043fe5c3b9722f0cdfcc"],["/2019/08/10/hdu3038.html","b78b5a3b319f8475d5789b50a67b2612"],["/2019/08/10/poj1135.html","441206515f24f93ebe4787d8185c6344"],["/2019/08/11/poj1251.html","3ad4a59258d2b5f2bb3e59052b9be29e"],["/2019/08/12/poj1287.html","6297819a2b3e68434470a9a80fc9bb6c"],["/2019/08/12/poj2031.html","0c4504d704b4e8f36978be15de8537f5"],["/2019/08/12/poj2421.html","944de2e52f9c0f96cff7fff0f981d97d"],["/2019/08/12/zoj1586.html","4dda2b1b64e17e95ed0b9f9fe6d358fe"],["/2019/08/12/快速输入.html","539b7b838ab73f55949bb10445ef0dbd"],["/2019/08/13/kruskal.html","ba530829591567d532689c22ba01a3d6"],["/2019/08/13/poj1258.html","5e3d7df9ab291b5a53c99601097dc341"],["/2019/08/13/poj1751.html","50f2ccf5afb6e3f1778b74e696da1fb6"],["/2019/08/13/poj1789.html","08639a7e116e4373284cdba84b823c08"],["/2019/08/13/poj2349.html","5aa5a35c7efec5bbc89fc7201cb5107a"],["/2019/08/15/poj1321.html","c3c82dfaf8d8911a5b316a0932fdd3c4"],["/2019/08/16/Miller-Rabin.html","445f3ed01965eb080151f80d2f781b0b"],["/2019/08/16/Miller-Rabin/1565940377100.png","2fd224d239512ab17624872566ff3f6b"],["/2019/08/16/Miller-Rabin/1565940708448.png","45595b686eb7caaa173a57a4f087706b"],["/2019/08/16/Miller-Rabin/1565941020088.png","24bca44110574da91eb510bb1d4e9a0c"],["/2019/08/16/Miller-Rabin/1565941050512.png","b2fa442d96edeac214dd4e0e8d238b48"],["/2019/08/16/poj1426.html","d2418230ea562f9c647816a7a1b67e76"],["/2019/08/16/poj2251.html","388485178e9ef586ac69c7a128f5b91c"],["/2019/08/16/poj3087.html","6e3fd9b9a736da9204cc3ac8e85a3e39"],["/2019/08/16/poj3126.html","ea522d8755e69d0e1c8e1d896c46234b"],["/2019/08/16/poj3278.html","64446d033a7d4d9689f294601c96552f"],["/2019/08/16/poj3279.html","27f02a2328f6aac730a1cb53817ea7d1"],["/2019/08/16/朴素的素数判断.html","f3d0143d99829402a412dc2c36523e05"],["/about/index.html","336c53d27dcc812f7ca111d548ca6511"],["/archives/2019/07/index.html","fb14332436d1754de240b0968afecafb"],["/archives/2019/07/page/2/index.html","ca6f2e1eef3596a5df77c17c86998d0e"],["/archives/2019/08/index.html","6247e9116295e214293b8c390eb7ebc7"],["/archives/2019/08/page/2/index.html","6335c6e2352881a67bb54be9be2f8f6c"],["/archives/2019/08/page/3/index.html","369d61e4fc85a98e5cd9f734f2427814"],["/archives/2019/08/page/4/index.html","ca845a391e917190bf55131aaa1781fa"],["/archives/2019/index.html","c79726fcb228f7143993cae515296503"],["/archives/2019/page/2/index.html","7f9f197cadc62f4a0c15714bce9fddf1"],["/archives/2019/page/3/index.html","8871307c38fccf822935d9c8dba178a2"],["/archives/2019/page/4/index.html","dd86e3c874870213c873e713edc37f5d"],["/archives/2019/page/5/index.html","6b822c893ee5d90631af4e7eed584c7b"],["/archives/2019/page/6/index.html","11699447c592207ecadad2b4ee70d81c"],["/archives/index.html","3c005b95fe73cd6626d72843f98d7a33"],["/archives/page/2/index.html","0a950a965b27f70aa1a5bce945375d04"],["/archives/page/3/index.html","396656085f205496ff022af31a93ff87"],["/archives/page/4/index.html","854f176fafd52b0671c641659ab0ffbc"],["/archives/page/5/index.html","a1b661535aac597fc75ab9a81769c95d"],["/archives/page/6/index.html","77f6cab9a1e63e0b2e16a5371d7842d9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/STL/index.html","7e3d25e9c013128a866be99dc31118e9"],["/categories/algorithm/index.html","c15fd7d4de8dbb0fb39bcaca2d015ced"],["/categories/hdu/index.html","6e3fa2958fb07e77f57df523782b4f83"],["/categories/index.html","cf45325e2e1ce32ee766234037948348"],["/categories/lightoj/index.html","ef92980d7fa6dfb769dba4d78fe6aed3"],["/categories/poj/index.html","3315e2d233c942e65f431cec22982133"],["/categories/poj/page/2/index.html","86290e5a2fe147bab23fa38e5b980e18"],["/categories/poj/page/3/index.html","713d58c3b7076d80b3b0fae9e737f472"],["/categories/somethings/index.html","3cd55802d904dcef2bb9c2988b9b5c74"],["/categories/xiu/index.html","8a44dabf42f2a400d11db0f7737f2fce"],["/categories/zoj/index.html","f4e6d7724cdc0beb738b22ab90b08f7a"],["/categories/洛谷/index.html","3eb7eb6a7a4e5052aee7c04e8c9571be"],["/css/main.css","c7ae55a88fdbee3cc2580f6563110c23"],["/gallery/index.html","e07d4b2696d7b1544b3e4b1f172f7aab"],["/image/Dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/image/background.jpg","7690c13196e365259e8f8dcd00b45063"],["/image/car.gif","96d8c992ffb5c53f362fbe6f755999b3"],["/image/first.jpg","91811b412d80117b423807c82e9a965b"],["/image/funny.gif","3e53ae588ec2b3770bab717488a519e1"],["/image/lolicon.jpg","3f8af0326fdbc545ac41693e8b24d765"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","82eae3dadaadf5abc6de47a6e2fe9ea9"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","7690c13196e365259e8f8dcd00b45063"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","6369d89cc4135be42f8855a89848b28d"],["/images/favicon-32x32-next.png","a6e67811320dd6a4a4f6c729eb08cf67"],["/images/header.jpg","91811b412d80117b423807c82e9a965b"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","4026d498e2c2d95a74437c430a1a32e5"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","20dc6e0b2af9ee197bf49a43401af576"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-ribbon/README.html","e828cb59d663c774d3b5c63a848c9dc9"],["/lib/canvas-ribbon/canvas-nest-nomobile.min.js","698ea0710bd84dc7640093bab947d64f"],["/lib/canvas-ribbon/canvas-nest.min.js","95e027408a9183dfe8c9878492ec2c38"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","7c36d540924fd38774a46dc1c80b8ae2"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d55721ff5e4023d3570eea6469137f97"],["/live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["/live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","450a889136df8a90f0d94cc8d8ace1a8"],["/live2d-widget/waifu.css","8c5d3363aca0e43de45ed1a8e51b688f"],["/page/10/index.html","e1788c3c39115f1f41f4dda194f65784"],["/page/11/index.html","31cfc20e5103509e20378318ba3be6cd"],["/page/2/index.html","1942617949bc0ec01743d01c18fd10f6"],["/page/3/index.html","62129c11f020f5c205c21992808c7a93"],["/page/4/index.html","1b8995e4a59b241f6b80631804c0f339"],["/page/5/index.html","4ef9fc6c39dfd22cf74156c25d848cda"],["/page/6/index.html","44c90ec3ad4e997d3799843772df0986"],["/page/7/index.html","4a560f8e32023bccb1b7d96ac09c16f8"],["/page/8/index.html","068a6ba1c74bca30597faac6fa357eca"],["/page/9/index.html","5e16a43a0bcd240a07c45662ea47b156"],["/sw-register.js","b4c80868d230a83f086d208a6535b402"],["/tags/Miller-Rabin/index.html","e30567177011e19c5e9dbc84c1e095df"],["/tags/Prim/index.html","5dd7ff364c84d243ac5d25ec8e79da2a"],["/tags/STL/index.html","3a35eedaeb3ec384d6b0a4c739e8633e"],["/tags/bellman/index.html","92450d2b38da746ad93acccf960c86df"],["/tags/bfs/index.html","dfc7c5854e318ca488586ae071251f3a"],["/tags/dfs/index.html","a5fc17830a82d4c4f1c03ef76bee451f"],["/tags/dijstra/index.html","d2c47bd3a801881a08bfc46ee95ff327"],["/tags/dijstra/page/2/index.html","4d79060d51b33cc10e315e28c0b18d30"],["/tags/floyd/index.html","f99e4318325062a260ee81e68707c5c6"],["/tags/hdu/index.html","db0051e4b9c73d41aa4d8e69d3d8ce49"],["/tags/index.html","dc05138fe9498e8e1c9e270c9e7f76bd"],["/tags/kruskal/index.html","11e895983a89d839e302b483f9879318"],["/tags/kuangbin/index.html","8bb6a102c7654b8b577223224056f015"],["/tags/kuangbin/page/2/index.html","ac76c6c1a4b44d1ccce717d81d219a67"],["/tags/kuangbin/page/3/index.html","3d2f7a79db3a67a8f7b9106f4828cafd"],["/tags/kuangbin/page/4/index.html","7ea1227c655a74849e8beaf69ba25846"],["/tags/lightoj/index.html","033469d72c96bad5ec712ae7b515b9aa"],["/tags/poj/index.html","9ee96f98ab4c05bc9466713ed08fd3ce"],["/tags/poj/page/2/index.html","fe9453a5212fc2610d2822b4618bab6b"],["/tags/poj/page/3/index.html","502098eeb7b00a6d65fa47964835377e"],["/tags/poj/page/4/index.html","8ebe1b3ca256126946521302ab45b7d8"],["/tags/prime/index.html","cc9d16e7c96619ec298b427e9e6be677"],["/tags/spfa/index.html","04f0b2b6bd35e6d316b55d3ecb49c69e"],["/tags/test/index.html","91bae5eb49e70d0aa2ef1daee8d5f8d7"],["/tags/topsort/index.html","6910e55a659618586a21335953de82bc"],["/tags/xiu/index.html","05981348297d3e84070ce8976ba768c0"],["/tags/zoj/index.html","6fae56f876aa37925082564617761a94"],["/tags/并查集/index.html","2df8e9a9dba4c6cfe6514058f7b0a136"],["/tags/模拟/index.html","19eb39b91535053dced9ce1fd8c20893"],["/tags/洛谷/index.html","c86e061d6365ff2b78977228a57bec2b"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","3b2737a1f2f84e86fdefecd86573b7b9"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
