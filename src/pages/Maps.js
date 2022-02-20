import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

export const Maps = () => (
        <YMaps>
            <div className="container mb-5 pl-5 pr-5 maps-element">
                <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
            </div>
            {/*<div style={{position:'relative', overflow:'hidden'}}>*/}
            {/*        <a href="https://yandex.ru/maps/10656/aleksandrov/?utm_medium=mapframe&utm_source=maps"*/}
            {/*           style={{color: '#eee', fontSize:'12px', position:"absolute", top:"0px"}}>*/}
            {/*                Александров*/}
            {/*        </a>*/}
            {/*        <a href="https://yandex.ru/maps/10656/aleksandrov/?from=mapframe&ll=38.706498%2C56.369563&mode=usermaps&source=mapframe&um=constructor%3A48ef50ed14566d93bc3881fdce02a80eb5f71b541e785117d50a747284033add&utm_medium=mapframe&utm_source=maps&z=14.34"*/}
            {/*           style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>*/}
            {/*                Яндекс.Карты — транспорт, навигация, поиск мест</a>*/}
            {/*        <iframe src="https://yandex.ru/map-widget/v1/-/CCU56JVN8C" allowFullScreen="true"*/}
            {/*                style={{ position: 'relative', borderRadius: '20px', border: '0', width: '100%', height:'450px'}}/>*/}
            {/*</div>*/}

            {/*<a href="https://yandex.ru/maps/-/CCU56JVFTC">да</a>*/}
        </YMaps>
)
