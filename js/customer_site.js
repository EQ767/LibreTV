const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/from/lzm3u8/at/json/',
        name: '量子资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
