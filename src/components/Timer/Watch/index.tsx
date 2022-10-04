import style from "./Watch.module.scss";

interface WatchProps {
  time: number | undefined;
}

function Watch({ time = 0 }: WatchProps) {
  const minutes = Math.floor(time / 60);
  const seccond = time % 60;
  const [minuteTen, minuteUnit] = String(minutes).padStart(2, "0");
  const [seccondTen, seccondUnit] = String(seccond).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{minuteTen}</span>
      <span className={style.relogioNumero}>{minuteUnit}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{seccondTen}</span>
      <span className={style.relogioNumero}>{seccondUnit}</span>
    </>
  );
}

export default Watch;
