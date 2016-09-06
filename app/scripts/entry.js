import $ from 'jquery';
import ReactDOM from 'react-dom';

import router from './router';

ReactDOM.render(router, document.getElementById('container'));

var authorization = btoa('kid_ByiP3Qqs:47ab712f2a7b40bfaa858d97c76acf53');

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + authorization);
});
