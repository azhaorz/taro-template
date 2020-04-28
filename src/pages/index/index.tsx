import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import BaseLayout from '@/layout/BaseLayout';
import styles from './index.scss';

export const Index: Taro.FC = () => {
  return (
    <BaseLayout>
      <View className={styles.wrap}>
        <View>Index</View>
      </View>
    </BaseLayout>
  );
};

export default Index;
