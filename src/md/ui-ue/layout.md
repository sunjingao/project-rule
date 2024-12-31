# 排版

原则： 以趋近四边形、避免空旷为主

> 功能区区分(可以通过边框，线、间距控制)  
> + 比如有图片和文字，这种list，不加border边框不易区分时，可以使用border边框。有border边框时都应该有圆角，圆角统一为6px
> + 比如一行里全是文字，并可以换行时。不易区分内容所属范围时，可以使用横线区分
> + 每个功能区有一个8px的padding，至于如何划分功能区，需要根据实际情况来看。  
  在同一行内，有相同功能的组件之间的距离为8px，非相同功能区之间的水平间距为16px。如ant-design-vue的pagination中的间距。


> 同一行的排版  
> + 竖直方向：内容要垂直居中
> + 水平方向：  
  1：元素单一，如仅有图标或仅有文字，可以水平居中  
  2：有标题和内容，都要靠左，标题不超过6个文字。  要按照从左到右的阅读顺序来  
  3：有文字和操作，文字要放在左侧，操作要放在右侧  
  4：越重要的操作越应在右侧。如列表中按钮的顺序为：从左至右，依次为白色（如取消等）、红色（如拒绝，否定等）、蓝色（如通过等）

> 垂直方向的排版  
> + 越上方的部分越重要
