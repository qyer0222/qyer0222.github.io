(function(window){
	var str;
	var num;
	var arrT;
	var arrL;
	var con_body;
	var Width;
	var space;
	var cell;
	var Outerwidth;
	var sUrl;
	var loader;
	var iPage;
	var onOff;
	var fn;
	var len = 0;
	var datad = [{"id":"620963","title":"","referer":"https:\/\/www.tumblr.com\/dashboard","url":"http:\/\/www.wookmark.com\/image\/620963","width":"540","height":"540","image":"http:\/\/www.wookmark.com\/images\/original\/620963_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/620963_wookmark.jpg"},{"id":"620933","title":"The Perfect Office - Powerbeats3, DJI Pro Drone, Glance Clock and Office Ideas | Abduzeedo","referer":"http:\/\/abduzeedo.com\/perfect-office-powerbeats3-dji-pro-drone-glance-clock-and-office-ideas","url":"http:\/\/www.wookmark.com\/image\/620933\/the-perfect-office-powerbeats3-dji-pro-drone-glance-clock-and-office-ideas-abduzeedo","width":"564","height":"845","image":"http:\/\/www.wookmark.com\/images\/original\/620933_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/620933_wookmark.jpg"},{"id":"623426","title":"Mercedes-Benz Vision Van Concept - Car Body Design","referer":"http:\/\/www.carbodydesign.com\/2016\/09\/mercedes-benz-vision-van-concept\/","url":"http:\/\/www.wookmark.com\/image\/623426\/mercedes-benz-vision-van-concept-car-body-design","width":"720","height":"480","image":"http:\/\/www.wookmark.com\/images\/original\/623426_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623426_wookmark.jpg"},{"id":"621004","title":"Projet TOYOTA | ASILE Paris - Art of the image - Retouche cr\u00e9ative","referer":"http:\/\/asile-paris.com\/portfolio\/all\/projet-398","url":"http:\/\/www.wookmark.com\/image\/621004\/projet-toyota-asile-paris-art-of-the-image-retouche-cr-ative","width":"1405","height":"900","image":"http:\/\/www.wookmark.com\/images\/original\/621004_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621004_wookmark.jpg"},{"id":"621048","title":"","referer":"https:\/\/www.tumblr.com\/dashboard","url":"http:\/\/www.wookmark.com\/image\/621048","width":"540","height":"540","image":"http:\/\/www.wookmark.com\/images\/original\/621048_wookmark.gif","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621048_wookmark.gif"},{"id":"621074","title":"","referer":"https:\/\/www.tumblr.com\/dashboard","url":"http:\/\/www.wookmark.com\/image\/621074","width":"500","height":"773","image":"http:\/\/www.wookmark.com\/images\/original\/621074_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621074_wookmark.jpg"},{"id":"621036","title":"EVERYDAYS 2 on","referer":"https:\/\/www.behance.net\/gallery\/36167005\/EVERYDAYS-2","url":"http:\/\/www.wookmark.com\/image\/621036\/everydays-2-on","width":"1200","height":"1200","image":"http:\/\/www.wookmark.com\/images\/original\/621036_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621036_wookmark.jpg"},{"id":"620934","title":"Football Training Wear. Nike.com ","referer":"http:\/\/www.nike.com\/ae\/en_gb\/c\/football\/training-wear","url":"http:\/\/www.wookmark.com\/image\/620934\/football-training-wear-nike-com","width":"1600","height":"750","image":"http:\/\/www.wookmark.com\/images\/original\/620934_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/620934_wookmark.jpg"},{"id":"623366","title":"PENCIL drawings","referer":"https:\/\/www.facebook.com\/veriapriyatno\/photos\/a.237551389902.170651.236259044902\/10154597937344903\/?type=3&theater","url":"http:\/\/www.wookmark.com\/image\/623366\/pencil-drawings","width":"768","height":"960","image":"http:\/\/www.wookmark.com\/images\/original\/623366_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623366_wookmark.jpg"},{"id":"623452","title":"Fine Art Beauty Portraits by Surabhi Gupta","referer":"https:\/\/photogrist.com\/fine-art-beauty-portraits-surabhi-gupta\/","url":"http:\/\/www.wookmark.com\/image\/623452\/fine-art-beauty-portraits-by-surabhi-gupta","width":"1680","height":"1200","image":"http:\/\/www.wookmark.com\/images\/original\/623452_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623452_wookmark.jpg"},{"id":"623174","title":"tumblr_ni1sal3rJg1qeh2m0o5_500.jpg (500\u00d7750)","referer":"http:\/\/abcbabcba.tumblr.com\/post\/150518847397\/unknown999-%E5%B0%8F%E6%B1%A0%E9%87%8C%E5%A5%88-wanibooks126","url":"http:\/\/www.wookmark.com\/image\/623174\/tumblr-ni1sal3rjg1qeh2m0o5-500-jpg-500-750","width":"500","height":"750","image":"http:\/\/www.wookmark.com\/images\/original\/623174_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623174_wookmark.jpg"},{"id":"623192","title":"Epic Adventure Photography by Daniel Malikyar","referer":"https:\/\/photogrist.com\/epic-adventure-photography-daniel-malikyar\/","url":"http:\/\/www.wookmark.com\/image\/623192\/epic-adventure-photography-by-daniel-malikyar","width":"1080","height":"1349","image":"http:\/\/www.wookmark.com\/images\/original\/623192_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623192_wookmark.jpg"},{"id":"623032","title":"K. Rawson","referer":"http:\/\/www.kaelarawson.com\/","url":"http:\/\/www.wookmark.com\/image\/623032\/k-rawson","width":"1500","height":"2000","image":"http:\/\/www.wookmark.com\/images\/original\/623032_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623032_wookmark.jpg"},{"id":"623242","title":"Allthesketches.com","referer":"https:\/\/www.google.co.in\/imgres?imgurl=https%3A%2F%2F66.media.tumblr.com%2F037724dc3f9bc23520282a9b03edaf6a%2Ftumblr_nkekjq9lox1qkbpm3o1_500.jpg&imgrefurl=https%3A%2F%2Fwww.tumblr.com%2Ftagged%2FGrigory-Butin&docid=PqxCmgj1a1wenM&tbnid=kC1NLGnfx-xyMM%3A&w=500&h=238&client=firefox-b&bih=821&biw=1708&ved=0ahUKEwimgsz67JbPAhXMt48KHbLoBpcQMwhJKCIwIg&iact=mrc&uact=8","url":"http:\/\/www.wookmark.com\/image\/623242\/allthesketches-com","width":"500","height":"238","image":"http:\/\/www.wookmark.com\/images\/original\/623242_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623242_wookmark.jpg"},{"id":"621051","title":"tumblr_od3mg03ySJ1qhyndxo1_1280.png (850\u00d71043)","referer":"http:\/\/r2-r.tumblr.com\/","url":"http:\/\/www.wookmark.com\/image\/621051\/tumblr-od3mg03ysj1qhyndxo1-1280-png-850-1043","width":"850","height":"1043","image":"http:\/\/www.wookmark.com\/images\/original\/621051_wookmark.png","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621051_wookmark.png"},{"id":"621006","title":"Projet DS | ASILE Paris - Art of the image - Retouche cr\u00e9ative","referer":"http:\/\/asile-paris.com\/portfolio\/all\/projet-389","url":"http:\/\/www.wookmark.com\/image\/621006\/projet-ds-asile-paris-art-of-the-image-retouche-cr-ative","width":"1200","height":"900","image":"http:\/\/www.wookmark.com\/images\/original\/621006_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621006_wookmark.jpg"},{"id":"621024","title":"Ankor on","referer":"https:\/\/www.behance.net\/gallery\/41352307\/Ankor","url":"http:\/\/www.wookmark.com\/image\/621024\/ankor-on","width":"1400","height":"934","image":"http:\/\/www.wookmark.com\/images\/original\/621024_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621024_wookmark.jpg"},{"id":"621026","title":"\u2014 Local Gatherings","referer":"http:\/\/designbby.com\/post\/149078053139\/local-gatherings","url":"http:\/\/www.wookmark.com\/image\/621026\/local-gatherings","width":"564","height":"551","image":"http:\/\/www.wookmark.com\/images\/original\/621026_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621026_wookmark.jpg"},{"id":"621029","title":"Misha No","referer":"http:\/\/inspiration.mishano.ru\/","url":"http:\/\/www.wookmark.com\/image\/621029\/misha-no","width":"600","height":"857","image":"http:\/\/www.wookmark.com\/images\/original\/621029_wookmark.gif","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621029_wookmark.gif"},{"id":"623196","title":"Sketch_Book on","referer":"https:\/\/www.behance.net\/gallery\/20294215\/Sketch_Book","url":"http:\/\/www.wookmark.com\/image\/623196\/sketch-book-on","width":"1240","height":"465","image":"http:\/\/www.wookmark.com\/images\/original\/623196_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623196_wookmark.jpg"},{"id":"621034","title":"EVERYDAYS 2 on","referer":"https:\/\/www.behance.net\/gallery\/36167005\/EVERYDAYS-2","url":"http:\/\/www.wookmark.com\/image\/621034\/everydays-2-on","width":"1200","height":"1200","image":"http:\/\/www.wookmark.com\/images\/original\/621034_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621034_wookmark.jpg"},{"id":"620969","title":"Beauty Fine Art Photography by Claire Luxton","referer":"https:\/\/photogrist.com\/beauty-fine-art-photography-claire-luxton\/","url":"http:\/\/www.wookmark.com\/image\/620969\/beauty-fine-art-photography-by-claire-luxton","width":"1080","height":"1349","image":"http:\/\/www.wookmark.com\/images\/original\/620969_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/620969_wookmark.jpg"},{"id":"621049","title":"Linxspiration","referer":"http:\/\/linxspiration.com\/page\/16","url":"http:\/\/www.wookmark.com\/image\/621049\/linxspiration","width":"500","height":"334","image":"http:\/\/www.wookmark.com\/images\/original\/621049_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621049_wookmark.jpg"},{"id":"623031","title":"Portfolio \u2014 K. Rawson","referer":"http:\/\/www.kaelarawson.com\/portfolio\/","url":"http:\/\/www.wookmark.com\/image\/623031\/portfolio-k-rawson","width":"1000","height":"1500","image":"http:\/\/www.wookmark.com\/images\/original\/623031_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623031_wookmark.jpg"},{"id":"622977","title":"Gashetka | Transportation Design : Photo","referer":"http:\/\/gashetka.tumblr.com\/image\/150409488309","url":"http:\/\/www.wookmark.com\/image\/622977\/gashetka-transportation-design-photo","width":"1080","height":"1080","image":"http:\/\/www.wookmark.com\/images\/original\/622977_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/622977_wookmark.jpg"},{"id":"623014","title":"Ad\u00e9 blog web design | Editorial \/ Poster | Pinterest","referer":"https:\/\/www.pinterest.com\/pin\/504966176947622030\/","url":"http:\/\/www.wookmark.com\/image\/623014\/ad-blog-web-design-editorial-poster-pinterest","width":"564","height":"2192","image":"http:\/\/www.wookmark.com\/images\/original\/623014_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623014_wookmark.jpg"},{"id":"620919","title":"pureblyss","referer":"http:\/\/pureblyss.tumblr.com\/post\/150273638279","url":"http:\/\/www.wookmark.com\/image\/620919\/pureblyss","width":"500","height":"667","image":"http:\/\/www.wookmark.com\/images\/original\/620919_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/620919_wookmark.jpg"},{"id":"623408","title":"Linxspiration \u2014 https:\/\/www.instagram.com\/p\/BKbF-NrA6tG\/","referer":"http:\/\/linxspiration.com\/post\/150496726051\/httpswwwinstagramcompbkbf-nra6tg","url":"http:\/\/www.wookmark.com\/image\/623408\/linxspiration-https-www-instagram-com-p-bkbf-nra6tg","width":"937","height":"1171","image":"http:\/\/www.wookmark.com\/images\/original\/623408_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623408_wookmark.jpg"},{"id":"622976","title":"tumblr_o9uv37TRBs1qiw9xho2_1280.jpg (JPEG Image, 1280\u00a0\u00d7\u00a0720 pixels)","referer":"","url":"http:\/\/www.wookmark.com\/image\/622976\/tumblr-o9uv37trbs1qiw9xho2-1280-jpg-jpeg-image-1280-720-pixels","width":"1280","height":"720","image":"http:\/\/www.wookmark.com\/images\/original\/622976_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/622976_wookmark.jpg"},{"id":"623015","title":"Swaron Women's Unstitched Salwar Suit - Orange from Swaron | Salwar Suits | clothing-store | HomeShop18.com","referer":"http:\/\/www.homeshop18.com\/swaron-women-unstitched-salwar-suit-orange\/clothing\/women\/product:33924305\/cid:14999\/?it_category=hs18bot&it_action=recentlyViewedProducts&it_label=33924305&it_value=0","url":"http:\/\/www.wookmark.com\/image\/623015\/swaron-women-s-unstitched-salwar-suit-orange-from-swaron-salwar-suits-clothing-store-homeshop18-com","width":"300","height":"420","image":"http:\/\/www.wookmark.com\/images\/original\/623015_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623015_wookmark.jpg"},{"id":"621031","title":"U-S-E on","referer":"https:\/\/www.behance.net\/gallery\/41736117\/U-S-E","url":"http:\/\/www.wookmark.com\/image\/621031\/u-s-e-on","width":"1400","height":"1024","image":"http:\/\/www.wookmark.com\/images\/original\/621031_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621031_wookmark.jpg"},{"id":"623070","title":"Daily Design Inspiration | Abduzeedo","referer":"http:\/\/abduzeedo.com\/index.php\/daily-design-inspiration-38","url":"http:\/\/www.wookmark.com\/image\/623070\/daily-design-inspiration-abduzeedo","width":"850","height":"1314","image":"http:\/\/www.wookmark.com\/images\/original\/623070_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623070_wookmark.jpg"},{"id":"621033","title":"Design by Toko \u2014 Home","referer":"http:\/\/designbytoko.com\/","url":"http:\/\/www.wookmark.com\/image\/621033\/design-by-toko-home","width":"1685","height":"1065","image":"http:\/\/www.wookmark.com\/images\/original\/621033_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621033_wookmark.jpg"},{"id":"622975","title":"tumblr_odietsRyLH1qiw9xho4_1280.jpg (JPEG Image, 1200\u00a0\u00d7\u00a0575 pixels)","referer":"","url":"http:\/\/www.wookmark.com\/image\/622975\/tumblr-odietsrylh1qiw9xho4-1280-jpg-jpeg-image-1200-575-pixels","width":"1200","height":"575","image":"http:\/\/www.wookmark.com\/images\/original\/622975_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/622975_wookmark.jpg"},{"id":"621035","title":"EVERYDAYS 2 on","referer":"https:\/\/www.behance.net\/gallery\/36167005\/EVERYDAYS-2","url":"http:\/\/www.wookmark.com\/image\/621035\/everydays-2-on","width":"1200","height":"1200","image":"http:\/\/www.wookmark.com\/images\/original\/621035_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621035_wookmark.jpg"},{"id":"623002","title":"La vie est belle","referer":"http:\/\/holaole.tumblr.com\/post\/146736609189","url":"http:\/\/www.wookmark.com\/image\/623002\/la-vie-est-belle","width":"736","height":"980","image":"http:\/\/www.wookmark.com\/images\/original\/623002_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623002_wookmark.jpg"},{"id":"621037","title":"EVERYDAYS #1 on","referer":"https:\/\/www.behance.net\/gallery\/34032448\/EVERYDAYS-1","url":"http:\/\/www.wookmark.com\/image\/621037\/everydays-1-on","width":"1200","height":"1200","image":"http:\/\/www.wookmark.com\/images\/original\/621037_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621037_wookmark.jpg"},{"id":"622984","title":"Textielerfgoed in Tilburg on","referer":"https:\/\/www.behance.net\/gallery\/36234405\/Textielerfgoed-in-Tilburg","url":"http:\/\/www.wookmark.com\/image\/622984\/textielerfgoed-in-tilburg-on","width":"1400","height":"930","image":"http:\/\/www.wookmark.com\/images\/original\/622984_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/622984_wookmark.jpg"},{"id":"622990","title":"+ c u l t o f ? o ? ? o ? o ? +","referer":"http:\/\/cultoftomorrow.tumblr.com\/post\/150413901552","url":"http:\/\/www.wookmark.com\/image\/622990\/c-u-l-t-o-f-o-o-o","width":"1280","height":"855","image":"http:\/\/www.wookmark.com\/images\/original\/622990_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/622990_wookmark.jpg"},{"id":"623089","title":"","referer":"https:\/\/www.tumblr.com\/dashboard","url":"http:\/\/www.wookmark.com\/image\/623089","width":"540","height":"609","image":"http:\/\/www.wookmark.com\/images\/original\/623089_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/623089_wookmark.jpg"},{"id":"621030","title":"U-S-E on","referer":"https:\/\/www.behance.net\/gallery\/41736117\/U-S-E","url":"http:\/\/www.wookmark.com\/image\/621030\/u-s-e-on","width":"1400","height":"840","image":"http:\/\/www.wookmark.com\/images\/original\/621030_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621030_wookmark.jpg"},{"id":"622988","title":"Aesthetic Bullshit","referer":"http:\/\/aestheticbullshit.com\/post\/149889317707\/aestheticbullshit-love-me-tender","url":"http:\/\/www.wookmark.com\/image\/622988\/aesthetic-bullshit","width":"1000","height":"732","image":"http:\/\/www.wookmark.com\/images\/original\/622988_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/622988_wookmark.jpg"},{"id":"621008","title":"New Logo & Brand Identity for Helbers by Only \u2014 BP&O","referer":"http:\/\/bpando.org\/2016\/08\/22\/branding-helbers\/","url":"http:\/\/www.wookmark.com\/image\/621008\/new-logo-brand-identity-for-helbers-by-only-bp-o","width":"1500","height":"1000","image":"http:\/\/www.wookmark.com\/images\/original\/621008_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621008_wookmark.jpg"},{"id":"621010","title":"Branding for The True Honey Co. by Marx Design \u2014 BP&O","referer":"http:\/\/bpando.org\/2016\/08\/02\/branding-true-honey-company\/","url":"http:\/\/www.wookmark.com\/image\/621010\/branding-for-the-true-honey-co-by-marx-design-bp-o","width":"1500","height":"1000","image":"http:\/\/www.wookmark.com\/images\/original\/621010_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621010_wookmark.jpg"},{"id":"621011","title":"Branding for The True Honey Co. by Marx Design \u2014 BP&O","referer":"http:\/\/bpando.org\/2016\/08\/02\/branding-true-honey-company\/","url":"http:\/\/www.wookmark.com\/image\/621011\/branding-for-the-true-honey-co-by-marx-design-bp-o","width":"1500","height":"1057","image":"http:\/\/www.wookmark.com\/images\/original\/621011_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621011_wookmark.jpg"},{"id":"621012","title":"This Beauty. Illustrations And Graphic Design By Hirofumi Abe. \u00bb WAATERKANT","referer":"http:\/\/www.waaterkant.com\/this-beauty-illustrations-and-graphic-design-by-hirofumi-abe\/","url":"http:\/\/www.wookmark.com\/image\/621012\/this-beauty-illustrations-and-graphic-design-by-hirofumi-abe-waaterkant","width":"1061","height":"1500","image":"http:\/\/www.wookmark.com\/images\/original\/621012_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621012_wookmark.jpg"},{"id":"621014","title":"Beau Bertens \u2013 Minimalissimo","referer":"http:\/\/minimalissimo.com\/beau-bertens\/","url":"http:\/\/www.wookmark.com\/image\/621014\/beau-bertens-minimalissimo","width":"1080","height":"768","image":"http:\/\/www.wookmark.com\/images\/original\/621014_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621014_wookmark.jpg"},{"id":"621016","title":"A-TO-B \u2013 Minimalissimo","referer":"http:\/\/minimalissimo.com\/a-to-b\/","url":"http:\/\/www.wookmark.com\/image\/621016\/a-to-b-minimalissimo","width":"2500","height":"1550","image":"http:\/\/www.wookmark.com\/images\/original\/621016_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621016_wookmark.jpg"},{"id":"621022","title":"Sisters on","referer":"https:\/\/www.behance.net\/gallery\/41697793\/Sisters","url":"http:\/\/www.wookmark.com\/image\/621022\/sisters-on","width":"1400","height":"910","image":"http:\/\/www.wookmark.com\/images\/original\/621022_wookmark.png","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621022_wookmark.png"},{"id":"621023","title":"untitledzero","referer":"http:\/\/untitledzero.tumblr.com\/post\/148785804554\/monument-ii","url":"http:\/\/www.wookmark.com\/image\/621023\/untitledzero","width":"1280","height":"1811","image":"http:\/\/www.wookmark.com\/images\/original\/621023_wookmark.jpg","preview":"http:\/\/www.wookmark.com\/images\/thumbs\/621023_wookmark.jpg"}];
	function int(){
		str = '';
		num = 0;
		arrT = [];//记录高度
		arrL = [];//记录宽度
		con_body = $('#con_body');
		Width = 200;//设置单个图片的宽度
		space = 10;//空格间距
		cell = 0;//设置列数
		Outerwidth = Width+space;//单个图片包括间距的宽度
//		sUrl = 'http://www.wookmark.com/api/json/popular?callback=fn';//图片的地址
		loader = $('#loader');
		iPage = 0;
		onOff = true;
		//create();
		followfix();
		mover();
		waterfall();

	}
	
	/*function create(){
		for(var i=0;i<20;i++){
			num++;
			str+='<li><a href="#"><div style="display:none"><span>_</span><h2>CERVEJA ZEIT</h2><p style="width: 230px;">JANEIRO 2016</p><h3></h3><p style="width: 230px;"></p></div><img src=img/'+num+'.png></a></li>'
		}
		$('#con_body')[0].innerHTML = str;
	}*/
	
	function followfix(){
		var height = $('#con_head').offset().top;
		window.onscroll = function(){
			//判断header是否跟随
			if(window.pageYOffset>=height){
				$('#con_head').css('border-top','3px solid #0ee172');
				$('#con_head ul').css('border-top','none');
				$('#con_head').addClass('flofix');
			}else{
				
				if($('#con_head')[0].className){
					$('#con_head').removeClass('flofix');
					$('#con_head').css('border-top','none');
				}
			}
			//判断最短的长度是否大于可视区+滚动条top值
			
			var index = short();
			var iH =  $(window).scrollTop()+$(window).innerHeight();
			if(arrT[index]+60<iH){
				getdata();
			}
		};
	}
	function mover(){
		$('#con_body li').mouseover(function(){
			$(this).find('div').css({
				display:'block',
				opacity: '1'
			}).next().css('opacity','0.3');
		}).mouseout(function(){
			$(this).find('div').css({
				display:'none',
				opacity: '1'
			}).next().css('opacity','1');
		})
	}
	
	function waterfall(){
		setcell();
		function setcell(){
			cell = Math.floor(window.innerWidth/Outerwidth);
			con_body.css('width',cell*Outerwidth-10);
		}
		
		for(var i=0;i<cell;i++){
			arrT[i] = 0;//记录图片高度
			arrL[i] = Outerwidth * i;//记录图片的宽度
		}
		getdata();
	}
	var fn=function (data){

		loader.show();
				//下面是用for循环遍历的函数生成的图片
				for(var i=0;i<7;i++){
					read(datad[i+len]);
				}
				len+=7;
				 function read(data) {
					var Img = $('<img />');
					//obj里面的属性是图片的高度，用这个高度乘以当前图片的宽度除以obj属性里面的图片宽度，经过比例的换算就会求出当前所有图片的height
					var Height = data.height * (Width / data.width);
					//求出了图片的宽度
					Img.css({
						width:Width,//固定的是200
						height:Height//根据图片换算的结果
					})
					console.log(Height)
					var index = short();
					//求出图片的left
					Img.css({
						top:arrT[index],//固定的是200
						left:arrL[index]//根据图片换算的结果
					})
					arrT[short()]+= Height+10;
					con_body.append(Img);//可以插入了，但是发现最长的会挤开其他的，应该先在最短的后面添加
					var objImg = new Image();//新建一个函数
					objImg.onload = function(){//防止全部加载出来
						Img.attr('src', this.src);//获取img的属性值就是src
						
					}
					objImg.src = data.preview;
					//停止加载动画
					setTimeout(function() {
						$('#loader').hide();
					},1000)
					onOff = true;
				};
		}
	function getdata(){
			/*$.getJSON( url ,[ data ] ,[ success(data, textStatus, jqXHR) ] )
			url是必选参数，表示json数据的地址；
			data是可选参数，用于请求数据时发送数据参数；
			success是可参数，这是一个回调函数，用于处理请求到的数据。
			function(data)是获取到的数据*/
			if(!onOff){
				return
			}
//			iPage++;
			onOff = false;
			fn();
//			var xhr = new XMLHttpRequest();
//			xhr.open('get',sUrl+'&page='+iPage,true);
//			xhr.onload = function(data){
//			
//			};
//			xhr.send();
			
		}

		function short(){
			var mark = arrT[0];
			var index = 0;//记录位置
			for(var i=1;i<arrT.length;i++){
				if(arrT[i]<mark){
					mark = arrT[i];
					index = i;
//					console.log(i)
				}
			}
			return index;
		}
	window.int = int;
})(window)
