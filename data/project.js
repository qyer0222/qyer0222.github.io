
/*		项目池
	*   {
	*       projectName: @value String            *         项目名称
	*       projectWebsite: @value String         *         项目网址
	*       startTime: @value String              *         项目开始时间  格式为：2016.10.09
	*       endTime: @value String 			      *         项目结束时间  格式为：2016.10.09
	*       projectExplain: @value String         *         项目说明
	*       projectLabel: @value Array            *         项目技术标签 
			projectThumbnail: @value String       *         缩略图地址
	*       
	*   }
*/

var projects = [
		{
			projectName:"仿QQ浏览器",
			projectWebsite:"http://2013.miaov.com/miaov_demo/diagnosite/",
		    startTime:"2016.04.01",
			endTime:"至今",
			projectExplain:"JS整站开发之：整屏切换+CSS3、导航条和首屏出场动画、3D翻转实现、整屏切换。",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/icon/QQ浏览器.png"
		},
		{
			projectName:"firmorama",
			projectWebsite:"http://v.miaov.com/thanks/",
		    startTime:"2016.01.01",
			endTime:"至今",
			projectExplain:"用户观看页面的图片，其大部分内容是通过JS加载的。为了提高性能，采用了延迟加载、延迟渲染、事件代理等优化方式。此外，还通过监听页面的window.onchang事件对图片进行动态。",
			projectLabel:["html","jQ","css","js","ajax"],
			projectThumbnail:"images/icon/firmorama.png"
		},
		{
			projectName:"CV",
			projectWebsite:"http://v.miaov.com/thanks/",
		    startTime:"2016.01.01",
			endTime:"至今",
			projectExplain:"用户观看页面的图片，其大部分内容是通过JS加载的。为了提高性能，采用了延迟加载、延迟渲染、事件代理等优化方式。此外，还通过监听页面的window.onchang事件对图片进行动态。",
			projectLabel:["html","jQ","css3","js"],
			projectThumbnail:"images/icon/CV.png"
		},
		{
			projectName:"签到送礼",
			projectWebsite:"http://v.miaov.com/thanks/",
		    startTime:"2016.05.01",
			endTime:"至今",
			projectExplain:"采用日历对象、原生js编写，每次打开页面都会同步当前日期，实时同步当前时间（北京），点击签到显示当前今天已经签到",
			projectLabel:["html",'DOM',"js"],
			projectThumbnail:"images/icon/签到.png"
		}
]