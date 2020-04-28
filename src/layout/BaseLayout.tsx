import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import TabBar from '@/components/common/TabBar';

export const BaseLayout: Taro.FC = ({ children }) => {
  return (
    <View>
      {children}
      <TabBar />
    </View>
  );
};

export default BaseLayout;
