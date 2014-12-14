var Tabs = function(options) {
    this.links = options.links;
    this.pages = options.pages;
    this.onChange = options.onChange || function() {};
    
    this.change = function(target) {
        $(this.pages).hide();
        $(this.pages).filter(target).show();
        $(this.links).removeClass('target');
        $(this.links).filter('[href="' + target + '"]').addClass('target');
        this.onChange({target: target});
    }

    this.change(options.defaultPage || pages.first());

    var tabs = this;
    
    $(this.links).on('click', function(event) {
        event.preventDefault();
        tabs.change(event.target.hash);
    });
};
