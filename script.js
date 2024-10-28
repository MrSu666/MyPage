// 加载动画后禁用滚动
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.body.style.overflow = "auto";
    }, 2500);
});

// 动态更新时间戳
function updateTime(){

    const now = new Date();
    const year =now.getFullYear(); //获取年
    const month =String(now.getMonth()+1).padStart(2,'0') //获取月
    const day =String(now.getDate()+1).padStart(2,'0') //获取天
    const hours = String(now.getHours()).padStart(2,'0'); //格式化小时
    const minutes = String(now.getMinutes()).padStart(2,'0'); //格式化分钟
    const seconds = String(now.getSeconds()).padStart(2,'0'); //格式化秒
    //构建时间字符串
    const timeString = `${year}:${month}:${day}:${hours}:${minutes}:${seconds}`;
    document.getElementById('timestamp').textContent=timeString
}
// 每秒更新时间
setInterval(updateTime,1000);
// 初始化时间
updateTime();