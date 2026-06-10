/* TODO: Update content here */
/* Featured Games */
var featuredGames = {
	blockjewel: {
		name: 'Block Jewel',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/fk0zRnYJUNOMkj-PZV3hNi7x3xLKFoL7cWbPhxqKWj9TI2g6YWoCv_iiaEMuws5Ubfw=w2560-h1440-rw',
		download: '10k',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.no1.blockgemm.puzzle'
	}
	,Rollingball: {
		name: 'Rolling Ball',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/Lx8_KsaaErEDeaeK4-SohDcr4Q1wsnEbk6YX3Nk_fG3C4Q1XNB7adq7F_E9YYpo0hvg=w2560-h1440-rw',
		download: '500k',
		star: 5,
		link: 'https://play.google.com/store/apps/details?id=com.no1.rolling.ball3D.sky.race'
	}
}

/* Top Download Games*/
var topDownloadGames = {
	Rollingball: {
		name: 'Rolling Ball',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/Lx8_KsaaErEDeaeK4-SohDcr4Q1wsnEbk6YX3Nk_fG3C4Q1XNB7adq7F_E9YYpo0hvg=w2560-h1440-rw',
		download: '500k',
		star: 5,
		link: 'https://play.google.com/store/apps/details?id=com.no1.rolling.ball3D.sky.race'
	}
	,blockjewel: {
		name: 'Block Jewel',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/fk0zRnYJUNOMkj-PZV3hNi7x3xLKFoL7cWbPhxqKWj9TI2g6YWoCv_iiaEMuws5Ubfw=w2560-h1440-rw',
		download: '10k',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.no1.blockgemm.puzzle'
	}
}

/* Popular games */
var popularGames = {
	Rollingball: {
		name: 'Rolling Ball',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/Lx8_KsaaErEDeaeK4-SohDcr4Q1wsnEbk6YX3Nk_fG3C4Q1XNB7adq7F_E9YYpo0hvg=w2560-h1440-rw',
		download: '500k',
		star: 5,
		link: 'https://play.google.com/store/apps/details?id=com.no1.rolling.ball3D.sky.race'
	}
	,blockjewel: {
		name: 'Block Jewel',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/fk0zRnYJUNOMkj-PZV3hNi7x3xLKFoL7cWbPhxqKWj9TI2g6YWoCv_iiaEMuws5Ubfw=w2560-h1440-rw',
		download: '10k',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.no1.blockgemm.puzzle'
	},
}

/* Contact */
var links={
	facebook: {
		name: "Facebook",
		link: "https://www.facebook.com/titanglobal1"
	},
	playstore: {
		name: "PlayStore",
		link: "https://play.google.com/store/apps/dev?id=6658909980115320355"
	}
}
var mail = "lienhe@titanglobal.studio"

/* End: Content */

function displayLinks(id){
	var content = document.getElementById(id)
	if(content != null){
		for (var link in links){
			content.innerHTML += '<p class="links">' + links[link].name + ': <a href="' + links[link].link + '">' + links[link].link + '</a></p>'
		}
	}
}

displayLinks('links')

function displayMail(id){
	var content = document.getElementById(id)
	if(content!=null){
		var year = new Date().getFullYear()
		content.innerHTML += '<p>Copyright © ' + year + ' <a href="#">CÔNG TY CỔ PHẦN TITAN GLOBAL</a> Company. All rights reserved.\n' +
		'<br>Mail: <a href="mailto:'+ mail+ '" target="_blank">'+ mail+ '</a></p>'
	}
}

displayMail("footer-content")

function displayFeaturedGames(id, games){
	var content = document.getElementById(id)
	if(content != null){
		for (var prop in games) {
			content.innerHTML += '<div class="item">\n' +
				'<div class="thumb">\n' +
				'<img src="' + games[prop].image + '" alt="">\n' +
				'<div class="hover-effect">\n' +
				'<h6><a href="' + games[prop].link + '">Play Now</h6>\n' +
				'</div>\n' +
				'</div>\n' +
				'<h4>' + games[prop].name + '<br><span>' + games[prop].download + ' Downloads</span></h4>\n' +
				'<ul>\n' +
				'<li><i class="fa fa-star"></i> ' + games[prop].star + '</li>\n' +
				'<li><i class="fa fa-download"></i> ' + games[prop].download + '+</li>\n' +
				'</ul>\n' +
				'</div>'
		}
	}
}

displayFeaturedGames('featured', featuredGames)


// Display game list
function displayPopularGames(id, games) {
	var content = document.getElementById(id)
	if(content != null){
	  for (var prop in games) {
		document.getElementById(id).innerHTML += '<div class="col-lg-3 col-sm-6">\n' +
			'<div class="item">\n' +
			'<a href="' + games[prop].link + '"><img src="' + games[prop].image + '" alt=""></a>\n' +
			'<h4>' + games[prop].name + '<br><span>' + games[prop].genre + '</span></h4>\n' +
			'<ul>\n' +
			'<li><i class="fa fa-star"></i>'+ games[prop].star + '</li>\n' +
			'<li><i class="fa fa-download"></i>' + games[prop].download + '+</li>\n' +
			'</ul>\n' +
			'</div>\n' +
			'</div>';
	  }
	}
}

displayPopularGames('demo', popularGames)

// Display top download games
function displayTopDownloaded(id, games){
	var content = document.getElementById(id)
	if(content != null){
		for (var prop in games) {
			document.getElementById(id).innerHTML += '<li>\n' +
				'<a href="' + games[prop].link + '"><img src="' + games[prop].image + '" alt="" class="templatemo-item"></a>\n' +
				'<h4>' + games[prop].name + '</h4>\n' +
				'<h6>' + games[prop].genre + '</h6>\n' +
				'<span><i class="fa fa-star" style="color: yellow;"></i> ' + games[prop].star + '</span>\n' +
				'<span><i class="fa fa-download" style="color: #dc3931;"></i> ' + games[prop].download + '+</span>\n' +
				'<div class="download">\n' +
				'<a href="' + games[prop].link + '"><i class="fa fa-download"></i></a>\n' +
				'</div>\n' +
				'</li>'
		}
	}
}

displayTopDownloaded('top-games', topDownloadGames)
