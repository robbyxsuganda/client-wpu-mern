import { DateValue } from "@nextui-org/react";

interface IEvent {
  _id?: string;
  name: string;
  slug: string;
  category: string;
  isFeatured: boolean | string;
  isPublished: boolean | string;
  isOnline: boolean | string;
  description: string;
  banner: string | FileList;
  startDate: string;
  endDate: string;
  location?: {
    region: string;
    coordinates: number[];
  };
}

interface IEventForm extends IEvent {
  region: string;
  startDate: DateValue;
  endDate: DateValue;
  latitude: string;
  longitude: string;
}

interface IRegency {
  id: string;
  name: string;
}

export type { IEvent, IEventForm, IRegency };
