export default function convertHourToMinutes(time: string) {
  // 8:00 -> 8 = hour, 00 = minutes
  const [hour, minutes] = time.split(":").map(Number);
  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}
