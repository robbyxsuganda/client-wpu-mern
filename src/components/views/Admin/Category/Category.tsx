import DataTable from "@/components/ui/DataTable";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Key, ReactNode, useCallback } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { COLUMN_LISTS_CATEGORY } from "./Category.constant";
import { LIMIT_LISTS } from "@/constans/list.constants";

const Category = () => {
  const { push } = useRouter();
  const renderCell = useCallback(
    (category: Record<string, unknown>, columnKey: Key) => {
      const cellValue = category[columnKey as keyof typeof category];
      switch (columnKey) {
        case "icon":
          return (
            <Image src={`${cellValue}`} alt="icon" width={100} height={200} />
          );
        case "actions":
          return (
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <CiMenuKebab className="text-default-700" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  key={`detail-category-botton`}
                  onPress={() => push(`/admin/categoy/${category._id}`)}
                >
                  Detail Category
                </DropdownItem>
                <DropdownItem
                  key={`delete-category-botton`}
                  className="text-danger-500"
                >
                  Delete Category
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          );
        default:
          return cellValue as ReactNode;
      }
    },
    [push],
  );

  return (
    <section>
      <DataTable
        buttonTopContentLabel="Create Category"
        columns={COLUMN_LISTS_CATEGORY}
        currentPage={1}
        data={[
          {
            _id: "123",
            name: "category1",
            description: "description1",
            icon: "/images/general/logo.png",
          },
        ]}
        emptyContent="Category is empty"
        limit={LIMIT_LISTS[0].label}
        onChangePage={() => {}}
        onChangeLimit={() => {}}
        onChangeSearch={() => {}}
        onClearSearch={() => {}}
        onClickButtonTopContent={() => {}}
        renderCell={renderCell}
        totalPages={2}
      />
    </section>
  );
};

export default Category;
