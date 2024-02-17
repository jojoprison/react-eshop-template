import React from 'react';

const Maps = () => {
    return (
        <div className="container mb-5 pl-5 pr-5">
            <iframe title='maps-yandex'
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A3c7508f20a03d716f500eb108d0922c161e895d8ecda55e258772d8b7c9f3420&amp;source=constructor"
                    width="100%" height="500" frameBorder="30"
                    className='map'/>
        </div>
    )
}

export default Maps;
