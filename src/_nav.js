export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Basic Buttons',
          url: '/buttons/basic-buttons',
          icon: 'icon-puzzle',
        },
        {
          name: 'Button Dropdown',
          url: '/buttons/button-dropdown',
          icon: 'icon-puzzle',
        }
      ],
    },
    {
      name: 'List Group',
      url: '/list-group',
      icon: 'icon-cursor'
    },
    {
      name: 'Tabs',
      url: '/tabs',
      icon: 'icon-cursor'
    },
    {
      name: 'Tooltips',
      url: '/tooltips',
      icon: 'icon-cursor'
    },
    {
      name: 'Accordion',
      url: '/accordion',
      icon: 'icon-cursor'
    },
    {
      name: 'Carousel',
      url: '/carousel',
      icon: 'icon-cursor'
    },
    {
      name: 'Pagination',
      url: '/pagination',
      icon: 'icon-cursor'
    },
    {
      name: 'Form Controls',
      url: '/form-controls',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Text Box',
          url: '/form-controls/text-box',
          icon: 'icon-puzzle',
        }
      ],
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Learning',
      url: '/learning',
      icon: 'icon-notebook'
    },
    {
      name: 'Switch to Angular',
      url: '/angular/index.html',
      icon: 'fab fa-angular',
      variant: 'danger',
      absolutePath: true
    }
  ],
};
