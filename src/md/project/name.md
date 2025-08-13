# 命名规范
能够清楚的看出含义及类别。  
如变量不要声明为dataRef这种格式，看不出任何含义，如果是详情页，应该统一叫detailRef。

## 编写规范

> 规则：文件夹及文件名称为单数  
原因：  
css这种文件夹，无法写成复数，可以统一使用单数即可。

> 项目名：  
规则：小写，以-分隔  
如：my-test

> 文件名：  
规则：小写，以-分隔，均为单数  
如：test-file

> 路由：  
规则：以-分割  
如：user-info

> 页面中获取的url参数：  
规则：通过url获取到的参数值内容叫 queryParamRef    

> API请求:  
规则：以method方式开头，以Api结尾  
如：getUserInfoApi，postUserInfoApi 

> 类或构造函数或组件或库或包含多个方法的通用对象:  
规则：大驼峰  
如：MyComponent

> 常量:  
规则：全大写，分隔用_  
如：MAX_COUNT

> 变量名/函数名:  
规则：小驼峰  
如：函数getData，以动词开头  
变量名以名词或形容词开头，数组和对象以类型结尾。数组：后面加Arr，对象：后面加Obj

> 状态:  
规则：只有两种状态时，应该是boolean值，以is开头  
如：isFinished

> 事件处理:  
规则：事件处理 handle开头 
如：handleConfirm

> ts的type:  
规则：大驼峰，并且type类型要以Type结为  
如：TestType

> css:  
规则：全小写，分隔用-  
如：com-color

> 命名统一：  
规则：自定义组件声明props的时候，尽量与element保持一致  
原因：  
如传递一个数组，可以参考element的，叫options；否则，有叫list的，有叫array的，有叫attrList的，很乱

> vue中的类型规则：  
ref作用在dom上以refDom结尾  
ref作用在组件上以refComp结尾  
通过get，set来改变父元素传递过来的数据时，要以VM结尾  
ref类型以ref结尾  
函向组件外emit以on开头  

  
  