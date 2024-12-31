# vue编写规范

## 说明

> 初始化：  
规则：初始化等相关的函数调用要放到对应的生命周期中。  
原因：  
> 不要在不同位置都有调用函数的内容，很不清晰，可以放到生命周期中，方便查看及调整。  

> 编写顺序：  
规则：  
按照这个顺序进行编写：
inject、变量声明、computed、methods、回调（handle）、watch、生命周期、provide的方法、provide、expose的方法、expose、return  
原因：方便阅读。  

> 命名：  
规则：  
ref：名字后加Ref  
reactive：名字后Rt  
computed：名字后加Cp  
组件实例：名字后面加CmpRef  
dom实例：名字后面加DomRef  
hooks文件夹里面的内容也使用use开头  

> 暴露：  
规则：需要通过expose来暴露方便。  
原因：  
> 明确暴露的内容，重构时可以明确哪些内容会对外部有影响。  

