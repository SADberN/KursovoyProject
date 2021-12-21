import React from 'react';
import { SimpleAdaptiveSlider } from './Slider.js';
import './Slider.css';
import join from '../assets/img/joinus.jpg';
import disc from '../assets/img/discount.jpg';
import at from '../assets/img/alltime.jpg';
import nc from '../assets/img/newcollection.jpg';
import { Link } from 'react-router-dom';

function Sliders() {
  return (
    <div className="slider">
      <div className="slider__wrapper">
        <div className="slider__items">
          <div className="slider__item">
            <img
              style={{
                borderRadius: '10px 10px 10px 10px',
                maxHeight: '630px',
                backgroundColor: '#1a1d3a',
              }}
              width="100%"
              src={disc}
              alt="Скидка новым клиентам"
            />
            <div
              style={{
                maxWidth: '400px',

                color: '#f5f1e9',
                position: 'absolute',
                top: '25%',
                left: '56%',
                fontWeight: '600',
                fontSize: '42px',
                lineHeight: '50px',
                textAlign: 'center',
                textShadow: '1px 1px 1px #000',
                marginRight: '5%',
              }}>
              Скидка новым клиентам 10% по промокоду <p style={{ color: '#fac04d' }}>NEWDAY</p>
            </div>
          </div>
          <div className="slider__item">
            <img
              style={{
                borderRadius: '10px 10px 10px 10px',
                maxHeight: '630px',
                backgroundColor: '#1a1d3a',
              }}
              width="100%"
              src={nc}
              alt="Новая коллекция"
            />
            <div
              style={{
                maxWidth: '1000px',
                color: '#fffcf5',
                position: 'absolute',
                top: '65%',
                left: '5%',
                fontWeight: '600',
                fontSize: '42px',
                lineHeight: '50px',
                textAlign: 'center',
                textShadow: '2px 2px 2px #000',
                marginRight: '5%',
              }}>
              Пополни свой гардероб одеждой из новой коллекции
            </div>
          </div>
          <div className="slider__item">
            <img
              style={{
                borderRadius: '10px 10px 10px 10px',
                maxHeight: '630px',
                backgroundColor: '#1a1d3a',
              }}
              width="100%"
              src={at}
              alt="Всегда на стиле"
            />
            <div
              style={{
                maxWidth: '450px',
                color: '#29200a',
                position: 'absolute',
                top: '25%',
                left: '5%',
                fontWeight: '600',
                fontSize: '42px',
                lineHeight: '50px',
                textAlign: 'center',
                textShadow: '1px 1px 1px #000',
                marginRight: '5%',
              }}>
              Всегда на стиле: большой выбор одежды на любой случай
            </div>
          </div>
          <div className="slider__item">
            <img
              style={{
                borderRadius: '10px 10px 10px 10px',
                maxHeight: '630px',
                backgroundColor: '#1a1d3a',
              }}
              width="100%"
              src={join}
              alt="Подпишись"
            />
            <div>
              <p
                style={{
                  maxWidth: '250px',
                  color: '#fffaf2',
                  position: 'absolute',
                  top: '30%',
                  left: '6%',
                  fontWeight: '600',
                  fontSize: '42px',
                  lineHeight: '50px',
                  textAlign: 'center',
                  textShadow: '2px 2px 2px #000',
                  marginRight: '5%',
                }}>
                НЕ УПУСТИ ВОЗМОЖНОСТЬ
              </p>
              <p
                style={{
                  maxWidth: '400px',
                  position: 'absolute',
                  color: '#fffaf2',
                  top: '7%',
                  left: '65%',
                  marginRight: '8%',
                  maxWidth: '450px',
                  fontWeight: '600',
                  fontSize: '38px',
                  lineHeight: '46px',
                  textAlign: 'center',
                  textShadow: '1px 1px 1px #000',
                }}>
                Подпишись на новости чтобы быть в курсе
              </p>
              <p
                style={{
                  maxWidth: '400px',
                  position: 'absolute',
                  color: '#f0c581',
                  top: '80%',
                  left: '76%',
                  marginRight: '8%',
                  maxWidth: '450px',
                  fontWeight: '600',
                  fontSize: '34px',
                  lineHeight: '50px',
                  textAlign: 'center',
                }}>
                LINK
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="slider__control slider__control_prev" role="button" data-slide="prev" />
      <div className="slider__control slider__control_next" role="button" data-slide="next" />

      {}
    </div>
  );
}

export default Sliders;
