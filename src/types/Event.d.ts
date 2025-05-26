import { DateValue } from "@nextui-org/react";

interface IEvent {
  _id?: string;
  name?: string;
  slug?: string;
  category?: string;
  isFeatured?: boolean | string;
  isPublish?: boolean | string;
  isOnline?: boolean | string;
  description?: string;
  banner?: string | FileList;
  startDate?: string;
  endDate?: string;
  location?: {
    address: string;
    region: string;
    coordinates: number[];
  };
}

interface IEventForm extends IEvent {
  address?: string;
  region?: string;
  startDate?: DateValue;
  endDate?: DateValue;
  latitude?: string;
  longitude?: string;
}

interface IRegency {
  id: string;
  name: string;
}

export type { IEvent, IEventForm, IRegency };
