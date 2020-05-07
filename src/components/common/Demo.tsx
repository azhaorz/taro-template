import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import styles from './Demo.module.scss';

export const Demo: Taro.FC = () => {
  return <View className={styles.wrap}>Demo</View>;
};

export default Demo;
