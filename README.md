# auto-assets README

This a Extension of [auto_access](https://github.com/raomengyun/auto_assets)

# 1. 功能

1. 自动监听资源文件夹，自动生成 assets 声明并插入 pubspec.yaml 文件中.
2. 自动压缩图片资源（jpg/jpeg/png/svg）。
3. 使用类型来声明并且引用图片资源，例如：
   ```dart
   class Assets {
      Assets._();
      static const String get commonIconClose => "assets/common/icon_close.png";
   }
   ```

# 4. 工具使用

> 根目录中是否有 `assets_config.json` 时会自动开启。

`assets_config.json`配置内容：

```json
{
  "assets": "assets/",
  "code": "lib/assets/"
}
```

- `assets` 代表资源的根目录
- `code` 代表自动生成的代码的根目录