var link = document.querySelector('[href="layouts.css"]');
            var stylesheet = link.sheet;
            for (var x = 0; x < stylesheet.cssRules.length; x++) {
                console.log(stylesheet.cssRules[x]);
            }