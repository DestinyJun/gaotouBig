var video_list = ['lib/video/test.webm', 'lib/video/test.webm','lib/video/test.webm'];//初始化播放列表
var video_length = video_list.length;//播放列表的长度
var curr=0;//当前播放的视频
var video = document.getElementById('video');
video.addEventListener('ended', play);
play();

function play() {
    console.log(video_list[curr]);
    video.src = video_list[curr];
    video.load();//若视频很短，加载完后再播放，监听canplaythrough事件即可
    video.play();
    curr++;
    if (curr >= video_length) {
        curr = 0;//播放完后，重新播放
    }
}