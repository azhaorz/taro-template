import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import styles from './TabBar.module.scss';

export const TabBar: Taro.FC = () => {
  return <View className={styles.wrap}>TabBar</View>;
};

export default TabBar;
