import React from 'react'
import ReactDOM from 'react-dom';
import Header from '../../components/Header'
import Navigation from '../../components/Navigation';
import Content from '../../components/Content';

import './style.less';

function Divisiones() {
    return (
        <div>
           <Header></Header>
           <Navigation title="Organización">
                <Content></Content>
           </Navigation>
        </div>
    )
}

export default Divisiones

if (document.getElementById('divisiones')) {
    ReactDOM.render(<Divisiones />, document.getElementById('divisiones'));
}

