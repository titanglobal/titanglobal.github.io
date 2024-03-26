// var family = {
//   watersort: {
//     name: 'Water Sort',
//     img: 'assets/images/popular-01.jpg'
//   },
//   blocksmash: {
//     name: 'Block Smash',
//     img: 'assets/images/popular-02.jpg'
//   }
// }

// function myfunc(family) {
//   for (var prop in family) {
//     console.log(prop)
//     document.getElementById('demo').innerHTML += '<p>Something</p>';
//   }
// }

myfunc(family)

var family = {
  aaron: {
    name: 'Aaron',
    age: 30
  },
  megan: {
    name: 'Megan',
    age: 40
  },
  aaliyah: {
    name: 'Aaliyah',
    age: 2
  }
}

function myfunc(family) {
  for (var prop in family) {
    document.getElementById('demo').innerHTML += '<div class="col-lg-3 col-sm-6">\n' +
        '                    <div class="item">\n' +
        '                      <img src="assets/images/popular-01.jpg" alt="">\n' +
        '                      <h4>Fortnite<br><span>Sandbox</span></h4>\n' +
        '                      <ul>\n' +
        '                        <li><i class="fa fa-star"></i> 4.8</li>\n' +
        '                        <li><i class="fa fa-download"></i> 2.3M</li>\n' +
        '                      </ul>\n' +
        '                    </div>\n' +
        '                  </div>';
    console.log(prop);
  }
}

myfunc(family)