export default {
  async fetch(request) {
    try {
      const target = 'https://cj.ffzyapi.com/api.php/provide/vod' + new URL(request.url).search;
      const res = await fetch(target, {
        headers: { 
          'Referer': 'https://cj.ffzyapi.com/', 
          'User-Agent': 'Mozilla/5.0' 
        }
      });
      const h = new Headers(res.headers);
      h.set('Access-Control-Allow-Origin', '*');
      return new Response(res.body, { status: res.status, headers: h });
    } catch (e) {
      return new Response('代理出错喵: ' + e.message, { status: 500 });
    }
  }
}
