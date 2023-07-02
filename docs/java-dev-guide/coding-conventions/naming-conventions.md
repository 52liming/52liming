---
sidebar_label: （一）命名风格
sidebar_position: 1 
---
# 命名风格
1. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span>所有编程相关的命名均不能以<span style={{color: 'blue'}}>下划线或美元符号</span>开始，也不能以下<span style={{color: 'blue'}}>下划线或美元符号</span>结束。 
<br/><span style={{color: 'red'}}>反例：</span><code>_name / __name / $Object / name_ / name$ / Object$</code>
2. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span> 所有编程相关的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。
<br/><span style={{color: 'orange'}}>说明：</span>正确的英文拼写和语法可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式也要避免采用。 
<br/><span style={{color: 'green'}}>正例：</span> ali / alibaba / taobao / kaikeba / aliyun / youku / hangzhou 等国际通用的名称，可视同英文。
<br/><span style={{color: 'red'}}>反例：</span> DaZhePromotion【打折】/ getPingfenByName()【评分】 / String fw【福娃】/ int 变量名 = 3
3. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span> 代码和注释中都要避免使用任何人类语言中的种族歧视性或侮辱性词语。 
<br/><span style={{color: 'green'}}>正例：</span> blockList / allowList / secondary
<br/><span style={{color: 'red'}}>反例：</span> blackList / whiteList / slave / SB / WTF
4. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span> 类名使用 UpperCamelCase 风格，以下情形例外:DO / PO / DTO / BO / VO / UID 等。
<br/><span style={{color: 'green'}}>正例：</span> ForceCode / UserDO / HtmlDTO / XmlService / TcpUdpDeal / TaPromotion
<br/><span style={{color: 'red'}}>反例：</span>forcecode / UserDo / HTMLDto / XMLService / TCPUDPDeal / TAPromotion
5. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span> 方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase 风格。 
<br/><span style={{color: 'green'}}>正例：</span> localValue / getHttpMessage() / inputUserId
6. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span> 常量命名应该全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长。 
<br/><span style={{color: 'green'}}>正例：</span> MAX_STOCK_COUNT / CACHE_EXPIRED_TIME
<br/><span style={{color: 'red'}}>反例：</span> MAX_COUNT / EXPIRED_TIME
7. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span>抽象类命名使用 Abstract 或 Base 开头;异常类命名使用 Exception 结尾，测试类命名以它要 测试的类的名称开始，以 Test 结尾。
8. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span>类型与中括号紧挨相连来定义数组。 
<br/><span style={{color: 'green'}}>正例：</span> 定义整形数组 int[] arrayDemo。
<br/><span style={{color: 'red'}}>反例：</span>在 main 参数中，使用 String args[] 来定义。
9. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span> POJO 类中的任何布尔类型的变量，都不要加 is 前缀，否则部分框架解析会引起序列化错误。 
<br/><span style={{color:'orange'}}>说明：</span> 本文 MySQL 规约中的建表约定第 1 条，表达是与否的变量采用 is_xxx 的命名方式，所以需要在 <code>&lt;resultMap&gt;</code> 设置从 is_xxx 到 xxx 的映射关系。
<br/><span style={{color:'red'}}>反例：</span>定义为基本数据类型 Boolean isDeleted 的属性，它的方法也是 isDeleted()，框架在反向解析时，“误以为”对 应的属性名称是 deleted，导致属性获取不到，进而抛出异常。
10. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span> 包名统一使用小写，点分隔符之间有且仅有一个自然语义的英语单词。包名统一使用<span style={{color: 'blue'}}>单数</span>形 式，但是类名如果有复数含义，类名可以使用复数形式。
<br/><span style={{color: 'green'}}>正例：</span> 应用工具类包名为 com.alibaba.ei.kunlun.aap.util;类名为 MessageUtils(此规则参考 spring 的框架结构)。
11. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span> 避免在子父类的成员变量之间、或者不同代码块的局部变量之间采用完全相同的命名，使可理 解性降低。
<br/><span style={{color:'orange'}}>说明：</span> 子类、父类成员变量名相同，即使是 public 也是能够通过编译，而局部变量在同一方法内的不同代码块中同名 也是合法的，但是要避免使用。对于非 setter / getter 的参数名称也要避免与成员变量名称相同。
<br/><span style={{color:'red'}}>反例：</span>
```java
public class ConfusingName {
    protected int stock;
    protected String alibaba;
    // 非 setter/getter 的参数名称，不允许与本类成员变量同名 public void access(String alibaba) {
    if (condition) {
        final int money = 666; // ...
    }
    for (int i = 0; i < 10; i++) {
        // 在同一方法体中，不允许与其它代码块中的 money 命名相同
        final int money = 15978;
        // ...
    }
}
}
class Son extends ConfusingName {
    // 不允许与父类的成员变量名称相同
    private int stock;
}
```
12. <span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span> 杜绝完全不规范的英文缩写，避免望文不知义。
<br/><span style={{color: 'red'}}>反例：</span> AbstractClass“缩写”成 AbsClass;condition“缩写”成 condi;Function“缩写”成 Fu，此类随意缩写 严重降低了代码的可阅读性。
13. <span style={{color: 'orange',fontWeight: 'bold'}}>【推荐】</span>为了达到代码自解释的目标，任何自定义编程元素在命名时，使用完整的单词组合来表达。
<br/><span style={{color: 'green'}}>正例：</span> 在 JDK 中，对某个对象引用的 volatile 字段进行原子更新的类名为 AtomicReferenceFieldUpdater。
<br/><span style={{color: 'red'}}>反例：</span> 常见的方法内变量为 int a; 的定义方式。
14. <span style={{color: 'orange',fontWeight: 'bold'}}>【推荐】</span>在常量与变量命名时，表示类型的名词放在词尾，以提升辨识度。 
<br/><span style={{color: 'green'}}>正例：</span> startTime / workQueue / nameList / TERMINATED_THREAD_COUNT 
<br/><span style={{color: 'red'}}>反例：</span> startedAt / QueueOfWork / listName / COUNT_TERMINATED_THREAD
15. <span style={{color: 'orange',fontWeight: 'bold'}}>【推荐】</span>如果模块、接口、类、方法使用了设计模式，在命名时要体现出具体模式。 
<br/><span style={{color:'orange'}}>说明：</span> 将设计模式体现在名字中，有利于阅读者快速理解架构设计思想。
<br/><span style={{color: 'green'}}>正例：</span>
```
public class OrderFactory;
public class LoginProxy;
public class ResourceObserver;
```
16. <span style={{color: 'orange',fontWeight: 'bold'}}>【推荐】</span>接口类中的方法和属性不要加任何修饰符号(public 也不要加)，保持代码的简洁性，并加上 有效的 Javadoc 注释。尽量不要在接口里定义常量，如果一定要定义，最好确定该常量与接口的方法 相关，并且是整个应用的基础常量。
<br/><span style={{color: 'green'}}>正例：</span> 接口方法签名 void commit();<br/>
接口基础常量 String COMPANY = "alibaba";
<br/><span style={{color: 'red'}}>反例：</span> 接口方法定义 public abstract void commit();
<br/><span style={{color:'orange'}}>说明：</span> JDK8 中接口允许有默认实现，那么这个 default 方法，是对所有实现类都有价值的默认实现。
17. 接口和实现类的命名有两套规则:  
   1）<span style={{color: 'red',fontWeight: 'bold'}}>【强制】</span> 对于 Service 和 DAO 类，基于 SOA 的理念，暴露出来的服务一定是接口，内部的实现类用 Impl 的后缀 与接口区别。<br/><span style={{color: 'green'}}>正例：</span> CacheServiceImpl 实现 CacheService 接口。<br/>
   2）<span style={{color: 'orange',fontWeight: 'bold'}}>【推荐】</span>如果是形容能力的接口名称，取对应的形容词为接口名(通常是 –able 结尾的形容词)。<br/><span style={{color: 'green'}}>正例：</span> AbstractTranslator 实现 Translatable。
18. <span style={{color: 'green',fontWeight: 'bold'}}>【参考】</span>枚举类名带上 Enum 后缀，枚举成员名称需要全大写，单词间用下划线隔开。 
<br/><span style={{color:'orange'}}>说明：</span> 枚举其实就是特殊的常量类，且构造方法被默认强制是私有。
<br/><span style={{color: 'green'}}>正例：</span> 枚举名字为 ProcessStatusEnum 的成员名称:SUCCESS / UNKNOWN_REASON
19. <span style={{color: 'green',fontWeight: 'bold'}}>【参考】</span>各层命名规约:  
  <br/>A）Service / DAO 层方法命名规约:  

  1）获取单个对象的方法用 get 做前缀。  
  2）获取多个对象的方法用 list 做前缀，复数结尾，如:listObjects  
  3）获取统计值的方法用 count 做前缀。  
  4）插入的方法用 save / insert 做前缀。  
  5）删除的方法用 remove / delete 做前缀。  
  6）修改的方法用 update 做前缀。  

  B）领域模型命名规约:  
  1）数据对象:xxxDO，xxx 即为数据表名。  
  2）数据传输对象:xxxDTO，xxx 为业务领域相关的名称。  
  3）展示对象:xxxVO，xxx 一般为网页名称。  
  4）POJO 是 DO / DTO / BO / VO 的统称，禁止命名成 xxxPOJO。  