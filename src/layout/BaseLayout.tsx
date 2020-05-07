import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import Demo from '@/components/common/Demo';
import styles from './BaseLayout.module.scss';

export const BaseLayout: Taro.FC = ({ children }) => {
  return (
    <View className={styles.wrap}>
      <View className={styles.content}>{children}</View>
      <Demo />
    </View>
  );
};

export default BaseLayout;
