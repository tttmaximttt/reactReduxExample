import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';

describe( 'Comments Reducer', () => {

  it( 'handles actions with unknown types', () => {
	  expect(commentReducer(undefined, {})).to.eql([]);
  } );
	
	it( 'handle action SAVE_COMMENT', () => {
		const action = {type: SAVE_COMMENT, payload: "New comment"};
		expect(commentReducer([], action)).to.eql(["New comment"]);
	} );

} );