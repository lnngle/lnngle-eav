export class PageUtils {
  public static getTotalPages(totalRecords: number, pageSize: number): number {
    if (totalRecords < 1 || pageSize < 1) {
      return 0;
    } else if (totalRecords < pageSize) {
      return 1;
    } else {
      return Math.ceil(totalRecords / pageSize);
    }
  }

  public static getStartIndex(pageNo: number, pageSize: number): number {
    if (pageNo > 0 && pageSize > 0) {
      const startIndex = (pageNo - 1) * pageSize;
      return startIndex;
    } else {
      return 0;
    }
  }
}
