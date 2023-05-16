/**
 * Groups the total of items per date
 * @param items - the items to be grouped by
 * @param dateAttribute - the date attribute from the object passed
 */
export const getCountsByDate = (items: any[], dateAttribute: string): Array<{ date: Date, count: number }> => {

  return items.reduce((acc: any[], item: { [x: string]: any; }) => {
    const date = item[dateAttribute];
    if (date === null) {
      return acc;
    }

    const dateWithoutTime = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    let group = acc.find(dateGroup => dateGroup.date.getUTCDate() === dateWithoutTime.getUTCDate());

    if (group === null || group === undefined) {
      group = {date: dateWithoutTime, count: 1};
      acc.push(group);
    } else {
      group.count++;
    }
    return acc;
  }, [] as Array<{ date: Date, count: number }>)
    .sort((a: { date: { getUTCDate: () => number; }; }, b: { date: { getUTCDate: () => number; }; }) => (a.date.getUTCDate() > b.date.getUTCDate() ? 1 : -1));
};
