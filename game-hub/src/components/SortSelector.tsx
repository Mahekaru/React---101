import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { data } from 'framer-motion/client';

import { BsChevronDown } from 'react-icons/bs';

function SortSelector() {
  return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: relevance
        </MenuButton>
        <MenuList>
            <MenuItem>Relavance</MenuItem>
            <MenuItem>Date Added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release Date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average Rating</MenuItem>
        </MenuList>
      </Menu>
    );
}

export default SortSelector