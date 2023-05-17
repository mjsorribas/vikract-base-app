/* eslint-disable react/no-array-index-key */
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import type { FC } from "react";

interface TabData {
  title: string;
  content: string;
}

interface DynamicTabsProps {
  data: TabData[];
  size: string;
  variant: string;
  colorScheme: string;
  bg: string;
  align: string;
  position: string;
  isFitted: boolean;
  onChange?: (index: number) => void;
}

const DynamicTabs: FC<DynamicTabsProps> = ({
  data,
  size,
  variant,
  colorScheme,
  bg,
  align,
  position,
  isFitted,
  onChange,
}) => {
  return (
    <Tabs
      align={align}
      variant={variant}
      colorScheme={colorScheme}
      bg={bg}
      size={size}
      isFitted={isFitted}
      onChange={onChange}
      position={position}
    >
      <TabList>
        {data.map((item, index) => (
          <Tab key={index}>{item.title}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((item, index) => (
          <TabPanel key={index}>{item.content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default DynamicTabs;
