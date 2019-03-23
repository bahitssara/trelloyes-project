import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe(`Card component`, () => {

//smoke test passed//     
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
//snapshot test passed//

    it('renders card as expected', () => {
        const tree = renderer
        .create(<Card />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});