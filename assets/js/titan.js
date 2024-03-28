/* TODO: Update content here */
/*   Featured Games */
var featuredGames = {
	blockjewel: {
		name: 'Block Jewel',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/fk0zRnYJUNOMkj-PZV3hNi7x3xLKFoL7cWbPhxqKWj9TI2g6YWoCv_iiaEMuws5Ubfw=w2560-h1440-rw',
		download: '10k',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.no1.blockgemm.puzzle'
	}
	,matchfamily: {
		name: 'Match Family',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/mvlv94wuf0i2dgWOzuOsoZclZWJ3NBGRJRY9EE9U-qx9MXswA4KhgSQgdVDJcm8usw=w2560-h1440-rw',
		download: '500',
		star: 5,
		link: 'https://play.google.com/store/apps/details?id=com.no1ornothing.match3d.family'
	}
	,blocksmash: {
		name: 'Block Smash',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/HrK5EdxsAO8JQpe1I8eXHHaRNvf-HUmtCa1HwYc2mtio6HFkZiRCvqA1KUD94lDcifBq=w2560-h1440-rw',
		download: '10m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.miracle.block.smash.journey'
	},
}

/* Top Download Games*/
var topDownloadGames = {
	watersort: {
		name: 'Water Sort',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/nxT9TWLCMCmUxzafx-sKGsktGqGW_XNwhH1Cs50jlGr-fR3mMIoBMeH2bH3VOTfvfLsk=s48-rw',
		download: '10m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.no1ornothing.color.water.sort.woody.puzzle'
	}
	,blocksmash: {
		name: 'Block Smash',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/hWJJx3I29IV-DYdfF0AegaRISIf5JOlR01Z4WHEXNQ68DQmkd_a9pfuiKOr7bfFElDI=s48-rw',
		download: '5m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.miracle.block.smash.journey'
	}
	,ballsort: {
		name: 'Color Sort',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/3ZZKUMmh2WY9Vi8G_X4Mxs40fYl8BU9iOdKxYJEbSxu0OPwSsorwP8mpB1brgjbt45oQ=s48-rw',
		download: '5m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.titan.ball.sort.woody.puzzle'
	},
}

/* Popular games */
var popularGames = {
	watersort: {
		name: 'Water Sort',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/rYOSvM51zSmtcEdEFi2gcQ-BF1KohfPm0Tbww7dVtOV22t8dMlLI7K6t_z1EtonTDhrp=w2560-h1440-rw',
		download: '10m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.no1ornothing.color.water.sort.woody.puzzle'
	}
	,blocksmash: {
		name: 'Block Smash',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/HrK5EdxsAO8JQpe1I8eXHHaRNvf-HUmtCa1HwYc2mtio6HFkZiRCvqA1KUD94lDcifBq=w2560-h1440-rw',
		download: '10m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.no1ornothing.color.water.sort.woody.puzzle'
	}
	,ballsort: {
		name: 'Color Sort',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/aErioex3JwKz8dfcerNWhr9bLglgJTqVqcj-k7rO8wWLYl95LEnm53aXn7F2Ja5p3gc=w2560-h1440-rw',
		download: '5m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.no1ornothing.color.water.sort.woody.puzzle'
	},
	ballAdventure: {
		name: 'Ball Adventure',
		genre: 'Casual',
		image: 'https://play-lh.googleusercontent.com/eZBHElc3HxS2_5KFes3rtFfHqTA90PwWo0UBS1Gxsip7ZmEomFGG72tWN_t9lc-Cijw=w2560-h1440-rw',
		download: '1m',
		star: 4.5,
		link: 'https://play.google.com/store/apps/details?id=com.no1ornothing.color.water.sort.woody.puzzle'
	},
}
/* End: Content */

function displayFeaturedGames(id, games){
    for (var prop in games) {
        document.getElementById(id).innerHTML += '<div class="item">\n' +
            '<div class="thumb">\n' +
            '<img src="' + games[prop].image + '" alt="">\n' +
            '<div class="hover-effect">\n' +
            '<h6>Play Now</h6>\n' +
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

displayFeaturedGames('featured', featuredGames)
displayFeaturedGames('featured', featuredGames)


// Display game list
function displayPopularGames(id, games) {
  for (var prop in games) {
    document.getElementById(id).innerHTML += '<div class="col-lg-3 col-sm-6">\n' +
        '<div class="item">\n' +
        '<img src="' + games[prop].image + '" alt="">\n' +
        '<h4>' + games[prop].name + '<br><span>' + games[prop].genre + '</span></h4>\n' +
        '<ul>\n' +
        '<li><i class="fa fa-star"></i>'+ games[prop].star + '</li>\n' +
        '<li><i class="fa fa-download"></i>' + games[prop].download + '+</li>\n' +
        '</ul>\n' +
        '</div>\n' +
        '</div>';
  }
}

displayPopularGames('demo', popularGames)

// Display top download games
function displayTopDownloaded(id, games){
	for (var prop in games) {
		document.getElementById(id).innerHTML += '<li>\n' +
			'<img src="' + games[prop].image + '" alt="" class="templatemo-item">\n' +
			'<h4>' + games[prop].name + '</h4>\n' +
			'<h6>' + games[prop].genre + '</h6>\n' +
			'<span><i class="fa fa-star" style="color: yellow;"></i> 4.5</span>\n' +
			'<span><i class="fa fa-download" style="color: #dc3931;"></i> ' + games[prop].download + '+</span>\n' +
			'<div class="download">\n' +
			'<a href="' + games[prop].link + '"><i class="fa fa-download"></i></a>\n' +
			'</div>\n' +
			'</li>'
	}
}

displayTopDownloaded('top-games', topDownloadGames)