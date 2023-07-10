import React from "react";
import s from "./PersonalArea.module.scss";
import { graphPersonal } from "../../constants/graphPersonal";
import exit from '../../assets/exit.png'
import calendar from '../../assets/calendar.png'

const PersonalArea = () => {
  return (
    <section className={s.personalArea}>
      <div className={s.container}>
        <header className={s.personalArea__header}>
          <h2>ИНН: 123456789012</h2>
          <div>
            <img src={exit} alt="img" />
            <span>Выйти</span>
          </div>
        </header>
        <main className={s.personalArea_main}>
          <div className={s.personalArea_main__title}>
            <h1>Личный кабинет</h1>
          </div>
          <div className={s.personalArea_main__content}>
            <div className={s.personalArea_main__content_left}>
              <div className={s.content_left__title}>
                <img src={calendar} alt="img" />
                <h2>Оформить займ</h2>
              </div>
              <div className={s.content_left__box}>
                <h4>Дата займа</h4>
                <h3>02.07.2020</h3>
                <h4>Сумма займа</h4>
                <h2>0,00 СОМ</h2>
              </div>
              <div className={s.content_left_btn}>
                <button>Оформить займ</button>
              </div>
            </div>
            <div className={s.personalArea_main__content_right}>
              <div className={s.content_right__title}>
                <img src={calendar} alt="img" />
                <h2>Мои займы</h2>
              </div>
              <div className={s.content_right__graph}>
                {graphPersonal.map((row) => (
                  <div key={row.id} className={s.graph_row}>
                    <span>{row.text}</span>
                    <span>{row.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default PersonalArea;
