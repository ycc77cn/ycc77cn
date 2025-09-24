// 处理导航栏汉堡图标点击
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// 处理二级分类显示
document.querySelectorAll('.show-subcategory').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('href');
        
        // 添加故障过渡效果
        document.querySelectorAll('.subcategory-content').forEach(content => {
            if (content.style.display === 'block') {
                content.style.animation = 'none';
                content.offsetHeight; // 触发重绘
                content.style.animation = 'glitchOut 0.5s forwards';
                setTimeout(() => {
                    content.style.display = 'none';
                }, 500);
            }
        });
        
        // 显示目标内容
        setTimeout(() => {
            const targetElement = document.querySelector(targetId);
            targetElement.style.display = 'block';
            targetElement.style.animation = 'none';
            targetElement.offsetHeight; // 触发重绘
            targetElement.style.animation = 'glitchIn 0.5s forwards, fadeIn 0.8s ease-out';
            
            // 平滑滚动到目标位置
            targetElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 500);
    });
});

// 监听滚动事件，添加导航栏效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('scrolled');
    setTimeout(() => {
        navbar.classList.remove('scrolled');
    }, 2000);

    // 导航栏滚动阴影效果
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.3)';
    } else {
        navbar.style.boxShadow = '0 0 10px rgba(0, 240, 255, 0.2)';
    }
});

// 添加故障进入和退出动画
const style = document.createElement('style');
style.textContent = `
    @keyframes glitchIn {
        0% { transform: translateX(-5px) skewX(5deg); opacity: 0; }
        20% { transform: translateX(5px) skewX(-5deg); }
        40% { transform: translateX(-3px) skewX(3deg); }
        60% { transform: translateX(3px) skewX(-3deg); }
        80% { transform: translateX(-2px) skewX(2deg); }
        100% { transform: translateX(0) skewX(0); opacity: 1; }
    }
    
    @keyframes glitchOut {
        0% { transform: translateX(0) skewX(0); opacity: 1; }
        20% { transform: translateX(-2px) skewX(2deg); }
        40% { transform: translateX(3px) skewX(-3deg); }
        60% { transform: translateX(-3px) skewX(3deg); }
        80% { transform: translateX(5px) skewX(-5deg); }
        100% { transform: translateX(-5px) skewX(5deg); opacity: 0; }
    }
    
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 淡入动画效果
const fadeElements = document.querySelectorAll('.fade-in');
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    fadeInObserver.observe(element);
});

// 为链接添加点击动画效果
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // 添加点击波纹效果
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(157, 0, 255, 0.3)';
        ripple.style.transform = 'translate(-50%, -50%) scale(0)';
        ripple.style.animation = 'ripple 1s';
        ripple.style.pointerEvents = 'none';
        
        this.appendChild(ripple);
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        // 延迟跳转，等待动画完成
        setTimeout(() => {
            if (href === '#top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.location.href = href;
            }
        }, 300);
        
        // 动画结束后移除波纹元素
        setTimeout(() => ripple.remove(), 1000);
    });
});
