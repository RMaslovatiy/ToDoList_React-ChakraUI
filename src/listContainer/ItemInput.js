import React, { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import { Button, Stack, Input } from '@chakra-ui/react';

const ItemInput = ({ id, onKeyDown, idAddButton, addItem }) => {
  const [value, setValue] = useState('');
  const data = {
    name: { name: value },
    id,
  };

  const confirmClick = () => {
    // addItem(data);
    resetValue();
  };

  function resetValue() {
    setValue('');
  }

  return (
    <Stack direction={['row']} spacing="5px" mt="2px">
      <Input
        display="flex"
        w="280px"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button variant="solid" onClick={confirmClick}>
        OK
      </Button>
    </Stack>
  );
};

export default ItemInput;
