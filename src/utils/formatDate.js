import moment from "moment";

/*
 * 将日期对象或日期字符串格式化
 * */
export default function formatDate(date, format) {
  if (date) {
    return moment(date).format(format);
  } else {
    return moment().format(format);
  }
}
