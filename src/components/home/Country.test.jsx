import React from 'react';
import renderer from 'react-test-renderer';
import Country from './Country';
// import Card from '@/component/common/Card';
// import { Format } from '@/utils';

test('Country', () => {

    const props = {
        flags: { png: 'https://restcountries.com/data/png/col.png' },
        name: 'Colombia',
        population: 48759958,
        region: 'South America',
        capital: 'Bogotá',
        // className
    };

    const component = renderer.create(
        <Country {...props}>Facebook</Country>,
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    // tree.props.onMouseEnter();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    // tree.props.onMouseLeave();

    // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
});
