/**
 * Created by maximradov on 5/9/16.
 */
import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('comment list test', () => {

	let component, props;

	beforeEach( () => {
		props = {comments: ['New comment', 'Old comment']};
		component = renderComponent(CommentList, null, props);
	});

	afterEach( () => {
		component = null;
		props = null;
	});

	it( 'has a correct class', () => {
		expect(component).to.have.class('comment-list');
	} );
	
	it( 'show an LI for each comment', () => {
		expect(component.find('li').length).to.equal(2);
	} );
	
	it( 'shows each comment that is provided', () => {
	    expect(component).to.contain('New comment');
	    expect(component).to.contain('Old comment');
	} );

});