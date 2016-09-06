import $ from 'jquery';
import ReactDOM from 'react-dom';

import router from './router';

ReactDOM.render(router, document.getElementById('container'));

var authorization = btoa('kid_ByiP3Qqs:1ed68f989f8a480caa456695fa8b51e7');

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + authorization);
});
