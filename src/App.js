import { ClipLoader } from "react-spinners";
import './App.scss';


import logo from './img/logo.svg'
import background1 from './img/background1.png'
import background2 from './img/background2.png'
import cake from './img/cake.png'
import leave from './img/leave.svg'
import phone1 from './img/phone1.png'
import phone2 from './img/phone2.png'
import phone3 from './img/phone3.png'
import Nastya from './img/Nastya.png'
import map from './img/map.png'
import whiteLine from './img/white-line.svg'
import group from './img/group.svg'
import inst from './img/inst.svg'
import statCase from './img/stat-case.svg'
import statMoney from './img/stat-money.svg'

import './caveat/caveat.css'

import Slider from './components/slider'

function App() {
  return (
    <div className="App">
      <div id="loading">
          <img src={logo} alt=""/>
        <ClipLoader color="#FFFFFF" loading />
      </div>
        <div className="welcome-container">
            <img className="background-img__dark" src={background1} alt=""/>
            <img className="background-img__light" src={background2} alt=""/>
            <img className="background-img__cake" src={cake} alt=""/>
            <img className="background-img__phone1" src={phone1} alt=""/>
            <img className="background-img__phone2" src={phone2} alt=""/>
            <img className="background-img__phone3" src={phone3} alt=""/>
            <img className="background-img__me" src={Nastya} alt=""/>


            <div className="welcome-container__info">
                <div className="welcome-container__info-title">
                    <img className="welcome-container__info-title__img" src={logo} alt=""/>
                    <div className="welcome-container__info-title__name-block">
                        <p>Анастасия Богомолова</p>
                        <img src={leave} alt=""/>
                    </div>
                </div>
                <ul>
                    <li><span>•</span>СТОРИСМЕЙКЕР</li>
                    <li><span>•</span>НАСТАВНИК</li>
                    <li><span>•</span>C 0 ДО 80.000₽+ НА ФРИЛАНСЕ ЗА ПОЛГОДА</li>
                    <li><span>•</span>ОПЫТ РАБОТЫ С ТОП-БЛОГЕРАМИ И БИЗНЕСМЕНАМИ</li>
                </ul>
                <a rel="noreferrer" target="_blank" href="https://www.instagram.com/bogomolchikk/" className="inst-block">
                    <img src={inst} alt=""/>
                    <p>bogomolchikk</p>
                </a>

            </div>
        </div>
        <img className="map" src={map} alt=""/>
        <div className="stat-block">
            <img className="stat-block__line" src={whiteLine} alt=""/>
            <h2>По статистике</h2>
            <div className="stat-block__container">
                <div className="stat-block__container-item">
                    <img src={group} alt=""/>
                    <p>90% блогеров, экспертных и коммерческих аккаунтов нуждаются в сторисмейкере</p>
                </div>
                <div className="stat-block__container-item">
                    <img src={statCase} alt=""/>
                    <p>62% пользователей интересуются личным брендом компании, благодарая сторис</p>
                </div>
                <div className="stat-block__container-item">
                    <img src={statMoney} alt=""/>
                    <p>Более 3 млн. блогеров продают через сторис каждый день</p>
                </div>
            </div>
        </div>
        <Slider />


    </div>
  );
}

function onReady(callback) {
    var intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            // @ts-ignore: Unreachable code error
            callback.call(this);
        }
    }, 1000);
}
// @ts-ignore: Unreachable code error
function setVisible(selector, visible) {
    document.querySelector(selector).style.opacity = visible ? '1' : '0';
    document.querySelector(selector).style.zIndex = visible ? '100' : '-1';
}

onReady(function() {
    setVisible('.App', true);
    setVisible('#loading', false);
});

export default App;
