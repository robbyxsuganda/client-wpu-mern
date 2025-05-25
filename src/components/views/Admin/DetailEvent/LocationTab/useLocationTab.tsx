import { DELAY } from "@/constans/list.constants";
import useDebounce from "@/hooks/useDebounce";
import eventServices from "@/services/event.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";

const schemaUpdateLocation = yup.object().shape({
  isOnline: yup.string().required("Please select online or offline"),
  region: yup.string().required("Please select region"),
  latitude: yup.string().required("Please input latitute cordinate"),
  longitude: yup.string().required("Please input longitude cordinate"),
});

const useLocationTab = () => {
  const debounce = useDebounce();
  const {
    control: controlUpdateLocation,
    handleSubmit: handleSubmitUpdateLocation,
    formState: { errors: errorsUpdateLocation },
    reset: resetUpdateLocation,
    setValue: setValuesUpdateLocation,
  } = useForm({
    resolver: yupResolver(schemaUpdateLocation),
  });

  const [searchRegency, setSearchRegency] = useState("");
  const { data: dataRegion } = useQuery({
    queryKey: ["Regions", searchRegency],
    queryFn: () => eventServices.searchLocationByRegency(`${searchRegency}`),
    enabled: searchRegency !== "",
  });

  const handleSearchRegion = (region: string) => {
    debounce(() => setSearchRegency(region), DELAY);
  };

  return {
    dataRegion,
    controlUpdateLocation,
    errorsUpdateLocation,
    handleSearchRegion,
    handleSubmitUpdateLocation,
    resetUpdateLocation,
    setValuesUpdateLocation,
    searchRegency,
  };
};

export default useLocationTab;
