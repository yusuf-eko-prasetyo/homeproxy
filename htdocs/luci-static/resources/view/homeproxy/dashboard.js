'use strict';
'require view';

return view.extend({
    render: function() {
        // Construct the URL dynamically using the current hostname and port 9090
        // Matches the logic: "http://" + window.location.hostname + ":9090"
        var url = 'http://' + window.location.hostname + ':9090';

        return E('div', { 'class': 'cbi-map' }, [
            E('br'),
            E('iframe', {
                'id': 'Metacube',
                'style': 'width: 100%; min-height: 600px; border: none; border-radius: 3px;',
                'src': url
            })
        ]);
    },

    // Disable the Save/Reset buttons since this is just a view
    handleSave: null,
    handleSaveApply: null,
    handleReset: null
});
