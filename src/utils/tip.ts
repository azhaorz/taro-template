import Taro from '@tarojs/taro'
import config from '@/config'

const { confirmColor, cancelColor } = config.tip

/**
 * loading类型
 */
type loadingType = 'normal' | 'nav'

export default class Tip {
  static isNormalLoading = false
  static isNavLoading = false

  /**
   * 小提示
   * @param title 提示的内容
   * @param duration 提示的延迟时间
   */
  static toast(title: string, duration = 1500) {
    Taro.showToast({
      title: title,
      icon: 'none',
      mask: true,
      duration,
    })
    return new Promise(resolve => setTimeout(resolve, duration))
  }

  /**
   * 弹出成功提示
   * @param title  提示的内容
   * @param duration 提示的延迟时间
   */
  static success(title: string, duration = 1500) {
    Taro.showToast({
      title: title,
      icon: 'success',
      mask: true,
      duration,
    })
    return new Promise(resolve => setTimeout(resolve, duration))
  }

  /**
   * 弹出加载
   * @param title 提示的内容
   * @param type loading类型 normal | nav
   */
  static loading(title = '', type: loadingType = 'normal') {
    if (type === 'normal') {
      if (Tip.isNormalLoading) return
      Tip.isNormalLoading = true
      Taro.showLoading({
        title: title,
        mask: true,
      })
    } else {
      if (Tip.isNavLoading) return
      Tip.isNavLoading = true
      Taro.showNavigationBarLoading()
    }
  }

  /**
   * 关闭加载
   * @param type loading类型 normal | nav
   */
  static loaded(type: loadingType = 'normal') {
    if (type === 'normal') {
      if (Tip.isNormalLoading) {
        Tip.isNormalLoading = false
        Taro.hideLoading()
      }
    } else {
      if (Tip.isNavLoading) {
        Taro.hideNavigationBarLoading()
      }
    }
    // 隐藏动画大约500ms，避免后面直接toast时的显示bug
    return new Promise(resolve => setTimeout(resolve, 500))
  }

  /**
   * 双按钮模态框提示
   * @param content 提示的内容
   * @param title 提示的标题
   * @param confirmText 确认按钮的文字，最多 4 个字符
   * @param cancelText 取消按钮的文字，最多 4 个字符
   */
  static double(content: string, title = '提示', confirmText = '确认', cancelText = '取消') {
    return new Promise(async (resolve, reject) => {
      try {
        const { confirm } = await Taro.showModal({
          title,
          content,
          confirmText,
          cancelText,
          confirmColor,
          cancelColor,
        })
        resolve(confirm)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * 单按钮模态框提示
   * @param content 提示的内容
   * @param title 提示的标题
   * @param cancelText 取消按钮的文字，最多 4 个字符
   */
  static single(content: string, title = '提示', confirmText = '知道了') {
    return new Promise(async (resolve, reject) => {
      try {
        const { confirm } = await Taro.showModal({
          title,
          content,
          confirmText,
          showCancel: false,
          confirmColor,
        })
        resolve(confirm)
      } catch (error) {
        reject(error)
      }
    })
  }
}
