var _ = require('underscore');
var Backbone = require('backbone');
var SortedCollection = require('backbone-sorted-collection');
var moment = require('moment');

//exports sortCollection = sortCollection;

var getSortOrderFromAlias = function(alias) {
	switch (alias.toLowerCase()) {
		case 'asc':
			return 'asc';
		case 'a':
			return 'asc';
		case 'up':
			return 'asc';
		case 'ascending':
			return 'asc';
		case 'a':
			return 'asc';
		case 'a':
			return 'asc';
	}
};

var sortCollection = function(Collection, key, sortOrder)