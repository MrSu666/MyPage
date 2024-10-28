// 加载动画后禁用滚动
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.body.style.overflow = "auto";
    }, 2500);
});

// 动态更新时间戳
function updateTime(){
    const now = new Date();
    const timeString = now.toLocaleDateString(); //获取当前的时间
    document.getElementById('timestamp').textContent=timeString
}
// 每秒更新时间
setInterval(updateTime,1000);
// 初始化时间
updateTime();