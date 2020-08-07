<template>
	<div class="player" :style="[{'top':top},{'left': left}]">
		<!-- 圆形状态 -->
		<transition
			enter-active-class="animated bounce"
			>
			<div
				@click="isSpead=!isSpead"
				v-show="!isSpead"
				class="player-out"
				:style="[{'background-image': `url(${song.backgroundImg})`}]">
				<div class="player-in"
						 :style="[{'background-image': `url(${song.backgroundImg})`}]">
				</div>
			</div>
		</transition>

		<!-- 展开 -->
		<transition
			enter-active-class="animated fadeInLeft"
			leave-active-class="animated fadeOutLeft">
			<div class="spread"
					 v-show="isSpead"
					 :style="[{'background-image': `url(${song.backgroundImg})`}]"
			>
				<div class="player-icon">
					<div class="last-song el-icon-caret-left"
					     @click="lastSong"></div>
					<div class="play-control el-icon-video-pause"
							 v-show="isPlaying"
							 @click="pause"
							 ></div>
					<div class="play-control el-icon-video-play"
							 v-show="!isPlaying"
							 @click="play"></div>
					<div class="next-song el-icon-caret-right"
							 @click="nextSong"></div>
				</div>
				<div class="song-desc">
					<div class="title" :title="song.songName">{{song.songName}}</div>
					<div class="author" :title="song.singer">{{song.singer ? song.singer : song.songName}}</div>
				</div>
				<div class="cover"></div>
				<div class="close el-icon-close" @click="isSpead=false"></div>
			</div>
		</transition>　　

		<audio :src="song.mp3url" ref="musicAudio" @ended="ended" muted="muted"></audio>
	</div>
</template>

<script>
  // import songlist from "./songlist";

  export default {
    name: 'MusicPlayer',
    data () {
      return {
        song: {},
        songIndex: 0,
        isSpead: false,
        isPlaying: false,
        //默认数据
        defaultSong: {
          backgroundImg: 'http://p1.music.126.net/HsPZuZSpnfLtwx5MkPQVUw==/109951164563981166.jpg',
          songName: '大鱼（Live）',
          singer: '周深',
          mp3url: 'http://m8.music.126.net/20200805145247/f6a1b877b33cd7864bc9c7b902dddbbf/ymusic/025e/0208/5559/544a7156375b2bdb1cebb3987a81d29d.mp3'
				}
    	}
  	},
		props: {
      songlist: {  //song数据
        type: Array,
				default: () => []
			},
      top: { //距离顶部的距离
        type: String,
				default: '100px'
			},
      left: { //距离左边的距离
        type: String,
        default: '100px'
      },
		},
		created() {
      this.song = this.songs[this.songIndex]
      this.lackConditions()
      console.log(this.song)
    },
    computed: {
      //用户未传数据
      songs() {
				if (this.songlist.length == 0) {
				  this.songlist.push(this.defaultSong)
				}
				console.log(this.songlist)
				return this.songlist
			}
		},
		methods: {
      pause() {
        console.log('pause')
				this.isPlaying = false
        this.$refs.musicAudio.pause()
			},
			play(){
        console.log('play')
        this.isPlaying = true
        console.log(this.$refs.musicAudio)
        this.$refs.musicAudio.play()
			},

			//下一首
			nextSong(){
        if (this.songIndex !== this.songlist.length - 1){
       	 	this.song = this.songlist[++this.songIndex]
				}else {
          this.songIndex = 0
					this.song = this.songlist[this.songIndex]
				}
        this.lackConditions()
				let self = this
				setTimeout(() => {
				  self.isPlaying = true
					self.$refs.musicAudio.play()
				}, 300)
        console.log('nextsong')
			},

			//上一首
      lastSong(){
        if (this.songIndex !== 0){
          this.song = this.songlist[--this.songIndex]
        }else {
          this.songIndex = this.songlist.length - 1;
          this.song = this.songlist[this.songIndex]
        }
        this.lackConditions()
        let self = this
        setTimeout(() => {
          self.isPlaying = true
          self.$refs.musicAudio.play()
        }, 300)
        console.log('lastsong')
			},

			//自动播放下一首
      ended(){
        this.nextSong()
			},

			//用户传的歌单数据缺少bcgImg | songName | singer时
			lackConditions() {
        if (!this.song.backgroundImg) {
          this.song.backgroundImg = this.defaultSong.backgroundImg
        }
        if (!this.song.songName) {
          this.song.songName = '未知歌曲'
        }
        if (!this.song.singer) {
          this.song.singer = '未知歌手'
        }
        // this.song.backgroundImg ? this.song.backgroundImg : (this.song.backgroundImg = this.defaultSong.backgroundImg)
				// this.song.songName ? this.song.songName : (this.song.songName = '未知歌曲')
				// this.song.singer ? this.song.singer : (this.song.singer = '未知歌手')
			}
		}
	}
</script>

<style scoped>
	.player{
		cursor: pointer;
		position: relative;
	}
	.player-out{
		height: 64px;
		width: 64px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url('../assets/image/bckimg.jpg');
	}
	.player-in{
		height: 58px;
		width: 58px;
		background-size: cover;
		border-radius: 50%;
		animation: revolve 8s linear infinite;
		-webkit-animation: revolve 8s linear infinite;
		background-image: url('../assets/image/bckimg.jpg');
	}
	.spread{
		position: absolute;
		top: 0px;
		left: 29px;
		height: 64px;
		width: 250px;
		/* background-color: rgba(255, 0, 0, 0.281); */
		background-image: url('../assets/image/bckimg.jpg');
		background-size: cover;
		border-radius: 10px;
		color: #fff;
		font-weight: 500;
		display: flex;
		align-items: center;
	}
	.cover{
		position: absolute;
		bottom: 0px;
		left: 0px;
		height: 64px;
		width: 250px;
		border-radius: 10px;
		background-color: rgba(0, 0, 0, 0.219);
	}
	.player-icon{
		display: flex;
		align-items: center;
		margin-left: 8px;
		position: relative;
		z-index: 999;
	}
	.song-desc{
		margin-left: 15px;
		position: relative;
		font-size: 14px;
		z-index: 999;
	}
	.song-desc div{
		width:90px;
		display: -webkit-box;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.title{
	}
	.author{
		font-size: 12px;
		padding-top: 4px;
	}
	.player-icon div{
		padding: 0 5px
	}
	.play-control{
		font-size: 35px;
	}
	.last-song{
		font-size: 20px;
	}
	.next-song{
		font-size: 20px;
	}
	.close{
		padding: 5px 5px;
		position: absolute;
		top: 6px;
		right: 6px;
		font-size: 12px;
		font-weight: 600;
		z-index: 999;
	}
	.close:hover{
		color: rgba(241, 167, 167, 0.726)
	}
	.next-song:hover{
		color: rgb(228, 228, 228)
	}
	.last-song:hover{
		color: rgb(228, 228, 228)
	}
	.play-control:hover{
		color: rgb(228, 228, 228)
	}
	@keyframes revolve {
		0%{transform: rotate(0deg)}
		25%{transform: rotate(90deg)}
		50%{transform: rotate(180deg)}
		75%{transform: rotate(270deg)}
		100%{transform: rotate(360deg)}
	}
	@-webkit-keyframes revolve {
		0%{-webkit-transform: rotate(0deg)}
		25%{-webkit-transform: rotate(90deg)}
		50%{-webkit-transform: rotate(180deg)}
		75%{-webkit-transform: rotate(270deg)}
		100%{-webkit-transform: rotate(360deg)}
	}
</style>
