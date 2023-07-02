---
sidebar_label: （二）常量定义
sidebar_position: 2
---
# 常量定义
1. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span>不允许任何魔法值(即未经预先定义的常量)直接出现在代码中。 
<br/><span style={{color: 'red'}}>反例：</span>
```java
// 开发者A定义了缓存的key。
String key = "Id#taobao_" + tradeId;
cache.put(key, value);
// 开发者 B 使用缓存时直接复制少了下划线，即 key 是"Id#taobao" + tradeId，导致出现故障。 
String key = "Id#taobao" + tradeId;
cache.get(key);
```

2. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span>long 或 Long 赋值时，数值后使用大写 L，不能是小写 <span style={{color: 'red'}}>l</span>，小写容易跟数字混淆，造成误解。
<br /><span style={{color: 'orange'}}>说明：</span>public static final Long NUM = 2l; 写的是数字的 21，还是 Long 型的 2?

3. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span>浮点数类型的数值后缀统一为大写的 D 或 F。 
<br/><span style={{color: 'green'}}>正例：</span>
```java
public static final double HEIGHT = 175.5D;
public static final float WEIGHT = 150.3F;
```

4. <span style={{color: 'orange',fontWeight: 'bold'}}>【推荐】</span>不要使用一个常量类维护所有常量，要按常量功能进行归类，分开维护。
<br /><span style={{color: 'orange'}}>说明：</span>
大而全的常量类，杂乱无章，使用查找功能才能定位到要修改的常量，不利于理解，也不利于维护。 
<br/><span style={{color: 'green'}}>正例：</span>缓存相关常量放在类 CacheConsts 下;系统配置相关常量放在类 SystemConfigConsts 下。

5. <span style={{color: 'orange',fontWeight: 'bold'}}>【推荐】</span>常量的复用层次有五层:跨应用共享常量、应用内共享常量、子工程内共享常量、包内共享常 量、类内共享常量。
<br />1) 跨应用共享常量:放置在二方库中，通常是 client.jar 中的 constant 目录下。  
<br />2) 应用内共享常量:放置在一方库中，通常是子模块中的 constant 目录下。  
 <br/><span style={{color: 'red'}}>反例：</span>
 易懂常量也要统一定义成应用内共享常量，两个程序员在两个类中分别定义了表示“是”的常量:   
 <br />类 A 中:public static final String YES = "yes";
 <br />类 B 中:public static final String YES = "y";
 <br />A.YES.equals(B.YES)，预期是 true，但实际返回为 false，导致线上问题。
<br />3) 子工程内部共享常量:即在当前子工程的 constant 目录下。
<br />4) 包内共享常量:即在当前包下单独的 constant 目录下。
<br />5) 类内共享常量:直接在类内部 private static final 定义。

6. <span style={{color: 'orange',fontWeight: 'bold'}}>【推荐】</span>如果变量值仅在一个固定范围内变化用 enum 类型来定义。
<br /><span style={{color: 'orange'}}>说明：</span>如果存在名称之外的延伸属性应使用 enum 类型，下面正例中的数字就是延伸信息，表示一年中的第几个季节。 
<br/><span style={{color: 'green'}}>正例：</span>
<br/>

```java
public enum SeasonEnum {
	SPRING(1), SUMMER(2), AUTUMN(3), WINTER(4);
	private int seq;
	SeasonEnum(int seq) {
		this.seq = seq; 
	}
	public int getSeq() {
		return seq;
	} 
}
```