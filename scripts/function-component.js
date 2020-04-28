/**
 * 组件快速生成脚本
 * 用法：npm run fc `文件名` component/
 */

const fs = require('fs');

const cmpName = process.argv[2];
let dirPath = process.argv[3] || '';

if (!cmpName) {
  console.log('组件名不能为空！');
  process.exit(0);
}

const capPirName = cmpName.substring(0, 1).toUpperCase() + cmpName.substring(1);

//页面模板
const cmpTep = `import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import styles from './${capPirName}.module.scss';

export type ${capPirName}Props = {};

const ${capPirName}: Taro.FC<${capPirName}Props> = props => {
  console.log(props);

  return (
    <View className={styles.wrap}>
      <View>hello ${capPirName}!</View>
    </View>
  );
};

${capPirName}.defaultProps = {};

export default ${capPirName};
`;

// scss文件模版
const scssTep = `.wrap {}
`;

dirPath = `./src/components/${dirPath}`;
const isExist = fs.existsSync(dirPath);
if (!isExist) {
  fs.mkdirSync(dirPath);
}
process.chdir(dirPath);

fs.writeFileSync(`${capPirName}.tsx`, cmpTep);
fs.writeFileSync(`${capPirName}.module.scss`, scssTep);
console.log('success generate compoent');
process.exit(0);
