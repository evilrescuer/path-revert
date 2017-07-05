### ---解决fis构建前后 路径转化问题（如/表示/public）---

## 动机：
在应用路径转化的框架后（如thinkphp、express-generator），对fis来说，会认为引用的路径不正确。</br>
如果fis构建的过程中做了文件哈希重命名，会导致文件重命名成功，但是引用的路径无法更新。</br>

## 解决方案：
用node.js 执行 path-revert 中的main.js</br>
加上缺少的某路径片段，fis构建后，再去除多余的路径片段</br>

## 1. 对source项目目录，运行revert的add模式</br>
## 2. fis3 source目录部署到output目录</br>
## 3. 对output项目目录，运行revert的slim模式</br>
