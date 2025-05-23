import { ICategory } from "@/types/Category";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Skeleton,
  Textarea,
} from "@nextui-org/react";

interface PropTypes {
  dataCategory: ICategory;
}

const InfoTab = (props: PropTypes) => {
  const { dataCategory } = props;
  return (
    <Card className="w-full p-4 lg:w-1/2">
      <CardHeader className="flex-col items-center">
        <h1 className="w-full text-xl font-bold">Category Information</h1>
        <p className="w-full text-small text-default-400">
          Manage information of this category
        </p>
        <CardBody>
          <form className="flex flex-col gap-4" onSubmit={() => {}}>
            <Skeleton isLoaded={!!dataCategory?.name} className="rounded-lg">
              <Input
                type="text"
                className="mt-2"
                label="name"
                labelPlacement="outside"
                variant="bordered"
                defaultValue={dataCategory?.name}
              />
            </Skeleton>
            <Skeleton isLoaded={!!dataCategory?.name} className="rounded-lg">
              <Textarea
                className="mt-2"
                label="description"
                labelPlacement="outside"
                variant="bordered"
                defaultValue={dataCategory?.description}
              />
            </Skeleton>
            <Button
              color="danger"
              className="mt-2 disabled:bg-default-500"
              type="submit"
            >
              Save Changes
            </Button>
          </form>
        </CardBody>
      </CardHeader>
    </Card>
  );
};

export default InfoTab;
