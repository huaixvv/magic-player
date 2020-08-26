## magic-player介绍：

​        `magic-player` 基于Vue2.x，是一个极其简单的，但功能尚可的一个小巧且精致的音乐播放器。支持用户传入歌单来进行音乐的播放，使用简单。

---

#### [演示demo](http://121.36.41.153:8808/) 

#### [github](https://github.com/huaixvv/magic-player) 


#### 安装引入

- 初始化`vue`项目

```
vue create demo
```

- 安装`magic-player`

```
npm add magic-player
```

- 全局引入

```JavaScript
import MagicPlayer from 'magic-player'
import 'magic-player/dist/magic-player.css'

Vue.use(MagicPlayer)
```

---

#### 使用

- 在组件中使用

```html
<magic-player
      top="100px"
      left="100px"
      :songlist="songlist"
    >
</magic-player>
```

- 可传参数：

  |   参数   |      说明      |  类型  | 默认  |
  | :------: | :------------: | :----: | :---: |
  |   top    | 距离顶部的位置 | String | 100px |
  |   left   | 距离左边的位置 | String | 100px |
  | songlist |    歌曲列表    |  数据  | 以下  |

  

> `songlist` 说明：`songlist`要求传入一个列表，列表中存储的是歌曲的对象信息，对象字段包含 `mp3url`(播放链接)、`backgroundImg`(播放器背景图)、`songName`(歌曲名)、`singer`(演唱)；其中 `mp3url` 是必要的，其他字段缺省会显示默认图片、未知歌手等。如果不传`songlist`，会有一个默认的数据，如下：



`songlist`默认如下：

```javascript
[{
      backgroundImg: 'http://p1.music.126.net/HsPZuZSpnfLtwx5MkPQVUw==/109951164563981166.jpg',
      songName: '大鱼（Live）',
      singer: '周深',
      mp3url: 'http://m8.music.126.net/20200805145247/f6a1b877b33cd7864bc9c7b902dddbbf/ymusic/025e/0208/5559/544a7156375b2bdb1cebb3987a81d29d.mp3'
}]
// --------------------
ps: 由于此mp3url是直接获取网易云的地址，所以访问过多会导致url地址请求403，而无法正常播放。只需自己传入符合要求的mp3url即可。
```



- 下面是一个`songlist`的示例：

```javascript
let songlist = [
  {
    backgroundImg: 'https://p1.music.126.net/g1JALP78PBYOl1I4wxHDwA==/844424930132293.jpg',
    songName: '西厢',
    singer: '后弦',
    mp3url: 'http://m7.music.126.net/20200806095850/13a8b199edf4fa98434e84ed6b27be05/ymusic/635c/adeb/a97d/de67a92d17ef20ccfa232474c629b131.mp3'
  },
  {
    backgroundImg: 'https://p2.music.126.net/L8SZ53Nf5le4JDvG6qVB6g==/1424967072083597.jpg',
    songName: '山外小楼夜听雨',
    singer: '任然',
    mp3url: 'http://m7.music.126.net/20200806100006/131d6dd055f595b336733185128ae43e/ymusic/8835/a89d/7149/da6278a722c8c9d37355cc2625759a88.mp3'
  },
  {
    backgroundImg: 'https://p2.music.126.net/K_xxF_4b_BuvsIRR55gqIQ==/109951164305611287.jpg',
    songName: '千里行走',
    mp3url: 'http://m7.music.126.net/20200806100157/2faf92a610626209da851e5774c99851/ymusic/005f/565c/5309/75a909afaaa6abbedd2bdc55de886a86.mp3'
  },
  {
    backgroundImg: 'https://p2.music.126.net/kQJQD58WkmQneTneOYe22A==/109951164252455813.jpg',
    songName: '你是人间四月天',
    singer: '绍帅',
    mp3url: 'http://m8.music.126.net/20200806100301/6fc6b74de4beed445e25ab6dc8853b36/ymusic/5152/5552/030c/f860fa842eb8201274264f2d9eda6139.mp3'
  }
  ]

export default songlist
```
