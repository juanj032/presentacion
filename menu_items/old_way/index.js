(function  () {
  
  Page = {
    
    ready:function  () {
      Page.bind();
      Page.setSelectedItemLabel("None Selected");
    },

    selectedItem: null,

    bind:function  () {
      $("#menu li a").on({
        click:function  (e) {
          e.preventDefault()
          Page.setSelectedItem(e.target)
        }
      });
    },

    setSelectedItem:function  (item) {
      Page.selectedItem = item
      Page.setSelectedClass(item)
      Page.setSelectedItemLabel($(item).html())
    },

    setSelectedClass: function  (item) {
      $("#menu li a").removeClass("selected");
      $(item).addClass("selected")
    },

    setSelectedItemLabel: function  (value) {
      $("#selected-label").html("Selected: "+value)  
    }

  }

  $(document).ready(Page.ready);

})();