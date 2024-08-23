import postcssPxtorem from 'postcss-pxtorem';

export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 基准值，可以根据设计稿进行调整
      propList: ['*'], // 需要转换的属性列表，['*'] 表示所有属性都转换
      selectorBlackList: [], // 不进行转换的选择器列表
      replace: true, // 替换而不是添加 fallback
      mediaQuery: false, // 允许在媒体查询中转换 px
      minPixelValue: 0 // 设置要替换的最小像素值
    }
  }
};