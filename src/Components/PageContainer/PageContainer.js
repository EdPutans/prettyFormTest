import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';

const PageContainer = ({ children, title }) => {
  return (
    <div className="PageContainer">
      <Card className="PageContainer_content">
        <h3 className="PageContainer_content_title">{title}</h3>
        {children}
      </Card>
    </div>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default PageContainer;
