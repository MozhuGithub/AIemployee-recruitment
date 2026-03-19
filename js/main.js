/**
 * 主JS文件 - 导航菜单 + 招募次数动态渲染
 */

document.addEventListener('DOMContentLoaded', function() {
  // 初始化移动端菜单
  initMobileMenu();
  
  // 初始化导航栏滚动效果
  initNavbarScroll();
  
  // 更新招募次数
  updateHiredCounts();
});

/**
 * 移动端菜单初始化
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!menuToggle || !navLinks) return;
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
    document.body.classList.toggle('menu-open');
  });
  
  // 点击导航链接后关闭菜单
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('mobile-open');
      document.body.classList.remove('menu-open');
    });
  });
}

/**
 * 导航栏滚动效果
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/**
 * 更新所有招募次数显示
 */
function updateHiredCounts() {
  if (typeof EMPLOYEE_CONFIG === 'undefined') {
    console.warn('EMPLOYEE_CONFIG 未加载');
    return;
  }
  
  // 1. 更新首页总招募次数
  const totalEl = document.querySelector('.hero-stats .highlight');
  if (totalEl) {
    totalEl.textContent = EMPLOYEE_CONFIG.getTotalHired().toLocaleString();
  }
  
  // 2. 更新首页热门员工卡片的招募次数
  document.querySelectorAll('.employee-card[data-employee-id]').forEach(card => {
    const empId = card.dataset.employeeId;
    const hiredEl = card.querySelector('.hired-count');
    const emp = EMPLOYEE_CONFIG.employees[empId];
    
    if (hiredEl && emp) {
      hiredEl.textContent = emp.hired;
    }
  });
  
  // 3. 更新员工详情页的招募次数
  const detailStat = document.querySelector('.detail-header .stat strong');
  if (detailStat) {
    // 从页面路径获取员工ID
    const path = window.location.pathname;
    const match = path.match(/employee-(\w+)\.html/);
    if (match) {
      const empId = match[1];
      const emp = EMPLOYEE_CONFIG.employees[empId];
      if (emp) {
        detailStat.textContent = emp.hired;
      }
    }
  }
}
