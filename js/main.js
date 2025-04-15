/**
 * 健康助手应用主JavaScript文件
 * 用于实现各种交互功能和数据处理
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('健康助手应用已初始化');
    
    // 初始化所有功能
    initNavigation();
    initCharts();
    initHealthData();
    initDateTimePicker();
});

/**
 * 初始化导航功能
 */
function initNavigation() {
    // 获取所有底部导航项
    const navItems = document.querySelectorAll('.fixed.bottom-0 .flex.flex-col');
    
    // 为每个导航项添加点击事件
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有激活状态
            navItems.forEach(nav => {
                nav.classList.remove('text-indigo-600');
                nav.classList.add('text-gray-500');
            });
            
            // 添加当前项的激活状态
            this.classList.remove('text-gray-500');
            this.classList.add('text-indigo-600');
            
            // 这里可以添加页面切换逻辑
            const navType = this.querySelector('.text-xs').textContent.trim();
            console.log(`导航切换到: ${navType}`);
            
            // 模拟页面切换效果
            simulatePageChange(navType);
        });
    });
}

/**
 * 模拟页面切换效果
 * @param {string} pageType - 页面类型
 */
function simulatePageChange(pageType) {
    // 实际应用中这里应该切换到不同的页面视图
    // 这里仅做示例，模拟切换效果
    alert(`即将切换到"${pageType}"页面 - 实际应用中这里应该无缝切换`);
}

/**
 * 初始化图表功能
 */
function initCharts() {
    // 模拟图表数据更新
    // 实际应用中这里应该集成真实的图表库（如Chart.js, ECharts等）
    console.log('图表初始化完成');
    
    // 模拟心率数据变化
    setInterval(function() {
        const heartRateElements = document.querySelectorAll('.text-2xl.font-bold');
        
        heartRateElements.forEach(element => {
            // 仅对心率元素进行操作
            if (element.nextElementSibling && element.nextElementSibling.textContent.includes('BPM')) {
                // 生成65-85之间的随机心率
                const newHeartRate = Math.floor(Math.random() * 20) + 65;
                element.textContent = newHeartRate;
            }
        });
    }, 3000);
}

/**
 * 初始化健康数据统计
 */
function initHealthData() {
    // 这里可以添加数据加载、处理和展示逻辑
    console.log('健康数据初始化完成');
    
    // 进度条动画
    const progressBars = document.querySelectorAll('.h-1\\.5 .bg-indigo-500, .h-1\\.5 .bg-green-500, .h-1\\.5 .bg-blue-500, .h-1\\.5 .bg-amber-500');
    
    progressBars.forEach(bar => {
        // 初始宽度设为0
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        
        // 添加动画类
        bar.classList.add('progress-animate');
        
        // 延迟执行动画
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 300);
    });
}

/**
 * 初始化日期时间选择器
 */
function initDateTimePicker() {
    // 获取当前日期
    const now = new Date();
    const dateStr = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日`;
    
    // 更新页面上的日期显示
    const dateElements = document.querySelectorAll('.text-gray-600');
    dateElements.forEach(element => {
        if (element.textContent.includes('年') && element.textContent.includes('月')) {
            element.textContent = dateStr;
        }
    });
    
    // 设置星期几
    const weekdayNames = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekdayStr = weekdayNames[now.getDay()];
    
    const weekdayElements = document.querySelectorAll('.text-indigo-600.font-medium');
    weekdayElements.forEach(element => {
        if (element.textContent.includes('星期')) {
            element.textContent = weekdayStr;
        }
    });
}

/**
 * 模拟添加饮食记录功能
 * @param {string} mealType - 餐食类型
 */
function addMealRecord(mealType) {
    console.log(`添加${mealType}记录`);
    alert(`该功能将打开添加${mealType}的表单 - 实际应用中应弹出添加食物的界面`);
}

/**
 * 模拟开始运动功能
 * @param {string} exerciseType - 运动类型
 */
function startExercise(exerciseType) {
    console.log(`开始${exerciseType}`);
    alert(`开始记录${exerciseType}数据 - 实际应用中应启动计时器和数据记录`);
}

// 暴露全局函数以便HTML中调用
window.addMealRecord = addMealRecord;
window.startExercise = startExercise;
