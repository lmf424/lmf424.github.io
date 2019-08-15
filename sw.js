/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/22/my-first.html","f32aba3b892316bcb6b6d0a91176b4fd"],["/2019/07/22/my-first/first.jpg","91811b412d80117b423807c82e9a965b"],["/2019/07/23/dijstra.html","791e175b5d91c022850e616491be5147"],["/2019/07/23/dijstra/1563862729194.png","c351da19bddd597ef308b7008b7a89d7"],["/2019/07/23/dijstra/1563862773804.png","d2ef8e5214e4cb08a7ebb2b4abff5cd9"],["/2019/07/23/dijstra/1563863527940.png","d7c25b68d6da4748cf51f124d007502f"],["/2019/07/23/dijstra/1563863664903.png","916f0eb2824884b2ff9d8caf0d51b221"],["/2019/07/23/dijstra/1563863742582.png","53f773c112fdf466d7d4cc1631647de5"],["/2019/07/23/dijstra/1563863819140.png","6157732cc76cf43428774f04885321e0"],["/2019/07/23/dijstra/1563863951516.png","331845801b6e652ad0e55083ebb51bb8"],["/2019/07/23/dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/2019/07/23/dijstra/lalala.gif","7f1a7b175d3bc6f0677878dce5dfb494"],["/2019/07/24/poj1797.html","dac56594f928bea7e7270d5b161782f9"],["/2019/07/24/poj2253.html","18d26f2b2b77b34a57eab5a2610fbd98"],["/2019/07/24/poj2253/2253.png","4bdc4a5f70e03a8dc36f6a6f26916a0b"],["/2019/07/24/poj2387.html","c96688832c3d959eed261e2a256cb316"],["/2019/07/25/floyd.html","c2079e06861fdf98f19df016a8982f49"],["/2019/07/25/floyd/1564051171338.png","949302f6746383db0dc8014e72a9019c"],["/2019/07/25/floyd/1564051237886.png","c9cbaafa349fb7612b220ff21b3f2452"],["/2019/07/25/floyd/1564052208614.png","55c4add1388037dded482bbd26bfc20f"],["/2019/07/25/floyd/1564052291135.png","d1670d7be56d8b7accdbf52ab27388ff"],["/2019/07/25/floyd/1564052336765.png","e383255981a29476458550b5e2661cb1"],["/2019/07/25/floyd/1564052379218.png","94424d00cb50187880100216cadbef9f"],["/2019/07/25/poj3268.html","e8b66b73671e9b2eff81c1e294735d8b"],["/2019/07/26/bellman.html","c38a084f910f4ec64701013dfb4b1978"],["/2019/07/26/bellman/1564125629485.png","f443984402b0d4d92ed6be05efc198c1"],["/2019/07/26/bellman/1564125848909.png","f0eedabc94d6be668886906b615e3adc"],["/2019/07/26/bellman/1564126314876.png","f79ceb47caec9fe7254b43a41e70da5f"],["/2019/07/26/bellman/1564126386305.png","782a01565bc272e5c1baefd1594cb038"],["/2019/07/26/bellman/1564127047514.png","bcbe76a8077444a17546517a3a9cff69"],["/2019/07/26/poj1860.html","ea1ec934372ccb83371f8eb793ca8bad"],["/2019/07/28/poj1502.html","23265f4dcaa027c706585d7e154ad7dd"],["/2019/07/28/poj3259.html","4874f8a6df7d80caee2c5bd6b8f06539"],["/2019/07/28/poj3660.html","808873d175189dfc980615de68a843fb"],["/2019/07/29/poj2240.html","576d6a7d615f7f1331f3d9d9948c5bef"],["/2019/07/30/Topological-sort.html","f444593123b39da85afaaec92a999c9c"],["/2019/07/30/spfa.html","4fd49e0443b438cf160c3d045862ad5a"],["/2019/07/30/spfa/1.jpg","f66ede4b7980b55c3898850ca38b5658"],["/2019/07/30/spfa/1_1.png","d003c9a18904d8b89d5097e6f4f36f2a"],["/2019/07/30/spfa/2.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/3.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/4.jpg","34c831a37ed4b9d415f9e6ab66e8e034"],["/2019/07/30/spfa/5.jpg","7b521f213e987d149defbaa840708d8f"],["/2019/07/30/spfa/6.jpg","095973f611b03cef9e04d508694ac993"],["/2019/07/30/spfa/7.jpg","c2327afc6a604a1b01b145a637e7fb51"],["/2019/07/30/spfa/8.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/30/spfa/9.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/31/poj1511.html","b97bccb45261b60363356ec2025c929c"],["/2019/08/01/priority-queue.html","fadd61b0b25f557d36ed5d33b2197e4c"],["/2019/08/02/P4779.html","490dde6898f1ff7d1890416580c62b1d"],["/2019/08/02/poj2502.html","9e8e64a27ba6736a7c0b5c16fcd5a73f"],["/2019/08/02/poj3159.html","f3db07d496b60b99e827181639a6245a"],["/2019/08/03/hdu4370.html","75bc331c5eb7722aabbf2a32491881e9"],["/2019/08/03/hdu4370/1564895169459.png","c9d9dd1007807ef29a97f9b57b210b3c"],["/2019/08/03/poj1847.html","be1870e37ba0eb90a84da23018ba8ebd"],["/2019/08/03/poj1847/8.3.1.png","3961f834d9f63a9e28cc120819017b40"],["/2019/08/03/poj3169.html","45fad110c249008b36c421e217a5875d"],["/2019/08/04/Prim.html","ee47fa02752375cd141b84929b9c1387"],["/2019/08/04/hdu1232.html","df204750272275e81e30e17191105c1a"],["/2019/08/04/lightoj1074.html","eae6ca4593fd5f0d97f68c891806cd6d"],["/2019/08/04/poj2236.html","93e7277c22bca40497cb5ff866be814a"],["/2019/08/04/poj2236/1564991288139.png","dc70efba4f25563cf53b1142c82fb57e"],["/2019/08/04/poj2236/1565003068075.png","cdab9be76174fa45908f5f928e45fb9d"],["/2019/08/04/poj2236/1565003423379.png","31bd5dfffb61185f597ca2e191a97365"],["/2019/08/04/poj2236/TIM图片20190805190547-1565004175371.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805190547.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805191700.gif","1c35756af776c1667b9f2602ac44d685"],["/2019/08/04/并查集.html","27e9fb2607b775a222eaa1515b1a8af4"],["/2019/08/07/poj1611.html","8c4916fec44ac4d69f54bd5170efe644"],["/2019/08/07/七夕.html","e709a081652fd068bc1776dd04b44475"],["/2019/08/09/hdu1213.html","dc008c6c06af6ecb960069c73aa33e71"],["/2019/08/10/hdu3038.html","b2f3cd50d39e44b41cc004d7e6d3a877"],["/2019/08/10/poj1135.html","e050ff2108a980fabc2af2d8898f686f"],["/2019/08/11/poj1251.html","db7885f18e7a4d95ecaabdd3fe34906b"],["/2019/08/12/poj1287.html","d86a0b8abaa365114448abce93a64c31"],["/2019/08/12/poj2031.html","d3b9716a7110312f3f332c0161641606"],["/2019/08/12/poj2421.html","25cd8effdfd0bd6d56bbe071312d28de"],["/2019/08/12/zoj1586.html","43ab2e4cfdeb14ec142aae7d95149c98"],["/2019/08/12/快速输入.html","60fc8e6b44011e1fbea0d700f078e7a4"],["/2019/08/13/kruskal.html","f384dd0b45dd459135a67b5f4ae5c072"],["/2019/08/13/poj1258.html","40a5b750d02495248019ae555f45bd3b"],["/2019/08/13/poj1751.html","9ba4616ede269a432044cbd70cee0cc9"],["/2019/08/13/poj1789.html","faeb7c34358e58a4cea72f5a71d993b4"],["/2019/08/13/poj2349.html","341e323137d23e9cdfa9aa0475e26c9b"],["/2019/08/15/poj1321.html","d6a2847b089c1c0922f24d6ff04f4a60"],["/2019/08/16/poj1426.html","b51b4625a7e2a814a399a9965fe89cf0"],["/2019/08/16/poj2251.html","8d586f5875669cafe7eacf079a2ad6ba"],["/2019/08/16/poj3278.html","f3ab73564e73c37888ce24d5f832646e"],["/2019/08/16/poj3279.html","35769e517dee88a81998914b48f86985"],["/about/index.html","317301d53d99b28fb8563c4b05279d88"],["/archives/2019/07/index.html","e1e5b2cca3c557593050ab93b91f1822"],["/archives/2019/07/page/2/index.html","5a21eafdc2be4b38d21cadd6e28328e0"],["/archives/2019/08/index.html","beb5befd95c10932ecc07c7e158a6744"],["/archives/2019/08/page/2/index.html","98ef3d1902ed371c489f1d1610f42b4b"],["/archives/2019/08/page/3/index.html","0c8717674ed521c9f6b772eab6c980ae"],["/archives/2019/08/page/4/index.html","144cbeb09ee68c384b92f3a03f5bedf3"],["/archives/2019/index.html","d2d47e6a2eec4f7f83d2cd918288b788"],["/archives/2019/page/2/index.html","be1dfd7f5b55a62c629bccec74be7d2c"],["/archives/2019/page/3/index.html","062f470f1bacf0df472f16a231cb092c"],["/archives/2019/page/4/index.html","2db514503a323a4503290206bb3a725b"],["/archives/2019/page/5/index.html","61aaf824db323f5c1225459d806bd6e9"],["/archives/index.html","d38a4e4d353b53c8305ac98f9b7a2790"],["/archives/page/2/index.html","5e9f0eeaf1bb912f5b033ad15a08f912"],["/archives/page/3/index.html","708e2944883e57bab4af638bee209758"],["/archives/page/4/index.html","4dcc19919c9032a71c4a21f75b71be8f"],["/archives/page/5/index.html","b44105d2097c50cca5947975a727d120"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/STL/index.html","f6fed1eb042dc47b9a63fb1764b27362"],["/categories/algorithm/index.html","24a710cafe90be125f759086c3724224"],["/categories/hdu/index.html","3bab1c993d7c3f3b537823c032b84339"],["/categories/index.html","c8b9ef11721668131118dd2a40590060"],["/categories/lightoj/index.html","57b147e46d43808103d4aab52a6168b0"],["/categories/poj/index.html","414248ca708a6c0367a995a91bba46ac"],["/categories/poj/page/2/index.html","97783b79b0a9e310b4215f1e12ec4600"],["/categories/poj/page/3/index.html","3096110c21242a20fd17bb3701340e0a"],["/categories/somethings/index.html","caf8483def3234e472107d96a1a56ee7"],["/categories/xiu/index.html","54702d3dc2674bda22331eb8a85cff1a"],["/categories/zoj/index.html","6d1df84e28e6593c97100e8bc6f8fdf8"],["/categories/洛谷/index.html","aa9023f23358a751be7c6408e6d4f79b"],["/css/main.css","d17c70cc020ed94d31982b4662fc974d"],["/gallery/index.html","909b69276dc1caf0c7915d57f42c4437"],["/image/Dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/image/background.jpg","7690c13196e365259e8f8dcd00b45063"],["/image/car.gif","96d8c992ffb5c53f362fbe6f755999b3"],["/image/first.jpg","91811b412d80117b423807c82e9a965b"],["/image/funny.gif","3e53ae588ec2b3770bab717488a519e1"],["/image/lolicon.jpg","3f8af0326fdbc545ac41693e8b24d765"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","82eae3dadaadf5abc6de47a6e2fe9ea9"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","7690c13196e365259e8f8dcd00b45063"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","6369d89cc4135be42f8855a89848b28d"],["/images/favicon-32x32-next.png","a6e67811320dd6a4a4f6c729eb08cf67"],["/images/header.jpg","91811b412d80117b423807c82e9a965b"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","183228b2c0b3af092bd42eb9493298a7"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","20dc6e0b2af9ee197bf49a43401af576"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-ribbon/README.html","1e3fa9bc4d2615311796ad2166007936"],["/lib/canvas-ribbon/canvas-nest-nomobile.min.js","698ea0710bd84dc7640093bab947d64f"],["/lib/canvas-ribbon/canvas-nest.min.js","95e027408a9183dfe8c9878492ec2c38"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","7c36d540924fd38774a46dc1c80b8ae2"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d55721ff5e4023d3570eea6469137f97"],["/live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["/live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","450a889136df8a90f0d94cc8d8ace1a8"],["/live2d-widget/waifu.css","8c5d3363aca0e43de45ed1a8e51b688f"],["/page/10/index.html","c629d69e3d10c0529622464f955a5d47"],["/page/2/index.html","65c49b8a3b3f2ef5d1519b415c85755d"],["/page/3/index.html","42dcbad577b9451e9a6b79651f9d848a"],["/page/4/index.html","60e24b0d84f759b9da8cc5c8eef77dd5"],["/page/5/index.html","e4bac87852bb95613ca36e6f43a25944"],["/page/6/index.html","aba32565987fa04a2a0171b5f9dbdcc9"],["/page/7/index.html","f9e10a038fd02ffcf37deebd4a16bc5d"],["/page/8/index.html","60fdd3b2718ab1ad9bfbdadf5f78e22e"],["/page/9/index.html","27eed21abf0ada44893e80a306310b4a"],["/sw-register.js","2337849ea1d53dbba16384b0b32b0e55"],["/tags/Prim/index.html","19472f694b5fe55c90b280b5c87400bf"],["/tags/STL/index.html","54023d5b85918592e27dd283b1743527"],["/tags/bellman/index.html","46cb9faf14dac6605584ef751c1a5136"],["/tags/bfs/index.html","3a5283560202fbba08aa1f905487d9d3"],["/tags/dfs/index.html","d3238d1cbe4a14e9fddf5dc409c19805"],["/tags/dijstra/index.html","6d03c8e5758af65ba525dc8ce035afb8"],["/tags/dijstra/page/2/index.html","46ed079b3b591166330e9f54a500607c"],["/tags/floyd/index.html","ed978ff4620783ea93b9e8491ae7e647"],["/tags/hdu/index.html","b40fd30e3852870bcf64f7b5ccaac796"],["/tags/index.html","11e47317c76aab030c44ada97cb5da04"],["/tags/kruskal/index.html","3351a39de6443b70e7314b812ddf519d"],["/tags/kuangbin/index.html","d14ffb1b6297e22f093ee822282a9b9f"],["/tags/kuangbin/page/2/index.html","dcc4fd2a790f436f893b4d601f07003d"],["/tags/kuangbin/page/3/index.html","256a8deab3baabb8372df4004fb42fa1"],["/tags/kuangbin/page/4/index.html","443a8a35616931a441f7c5b79bfa7d5e"],["/tags/lightoj/index.html","649b534ab7944f31e460a5f13d55296d"],["/tags/poj/index.html","14763dc498ba6907bc80e593998e2550"],["/tags/poj/page/2/index.html","8b385d7e420c54d503815c7004450dd4"],["/tags/poj/page/3/index.html","cf36c1f50ffea6cb94ea6b23834fb11f"],["/tags/spfa/index.html","10c0e5015dc4931c7e420a81feedf3bc"],["/tags/test/index.html","90f211d6177a225e76e22cdaaa4ec8b7"],["/tags/topsort/index.html","5392943d6efe6e6b873f9a9b4208caf0"],["/tags/xiu/index.html","e34ec5edbc3fb23a748a3b0e58a5766e"],["/tags/zoj/index.html","4e8bd92c061650c0cbe6ba85f4de4823"],["/tags/并查集/index.html","79d9c9429fcaf8edc8f5cd823c06fb04"],["/tags/洛谷/index.html","1fa1651ef91f45cde959747e44e9d714"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","3b2737a1f2f84e86fdefecd86573b7b9"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
