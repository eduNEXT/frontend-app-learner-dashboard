import React from 'react';
import { shallow } from 'enzyme';

import LoadedView from './LoadedView';
import mockData from './mockData';
import messages from './messages';

jest.mock('./components/CourseCard', () => 'CourseCard');
jest.mock('data/redux', () => ({
  hooks: {
    usePlatformSettingsData: () => ({
      courseSearchUrl: 'course-search-url',
    }),
  },
}));

describe('RecommendationsPanel LoadedView', () => {
  const props = {
    courses: mockData.courses,
    isPersonalizedRecommendation: false,
    courseSearchClickTracker: jest.fn().mockName('courseSearchClickTracker'),
  };
  describe('snapshot', () => {
    test('without personalize recommendation', () => {
      const el = shallow(<LoadedView {...props} />);
      expect(el).toMatchSnapshot();
      expect(el.find('h3').text()).toEqual(messages.popularCoursesHeading.defaultMessage);
    });
    test('with personalize recommendation', () => {
      const el = shallow(<LoadedView {...props} isPersonalizedRecommendation />);
      expect(el).toMatchSnapshot();
      expect(el.find('h3').text()).toEqual(messages.recommendationsHeading.defaultMessage);
    });
  });
});