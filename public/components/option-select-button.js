AFRAME.registerComponent('option-select-button', {
    schema: {
      type: {type: 'string'},
    },

    init: function () {
      var data = this.data;

      this.el.addEventListener("mouseenter", function () {
          console.log(data)
        if(data.type == "list"){
            console.log(data.type)
          let visible = (document.getElementById("aframe-playlist").getAttribute("visible") == false) ? "true" : "false";
            document.getElementById("aframe-playlist").setAttribute("visible",  visible );
            document.getElementById("aframe-queue").setAttribute("visible",  visible );
        }

        switch(data.type) {
            case "play":
            player('fetch')
            break;
            case "toggle":
            player("pauseres")
            break;
            case "next":
            player('next')
            break;
            case "list":
            player('add')
            break;
        }

    });
    }
  });