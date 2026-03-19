/**
 * 员工配置文件 - 统一管理招募次数
 * 
 * 修改说明：
 * 1. 修改员工的 hired 值即可更新所有页面的招募次数
 * 2. 系统会自动计算总招募次数
 * 3. 首页、角色社区、员工详情页都会同步更新
 */

const EMPLOYEE_CONFIG = {
  // 员工数据 - 只需修改这里的 hired 值
  employees: {
    ajie: {
      id: 'ajie',
      name: '阿杰',
      role: '程序员',
      hired: 320  // 第一名
    },
    nuannuan: {
      id: 'nuannuan',
      name: '暖暖',
      role: '运营专家',
      hired: 280  // 第二名
    },
    xiaowei: {
      id: 'xiaowei',
      name: '小薇',
      role: '行政助理',
      hired: 220  // 第三名
    },
    huaxiaoyi: {
      id: 'huaxiaoyi',
      name: '画小艺',
      role: '绘画助手',
      hired: 180  // 第四名
    },
    fangjie: {
      id: 'fangjie',
      name: '芳姐',
      role: '情感陪伴',
      hired: 150  // 第五名
    },
    laozhang: {
      id: 'laozhang',
      name: '老张',
      role: 'IT专家',
      hired: 125  // 第六名
    }
  },
  
  // 自动计算总招募次数
  getTotalHired() {
    return Object.values(this.employees).reduce((sum, emp) => sum + emp.hired, 0);
  },
  
  // 获取员工列表（按招募次数排序）
  getEmployeesByHired() {
    return Object.values(this.employees).sort((a, b) => b.hired - a.hired);
  }
};

// 冻结配置，防止意外修改
Object.freeze(EMPLOYEE_CONFIG.employees);
