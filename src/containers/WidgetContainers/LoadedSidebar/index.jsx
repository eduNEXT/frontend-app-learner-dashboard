import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import OddiseySlot from '@openedx/frontend-slot-oddisey';

import hooks from 'widgets/ProductRecommendations/hooks';

export const WidgetSidebar = ({ setSidebarShowing }) => {
  const { inRecommendationsVariant, isExperimentActive } = hooks.useShowRecommendationsFooter();

  if (!inRecommendationsVariant && isExperimentActive) {
    setSidebarShowing(true);

    return (
      <div className="widget-sidebar">
        <OddiseySlot />
        <div className="d-flex flex-column">
          <PluginSlot id="widget_sidebar_plugin_slot" />
        </div>
      </div>
    );
  }

  return null;
};

WidgetSidebar.propTypes = {
  setSidebarShowing: PropTypes.func.isRequired,
};

export default WidgetSidebar;
