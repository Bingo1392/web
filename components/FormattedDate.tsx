import dayjs from "dayjs";

export default function FormattedDate({ date }: { date: string }) {
  return <>{dayjs(date).format("D.M.YYYY")}</>;
}
