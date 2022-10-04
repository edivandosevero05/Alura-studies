export function timeToSecconds(time: string) {
  const [hours = "0", minutes = "0", secconds = "0"] = time.split(":");
  const hounInSeconds = Number(hours) * 3600;
  const minutesInSecconds = Number(minutes) * 60;
  return hounInSeconds + minutesInSecconds + Number(secconds);
}
