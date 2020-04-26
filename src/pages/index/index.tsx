/* eslint-disable react/jsx-boolean-value */
import Taro, { useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { useDispatch, useSelector } from '@tarojs/redux'

import styles from './index.scss'

export const Index: Taro.FC = () => {
  const demoState = useSelector(({ demo: { demoState } }) => demoState)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'demo/demoEffect', payload: { demoState: 'updated' } })
  }, [dispatch])
  return <View className={styles.index}>Index {demoState}</View>
}

export default Index
