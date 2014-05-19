$.widget("custom.accordion", {
    options : {
        speed: 300,
        selected: 0,
        animate: true,
        evt : 'mouseover',
        height: '160px'
    },	
    _create : function() {
        var elem = this.element;

        this._bindAccordionContainer(elem);
        this._activePanel(elem);
    },
    _bindAccordionContainer: function(elem){
        var self = this;
        var anchor = elem.find('.accordion_panel a');
        
        anchor.on(this.options.evt, function(){
                self._animateAccordion($(this), elem);
        });
    },
    _animateAccordion : function(anchor, elem){ 
	var speed = this.options.speed;
        var slider = anchor.next('.accordion_panel_content');
        var visiblePanels = elem.find('.accordion_panel_content.open');
        
        if (this.options.animate){
            if (slider.hasClass('open')){return;}
            visiblePanels.stop().animate({"height": "0"}, speed).removeClass('open');
            slider.css({'overflow': 'auto'}).stop().animate({"height": this.options.height}, speed).addClass('open');
        }
        else{
          //  visiblePanels.css({'padding': '0', 'height': '0', 'display': 'none'});
          //  slider.css({'padding': '5px', 'height': this.options.height, 'display': 'block'});
        }
    },
    _activePanel: function(elem){      
	var speed = this.options.speed;
        var selected = this.options.selected;
        
        elem.children(':eq(' + selected + ')').children(':eq(1)').css({'overflow': 'auto', 'height': this.options.height}).addClass('open').show();
    },
    _destroy : function() {
            this.element = null;
    }
});