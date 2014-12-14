var Tabs = function(options) {
    this.links = options.links;
    this.pages = options.pages;
    this.onChange = options.onChange || function() {};
    
    this.change = function(target) {
        $(this.pages).hide();
        $(target).show();
        $(this.links).
            removeClass('target').
            filter('[href="#' + $(target).attr('id') + '"]').
            addClass('target');
        this.onChange({target: $(target)});
    }

    this.change(options.defaultPage || pages.first());

    var tabs = this;
    
    $(this.links).on('click', function(event) {
        event.preventDefault();
        tabs.change(event.target.hash);
    });
};
