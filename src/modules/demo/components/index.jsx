import React from 'react';
import { Button } from 'antd';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

function Demo({ demo, intl }) {
  console.log('demo', toJS(demo));
  return (
    <div>
      {intl.formatMessage({ id: 'demo.title' })}
      <Button
        type="primary"
        onClick={() => {
          demo.sum++;
        }}
      >
        btn {demo.sum}
      </Button>
    </div>
  );
}

Demo.propTypes = {
  demo: PropTypes.object,
  intl: PropTypes.object
};

export default injectIntl(inject('demo')(observer(Demo)));
