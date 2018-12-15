// users.test.js
import { shallow } from 'enzyme';
import * as React from 'react';
import CircuitNameList from "../components/CircuitNameList";
import LocationList from "../components/LocationList"
import Navigation from './router';

describe("Navigation", () => {

  describe('component', () => {

    let element;

    beforeEach(() => {
      element = <Navigation />
    });

    it('renders as expected', () => {
      const component = shallow(element);
      expect(component).toMatchSnapshot();
    });

    it('routes /circuitName to circuitName', () => {
      const component = shallow(element);
      expect(component.find('Route[exact=true][path="/circuitName"]').first().prop('component')).toBe(CircuitNameList);
    });

    it('routes /location', () => {
      const component = shallow(element);
      expect(component.find('Route[exact=true][path="/location"]').first().prop('component')).toBe(LocationList);
    });

  });

});