# flutter

## package 管理

`pubspec.yaml文件 中管理 依赖包`

在 `dependencies` 下添加包后

使用 `flutter pub get` 下载包

## 有状态的部件（Stateful widget）

Stateless widgets 是不可变的, 这意味着它们的属性不能改变 - 所有的值都是最终的.

Stateful widgets 持有的状态可能在 widget 生命周期中发生变化. 实现一个 stateful widget 至少需要两个类:

一个 StatefulWidget 类。
一个 State 类。 StatefulWidget 类本身是不变的，但是 State 类在 widget 生命周期中始终存在.
