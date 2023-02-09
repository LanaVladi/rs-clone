import { Map } from 'leaflet';

export interface ICoordinates {
    lat: {
        degrees: number;
        minutes: number;
        seconds: number;
    };
    lon: {
        degrees: number;
        minutes: number;
        seconds: number;
    };
}

export interface IStore {
    get(key: string): ICalendarData | string | string[];
    getAllowed(key: string): string[] | string;
    set(key: string, value: string, options?: { forceChange: boolean }): void;
    on(key: string, callback: () => void): void;
    once(key: string, callback: () => void): void;
    off(key: string, callback: () => void): void;
}

export interface IPicker {
    open(coords: { lat: number; lon: number }): void;
    close(): void;
    getParams(): PickerParams;
    on(event: string, callback: () => void): void;
    once(event: string, callback: () => void): void;
    off(event: string, callback: () => void): void;
}

export interface IBroadcast {
    fire(event: string, args: Array<() => void>): void;
    on(event: string, callback: () => void): void;
    once(event: string, callback: () => void): void;
    off(event: string, callback: () => void): void;
}

export interface IOverlays {
    convertNumber(value: unknown): number;
    convertValue(value: unknown): string;
    cycleMetric(): void;
    listMetrics(): void;
    setMetric(metric: string): void;
}

export interface IUtils {
    deg2rad(deg: number): number;
    isNear(coords1: { lat: number; lon: number }, coords2: { lat: number; lon: number }): boolean;
    isValidLatLonObj(coords: { lat: number; lon: number }): boolean;
    lonDegToXUnit(deg: number): number;
    latDegToYUnit(deg: number): number;
    unitXToLonDeg(x: number): number;
    unitYToLatDeg(y: number): number;
    latLon2str(coords: { lat: number; lon: number }): string;
    str2latLon(hash: string): { lat: number; lon: number };
    wave2obj(wave: number[]): { period: number; dir: number; size: number };
    wind2obj(wind: number[]): { wind: number; dir: number };
}

export type PickerParams = {
    lat: number;
    lon: number;
    values: unknown;
    overlay: string;
};

export interface IWindyAPI {
    picker: IPicker;
    utils: IUtils;
    broadcast: IBroadcast;
    store: IStore;
    overlays: IOverlays;
    map: Map;
}

export interface IDay {
    display: string;
    displayLong: string;
    day: number;
    middayTs: number;
    start: number;
    end: number;
    month: number;
    year: number;
}

export interface ICalendarData {
    calendarHours: number;
    numOfHours: number;
    minifestFile: IMinifestFile;
    midnight: string;
    startOfTimeline: string;
    start: number;
    days: IDay[];
    endOfcalendar: string;
    endOfCal: number;
    maxTimestamp: number;
    type: string;
    timestamps: number[];
}

export interface IMinifestFile {
    v: string;
    ref: string;
    update: string;
    dst: Array<[number, number, number]>;
    info: string;
    premium: boolean;
    primary_refs: number[];
    secondary_refs: number[];
}
