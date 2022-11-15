export class Convert {
  static toLocaleDate(v: Date) {
    const { format } = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' });
    return format(v);
  }
}
