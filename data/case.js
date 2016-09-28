
/*		前端知识汇总&案例展示
	*   {
	*       caseName: @value String            		*         案例总标题
	*       caseList: @value Array         			*         案例说明信息
	*       	caseTitle: @value String            *         案例标题  
	*      		publishTime: @value String 			*         案例上传时间  格式为：2016.10.09 08:00
	*       	caseThumbnail: @value String        *         缩略图地址
	*       	caseDescription: @value String      *         案例描述 
				caseWebsite: @value String       	*         案例网址
	*       
	*   }
*/




var casees = [
		{
			caseName:"for应用this关键字",
			caseList:[
				{
					caseTitle:"生成100个div",
					publishTime:"2014-04-16 22:08",
					caseThumbnail:"images/case/1/for循环100个div.gif",
					caseDescription:"综合涉及到的知识点是：属性操作、for循环、点击事件<br>点击切换、自动生成、字符串拼接",
					caseWebsite:"https://qyer0222.github.io/first/生成100个div"
				},
				{
					caseTitle:"99乘法表",
					publishTime:"2014-04-16 22:08",
					caseThumbnail:"images/case/1/99乘法表.gif",
					caseDescription:"综合涉及到的知识点是：属性操作、for循环、点击事件、if判断<br>点击切换、自动生成、字符串拼接",
					caseWebsite:"https://qyer0222.github.io/first/99乘法表"
				},
				{
					caseTitle:"模拟手机短信发送",
					publishTime:"2014-05-12 20:08",
					caseThumbnail:"images/case/1/手机聊天.gif",
					caseDescription:"描述：这是我完成的一个小案例，综合涉及到的知识点是判断、字符串拼接，以及布局方面的小技巧，比如提交留言后，A用户在左，B用户在右",
					caseWebsite:"https://qyer0222.github.io/first/模拟手机短信发送"
				},
				{
					caseTitle:"擦擦擦",
					publishTime:"2014-05-13 12:00",
					caseThumbnail:"images/case/1/擦擦擦.gif",
					caseDescription:"综合涉及到的知识点是：for循环、字符串拼接、鼠标移入事件",
					caseWebsite:"https://qyer0222.github.io/first/擦擦擦"
				},
				{
					caseTitle:"点击切换轮播图",
					publishTime:"2014-05-15 21:48",
					caseThumbnail:"images/case/1/点击切换轮播图.gif",
					caseDescription:"综合涉及到的知识点是：if判断、图片切换、数组、字符串拼接",
					caseWebsite:"https://qyer0222.github.io/first/点击切换轮播图"
				},
				{
					caseTitle:"缩略图",
					publishTime:"2014-05-17 21:38",
					caseThumbnail:"images/case/1/缩略图.gif",
					caseDescription:"综合涉及到的知识点是：if判断、图片切换、数组、字符串拼接<br>鼠标移入移出、点击事件、数据记录",
					caseWebsite:"https://qyer0222.github.io/first/缩略图"
				},
				{
					caseTitle:"用htnl5新标签生成带颜色的div",
					publishTime:"2014-05-17 22:38",
					caseThumbnail:"images/case/1/html5color.gif",
					caseDescription:"综合涉及到的知识点是：html5标签，for循环",
					caseWebsite:"https://qyer0222.github.io/first/用htnl5新标签生成带颜色的div"
				},
				{
					caseTitle:"多组图片切换",
					publishTime:"2014-05-21 13:38",
					caseThumbnail:"images/case/1/多组图片切换.gif",
					caseDescription:"综合涉及到的知识点是：if判断、图片切换、数组、字符串拼接、点击事件、数据记录、函数调用<br>点击单一图片进行单一切换，点击组别切换，进行同步切换",
					caseWebsite:"https://qyer0222.github.io/first/多组图片切换"
				}
			]
		},
		{
			caseName:"数据类型、运算符",
			caseList:[
				{
					caseTitle:"评分",
					publishTime:"2014-05-22 09:38",
					caseThumbnail:"images/case/2/评分.gif",
					caseDescription:"综合涉及到的知识点是：鼠标移入移除、自定义属性、属性操作",
					caseWebsite:"https://qyer0222.github.io/second/评分"
				},
				{
					caseTitle:"全选",
					publishTime:"2014-05-22 13:38",
					caseThumbnail:"images/case/2/全选.gif",
					caseDescription:"综合涉及到的知识点是：标签属性、样式操作、属性操作",
					caseWebsite:"https://qyer0222.github.io/second/全选"
				},
				{
					caseTitle:"商品单价计算",
					publishTime:"2014-05-22 13:38",
					caseThumbnail:"images/case/2/商品单价计算.gif",
					caseDescription:"综合涉及到的知识点是：赋值初始化、自定义属性、累加计算",
					caseWebsite:"https://qyer0222.github.io/second/商品单价计算"
				},
				{
					caseTitle:"修改文件名",
					publishTime:"2014-05-22 13:38",
					caseThumbnail:"images/case/2/修改文件名.gif",
					caseDescription:"综合涉及到的知识点是：障眼法操作",
					caseWebsite:"https://qyer0222.github.io/second/修改文件名"
				},
				{
					caseTitle:"选项卡套选项卡",
					publishTime:"2014-05-22 13:38",
					caseThumbnail:"images/case/2/选项卡套选项卡.gif",
					caseDescription:"综合涉及到的知识点是：多重数组嵌套、for套for、自定义属性、函数传参",
					caseWebsite:"https://qyer0222.github.io/second/选项卡套选项卡"
				}
			]
		},{
			caseName:"定时器、运动、日期对象",
			caseList:[
				{
					caseTitle:"时间小练习",
					publishTime:"2014-05-22 13:38",
					caseThumbnail:"images/case/3/时间小练习.gif",
					caseDescription:"综合涉及到的知识点是：时间对象、定时器的开启",
					caseWebsite:"https://qyer0222.github.io/third/时间小练习"
				},
				{
					caseTitle:"滚动时间",
					publishTime:"2014-05-22 13:38",
					caseThumbnail:"images/case/3/滚动时间.gif",
					caseDescription:"综合涉及到的知识点是：时间对象、定时器的开启、障眼法",
					caseWebsite:"https://qyer0222.github.io/third/滚动时间"
				},
				{
					caseTitle:"触摸会自动翻转的时间",
					publishTime:"2014-05-22 13:38",
					caseThumbnail:"images/case/3/触摸会自动翻转的时间.gif",
					caseDescription:"综合涉及到的知识点是：时间对象、定时器的开启、障眼法、鼠标事件",
					caseWebsite:"https://qyer0222.github.io/third/触摸会自动翻转的时间"
				},
				{
					caseTitle:"滑动div",
					publishTime:"2014-05-22 13:38",
					caseThumbnail:"images/case/3/滑动div.gif",
					caseDescription:"综合涉及到的知识点是：控制定时器",
					caseWebsite:"https://qyer0222.github.io/third/滑动div"
				},
				{
					caseTitle:"轮播图",
					publishTime:"2014-05-22 13:38",
					caseThumbnail:"images/case/3/轮播图.gif",
					caseDescription:"综合涉及到的知识点是：控制定时器",
					caseWebsite:"https://qyer0222.github.io/third/轮播图"
				},
				{
					caseTitle:"轮播图运动版",
					publishTime:"2014-05-22 13:38",
					caseThumbnail:"images/case/3/轮播图运动版.gif",
					caseDescription:"综合涉及到的知识点是：控制定时器",
					caseWebsite:"https://qyer0222.github.io/third/轮播图运动版"
				},
				{
					caseTitle:"日历（老版）",
					publishTime:"2014-05-22 13:38",
					caseThumbnail:"images/case/3/日历（老版）.gif",
					caseDescription:"综合涉及到的知识点是：日期对象、字符串拼接",
					caseWebsite:"https://qyer0222.github.io/third/日历（老版）"
				},
				{
					caseTitle:"仿win10日历",
					publishTime:"2014-05-22 13:38",
					caseThumbnail:"images/case/3/仿windows10日历.gif",
					caseDescription:"综合涉及到的知识点是：日期对象、时间戳",
					caseWebsite:"https://qyer0222.github.io/third/仿win10日历"
				},
				{
					caseTitle:"淘宝广告",
					publishTime:"2014-05-22 13:38",
					caseThumbnail:"images/case/3/仿淘宝广告.gif",
					caseDescription:"综合涉及到的知识点是：控制定时器",
					caseWebsite:"https://qyer0222.github.io/third/淘宝广告"
				}
			]
		},
		{
			caseName:"字符串、数组相关方法",
			caseList:[
				{
					caseTitle:"文字搬运工",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/4/文字搬运工最终版.gif",
					caseDescription:"将左右文字进行搬运、通过字符串和数组的相关方法得以实现",
					caseWebsite:"https://qyer0222.github.io/four/文字搬运工"
				},
				{
					caseTitle:"图片排序",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/4/排序.gif",
					caseDescription:"点击从大到小至从小到大按照需求进行排序，打乱顺序会随机排序",
					caseWebsite:"https://qyer0222.github.io/four/图片排序"
				},
				{
					caseTitle:"随机翻动",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/4/随机翻动.gif",
					caseDescription:"根据random进行随机翻动",
					caseWebsite:"https://qyer0222.github.io/four/随机翻动"
				},
				{
					caseTitle:"表情小游戏",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/4/表情小游戏.gif",
					caseDescription:"表情自动掉落，点击后+1分，未点击到不计分、抖动函数、运动、定时器",
					caseWebsite:"https://qyer0222.github.io/four/表情小游戏"
				},
				{
					caseTitle:"查找替换",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/4/查找替换.gif",
					caseDescription:"表情自动掉落，点击后+1分，未点击到不计分、抖动函数、运动、定时器",
					caseWebsite:"https://qyer0222.github.io/four/查找替换"
				}
			]
		},{
			caseName:"DOM、BOM、元素操作",
			caseList:[
				{
					caseTitle:"div掉落",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/5/div掉落.gif",
					caseDescription:"抖动函数、运动、定时器、点击不同的div从该点击的位置进行下落",
					caseWebsite:"https://qyer0222.github.io/five/div掉落"
				},
				{
					caseTitle:"招聘网站",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/5/招聘网站.gif",
					caseDescription:"ajax的简单应用",
					caseWebsite:"https://qyer0222.github.io/five/招聘网站"
				},
				{
					caseTitle:"首行尾行",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/5/首行尾行.gif",
					caseDescription:"鼠标移入移出、DOM兄弟节点",
					caseWebsite:"https://qyer0222.github.io/five/首行尾行"
				},
				{
					caseTitle:"表格数据操作",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/5/表格数据操作.gif",
					caseDescription:"表格的增删改查、数据关联",
					caseWebsite:"https://qyer0222.github.io/five/表格数据操作"
				},
				{
					caseTitle:"多级菜单",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/5/多级菜单.gif",
					caseDescription:"DOM元素操作、自定义属性",
					caseWebsite:"https://qyer0222.github.io/five/多级菜单"
				},
				{
					caseTitle:"划线",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/5/练习划线.gif",
					caseDescription:"DOM元素操作、mousedown记录位置信息",
					caseWebsite:"https://qyer0222.github.io/five/划线"
				},
				{
					caseTitle:"碰撞检测",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/5/碰撞检测.gif",
					caseDescription:"DOM元素操作、距离比较",
					caseWebsite:"https://qyer0222.github.io/five/碰撞检测"
				},
				{
					caseTitle:"上移下移",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/5/上移下移.gif",
					caseDescription:"DOM元素操作、兄弟节点",
					caseWebsite:"https://qyer0222.github.io/five/上移下移"
				},
				{
					caseTitle:"手机滑动",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/5/鼠标滑动.gif",
					caseDescription:"DOM元素操作、判断滑动距离",
					caseWebsite:"https://qyer0222.github.io/five/手机滑动"
				},
				{
					caseTitle:"百度文库详情",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/5/详情介绍.gif",
					caseDescription:"DOM元素操作、宽高计算",
					caseWebsite:"https://qyer0222.github.io/five/百度文库详情"
				},
				{
					caseTitle:"拖拽div",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/5/拖拽div.gif",
					caseDescription:"event事件、mousedown、mousemove、mouseup",
					caseWebsite:"https://qyer0222.github.io/five/拖拽div"
				},
				{
					caseTitle:"右键菜单",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/5/右键菜单.gif",
					caseDescription:"鼠标右键事件、DOM操作",
					caseWebsite:"https://qyer0222.github.io/five/右键菜单"
				},
				{
					caseTitle:"新建文件夹",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/5/新建文件夹.gif",
					caseDescription:"DOM元素操作、新建、删除数据",
					caseWebsite:"https://qyer0222.github.io/five/新建文件夹"
				}
			]
		}
]