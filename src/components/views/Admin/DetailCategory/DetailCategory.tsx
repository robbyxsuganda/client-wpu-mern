import { Tab, Tabs } from "@nextui-org/react";
import IconTab from "./IconTab";
import InfoTab from "./InfoTab";
import useDetailCategory from "./useDetailCategory";

const DetailCategory = () => {
  const { dataCategory } = useDetailCategory();
  return (
    <Tabs aria-label="Options">
      <Tab key={"icon"} title="Icon">
        <IconTab currentIcon={dataCategory?.icon} />
      </Tab>
      <Tab key={"info"} title="Info">
        <InfoTab dataCategory={dataCategory} />
      </Tab>
    </Tabs>
  );
};

export default DetailCategory;
