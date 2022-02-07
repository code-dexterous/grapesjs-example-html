const editor = grapesjs.init({
  container: '#editor',
  storageManager: false,
  blockManager: {
    appendTo: '#blocks',
  },
  storageManager: {
    type: 'remote',
    stepsBeforeSave: 3,
    contentTypeJson: true,
    storeComponents: true,
    storeStyles: true,
    storeHtml: true,
    storeCss: true,
    headers: {
      'Content-Type': 'application/json',
    },
    id: 'mycustom-',
    urlStore: `/pages/${location.pathname.split('/')[2]}/content`,
    urlLoad: `/pages/${location.pathname.split('/')[2]}/content`,
  },
  styleManager: {
    appendTo: '#styles-container',
    sectors: [
      {
        name: 'Dimension',
        open: false,
        buildProps: ['width', 'min-height', 'padding'],
        properties: [
          {
            type: 'integer',
            name: 'The width',
            property: 'width',
            units: ['px', '%'],
            defaults: 'auto',
            min: 0,
          },
        ],
      },
    ],
  },
  layerManager: {
    appendTo: '#layers-container',
  },
  traitManager: {
    appendTo: '#trait-container',
  },
  selectorManager: {
    appendTo: '#styles-container',
  },
  panels: {
    defaults: [
      {
        id: 'basic-actions',
        el: '.panel__basic-actions',
        buttons: [
          {
            id: 'visibility',
            active: true, // active by default
            className: 'btn-toggle-borders',
            label: '<i class="fa fa-clone"></i>',
            command: 'sw-visibility', // Built-in command
          },
        ],
      },
      {
        id: 'panel-devices',
        el: '.panel__devices',
        buttons: [
          {
            id: 'device-desktop',
            label: '<i class="fa fa-television"></i>',
            command: 'set-device-desktop',
            active: true,
            togglable: false,
          },
          {
            id: 'device-mobile',
            label: '<i class="fa fa-mobile"></i>',
            command: 'set-device-mobile',
            togglable: false,
          },
        ],
      },
    ],
  },
  deviceManager: {
    devices: [
      {
        name: 'Desktop',
        width: '',
      },
      {
        name: 'Mobile',
        width: '320px',
        widthMedia: '480px',
      },
    ],
  },
  plugins: ['gjs-blocks-basic'],
  pluginsOpts: {
    'gjs-blocks-basic': {},
  },
});
// Commands
editor.Commands.add('set-device-desktop', {
  run: (editor) => editor.setDevice('Desktop'),
});
editor.Commands.add('set-device-mobile', {
  run: (editor) => editor.setDevice('Mobile'),
});
