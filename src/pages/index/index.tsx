import Taro, { useEffect } from '@tarojs/taro';
import { useDispatch, useSelector } from '@tarojs/redux';

import { View } from '@tarojs/components';

import BaseLayout from '@/layout/BaseLayout';
import styles from './index.module.scss';

export const Index: Taro.FC = () => {
  const demoState = useSelector(({ demo: { demoState } }) => demoState);
  const dispatch = useDispatch();

  console.log(demoState);

  useEffect(() => {
    dispatch({ type: 'demo/demoEffect', payload: { demoState: 'updated' } });
  }, [dispatch]);
  return (
    <BaseLayout>
      <View className={styles.wrap}>
        <View>Index</View>
      </View>
    </BaseLayout>
  );
};

export default Index;
