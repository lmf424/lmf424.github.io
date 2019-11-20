/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/22/my-first.html","ce2f107d2e97f6012ce02518e5dd060d"],["/2019/07/22/my-first/first.jpg","91811b412d80117b423807c82e9a965b"],["/2019/07/23/dijstra.html","68134d009f12207888811a8457d2da88"],["/2019/07/23/dijstra/1563862729194.png","c351da19bddd597ef308b7008b7a89d7"],["/2019/07/23/dijstra/1563862773804.png","d2ef8e5214e4cb08a7ebb2b4abff5cd9"],["/2019/07/23/dijstra/1563863527940.png","d7c25b68d6da4748cf51f124d007502f"],["/2019/07/23/dijstra/1563863664903.png","916f0eb2824884b2ff9d8caf0d51b221"],["/2019/07/23/dijstra/1563863742582.png","53f773c112fdf466d7d4cc1631647de5"],["/2019/07/23/dijstra/1563863819140.png","6157732cc76cf43428774f04885321e0"],["/2019/07/23/dijstra/1563863951516.png","331845801b6e652ad0e55083ebb51bb8"],["/2019/07/23/dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/2019/07/23/dijstra/lalala.gif","7f1a7b175d3bc6f0677878dce5dfb494"],["/2019/07/24/poj1797.html","6774d2622bd2ddab4b739296e2f0adea"],["/2019/07/24/poj2253.html","5956a21b8c9ed7fb45715b1de1215843"],["/2019/07/24/poj2253/2253.png","4bdc4a5f70e03a8dc36f6a6f26916a0b"],["/2019/07/24/poj2387.html","c37a925aae3e5be253503f1f17907f80"],["/2019/07/25/floyd.html","519313926aeecc834ec3727f760204f7"],["/2019/07/25/floyd/1564051171338.png","949302f6746383db0dc8014e72a9019c"],["/2019/07/25/floyd/1564051237886.png","c9cbaafa349fb7612b220ff21b3f2452"],["/2019/07/25/floyd/1564052208614.png","55c4add1388037dded482bbd26bfc20f"],["/2019/07/25/floyd/1564052291135.png","d1670d7be56d8b7accdbf52ab27388ff"],["/2019/07/25/floyd/1564052336765.png","e383255981a29476458550b5e2661cb1"],["/2019/07/25/floyd/1564052379218.png","94424d00cb50187880100216cadbef9f"],["/2019/07/25/poj3268.html","599864e888c41ac27edc3f63bc7eb222"],["/2019/07/26/bellman.html","3bc338b7e673d324cb05124c45e5f5ee"],["/2019/07/26/bellman/1564125629485.png","f443984402b0d4d92ed6be05efc198c1"],["/2019/07/26/bellman/1564125848909.png","f0eedabc94d6be668886906b615e3adc"],["/2019/07/26/bellman/1564126314876.png","f79ceb47caec9fe7254b43a41e70da5f"],["/2019/07/26/bellman/1564126386305.png","782a01565bc272e5c1baefd1594cb038"],["/2019/07/26/bellman/1564127047514.png","bcbe76a8077444a17546517a3a9cff69"],["/2019/07/26/poj1860.html","82eedb01a0deb438e4c127954349a3db"],["/2019/07/28/poj1502.html","d549a58877ce759cb71d5bcf92bf6644"],["/2019/07/28/poj3259.html","c8a0c9dbf8c1f28c927594de2e931472"],["/2019/07/28/poj3660.html","1bc28eddb08674d7cf5838006cd0a052"],["/2019/07/29/poj2240.html","c3bf8ad5fb123a70f1cc167d50fb8f94"],["/2019/07/30/Topological-sort.html","12a7f7788d96cead45aa143d95234867"],["/2019/07/30/spfa.html","6222eac42b4f87f8ad912f03e4089022"],["/2019/07/30/spfa/1.jpg","f66ede4b7980b55c3898850ca38b5658"],["/2019/07/30/spfa/1_1.png","d003c9a18904d8b89d5097e6f4f36f2a"],["/2019/07/30/spfa/2.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/3.jpg","7ec7437996b6eff0acd76d987c96cca3"],["/2019/07/30/spfa/4.jpg","34c831a37ed4b9d415f9e6ab66e8e034"],["/2019/07/30/spfa/5.jpg","7b521f213e987d149defbaa840708d8f"],["/2019/07/30/spfa/6.jpg","095973f611b03cef9e04d508694ac993"],["/2019/07/30/spfa/7.jpg","c2327afc6a604a1b01b145a637e7fb51"],["/2019/07/30/spfa/8.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/30/spfa/9.jpg","c985386d734c9d625da34ec81950caf6"],["/2019/07/31/poj1511.html","5a6fe5e9c614ac5195523321d2ad0ee9"],["/2019/08/01/priority-queue.html","4a358efb21bc19696a15431e613ec0ea"],["/2019/08/02/P4779.html","8dc2498155d24f6ee9173095f5e2bc4b"],["/2019/08/02/poj2502.html","5760e87eb66754f5b8d8d6d88e2ef8a8"],["/2019/08/02/poj3159.html","ec8065bf4203aae4cfc8928c61a878f5"],["/2019/08/03/hdu4370.html","944159f0af3bd933b53f62c97fb6067a"],["/2019/08/03/hdu4370/1564895169459.png","c9d9dd1007807ef29a97f9b57b210b3c"],["/2019/08/03/poj1847.html","3da79d2c270cd4c8c2487c55b24f5167"],["/2019/08/03/poj1847/8.3.1.png","3961f834d9f63a9e28cc120819017b40"],["/2019/08/03/poj3169.html","24177bcaffcf7e5d1383d0f97348e180"],["/2019/08/04/Prim.html","44f8d91148b28b026aeca0650f77cb9f"],["/2019/08/04/hdu1232.html","a1fc68477f96a81a37567d2df3c86e70"],["/2019/08/04/lightoj1074.html","77f75e38ce14714b102611ef1eafe797"],["/2019/08/04/poj2236.html","49f0dc24018b05625693b2cf3c418278"],["/2019/08/04/poj2236/1564991288139.png","dc70efba4f25563cf53b1142c82fb57e"],["/2019/08/04/poj2236/1565003068075.png","cdab9be76174fa45908f5f928e45fb9d"],["/2019/08/04/poj2236/1565003423379.png","31bd5dfffb61185f597ca2e191a97365"],["/2019/08/04/poj2236/TIM图片20190805190547-1565004175371.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805190547.jpg","eedb066d4a3c3ae39535c89db3b422c0"],["/2019/08/04/poj2236/TIM图片20190805191700.gif","1c35756af776c1667b9f2602ac44d685"],["/2019/08/04/并查集.html","05dde6516810e5367c85692c3e68b37d"],["/2019/08/07/poj1611.html","e06885f64fe1f200d248426a33a16833"],["/2019/08/09/hdu1213.html","6db37e0419df2fa1e56e10d39d54cc00"],["/2019/08/10/hdu3038.html","042d41091d0363cab02b1f2928dbffeb"],["/2019/08/10/poj1135.html","53fb1da1ed8e7b5b52c86aa10a407911"],["/2019/08/11/poj1251.html","8b288e0f553dfafc859c32cca35e5d2d"],["/2019/08/12/poj1287.html","baf83199b9848590a5ccc796479feed1"],["/2019/08/12/poj2031.html","1be096b2d19bdddb5b149b9ec78a6d44"],["/2019/08/12/poj2421.html","4d6dd88583ab42f9d9f87cb6a4074ed4"],["/2019/08/12/zoj1586.html","d522b5c3c2446f15c5d19818720c3117"],["/2019/08/12/快速输入.html","db3ade321ab85a98bd03edcff569d1ab"],["/2019/08/13/kruskal.html","609f031cfbad029190475a35333b50df"],["/2019/08/13/poj1258.html","8e54bf7cb61ccb8aeacb52667b3347cf"],["/2019/08/13/poj1751.html","77614e015bc72e01649dbb3367cb7763"],["/2019/08/13/poj1789.html","10df3da035ca2bcd0b3c0306bbce286d"],["/2019/08/13/poj2349.html","39f8b85c5e5df46a3f19d7454d7ddf55"],["/2019/08/15/poj1321.html","4ea00f6ce3ff17357c497748ecf2d84d"],["/2019/08/16/Miller-Rabin.html","f8f618972fe95f5145ea01f78c43dc1a"],["/2019/08/16/Miller-Rabin/1565940377100.png","2fd224d239512ab17624872566ff3f6b"],["/2019/08/16/Miller-Rabin/1565940708448.png","45595b686eb7caaa173a57a4f087706b"],["/2019/08/16/Miller-Rabin/1565941020088.png","24bca44110574da91eb510bb1d4e9a0c"],["/2019/08/16/Miller-Rabin/1565941050512.png","b2fa442d96edeac214dd4e0e8d238b48"],["/2019/08/16/poj1426.html","474f4234f1f8bdb475efa2df28d48a0e"],["/2019/08/16/poj2251.html","ab1dddafd5688493a301f99885682516"],["/2019/08/16/poj3087.html","49eaca5f64010ae37c56f52fda8b8913"],["/2019/08/16/poj3126.html","f14a49d4a2d4c206be0105afb76ae6a5"],["/2019/08/16/poj3278.html","b5363194b62331a3335454d376db2038"],["/2019/08/16/poj3279.html","ef9dad328777bf5144d5c440fe32dfae"],["/2019/08/16/朴素的素数判断.html","a26969d3db39a380fbe80a6f2e0fe1a2"],["/2019/08/22/hdu1233.html","8f7cb4effb665c8e5ea02e3303b2cbdd"],["/2019/08/22/hdu1301.html","783ab683df93aebcb67f72757dbfee44"],["/2019/08/22/hdu1875.html","19d5d043c15554299eafd72e32e2ff35"],["/2019/08/22/poj1679.html","175a1933c266bfa02a5325855b61a38b"],["/2019/08/31/2018ningchuanCCPC网络赛.html","7092376e113f73dde005104e32d74b09"],["/2019/09/11/hdu2121.html","cfb89f4df67563f1fb899abea88dc04b"],["/2019/09/11/uva10462.html","7250aba7a950cee35786e1cb62497dcd"],["/2019/09/11/uva10600.html","91685d11a1382ded114a996c9fd4e951"],["/2019/09/11/uva11183.html","916c3738b53f222c2d2f68678b243e6f"],["/2019/09/11/朱刘算法.html","36908c9a5340b22e49ce220ce8101161"],["/2019/09/20/RMQ.html","b5333056ca288b51a02e2373534b1631"],["/2019/09/20/born-kerbosch.html","36ad69a6386048344b23874d46a36b73"],["/2019/09/20/tarjan.html","03b27bb5cf3d6d2dc7c373d474fc015d"],["/2019/09/25/LCA.html","06375a5668744e3a6fd25abb8d28c1b4"],["/2019/09/25/LCA/1209138-20170729151024207-1541824194.png","2e1d13b5b261a3ed30f21fd97559b8cf"],["/2019/10/08/poj3041.html","fdac36990f6a2adbaaa4966a0849de71"],["/2019/10/08/二分图相关.html","5ff42f3d7a22a71bd357fbaa87fe6e0f"],["/2019/10/08/这一年的十月八日.html","8fe34f302b2ae6d37fe6e4a85a71a351"],["/about/index.html","a7c13289e8b1e3e9860a2cc024afcd52"],["/archives/2019/07/index.html","1809383009ca402770956bf9d1cfd357"],["/archives/2019/07/page/2/index.html","3b872c3249e8fae406285199ea2ba4e3"],["/archives/2019/08/index.html","299e3ac46670e9fc42ab32875e0b6f62"],["/archives/2019/08/page/2/index.html","99ba26e6d3835bc4b29909da658a8f12"],["/archives/2019/08/page/3/index.html","5835e91ea48978118e603363e0bd9ed5"],["/archives/2019/08/page/4/index.html","d8dd4b31d32334e1c65e64c15325c458"],["/archives/2019/08/page/5/index.html","3acdfa9d864281add863617fd67fafa0"],["/archives/2019/09/index.html","2106eddab5bd34be3f7c46fdf5cee9ca"],["/archives/2019/10/index.html","42512a396c597501ee023c3cc33c882f"],["/archives/2019/index.html","905349d2088312413e1c77815ca90b67"],["/archives/2019/page/2/index.html","8c0ac1750b8a355ea18de851d09465bf"],["/archives/2019/page/3/index.html","71aae1e0be106c3de7918697d952e575"],["/archives/2019/page/4/index.html","264b46997e33491fe314a8d488501fd1"],["/archives/2019/page/5/index.html","0dd61759c763b614bbf11e718cb0a523"],["/archives/2019/page/6/index.html","0d461c457194deffac7c8837039551ad"],["/archives/2019/page/7/index.html","a09b35b658e244a56eca6fabac5706db"],["/archives/index.html","597328f5e4b05827afa09e8e1165bfac"],["/archives/page/2/index.html","867cd8c569fb309e2b0c5d65171ae333"],["/archives/page/3/index.html","30b2dcaab7447e0d1185d8f180fd266b"],["/archives/page/4/index.html","0939c03fbc6faacd26d9874a750ab476"],["/archives/page/5/index.html","b42ebaf77ad42715f4abe58aa37f5092"],["/archives/page/6/index.html","3ebcc79d4878facfc3e5ad4f4a37242f"],["/archives/page/7/index.html","b334b3c3d9f82fa58776ffe395d33c20"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/STL/index.html","35066fab42eaed0c57a5f4eb82526cce"],["/categories/algorithm/index.html","8ada89cd194df3a1da6db264bfaa22f9"],["/categories/algorithm/page/2/index.html","cb7b02a221ad1540c6447dda6892faf3"],["/categories/algoritm/index.html","b4845db13e13db6f9384af8e4650c691"],["/categories/hdu/index.html","4bb87351e20d2fea58631de4e1569300"],["/categories/index.html","885a1732bf9ade26efb136ea2eec1f9c"],["/categories/lightoj/index.html","acca32c3293addd857b5300fc68235b3"],["/categories/poj/index.html","4c74ae6d6badd5a5068c4ae25913d046"],["/categories/poj/page/2/index.html","d0c76cbd16e241defaaee029954a4348"],["/categories/poj/page/3/index.html","dc7e640d22bd36eea356d9dbcfc3a3c5"],["/categories/poj/page/4/index.html","b5e19e07efcde5eb4c6f09245a99dc88"],["/categories/somethings/index.html","0fa9b4acf0739386964af88319ac32f0"],["/categories/uva/index.html","69d7a814e5f4d434b3ba32a4b8465d46"],["/categories/xiu/index.html","ac78753ad85d6b6d1fbf2b6555f59c98"],["/categories/zoj/index.html","fae34eae9660202a9a390535a5b63268"],["/categories/洛谷/index.html","73734760d1db90278a9edff10efedcc9"],["/css/main.css","37c958282b3c0a1c6020cf67b98dccb9"],["/gallery/index.html","e5b941a8e21713bc75a5e966e147e7f7"],["/image/Dijstra/1563866213798.png","4fe00de4debd69272bf402745e912d44"],["/image/background.jpg","7690c13196e365259e8f8dcd00b45063"],["/image/car.gif","96d8c992ffb5c53f362fbe6f755999b3"],["/image/first.jpg","91811b412d80117b423807c82e9a965b"],["/image/funny.gif","3e53ae588ec2b3770bab717488a519e1"],["/image/lolicon.jpg","3f8af0326fdbc545ac41693e8b24d765"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","82eae3dadaadf5abc6de47a6e2fe9ea9"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","7690c13196e365259e8f8dcd00b45063"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","6369d89cc4135be42f8855a89848b28d"],["/images/favicon-32x32-next.png","a6e67811320dd6a4a4f6c729eb08cf67"],["/images/header.jpg","91811b412d80117b423807c82e9a965b"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","5c252d22873276e9b23c274ee96bdab8"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/crash_cheat.js","20dc6e0b2af9ee197bf49a43401af576"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-ribbon/README.html","53872549f3ad95e76ddce43866b30598"],["/lib/canvas-ribbon/canvas-nest-nomobile.min.js","698ea0710bd84dc7640093bab947d64f"],["/lib/canvas-ribbon/canvas-nest.min.js","95e027408a9183dfe8c9878492ec2c38"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","7c36d540924fd38774a46dc1c80b8ae2"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d55721ff5e4023d3570eea6469137f97"],["/live2d-widget/demo/demo1.html","f3a5c8536c8e915bb3e8180b4fbde425"],["/live2d-widget/demo/demo2.html","e1f2247124a3b0fc343ef3ef3bed8ad3"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","450a889136df8a90f0d94cc8d8ace1a8"],["/live2d-widget/waifu.css","8c5d3363aca0e43de45ed1a8e51b688f"],["/page/10/index.html","668fdaa983cf8c54f576a5d0fc775278"],["/page/11/index.html","f96d866b28cb5e69dd4f5f485c50e50c"],["/page/12/index.html","b3bf0d5608929d694ca288cd3cc71bfe"],["/page/13/index.html","5eaecb909a4341fba57903b8bc66390c"],["/page/14/index.html","af1a9a00b892d2a2a0b9d38903fda5b0"],["/page/2/index.html","47572cd6aa66722ce2568da9a772693c"],["/page/3/index.html","0a9cbd9673713b9ba79163234b848542"],["/page/4/index.html","8621e74336b718525b95739cd1a914c9"],["/page/5/index.html","b88a3b544c7ef124daff687f0bd19f1b"],["/page/6/index.html","5f4fe5dd60543321f2fd2c082cd63a17"],["/page/7/index.html","3e145c828b5583bacdbb881d7391b571"],["/page/8/index.html","eabd2b66d033c50c16ab028b8d2ed245"],["/page/9/index.html","4ddd31a00a156b9d89dbbbeec9c7fd90"],["/sw-register.js","e65c92e0295028d3ea940dc5a6ce43f2"],["/tags/LCA/index.html","f4e893a0a26d039e48044f250e5b40d6"],["/tags/Miller-Rabin/index.html","a12db4b37fa629dbb0c29b1c9f033c4f"],["/tags/Prim/index.html","8131686dd88c13dbb87ae1cbfa805a5a"],["/tags/RMQ/index.html","fc5afc9ac3a8db4fad87167d6280c76e"],["/tags/STL/index.html","5026e6594247852818a05c1e36a34975"],["/tags/bellman/index.html","ea50104d7b79dcdf53bf13d0f0b163a3"],["/tags/bfs/index.html","3cd69a96438c17c6585c66e67d0c3c38"],["/tags/born-kerbosch/index.html","319b1299636666588dfee473fbda8697"],["/tags/dfs/index.html","8298091956449e5f758e06fd667d6da4"],["/tags/dijstra/index.html","7fbbf62304f5780374968d81a31e0753"],["/tags/dijstra/page/2/index.html","fab0f87e171172bdf96e83a2c854b913"],["/tags/floyd/index.html","02aeef1bcf36dbd8d192b8c510d28188"],["/tags/hdu/index.html","9f93b3fe00bf5ac4da6f32b49fe63be1"],["/tags/index.html","70224d122b7464f543dd4847fd0c2509"],["/tags/kruskal/index.html","a386bedd24ea560fcb922e643577a040"],["/tags/kuangbin/index.html","5fc3efee41e00ef1606283ef0be7924c"],["/tags/kuangbin/page/2/index.html","790f645afab77c9bc7cd07f778ab1919"],["/tags/kuangbin/page/3/index.html","ca8c33c14b519bec14795f545fda01a9"],["/tags/kuangbin/page/4/index.html","e44f7a563bfa82810d62c7cf5c39d499"],["/tags/kuangbin/page/5/index.html","7e720521c9e83f233699db0b3d0036b0"],["/tags/lightoj/index.html","e8c19171811e25cc91f6da3c51babf43"],["/tags/poj/index.html","1c6410567b84f807655e61e4b3018645"],["/tags/poj/page/2/index.html","0dda3efd3abfafb0341ed72212819fe5"],["/tags/poj/page/3/index.html","bbb47b39dcc9eac8f9e778cdfa216fab"],["/tags/poj/page/4/index.html","7bde24482abfe4246178be237a6e874c"],["/tags/prime/index.html","18c39433d400d1d2892a9be514470488"],["/tags/spfa/index.html","48690b9fe96727806a70a6c238bf03a5"],["/tags/tarjan/index.html","eff45317bbd969c8cac9e6249e76901f"],["/tags/test/index.html","524e7ca26a637e1983bec77e72c686f5"],["/tags/topsort/index.html","c19554f6713803a4a2be32518906c780"],["/tags/uva/index.html","83b951620428bdde91757a5d791c1154"],["/tags/xiu/index.html","cf581a6ed79cece7bc049ec1f68a46b7"],["/tags/zoj/index.html","970415e51af62d78fc83d39e39988863"],["/tags/匈牙利算法/index.html","9f09ac2b47342393c298a9e970c087bb"],["/tags/并查集/index.html","e0955743773cad50323fd571d8ac8479"],["/tags/最小树形图/index.html","aac1cad41b844f90ac0828ef56ed760b"],["/tags/朱刘算法/index.html","de4ba5c6b2c20079524e61671c26324a"],["/tags/模拟/index.html","2e8fc2cc4c7eae1ed11c9a5e5d96233b"],["/tags/次小生成树/index.html","a65b94ca79ee6fd41c6cf86c99003e4c"],["/tags/洛谷/index.html","306dd9ef6b9e201d1e4a8e54d497f3b8"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","3b2737a1f2f84e86fdefecd86573b7b9"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
