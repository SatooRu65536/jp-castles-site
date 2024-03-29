import { MARKER_COLOR_NAMES } from '@/const/marker';
import { LatLng } from 'leaflet';
import { StaticImageData } from 'next/image';

export type MarkerColor = (typeof MARKER_COLOR_NAMES)[number];

export type Coordinates = {
  lat: number;
  lng: number;
};

export type CastleMarker = {
  id: string;
  name: string;
  coordinates: Coordinates;
  img: StaticImageData;
  scale: number;
};

export type CastleMarkerScale = Omit<CastleMarker, 'img'>;

export type CreateMarker = Omit<CastleMarkerScale, 'id'>;

export type EditMarker = Omit<CastleMarker, 'id'> & {
  id: string | null;
};

export type CoordinatesRange = {
  lat: [number, number];
  lng: [number, number];
};

export type MapSettings = {
  center: LatLng;
  zoom: number;
};

export type MarkerData = {
  num: number;
  updateAt: number;
};
