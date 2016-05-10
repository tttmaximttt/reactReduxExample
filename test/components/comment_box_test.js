/**
 * Created by maximradov on 5/9/16.
 */
import { renderComponent , expect } from '../test_helper';
import Comment_box from '../../src/components/comment_box';

describe('comment box test', () => {

	let component;

	beforeEach( () => {
		component = renderComponent(Comment_box);
	});

	afterEach( () => {
		component = null;
	});

	it( 'has a correct class', () => {
		expect(component).to.have.class('comment-box');
	} );

	it( 'has a text area', () => {
		expect(component.find('textarea')).to.exist;
	} );
	
	it( 'has a button', () => {
		expect(component.find('button')).to.exist;
	} );

	describe( 'entering some text', () => {

		let textarea, button;

		beforeEach( () => {
			textarea = component.find('textarea');
			button = component.find('button');

			textarea.simulate('change', 'new comment');
		} );

		afterEach( () => {
			textarea = null;
			button = null;
		} );

		it( 'show test that entered', () => {
			expect(textarea).to.have.value('new comment');
		} );

		it( 'when submited, clears the input', () => {
			button.simulate('submit');
			expect(textarea).to.have.value('');
		} );

	} );

});