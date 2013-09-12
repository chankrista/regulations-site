define('search-model', ['underscore', 'backbone', './meta-model', 'dispatch'], function(_, Backbone, MetaModel, Dispatch) {
    'use strict';

    Backbone.SearchModel = MetaModel.extend({});

    var searchModel = new Backbone.SearchModel({
        supplementalPath: 'search',

        getAJAXUrl: function(id) {
            var url,
                urlPrefix = Dispatch.getURLPrefix();

            if (urlPrefix) {
                url = '/' + urlPrefix + '/partial/';
            }
            else {
                url = '/partial/';
            }

            if (typeof this.supplementalPath !== 'undefined') {
                url += this.supplementalPath + '/';
            }

            url += id;

            return url;
        }
    });

    return searchModel;
});