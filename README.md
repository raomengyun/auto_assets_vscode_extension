# auto-assets README

This a Extension of [auto_access](https://github.com/raomengyun/auto_assets)

# 1. 解决的问题

1. Flutter 以文件夹形式声明资源时。只添加 2x 3x 图，Flutter 的搜索系统是无法查找出对应资源的。
2. Flutter 资源是直接拷贝至 Native 端的，需要进行压缩，工具: imagemin。
3. 资源强类型化是更好的资源管理方式，因为 Dart 是静态强类型语言，我们可以借助这个特征来自动分析未使用的资源，方便未来的资源管理。

# 2. 实施

1. 自动监听资源文件夹，自动生成 assets 声明并插入 pubspec.yaml 文件中.
2. 自动压缩图片资源。
3. 使用类型来声明并且引用图片资源，例如：
   ```dart
   class Assets {
      Assets._();
      static const String get commonIconClose => "assets/common/icon_close.png";
   }
   ```

# 4. 工具使用

## 4.1. 项目配置

在项目根目录下建一个 `assets_config.json` 文件，文件内容：

```json
{
  "assets": "assets/",
  "code": "lib/assets/"
}
```

- `assets` 代表资源的根目录
- `code` 代表自动生成的代码的根目录

## 4.2. 执行命令

`Command`+`Shift`+`P`，选择 `Auto Assets`。

![auto_assets](https://raw.githubusercontent.com/raomengyun/auto_assets_vscode_extension/master/images/auto_assets.png)

执行命令后，资源文件夹内所有的变动都会自动更新到自动生成的代码上。
