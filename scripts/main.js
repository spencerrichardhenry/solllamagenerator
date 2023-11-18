'use strict'

  var bg, body;

    const slugify = str =>
        str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '_')
        .replace(/^-+|-+$/g, '');


    var data = {
        "background": { 
            "BTC orange": "12.5",
            "dark blue": "12.5",
            "green": "12.5",
            "light blue": "12.5",
            "pink": "12.5",
            "red": "12.5",
            "solana": "12.5",
            "yellow": "12.5",
        },
        "body": { 
            "alien": "5.5",
            "blue": "5.5",
            "crystal": "5.5",
            "darker normal": "5.5",
            "gold": "5.5",
            "honey badger": "5.5",
            "lighter normal": "5.5",
            "mushroom": "5.5",
            "normal": "5.5",
            "orange": "5.5",
            "pepe": "5.5",
            "pink": "5.5",
            "purple": "5.5",
            "rainbow": "5.5",
            "undead": "5.5",
            "void with stars": "5.5",
            "water": "5.5",
            "white": "5.5",
        },
        "neck": { 
            "barrel": "6.25",
            "bloody vomit": "6.25",
            "bowl of edamame": "6.25",
            "boxing gloves": "6.25",
            "butterfly wings": "6.25",
            "clouds": "6.25",
            "deep water": "6.25",
            "exorcist vomit": "6.25",
            "flamethrower": "6.25",
            "kimono": "6.25",
            "mantle": "6.25",
            "mummy": "6.25",
            "neck tattoo": "6.25",
            "nothing": "6.25",
            "rock n roll": "6.25",
            "tie": "6.25",
        },
        "head": { 
            "none": "5.25",
            "artist hat": "5.25",
            "black glasses": "5.25",
            "christmas": "5.25",
            "cool glasses": "5.25",
            "crown": "5.25",
            "earring": "5.25",
            "eye patch": "5.25",
            "flame eyes": "5.25",
            "flower": "5.25",
            "hair": "5.25",
            "hat": "5.25",
            "laser eyes": "5.25",
            "mohawk with glasses": "5.25",
            "mohawk": "5.25",
            "sun glasses": "5.25",
            "terminator": "5.25",
            "third eye": "5.25",
            "thunder eyes": "5.25",
        },
    };

    for (var i = 0; i < Object.keys(data).length; i++) {
        // Get current trait group
        var group = Object.keys(data)[i];
        console.log(group);
        var select = document.getElementById(group);
        var groupdata = data[group];

        for (var j = 0; j < Object.keys(groupdata).length; j++) {
            var opt = document.createElement('option');
            opt.value = Object.keys(groupdata)[j];
            opt.innerHTML = Object.keys(groupdata)[j];
            select.appendChild(opt);
        }
    }

    function randomize() {
        if(event){event.preventDefault()};
        for (var i = 0; i < Object.keys(data).length; i++) {
            // Get current trait group
            var group = Object.keys(data)[i];
            select = document.getElementById(group);
            groupdata = data[group];
            select.value = Object.keys(groupdata)[Math.floor(Math.random() * Object.keys(groupdata).length)];

        }
        update();
    }

    function update() {
        var traits = 0;
        var images = [];
        var adjArray = [];
        var firstArray = [];
        var lastArray = [];
        var seed = "";
        for (var i = 0; i < Object.keys(data).length; i++) {
            var color = "gray";
            var group = Object.keys(data)[i];
            select = document.getElementById(group);

                  
             images[i] = "images/normal/" + group + "/" + encodeURIComponent(select.value) + ".png";
            var keys = Object.keys(data[group]);
            var index = keys.indexOf(select.value);
            var seed = seed + index.toString(36);

        }
        
        // console.log(traits);

        // var first = adjArray[Math.floor(Math.random()*adjArray.length)];
        // var last = adjArray[Math.floor(Math.random()*adjArray.length)];

    
        // var fname = first.slice(0,Math.round(first.length/2)) + last.slice(Math.round(last.length/2)+1);


        // var first = adjArray[Math.floor(Math.random()*adjArray.length)];
        // var last = adjArray[Math.floor(Math.random()*adjArray.length)];

        // console.log(fname+ " " + first.charAt(0).toUpperCase() + first.slice(1)+last.charAt(0).toUpperCase() + last.slice(1));



               
        
        mergeImages(images)
            .then(b64 => {
                // document.querySelector('img')
            document.getElementById("badger").src = b64;
              resizedataURL(b64, 256, 256);

              // document.getElementById('download').href = b64;
            });

            // mergeImages(images)
            // .then(b64 => {
            //     // document.querySelector('img')
            //     document.getElementById("smolbadger").src = b64;
            //     resizedataURL(b64, 256, 256);

            //   // document.getElementById('download').href = b64;
            // });


    }

    let getNameObj = function(_name) {
      let _nameFraction = "";
      let _nameObj = {
        nameOrigin: _name
      };

      if(Math.random() < 0.5){
        _nameFraction = _name.slice(0,Math.round(_name.length/2)).toLowerCase();
        _nameObj.remain = _name.slice(Math.round(_name.length/2)).toLowerCase();
        _nameObj.isStart = true;
      }else{
        _nameFraction = _name.slice(Math.round(_name.length/2)).toLowerCase();
        _nameObj.remain = _name.slice(0,Math.round(_name.length/2)).toLowerCase();
        _nameObj.isStart = false;
      }

      _nameObj.nameSliced = _nameFraction;
      return _nameObj;
    }

    function isVowel(c) {
        return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
    }

    function resizedataURL(datas, wantedWidth, wantedHeight)
    {
        // We create an image to receive the Data URI
        var img = document.createElement('img');

        // When the event "onload" is triggered we can resize the image.
        img.onload = function()
            {        
                // We create a canvas and get its context.
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');

                // We set the dimensions at the wanted size.
                canvas.width = wantedWidth;
                canvas.height = wantedHeight;
                ctx.imageSmoothingEnabled= false

                // We resize the image with the canvas method drawImage();
                ctx.drawImage(this, 0, 0, wantedWidth, wantedHeight);

                var dataURI = canvas.toDataURL();
              document.getElementById('download').href = dataURI;
            };

        // We put the Data URI in the image's src attribute
        img.src = datas;
    }


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.has('badger')){
        var selectedItems = urlParams.get('badger').split("");

        selectedItems.forEach(function callback(value, index) {

        var dat = Object.values(data)[index];
        var cat = Object.keys(data)[index];
        var val = Object.keys(dat)[parseInt(value, 36)];
        document.getElementById(cat).value = val;
        });

        update();
    }else{
        randomize();
    }


      
    



