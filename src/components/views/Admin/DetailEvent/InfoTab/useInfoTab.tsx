import categoryServices from "@/services/category.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { DateValue } from "@internationalized/date";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import * as yup from "yup";

const schemaUpdateInfo = yup.object().shape({
  name: yup.string().required("Please input name"),
  slug: yup.string().required("Please input slug"),
  category: yup.string().required("Please select category"),
  startDate: yup.mixed<DateValue>().required("Please select start date"),
  endDate: yup.mixed<DateValue>().required("Please select end date"),
  isPublished: yup.string().required("Please select status"),
  isFeatured: yup.string().required("Please select featured"),
  description: yup.string().required("Please select description"),
});

const useInfoTab = () => {
  const {
    control: controlUpdateInfo,
    handleSubmit: handleSubmitUpdateInfo,
    formState: { errors: errorsUpdateInfo },
    reset: resetUpdateInfo,
    setValue: setValuesUpdateInfo,
  } = useForm({
    resolver: yupResolver(schemaUpdateInfo),
  });

  const { data: dataCategory } = useQuery({
    queryKey: ["Categories"],
    queryFn: () => categoryServices.getCategories(),
    enabled: true,
  });

  return {
    controlUpdateInfo,
    errorsUpdateInfo,
    handleSubmitUpdateInfo,
    resetUpdateInfo,
    setValuesUpdateInfo,

    dataCategory,
  };
};

export default useInfoTab;
