var video_list = ['lib/video/test1.mp4', 'lib/video/test2.mp4','lib/video/test1.mp4'];//初始化播放列表
var video_length = video_list.length;//播放列表的长度
var curr=0;//当前播放的视频
var video = document.getElementById('video');
video.addEventListener('ended', play);
play();

console.log(video);
// 左边点击切换视频
function leftimgclick() {
    if (curr < 1){
        // console.log('12');
        alert('已经是第一个视频');
    }else {
        curr--;
        console.log(curr);
        playVide();
    }
}
// 右边点击切换视频
function rightimgclick() {
    // console.log('34');
    if (curr >= video_length-1){
        alert('已经是最后一个视频');
    }else {
        curr++;
        console.log(curr);
        playVide();
    }

}
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
function playVide() {
    console.log(video_list[curr]);
    video.src = video_list[curr];
    video.load();//若视频很短，加载完后再播放，监听canplaythrough事件即可
    video.play();
}