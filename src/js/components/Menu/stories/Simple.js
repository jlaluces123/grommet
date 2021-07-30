import React from 'react';

import { Grommet, Box, Menu } from 'grommet';
import { grommet } from 'grommet/themes';

const SimpleMenu = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large" margin={{ top: 'xlarge' }}>
      <Menu
        dropProps={{
          align: { top: 'bottom', left: 'left' },
          elevation: 'xlarge',
        }}
        label="actions"
        items={[
          { label: 'Launch', onClick: () => {} },
          { label: 'Abort', onClick: () => {} },
          { label: 'Disabled', disabled: true },
        ]}
      />
    </Box>
  </Grommet>
);

export const Simple = () => <SimpleMenu />;
Simple.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Menu/Simple',
};
