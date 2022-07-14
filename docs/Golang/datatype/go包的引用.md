---
 title: Go语言的主要特征
---

## go 语言包的引用

* 关于package : 需要注意的四点注意事项
  * 1. package 不局限于一个文件,可以由多个文件组成.
  * 2. 不要求package 的名称和所在目录名相同,但是最好保持相同,否则容易引起歧义
  * 3. 每个子目录中只能存在一个package,否则编译会报错
  * 4. package 是以绝对路径GOPATH来寻址,不要用相对路径来 import

> 同目录下同package不用引入

### 包管理工具 go mod 

 > go mod init 

 在项目根目录下go mod init 即可

 标识符的首字母大写,就可以对包外可见