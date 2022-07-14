 # 使用gorm 操作数库

 ```sh
 go get -u gorm.io/gorm
 go get -u gorm.io/driver/sqlite
 ```
 

 ###  连接MySQL

```go
import (
  "gorm.io/driver/mysql"
  "gorm.io/gorm"
)

func main() {
  // user --用户名
  // pass -- 密码
  // @tcp() -- 括号里填写 连接地址
  // dbname 数据库名
  dsn := "user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"

  db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

  if err != nil {
    fmt.Print("\n", "db", db)
    fmt.Print("\n", "-----------------")
    fmt.Print("\n", "err", err)
    fmt.Print("\n", "链接数据库成功")
  }
  // 连接池
  sqlDB, err := db.DB()
  // 关闭连接
  defer sqlDB.Close()
}
  
```