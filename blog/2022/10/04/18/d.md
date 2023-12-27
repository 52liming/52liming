---
slug: 16163035.html
title:  Error creating bean with name
tags: [python,fastapi]
---

[ERROR] Error creating bean with name &#39;aliCloudEdasSdk&#39; defined in class path resource 


## 环境
> spring-cloud-alibaba-dependencies   2021.0.1.0

gulimall-common pom.xml
```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>aliyun-oss-spring-boot-starter</artifactId>
</dependency>

....

<dependencyManagement>
	<dependenies>
		<dependency>
      <groupId>com.alibaba.cloud</groupId>
      <artifactId>aliyun-spring-boot-dependencies</artifactId>
      <version>1.0.0</version>
      <type>pom</type>
      <scope>import</scope>
     </dependency>
  </dependencies>
</dependencyManagement>
```

gulimall-product pom.xml

```xml
        <dependency>
            <groupId>com.atguigu.gulimall</groupId>
            <artifactId>gulimall-common</artifactId>
            <version>0.0.1-SNAPSHOT</version>
        </dependency>
````

## 错误提示
```shell
2022-04-18 21:15:08.104  WARN 79340 --- [           main] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'aliCloudEdasSdk' defined in class path resource [com/alibaba/cloud/spring/boot/context/autoconfigure/EdasContextAutoConfiguration.class]: Bean instantiation via factory method failed; nested exception is org.springframework.beans.BeanInstantiationException: Failed to instantiate [com.alibaba.cloud.context.edas.AliCloudEdasSdk]: Factory method 'aliCloudEdasSdk' threw exception; nested exception is java.lang.NoSuchMethodError: com.aliyuncs.profile.DefaultProfile.getHttpClientConfig()Lcom/aliyuncs/http/HttpClientConfig;


***************************
APPLICATION FAILED TO START
***************************

Description:

An attempt was made to call a method that does not exist. The attempt was made from the following location:

    com.alibaba.cloud.context.AliCloudSdk.<init>(AliCloudSdk.java:76)

The following method did not exist:

    com.aliyuncs.profile.DefaultProfile.getHttpClientConfig()Lcom/aliyuncs/http/HttpClientConfig;

The calling method's class, com.alibaba.cloud.context.AliCloudSdk, was loaded from the following location:

    jar:file:/Users/xiaoming/local/.m2/repository/com/alibaba/cloud/alicloud-context/1.0.5/alicloud-context-1.0.5.jar!/com/alibaba/cloud/context/AliCloudSdk.class

The called method's class, com.aliyuncs.profile.DefaultProfile, is available from the following locations:

    jar:file:/Users/xiaoming/local/.m2/repository/com/aliyun/aliyun-java-sdk-core/3.4.0/aliyun-java-sdk-core-3.4.0.jar!/com/aliyuncs/profile/DefaultProfile.class

The called method's class hierarchy was loaded from the following locations:

    com.aliyuncs.profile.DefaultProfile: file:/Users/xiaoming/local/.m2/repository/com/aliyun/aliyun-java-sdk-core/3.4.0/aliyun-java-sdk-core-3.4.0.jar


Action:

Correct the classpath of your application so that it contains compatible versions of the classes com.alibaba.cloud.context.AliCloudSdk and com.aliyuncs.profile.DefaultProfile

```

根据提示是因为 aliyun-java-sdk-core-3.4.0.jar 这个包没有指定的方法

通过查看idea 查看 maven depenencies 依赖图发现 aliyun-java-sdk-core 并没有爆红显示冲突，
不过我们将鼠标放在  aliyun-java-sdk-core 看到版本显示为 4.5.0，而点进去看到的版本却是3.4.0。
说明 aliyun-oss-spring-boot-starter 中引入的是3.4.0版本，那么这个4.5.0版本在哪里呢？
在 aliyun-spring-boot-dependencies 依赖管理组件中发现引入的是4.5.0

![](https://img2022.cnblogs.com/blog/1084504/202204/1084504-20220418213442377-1845942152.png)

## 解决办法

上面已经找到冲突的包
那么只需要排除3.4.0 即可 （可不单独再引入 4.5.0）
```
        <!-- 阿里云 oss -->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>aliyun-oss-spring-boot-starter</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>com.aliyun</groupId>
                    <artifactId>aliyun-java-sdk-core</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
```
