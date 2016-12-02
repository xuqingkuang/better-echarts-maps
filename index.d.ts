// Type definitions for better-echarts-maps v0.0.3
// Project: https://github.com/xuqingkuang/better-echarts-maps
// Definitions by: XQ Kuang <https://github.com/xuqingkuang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'better-echarts-maps' {

  /**
   * All of maps
   */
  export const all: any[];

  /**
   * All of China provinces overall maps
   */
  export const China: any[];

  /**
   * All of China regions overall maps
   */
  export const ChinaRegions: any[];

  /**
   * All of Provinces of China details maps
   */
  export const ChinaProvinces: any[];

  /**
   * Cities coordinate of China
   */
  export const ChinaCitiesCoordinate: {
    [key: string]: string;
  };

  export default {
    all,
    China,
    ChinaRegions,
    ChinaProvinces,
    ChinaCitiesCoordinate,
  };
}
