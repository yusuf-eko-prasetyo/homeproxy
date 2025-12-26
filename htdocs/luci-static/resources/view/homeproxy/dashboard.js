'use strict';
'require view';

return view.extend({
    render: function() {
        let url = 'http://' + window.location.hostname + ':9090';

        return E('div', { 'class': 'cbi-map' }, [
            E('br'),
            E('iframe', {
                'id': 'Metacube',
                'style': 'width: 100%; min-height: 600px; border: none; border-radius: 3px;',
                'src': url
            })
        ]);
    },

    handleSave: null,
    handleSaveApply: null,
    handleReset: null
});
