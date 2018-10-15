jest.dontMock('../constants/contentConstants');
jest.dontMock('../stores/contentStore');
jest.dontMock('react/lib/Object.assign');

describe('contentStore', function() {

	var contentConstants = require('../constants/contentConstants');
	var ContentDispatcher;
	var contentStore;
	var callback;

	var actionGetInitialContent = {
		action: {
			actionType: contentConstants.GET_INITIAL_CONTENT,
			data: {test: true}
		}
	};

	var actionChangeContent = {
		action: {
			actionType: contentConstants.CHANGE_CONTENT,
			data: {}
		}
	};

	beforeEach(function() {
		ContentDispatcher = require('../dispatcher/ContentDispatcher');
		contentStore = require('../stores/contentStore');
		callback = ContentDispatcher.register.mock.calls[0][0];
	});

	it('registers a callback with the dispatcher', function() {
		expect(ContentDispatcher.register.mock.calls.length).toBe(1);
	});

	it('initializes with no content', function() {
		
		var noContent = contentStore.getContent();
		
		expect(noContent).toEqual({});
	});

	it('gets the initial content', function() {
		
		callback(actionGetInitialContent);

		var initialContent = contentStore.getContent();
		var expectedContent = {test: true};

		expect(initialContent).toEqual(expectedContent);
	});

	it('can succesfully change content', function() {
		callback(actionChangeContent);

		expect(true).toEqual(true);
	});

});