// 简单的轮播图逻辑
let index = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// 向前移动
function nextItem() {
    index = (index + 1) % totalItems;
    updateCarousel();
}

// 向后移动
function prevItem() {
    index = (index - 1 + totalItems) % totalItems;
    updateCarousel();
}

// 更新轮播图位置
function updateCarousel() {
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
}

// 添加箭头按钮
const prevBtn = document.createElement('button');
prevBtn.textContent = '←';
prevBtn.onclick = prevItem;
document.querySelector('.carousel').appendChild(prevBtn);

const nextBtn = document.createElement('button');
nextBtn.textContent = '→';
nextBtn.onclick = nextItem;
document.querySelector('.carousel').appendChild(nextBtn);

// 也可以使用setInterval自动播放，这里没有展示自动播放的逻辑